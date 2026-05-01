import { Request, Response } from 'express';
import prisma from '../config/database';
import { v4 as uuidv4 } from 'uuid';
import { sendOrderSms } from '../services/smsService';
import { GIENotificationService } from '../services/gieNotificationService';
import { log } from 'console';

export class CommandeController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const commandes = await prisma.commande.findMany();
      res.json({ success: true, data: commandes });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const commande = await prisma.commande.findUnique({ where: { id } });
      if (!commande) {
        res.status(404).json({ success: false, message: "Commande non trouvée" });
        return;
      }
      res.json({ success: true, data: commande });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }

  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { produits, adresseLivraison, dateLivraison, methodePaiement, referencePaiement } = req.body;
      const clientId = (req as any).user.id;
      const numero = 'CMD-' + uuidv4();

      if (!produits || !Array.isArray(produits) || produits.length === 0) {
        res.status(400).json({ success: false, message: "Aucun produit fourni" });
        return;
      }

      // Vérification des quantités et prix unitaires
      if (produits.some((p: any) => !p.produitId || !p.quantite || p.quantite <= 0 || typeof p.prixUnitaire !== 'number')) {
        res.status(400).json({ success: false, message: "Produit, quantité ou prix unitaire invalide" });
        return;
      }

      // Calcul du montant total
      const montant = produits.reduce((sum: number, p: any) => sum + (p.prixUnitaire * p.quantite), 0);

      // Utilisation d'une transaction pour garantir l'atomicité
      const commande = await prisma.$transaction(async (tx) => {
        // Vérification des stocks disponibles AVEC verrouillage
        for (const p of produits) {
          const produit = await tx.produit.findUnique({
            where: { id: p.produitId },
            select: { stock: true, nom: true }
          });

          if (!produit) {
            throw new Error(`Produit non trouvé: ${p.produitId}`);
          }

          if (produit.stock < p.quantite) {
            throw new Error(`Stock insuffisant pour le produit "${produit.nom}". Stock actuel : ${produit.stock}, demandé : ${p.quantite}`);
          }

          if (produit.stock === 0) {
            throw new Error(`Le produit "${produit.nom}" est en rupture de stock`);
          }
        }

        // Création de la commande
        const commande = await tx.commande.create({
          data: {
            numero,
            clientId,
            montant,
            statut: 'EN_ATTENTE',
            adresseLivraison,
            ...(dateLivraison && { dateLivraison }),
            panierProduits: {
              create: produits.map((p: any) => ({
                produitId: p.produitId,
                quantite: p.quantite,
                prixUnitaire: p.prixUnitaire
              }))
            },
            // Créer le paiement en même temps si une méthode est fournie
            ...(methodePaiement && {
              paiement: {
                create: {
                  montant,
                  methode: methodePaiement,
                  statut: methodePaiement === 'PAIEMENT_A_LA_LIVRAISON' ? 'EN_ATTENTE' : 'VALIDE',
                  reference: referencePaiement || `PAY-${Date.now()}`
                }
              }
            })
          },
          include: {
            panierProduits: true,
            paiement: true
          }
        });

        // Décrémenter le stock DANS la transaction avec vérification stricte
        for (const p of produits) {
          // Utiliser update avec une condition WHERE pour éviter les valeurs négatives
          const result = await tx.produit.updateMany({
            where: { 
              id: p.produitId,
              stock: { gte: p.quantite } // Seulement si le stock est suffisant
            },
            data: { 
              stock: { decrement: p.quantite }
            }
          });

          if (result.count === 0) {
            // Si aucun produit n'a été mis à jour, c'est que le stock était insuffisant
            const produit = await tx.produit.findUnique({
              where: { id: p.produitId },
              select: { stock: true, nom: true }
            });
            
            if (!produit) {
              throw new Error(`Produit non trouvé: ${p.produitId}`);
            }
            
            throw new Error(`Stock insuffisant pour le produit "${produit.nom}". Stock actuel : ${produit.stock}, demandé : ${p.quantite}`);
          }
        }

        return commande;
      });

      // Notifier tous les GIE de la nouvelle commande
      await GIENotificationService.notifyGIEsOfNewOrder(commande.id);

      // Envoi du SMS au client (en dehors de la transaction)
      const client = await prisma.client.findUnique({ where: { id: clientId } });
      if (client && client.telephone) {
        const message = `Bonjour ${client.nom}, votre commande ${commande.numero} a été reçue et est en cours de traitement par nos GIE partenaires.`;
        console.log(message);
        try {
          const smsResponse = await sendOrderSms(client.telephone, message);
          // Log adapté pour Twilio
          console.log('Réponse Twilio:', smsResponse);
          console.log('Statut SMS Twilio:', smsResponse.status);
          console.log('Numéro destinataire:', smsResponse.to);
        } catch (e) {
          console.error("Erreur lors de l'envoi du SMS au client:", e);
        }
      }

      res.status(201).json({ success: true, data: commande });
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      
      // Gestion des erreurs spécifiques de la transaction
      if (error instanceof Error) {
        if (error.message.includes('Stock insuffisant') || error.message.includes('rupture de stock') || error.message.includes('Produit non trouvé')) {
          res.status(400).json({ success: false, message: error.message });
          return;
        }
      }
      
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }


  static async createcomPayement(req: Request, res: Response): Promise<void> {
  try {
    const { produits, adresseLivraison, regionLivraisonId,dateLivraison, methodePaiement, referencePaiement,fraisLivraison } = req.body;
    const clientId = (req as any).user.id;
    const numero = 'CMD-' + uuidv4();

    if (!produits || !Array.isArray(produits) || produits.length === 0) {
      res.status(400).json({ success: false, message: "Aucun produit fourni" });
      return;
    }

    // Vérification des quantités et prix unitaires
    if (produits.some((p: any) => !p.produitId || !p.quantite || p.quantite <= 0 || typeof p.prixUnitaire !== 'number')) {
      res.status(400).json({ success: false, message: "Produit, quantité ou prix unitaire invalide" });
      return;
    }

    // Calcul du montant total
    const montant = produits.reduce((sum: number, p: any) => sum + (p.prixUnitaire * p.quantite), 0);

    // Logique pour déterminer le statut de paiement selon la méthode
    let statutPaiement = 'EN_ATTENTE';
    if (methodePaiement) {
      if (
        methodePaiement === 'MOBILE_MONEY' ||
        methodePaiement === 'WAVE' ||
        methodePaiement === 'ORANGE_MONEY'
      ) {
        statutPaiement = 'VALIDE';
      } else if (
        methodePaiement === 'ESPECES' || 
        methodePaiement === 'PAIEMENT_A_LA_LIVRAISON'
      ) {
        statutPaiement = 'EN_ATTENTE';
      }
    }

    // Utilisation d'une transaction optimisée avec timeout augmenté
    const commande = await prisma.$transaction(async (tx) => {
      // Récupération de tous les produits en une seule requête
      const produitsData = await tx.produit.findMany({
        where: { 
          id: { in: produits.map((p: any) => p.produitId) }
        },
        select: { id: true, stock: true, nom: true }
      });

      // Vérification des stocks
      const produitsMap = new Map(produitsData.map(p => [p.id, p]));
      
      for (const p of produits) {
        const produitData = produitsMap.get(p.produitId);
        
        if (!produitData) {
          throw new Error(`Produit non trouvé: ${p.produitId}`);
        }

        if (produitData.stock < p.quantite) {
          throw new Error(`Stock insuffisant pour le produit "${produitData.nom}". Stock actuel : ${produitData.stock}, demandé : ${p.quantite}`);
        }

        if (produitData.stock === 0) {
          throw new Error(`Le produit "${produitData.nom}" est en rupture de stock`);
        }
      }

      // Mise à jour des stocks en parallèle
      const stockUpdates = produits.map((p: any) => 
        tx.produit.updateMany({
          where: { 
            id: p.produitId,
            stock: { gte: p.quantite }
          },
          data: { 
            stock: { decrement: p.quantite }
          }
        })
      );

      const stockResults = await Promise.all(stockUpdates);

      // Vérifier que tous les stocks ont été mis à jour
      stockResults.forEach((result, index) => {
        if (result.count === 0) {
          const produit = produitsMap.get(produits[index].produitId);
          throw new Error(`Échec de mise à jour du stock pour "${produit?.nom}"`);
        }
      });

      // Création de la commande avec paiement intégré
      const commande = await tx.commande.create({
        data: {
          numero,
          clientId,
          montant,
          statut: 'EN_ATTENTE',
          adresseLivraison,
          regionLivraisonId,
          fraisLivraison,
          ...(dateLivraison && { dateLivraison }),
          panierProduits: {
            create: produits.map((p: any) => ({
              produitId: p.produitId,
              quantite: p.quantite,
              prixUnitaire: p.prixUnitaire
            }))
          },
          // Créer le paiement en même temps avec la logique métier appropriée
          ...(methodePaiement && {
            paiement: {
              create: {
                montant,
                methode: methodePaiement,
                statut: statutPaiement,
                reference: referencePaiement || `PAY-${Date.now()}`
              }
            }
          })
        },
        include: {
          panierProduits: true,
          paiement: true
        }
      });

      return commande;
    }, {
      maxWait: 10000, // 10 secondes d'attente maximum
      timeout: 15000, // 15 secondes de timeout
    });

    // Notifier tous les GIE de la nouvelle commande
    await GIENotificationService.notifyGIEsOfNewOrder(commande.id);

    // Envoi du SMS au client (en dehors de la transaction)
    const client = await prisma.client.findUnique({ where: { id: clientId } });
    if (client && client.telephone) {
      // Message personnalisé selon le statut du paiement
      let message = `Bonjour ${client.nom}, votre commande ${commande.numero} a été reçue et est en cours de traitement par nos GIE partenaires.`;
      
      if (commande.paiement) {
        if (commande.paiement.statut === 'VALIDE') {
          message += ' Votre paiement a été confirmé.';
        } else if (commande.paiement.statut === 'EN_ATTENTE') {
          if (methodePaiement === 'PAIEMENT_A_LA_LIVRAISON') {
            message += ' Paiement à effectuer à la livraison.';
          } else {
            message += ' En attente de confirmation de paiement.';
          }
        }
      }
      
      console.log(message);
      try {
        const smsResponse = await sendOrderSms(client.telephone, message);
        // Log adapté pour Twilio
        console.log('Réponse Twilio:', smsResponse);
        console.log('Statut SMS Twilio:', smsResponse.status);
        console.log('Numéro destinataire:', smsResponse.to);
      } catch (e) {
        console.error("Erreur lors de l'envoi du SMS au client:", e);
      }
    }

    // Retourner la commande avec les informations de paiement
    res.status(201).json({ 
      success: true, 
      data: {
        ...commande,
        paiementInfo: commande.paiement ? {
          statut: commande.paiement.statut,
          methode: commande.paiement.methode,
          reference: commande.paiement.reference
        } : null
      }
    });
  } catch (error) {
    console.error('Erreur lors de la création de la commande:', error);
    
    // Gestion des erreurs spécifiques de la transaction
    if (error instanceof Error) {
      if (error.message.includes('Stock insuffisant') || error.message.includes('rupture de stock') || error.message.includes('Produit non trouvé')) {
        res.status(400).json({ success: false, message: error.message });
        return;
      }
    }
    
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
}
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const { clientId, montant, statut, adresseLivraison, dateLivraison } = req.body;
      const commande = await prisma.commande.update({
        where: { id },
        data: { clientId, montant, statut, adresseLivraison, dateLivraison }
      });
      res.json({ success: true, data: commande });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await prisma.commande.delete({ where: { id } });
      res.json({ success: true, message: "Commande supprimée" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async getMyCommandes(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const where: any = {
        panierProduits: {
          some: {
            produit: {
              gieId
            }
          }
        }
      };
      if (req.query.statut) {
        where.statut = req.query.statut;
      }
      const commandes = await prisma.commande.findMany({
        where,
        orderBy: { dateCommande: 'desc' },
        include: {
          client: true,
          panierProduits: { include: { produit: true } },
          paiement: true
        }
      });
      res.json({ success: true, data: commandes });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération des commandes', error: error.message });
    }
  }
  static async getMyCommandeById(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const { commandeId } = req.params;
      const commande = await prisma.commande.findFirst({
        where: {
          id: commandeId,
          panierProduits: {
            some: {
              produit: {
                gieId
              }
            }
          }
        },
        include: {
          client: true,
          panierProduits: { include: { produit: true } },
          paiement: true
        }
      });
      if (!commande) {
        res.status(404).json({ success: false, message: 'Commande non trouvée pour ce GIE' });
        return;
      }
      res.json({ success: true, data: commande });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération de la commande', error: error.message });
    }
  }
  static async getMyStats(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const commandes = await prisma.commande.findMany({
        where: {
          panierProduits: {
            some: {
              produit: {
                gieId
              }
            }
          }
        },
        include: {
          paiement: true
        }
      });

      const totalCommandes = commandes.length;
      const chiffreAffaires = commandes.reduce((sum, c) => {
        if (c.paiement && c.paiement.statut === 'VALIDE') {
          return sum + c.montant;
        }
        return sum;
      }, 0);

      const produits = await prisma.produit.findMany({
        where: { gieId },
        include: { panierProduits: true }
      });
      const produitsVendus = produits.map(p => ({
        nom: p.nom,
        totalVendu: p.panierProduits.reduce((sum, pp) => sum + pp.quantite, 0)
      })).sort((a, b) => b.totalVendu - a.totalVendu);
      res.json({
        success: true,
        data: {
          totalCommandes,
          chiffreAffaires,
          produitsLesPlusVendus: produitsVendus.slice(0, 5)
        }
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération des statistiques', error: error.message });
    }
  }
  static async updateStatut(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const { statut } = req.body;
      if (!statut) {
        res.status(400).json({ success: false, message: "Le statut est requis" });
        return;
      }
      // Met à jour le statut de la commande
      const commande = await prisma.commande.update({
        where: { id },
        data: { statut },
        include: { paiement: true, client: true }
      });
      // Envoi du SMS si la commande est marquée comme PRETE
      if (statut === 'CONFIRMEE' && commande.client && commande.client.telephone) {
        const message = `Bonjour ${commande.client.nom}, votre commande ${commande.numero} est prête, vous serez livré dans 30min.`;
        try {
          const smsResponse = await sendOrderSms(commande.client.telephone, message);
          console.log('Réponse Twilio:', smsResponse);
          console.log('Statut SMS Twilio:', smsResponse.status);
          console.log('Numéro destinataire:', smsResponse.to);
        } catch (e) {
          console.error("Erreur lors de l'envoi du SMS de confirmation:", e);
        }
      }
      // Si on annule la commande, on met aussi à jour le paiement et on retourne les infos avancées
      if (statut === 'ANNULEE') {
        let montantSoustrait = 0;
        if (commande.paiement && commande.paiement.statut === 'VALIDE') {
          await prisma.paiement.update({
            where: { commandeId: id },
            data: { statut: 'REMBOURSE' }
          });
          montantSoustrait = commande.montant;
        }
        // Recalcule le chiffre d'affaires après annulation
        const gieId = (req as any).user.id;
        const commandes = await prisma.commande.findMany({
          where: {
            panierProduits: {
              some: {
                produit: {
                  gieId
                }
              }
            }
          },
          include: { paiement: true }
        });
        const chiffreAffaires = commandes.reduce((sum, c) => {
          if (c.paiement && c.paiement.statut === 'VALIDE') {
            return sum + c.montant;
          }
          return sum;
        }, 0);
        res.json({
          success: true,
          message: `Commande annulée: ${commande.numero}`,
          commandeAnnulee: commande.numero,
          montantSoustrait,
          chiffreAffaires
        });
        return;
      }
      // Sinon, retour standard
      res.json({ success: true, data: commande });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async annulerCommande(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      // Met à jour le statut de la commande
      const commande = await prisma.commande.update({
        where: { id },
        data: { statut: 'ANNULEE' },
        include: { paiement: true }
      });
      let montantSoustrait = 0;
      // Met à jour le paiement associé (si il existe et était VALIDE)
      if (commande.paiement && commande.paiement.statut === 'VALIDE') {
        await prisma.paiement.update({
          where: { commandeId: id },
          data: { statut: 'REMBOURSE' }
        });
        montantSoustrait = commande.montant;
      }
      // Recalcule le chiffre d'affaires après annulation
      const gieId = (req as any).user.id;
      const commandes = await prisma.commande.findMany({
        where: {
          panierProduits: {
            some: {
              produit: {
                gieId
              }
            }
          }
        },
        include: { paiement: true }
      });
      const chiffreAffaires = commandes.reduce((sum, c) => {
        if (c.paiement && c.paiement.statut === 'VALIDE') {
          return sum + c.montant;
        }
        return sum;
      }, 0);
      res.json({
        success: true,
        message: `Commande annulée: ${commande.numero}`,
        commandeAnnulee: commande.numero,
        montantSoustrait,
        chiffreAffaires
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur lors de l'annulation de la commande" });
    }
  }

  static async confirmerCommande(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      // Met à jour le statut de la commande à 'PRETE'
      const commande = await prisma.commande.update({
        where: { id },
        data: { statut: 'CONFIRMEE' },
        include: { client: true }
      });
      // Envoi du SMS au client
      if (commande.client && commande.client.telephone) {
        const message = `Bonjour ${commande.client.nom}, votre commande ${commande.numero} est prête, vous serez livré dans 30min.`;
        try {
          const smsResponse = await sendOrderSms(commande.client.telephone, message);
          console.log('Réponse Twilio:', smsResponse);
          console.log('Statut SMS Twilio:', smsResponse.status);
          console.log('Numéro destinataire:', smsResponse.to);
        } catch (e) {
          console.error("Erreur lors de l'envoi du SMS de confirmation:", e);
        }
      }
      res.json({ success: true, message: 'Commande confirmée et SMS envoyé', data: commande });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur lors de la confirmation de la commande" });
    }
  }

  static async getMyClientCommandes(req: Request, res: Response): Promise<void> {
    try {
      const clientId = (req as any).user.id;
      const commandes = await prisma.commande.findMany({
        where: { clientId },
        orderBy: { dateCommande: 'desc' },
        include: {
          panierProduits: { include: { produit: true } },
          paiement: true
        }
      });
      res.json({ success: true, data: commandes });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur lors de la récupération des commandes" });
    }
  }

  // Méthode pour corriger les stocks négatifs existants
  static async fixNegativeStocks(req: Request, res: Response): Promise<void> {
    try {
      const produitsNegatifs = await prisma.produit.findMany({
        where: {
          stock: { lt: 0 }
        },
        select: {
          id: true,
          nom: true,
          stock: true
        }
      });

      if (produitsNegatifs.length === 0) {
        res.json({ success: true, message: "Aucun stock négatif trouvé" });
        return;
      }

      // Corriger les stocks négatifs en les mettant à 0
      const result = await prisma.produit.updateMany({
        where: {
          stock: { lt: 0 }
        },
        data: {
          stock: 0
        }
      });

      res.json({ 
        success: true, 
        message: `${result.count} produits avec stock négatif ont été corrigés`,
        produitsCorriges: produitsNegatifs
      });
    } catch (error) {
      console.error('Erreur lors de la correction des stocks:', error);
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }

  // === NOUVELLES MÉTHODES POUR GESTION MULTI-GIE ===

  // Marquer un produit comme en préparation
  static async marquerEnPreparation(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const { panierProduitId } = req.params;

      await GIENotificationService.markAsInPreparation(panierProduitId, gieId);

      res.json({ 
        success: true, 
        message: 'Produit marqué comme en préparation' 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: 'Erreur lors du marquage en préparation',
        error: error.message 
      });
    }
  }

  // Marquer un produit comme prêt
  static async marquerPret(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const { panierProduitId } = req.params;

      await GIENotificationService.markAsReady(panierProduitId, gieId);

      res.json({ 
        success: true, 
        message: 'Produit marqué comme prêt' 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: 'Erreur lors du marquage comme prêt',
        error: error.message 
      });
    }
  }

  // Annuler un produit
  static async annulerProduit(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const { panierProduitId } = req.params;
      const { raison } = req.body;

      await GIENotificationService.cancelProduct(panierProduitId, gieId, raison);

      res.json({ 
        success: true, 
        message: 'Produit annulé avec succès' 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: 'Erreur lors de l\'annulation du produit',
        error: error.message 
      });
    }
  }

  // Récupérer les statistiques GIE
  static async getGIEStats(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const stats = await GIENotificationService.getGIEStats(gieId);

      res.json({ 
        success: true, 
        data: stats 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: 'Erreur lors de la récupération des statistiques',
        error: error.message 
      });
    }
  }

  // Récupérer les commandes avec statuts détaillés
  static async getMyCommandesWithDetails(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const where: any = {
        panierProduits: {
          some: {
            produit: {
              gieId
            }
          }
        }
      };
      
      if (req.query.statut) {
        where.statut = req.query.statut;
      }

      const commandes = await prisma.commande.findMany({
        where,
        orderBy: { dateCommande: 'desc' },
        include: {
          client: true,
          panierProduits: { 
            include: { 
              produit: {
                include: {
                  gie: true
                }
              } 
            },
            where: {
              produit: {
                gieId
              }
            }
          },
          paiement: true
        }
      });

      // Ajouter des informations détaillées pour chaque commande
      const commandesAvecDetails = commandes.map(commande => {
        const mesProduits = commande.panierProduits;
        const totalProduits = mesProduits.length;
        const produitsPrets = mesProduits.filter(p => p.statutGIE === 'PRET').length;
        const produitsEnPreparation = mesProduits.filter(p => p.statutGIE === 'EN_PREPARATION').length;
        const produitsEnAttente = mesProduits.filter(p => p.statutGIE === 'EN_ATTENTE').length;
        const produitsAnnules = mesProduits.filter(p => p.statutGIE === 'ANNULE').length;

        const montantGIE = mesProduits.reduce((sum, p) => sum + (p.prixUnitaire * p.quantite), 0);

        return {
          ...commande,
          detailsGIE: {
            totalProduits,
            produitsPrets,
            produitsEnPreparation,
            produitsEnAttente,
            produitsAnnules,
            montantGIE,
            progression: totalProduits > 0 ? (produitsPrets / totalProduits) * 100 : 0
          }
        };
      });

      res.json({ success: true, data: commandesAvecDetails });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: 'Erreur lors de la récupération des commandes',
        error: error.message 
      });
    }
  }
}

