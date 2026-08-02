import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ILivreur, CreateLivreurDto, UpdateLivreurDto, LoginLivreurDto, StatutLivreur } from '../types';
import { prisma } from '../config/database';


 
export class LivreurService {
  // Créer un nouveau livreur
  static async create(data: CreateLivreurDto): Promise<ILivreur> {
    // Vérifier si l'email existe déjà
    const existingLivreur = await prisma.livreurs.findUnique({
      where: { email: data.email }
    });

    if (existingLivreur) {
      throw new Error('Un livreur avec cet email existe déjà');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Vérifier la région si fournie
    if (data.regionId) {
      const region = await prisma.regions.findUnique({
        where: { id: data.regionId }
      });
      if (!region) {
        throw new Error('Région introuvable');
      }
    }

    const livreur = await prisma.livreurs.create({
      data: {
        id: `liv_${Date.now()}`,
        ...data,
        password: hashedPassword,
        updatedAt: new Date()
      },
      include: {
        regions: true
      }
    });

    return livreur as ILivreur;
  }

  // Récupérer tous les livreurs
  static async findAll(page: number = 1, limit: number = 20): Promise<{ livreurs: ILivreur[]; total: number; pages: number }> {
    const skip = (page - 1) * limit;

    const [livreurs, total] = await Promise.all([
      prisma.livreurs.findMany({
        skip,
        take: limit,
        include: {
          regions: true,
          _count: {
            select: { commandes: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.livreurs.count()
    ]);

    return {
      livreurs: livreurs as ILivreur[],
      total,
      pages: Math.ceil(total / limit)
    };
  }

  // Récupérer un livreur par ID
  static async findById(id: string): Promise<ILivreur> {
    const livreur = await prisma.livreurs.findUnique({
      where: { id },
      include: {
        regions: true,
        commandes: {
          include: {
            client: true,
            regions: true,
            panierProduits: {
              include: {
                produit: {
                  include: {
                    gie: {
                      include: {
                        regions: true
                      }
                    }
                  }
                }
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!livreur) {
      throw new Error('Livreur introuvable');
    }

    return livreur as ILivreur;
  }

  // Mettre à jour un livreur
  static async update(id: string, data: UpdateLivreurDto): Promise<ILivreur> {
    const livreur = await prisma.livreurs.findUnique({
      where: { id }
    });

    if (!livreur) {
      throw new Error('Livreur introuvable');
    }

    // Vérifier la région si fournie
    if (data.regionId) {
      const region = await prisma.regions.findUnique({
        where: { id: data.regionId }
      });
      if (!region) {
        throw new Error('Région introuvable');
      }
    }

    const updatedLivreur = await prisma.livreurs.update({
      where: { id },
      data,
      include: {
        regions: true
      }
    });

    return updatedLivreur as ILivreur;
  }

  // Supprimer un livreur
  static async delete(id: string): Promise<void> {
    const livreur = await prisma.livreurs.findUnique({
      where: { id }
    });

    if (!livreur) {
      throw new Error('Livreur introuvable');
    }

    await prisma.livreurs.delete({
      where: { id }
    });
  }

  // Authentification du livreur
  static async login(credentials: LoginLivreurDto): Promise<{ livreur: ILivreur; token: string }> {
    const livreur = await prisma.livreurs.findUnique({
      where: { email: credentials.email },
      include: {
        regions: true
      }
    });

    if (!livreur) {
      throw new Error('Email ou mot de passe incorrect');
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, livreur.password);
    if (!isPasswordValid) {
      throw new Error('Email ou mot de passe incorrect');
    }

    if (livreur.statut === StatutLivreur.BLOQUE) {
      throw new Error('Compte bloqué. Contactez l\'administrateur.');
    }

    // Générer le token JWT
    const token = jwt.sign(
      { 
        id: livreur.id, 
        email: livreur.email, 
        role: 'livreur' 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Retirer le mot de passe de la réponse
    const { password, ...livreurWithoutPassword } = livreur;

    return {
      livreur: livreurWithoutPassword as ILivreur,
      token
    };
  }

  // ========================================
  // NOUVEAU : Mot de passe oublié (3 étapes)
  // Ces méthodes étaient appelées par LivreurController mais n'existaient pas
  // du tout dans ce service -> le code ne pouvait pas compiler.
  //
  // ⚠️ REMARQUE IMPORTANTE sur le modèle Prisma `PasswordResetCode` :
  // son champ s'appelle `gieId` (probablement pensé à l'origine pour GIEService).
  // Ici on le réutilise pour stocker l'id du LIVREUR, ce qui fonctionne
  // techniquement (c'est un simple String sans relation Prisma), mais c'est
  // trompeur pour la maintenance. Idéalement, renommez ce champ en `userId`
  // ou ajoutez un champ dédié `livreurId` dans le schéma.
  //
  // ⚠️ L'envoi d'email n'est pas branché ici (aucun service mail n'était
  // fourni dans le code partagé) : le code est loggé en console en attendant
  // que vous branchiez votre service d'envoi (le même que pour GIEService
  // le cas échéant).
  // ========================================

  private static generateResetCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  static async forgotPassword(email: string): Promise<void> {
    const livreur = await prisma.livreurs.findUnique({ where: { email } });

    // Par sécurité, on ne révèle jamais si l'email existe ou non côté réponse HTTP
    if (!livreur) return;

    const code = this.generateResetCode();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    await prisma.passwordResetCode.create({
      data: {
        email,
        gieId: livreur.id, // voir remarque ci-dessus
        code,
        expiresAt,
      },
    });

    // TODO: brancher votre service d'envoi d'email ici
    console.log(`📧 [DEV] Code de réinitialisation pour ${email}: ${code}`);
  }

  static async verifyResetCode(email: string, code: string): Promise<void> {
    const resetCode = await prisma.passwordResetCode.findFirst({
      where: { email, code, used: false },
      orderBy: { createdAt: 'desc' },
    });

    if (!resetCode) {
      throw new Error('Code invalide');
    }

    if (resetCode.expiresAt < new Date()) {
      throw new Error('Code expiré, veuillez recommencer');
    }

    await prisma.passwordResetCode.update({
      where: { id: resetCode.id },
      data: { verified: true },
    });
  }

  static async resetPassword(email: string, code: string, newPassword: string): Promise<void> {
    const resetCode = await prisma.passwordResetCode.findFirst({
      where: { email, code, used: false, verified: true },
      orderBy: { createdAt: 'desc' },
    });

    if (!resetCode) {
      throw new Error('Code invalide ou non vérifié. Recommencez la procédure.');
    }

    if (resetCode.expiresAt < new Date()) {
      throw new Error('Code expiré, veuillez recommencer');
    }

    const livreur = await prisma.livreurs.findUnique({ where: { email } });
    if (!livreur) {
      throw new Error('Livreur introuvable');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.$transaction([
      prisma.livreurs.update({
        where: { id: livreur.id },
        data: { password: hashedPassword },
      }),
      prisma.passwordResetCode.update({
        where: { id: resetCode.id },
        data: { used: true },
      }),
    ]);
  }

  // Récupérer les commandes d'un livreur (ou de tous si id === 'all'/'toutes')
  // CORRIGÉ : ajout de la pagination (page/limit) qui était ignorée auparavant,
  // et du champ `pages` pour rester cohérent avec getCommandesDisponibles.
  // NOUVEAU : statutFilter permet de séparer les commandes "en cours" des
  // commandes "livrées" (utilisé pour distinguer l'onglet Mes livraisons
  // de l'onglet Livrées côté mobile).
  //   - 'ACTIVE' -> commandes assignées mais pas encore livrées/annulées
  //   - 'LIVREE' -> uniquement les commandes déjà livrées
  //   - undefined -> aucun filtre de statut (comportement historique)
  static async getCommandes(
    id?: string,
    page: number = 1,
    limit: number = 20,
    statutFilter?: 'ACTIVE' | 'LIVREE'
  ): Promise<{ commandes: any[]; total: number; pages: number }> {
    const skip = (page - 1) * limit;
    const whereClause: any = {};

    if (id && id !== 'all' && id !== 'toutes') {
      whereClause.livreurId = id;
    }

    if (statutFilter === 'LIVREE') {
      whereClause.statut = 'LIVREE';
    } else if (statutFilter === 'ACTIVE') {
      whereClause.statut = { notIn: ['LIVREE', 'ANNULEE'] };
    }

    const [commandes, total] = await Promise.all([
      prisma.commande.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
          client: true,
          regions: true,
          livreurs: true,
          panierProduits: {
            include: {
              produit: {
                include: {
                  gie: {
                    include: {
                      regions: true
                    }
                  }
                }
              }
            }
          },
          paiement: true
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.commande.count({
        where: whereClause
      })
    ]);

    return {
      commandes,
      total,
      pages: Math.ceil(total / limit)
    };
  }

  // Récupérer les commandes disponibles pour un livreur (sans livreur assigné)
  static async getCommandesDisponibles(regionId?: string, page: number = 1, limit: number = 20): Promise<{ commandes: any[]; total: number; pages: number }> {
    const skip = (page - 1) * limit;

    // Service de livraison centralisé - toutes les commandes disponibles
    const whereClause: any = {
      livreurId: null,
      statut: { in: ['CONFIRMEE', 'EN_ATTENTE', 'EN_PREPARATION'] }
    };

    // Le filtre par région est optionnel - si non fourni, on récupère toutes les commandes
    if (regionId) {
      whereClause.regionLivraisonId = regionId;
    }

    const [commandes, total] = await Promise.all([
      prisma.commande.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
          client: true,
          regions: true,
          panierProduits: {
            include: {
              produit: {
                include: {
                  gie: {
                    include: {
                      regions: true
                    }
                  }
                }
              }
            }
          },
          paiement: true
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.commande.count({
        where: whereClause
      })
    ]);

    return {
      commandes,
      total,
      pages: Math.ceil(total / limit)
    };
  }

  // Assigner une commande à un livreur (accepter la livraison)
  static async assignerCommande(livreurId: string, commandeId: string): Promise<void> {
    const [livreur, commande] = await Promise.all([
      prisma.livreurs.findUnique({ where: { id: livreurId } }),
      prisma.commande.findUnique({ where: { id: commandeId } })
    ]);

    if (!livreur) {
      throw new Error('Livreur introuvable');
    }

    if (!commande) {
      throw new Error('Commande introuvable');
    }

    if (commande.livreurId) {
      throw new Error('Cette commande est déjà assignée à un livreur');
    }

    if (commande.statut === 'LIVREE' || commande.statut === 'ANNULEE') {
      throw new Error('Cette commande ne peut plus être assignée');
    }

    if (livreur.statut !== StatutLivreur.DISPONIBLE) {
      throw new Error('Le livreur n\'est pas disponible');
    }

    await prisma.commande.update({
      where: { id: commandeId },
      data: { livreurId }
    });

    // Mettre à jour le statut du livreur
    await prisma.livreurs.update({
      where: { id: livreurId },
      data: { statut: StatutLivreur.EN_LIVRAISON }
    });
  }

  // NOUVEAU : Annuler la prise en charge d'une commande (le livreur se désiste)
  // La commande redevient disponible pour un autre livreur, et le livreur redevient DISPONIBLE.
  static async annulerCommande(livreurId: string, commandeId: string): Promise<void> {
    const commande = await prisma.commande.findUnique({ where: { id: commandeId } });

    if (!commande) {
      throw new Error('Commande introuvable');
    }

    // Sécurité : seul le livreur assigné (ou un flux admin) peut annuler sa propre prise en charge
    if (commande.livreurId !== livreurId) {
      throw new Error("Cette commande n'est pas assignée à ce livreur");
    }

    if (commande.statut === 'LIVREE') {
      throw new Error('Impossible d\'annuler une commande déjà livrée');
    }

    if (commande.statut === 'ANNULEE') {
      throw new Error('Cette commande est déjà annulée');
    }

    await prisma.commande.update({
      where: { id: commandeId },
      data: {
        livreurId: null,
        // On remet la commande dans le pool des commandes disponibles
        statut: 'CONFIRMEE',
      }
    });

    // Libérer le livreur pour qu'il puisse accepter d'autres commandes
    const livreur = await prisma.livreurs.findUnique({ where: { id: livreurId } });
    if (livreur && livreur.statut !== StatutLivreur.BLOQUE) {
      await prisma.livreurs.update({
        where: { id: livreurId },
        data: { statut: StatutLivreur.DISPONIBLE }
      });
    }
  }

  // Marquer une commande comme livrée
  // CORRIGÉ : vérifie désormais que la commande est bien assignée à CE livreur
  // avant de le laisser la clôturer (sinon n'importe quel livreur pouvait
  // marquer livrée une commande qui n'était pas la sienne).
  // CORRIGÉ également : le livreur repasse à DISPONIBLE après la livraison
  // (avant, il restait bloqué en EN_LIVRAISON pour toujours).
  static async marquerLivrees(livreurId: string, commandeId: string): Promise<void> {
    try {
      const commande = await prisma.commande.findUnique({
        where: { id: commandeId }
      });

      if (!commande) {
        throw new Error('Commande introuvable');
      }

      if (commande.statut === 'LIVREE') {
        throw new Error('Cette commande est déjà marquée comme livrée');
      }

      if (commande.statut === 'ANNULEE') {
        throw new Error('Cette commande a été annulée, elle ne peut pas être livrée');
      }

      // Sécurité : seule la personne à qui la commande est assignée peut la clôturer
      if (commande.livreurId && commande.livreurId !== livreurId) {
        throw new Error('Cette commande est assignée à un autre livreur');
      }

      const livreur = await prisma.livreurs.findUnique({
        where: { id: livreurId }
      });

      if (!livreur) {
        throw new Error('Livreur introuvable');
      }

      if (livreur.statut === StatutLivreur.BLOQUE) {
        throw new Error('Livreur bloqué, impossible de livrer');
      }

      // Marquer la commande comme livrée et assigner le livreur qui livre
      await prisma.commande.update({
        where: { id: commandeId },
        data: {
          statut: 'LIVREE',
          livreurId: livreurId,
          dateLivraison: new Date()
        }
      });

      // Le livreur redevient disponible pour accepter d'autres commandes
      await prisma.livreurs.update({
        where: { id: livreurId },
        data: { statut: StatutLivreur.DISPONIBLE }
      });

      console.log(`✅ Commande ${commandeId} marquée comme livrée par le livreur ${livreurId}`);

    } catch (error) {
      console.error('❌ Erreur lors du marquage de la commande comme livrée:', error);
      throw error;
    }
  }
}