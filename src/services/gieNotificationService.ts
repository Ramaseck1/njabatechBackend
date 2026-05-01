import prisma from '../config/database';
import { sendOrderSms } from './smsService';

export class GIENotificationService {
  
  // Notifier tous les GIE d'une nouvelle commande
  static async notifyGIEsOfNewOrder(commandeId: string): Promise<void> {
    try {
      // Récupérer tous les GIE concernés par cette commande
      const gieProduits = await prisma.panierProduit.findMany({
        where: { commandeId },
        include: {
          produit: {
            include: {
              gie: true
            }
          },
          commande: {
            include: {
              client: true
            }
          }
        }
      });

      // Grouper par GIE pour éviter les doublons
      const gieMap = new Map();
      
      for (const panierProduit of gieProduits) {
        const gieId = panierProduit.produit.gieId;
        if (!gieMap.has(gieId)) {
          gieMap.set(gieId, {
            gie: panierProduit.produit.gie,
            produits: [],
            commande: panierProduit.commande
          });
        }
        gieMap.get(gieId).produits.push({
          nom: panierProduit.produit.nom,
          quantite: panierProduit.quantite,
          prixUnitaire: panierProduit.prixUnitaire
        });
      }

      // Envoyer des notifications à chaque GIE
      for (const [gieId, data] of gieMap) {
        await this.sendNotificationToGIE(gieId, data);
      }

      console.log(`✅ Notifications envoyées à ${gieMap.size} GIE(s) pour la commande ${commandeId}`);
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi des notifications GIE:', error);
    }
  }

  // Envoyer une notification à un GIE spécifique
  static async sendNotificationToGIE(gieId: string, data: any): Promise<void> {
    try {
      const { gie, produits, commande } = data;
      
      if (!gie.telephone) {
        console.log(`⚠️ GIE ${gie.nom} n'a pas de numéro de téléphone configuré`);
        return;
      }

      // Calculer le montant total pour ce GIE
      const montantGIE = produits.reduce((sum: number, p: any) => 
        sum + (p.prixUnitaire * p.quantite), 0
      );

      // Créer le message
      const produitsList = produits.map((p: any) => 
        `${p.quantite}x ${p.nom}`
      ).join(', ');

      const message = `Nouvelle commande #${commande.numero} reçue ! 
Produits: ${produitsList}
Montant: ${montantGIE} FCFA
Client: ${commande.client.nom}
Connectez-vous à votre interface pour traiter la commande.`;

      // Envoyer le SMS
      const smsResponse = await sendOrderSms(gie.telephone, message);
      console.log(`📱 SMS envoyé au GIE ${gie.nom}:`, smsResponse.sid || 'SMS simulé');

    } catch (error) {
      console.error(`❌ Erreur lors de l'envoi de notification au GIE ${gieId}:`, error);
    }
  }

  // Notifier le client quand tous les GIE sont prêts
  static async notifyClientWhenAllReady(commandeId: string): Promise<void> {
    try {
      const commande = await prisma.commande.findUnique({
        where: { id: commandeId },
        include: {
          client: true,
          panierProduits: {
            include: {
              produit: {
                include: {
                  gie: true
                }
              }
            }
          }
        }
      });

      if (!commande || !commande.client.telephone) {
        return;
      }

      // Vérifier si tous les produits sont prêts
      const tousPrets = commande.panierProduits.every(pp => pp.statutGIE === 'PRET');
      
      if (tousPrets) {
        const message = `Bonjour ${commande.client.nom}, votre commande #${commande.numero} est prête ! Tous les GIE ont confirmé la préparation. Vous serez livré dans 30 minutes.`;
        
        const smsResponse = await sendOrderSms(commande.client.telephone, message);
        console.log(`📱 SMS de confirmation envoyé au client:`, smsResponse.sid || 'SMS simulé');
      }

    } catch (error) {
      console.error('❌ Erreur lors de la notification client:', error);
    }
  }

  // Récupérer les statistiques de notifications pour un GIE
  static async getGIEStats(gieId: string): Promise<any> {
    try {
      const stats = await prisma.panierProduit.groupBy({
        by: ['statutGIE'],
        where: {
          produit: {
            gieId
          }
        },
        _count: true
      });

      const totalCommandes = await prisma.panierProduit.count({
        where: {
          produit: {
            gieId
          }
        }
      });

      const commandesEnAttente = await prisma.panierProduit.count({
        where: {
          produit: {
            gieId
          },
          statutGIE: 'EN_ATTENTE'
        }
      });

              return {
          totalCommandes,
          commandesEnAttente,
          repartition: stats.reduce((acc, stat) => {
            acc[stat.statutGIE] = stat._count;
            return acc;
          }, {} as any)
        };
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des stats GIE:', error);
      throw error;
    }
  }

  // Marquer un produit comme en préparation
  static async markAsInPreparation(panierProduitId: string, gieId: string): Promise<void> {
    try {
      const panierProduit = await prisma.panierProduit.update({
        where: {
          id: panierProduitId,
          produit: {
            gieId
          }
        },
        data: {
          statutGIE: 'EN_PREPARATION',
          updatedAt: new Date()
        }
      });

      console.log(`✅ Produit marqué comme en préparation: ${panierProduitId}`);
    } catch (error) {
      console.error('❌ Erreur lors du marquage en préparation:', error);
      throw error;
    }
  }

  // Marquer un produit comme prêt
  static async markAsReady(panierProduitId: string, gieId: string): Promise<void> {
    try {
      const panierProduit = await prisma.panierProduit.update({
        where: {
          id: panierProduitId,
          produit: {
            gieId
          }
        },
        data: {
          statutGIE: 'PRET',
          dateConfirmation: new Date(),
          updatedAt: new Date()
        }
      });

      console.log(`✅ Produit marqué comme prêt: ${panierProduitId}`);

      // Vérifier si tous les produits de la commande sont prêts
      await this.notifyClientWhenAllReady(panierProduit.commandeId);

    } catch (error) {
      console.error('❌ Erreur lors du marquage comme prêt:', error);
      throw error;
    }
  }

  // Annuler un produit
  static async cancelProduct(panierProduitId: string, gieId: string, raison?: string): Promise<void> {
    try {
      const panierProduit = await prisma.panierProduit.update({
        where: {
          id: panierProduitId,
          produit: {
            gieId
          }
        },
        data: {
          statutGIE: 'ANNULE',
          updatedAt: new Date()
        }
      });

      console.log(`✅ Produit annulé: ${panierProduitId}`);

      // Récupérer les informations pour la notification
      const panierProduitWithDetails = await prisma.panierProduit.findUnique({
        where: { id: panierProduitId },
        include: {
          commande: {
            include: {
              client: true
            }
          },
          produit: true
        }
      });

      // Notifier le client de l'annulation
      if (panierProduitWithDetails?.commande.client.telephone) {
        const message = `Bonjour ${panierProduitWithDetails.commande.client.nom}, le produit "${panierProduitWithDetails.produit.nom}" de votre commande #${panierProduitWithDetails.commande.numero} a été annulé${raison ? ` (${raison})` : ''}.`;
        
        await sendOrderSms(panierProduitWithDetails.commande.client.telephone, message);
      }

    } catch (error) {
      console.error('❌ Erreur lors de l\'annulation:', error);
      throw error;
    }
  }
} 