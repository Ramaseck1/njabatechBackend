import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ILivreur, CreateLivreurDto, UpdateLivreurDto, LoginLivreurDto, StatutLivreur } from '../types';

const prisma = new PrismaClient();

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

  // Récupérer les commandes d'un livreur
// Version corrigée avec 'livreurs' au lieu de 'livreur'
static async getCommandes(id?: string): Promise<{ commandes: any[]; total: number }> {
  const whereClause: any = {};

  if (id && id !== 'all' && id !== 'toutes') {
    whereClause.livreurId = id;
  }

  const [commandes, total] = await Promise.all([
    prisma.commande.findMany({
      where: whereClause,
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
    total
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

  // Assigner une commande à un livreur
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

  // Marquer une commande comme livrée
static async marquerLivrees(livreurId: string, commandeId: string): Promise<void> {
  try {
    // Vérifier que la commande existe
    const commande = await prisma.commande.findUnique({
      where: { id: commandeId }
    });

    if (!commande) {
      throw new Error('Commande introuvable');
    }

    // Vérifier que la commande n'est pas déjà livrée
    if (commande.statut === 'LIVREE') {
      throw new Error('Cette commande est déjà marquée comme livrée');
    }

    // Vérifier que le livreur existe et est disponible
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
        livreurId: livreurId,  // Assigner le livreur qui livre effectivement
        dateLivraison: new Date()
      }
    });

    console.log(`✅ Commande ${commandeId} marquée comme livrée par le livreur ${livreurId}`);
    
  } catch (error) {
    console.error('❌ Erreur lors du marquage de la commande comme livrée:', error);
    throw error;
  }
}
} 