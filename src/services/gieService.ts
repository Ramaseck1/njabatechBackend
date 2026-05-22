import { GIE, StatutGIE } from '../generated/prisma';
import { CreateGIEDto } from '../types';
import { AuthUtils } from '../utils/auth';
import { prisma } from '../config/database';


 
export class GIEService {
  // Créer un GIE (réservé aux admins)
  static async create(data: CreateGIEDto, administrateurId: string): Promise<GIE> {
    // Vérifier si le téléphone existe déjà (utiliser findFirst au lieu de findUnique)
    if (data.telephone) {
      const existingGIEByPhone = await prisma.gIE.findFirst({
        where: { telephone: data.telephone }
      });

      if (existingGIEByPhone) {
        throw new Error('Un GIE avec ce numéro existe déjà');
      }
    }

    // Hasher le mot de passe
    const hashedPassword = await AuthUtils.hashPassword(data.password);

    // Nettoyer les données - supprimer regionId s'il existe
    const { regionId, ...cleanData } = data;

    const gie = await prisma.gIE.create({
      data: {
        ...cleanData,
        password: hashedPassword,
        administrateurId
      },
      include: {
        administrateur: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        _count: {
          select: {
            produits: true
          }
        }
      }
    });

    return gie;
  }
static async findByPhone(telephone: string): Promise<GIE | null> {
  // Votre logique de recherche ici
  const gie = await prisma.gIE.findFirst({
    where: { telephone }
  });
  
  return gie; // Retourne GIE | null
  // Rechercher un GIE par numéro de téléphone
}

   // Authentifier un GIE
  static async authenticate(emailOrPhone: string, password: string): Promise<GIE> {
    // Recherche par email ou téléphone
    const gie = await prisma.gIE.findFirst({
      where: {
        OR: [
          { email: emailOrPhone },
          { telephone: emailOrPhone }
        ]
      }
    });

    if (!gie) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }

    if (gie.statut !== 'ACTIF') {
      throw new Error('Compte GIE non actif');
    }

    const isValidPassword = await AuthUtils.comparePassword(password, gie.password);
    if (!isValidPassword) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }

    return gie;
  }

  // Récupérer tous les GIE
  static async findAll(page: number = 1, limit: number = 10, search?: string) {
    const skip = (page - 1) * limit;
    
    const where: any = search ? {
      OR: [
        { nom: { contains: search } },
        { description: { contains: search } },
        { email: { contains: search } }
      ]
    } : {};

    const [gies, total] = await Promise.all([
      prisma.gIE.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          administrateur: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              email: true
            }
          },
          _count: {
            select: {
              produits: true
            }
          }
        }
      }),
      prisma.gIE.count({ where })
    ]);

    return {
      gies,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Récupérer un GIE par ID
  static async findById(id: string): Promise<GIE | null> {
    return await prisma.gIE.findUnique({
      where: { id },
      include: {
        administrateur: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        produits: true,
        _count: {
          select: {
            produits: true
          }
        }
      }
    });
  }

  // Mettre à jour un GIE
  static async update(id: string, data: Partial<CreateGIEDto>): Promise<GIE> {
    const updateData: any = { ...data };
    
    // Si un nouveau mot de passe est fourni, le hasher
    if (data.password) {
      updateData.password = await AuthUtils.hashPassword(data.password);
    }

    return await prisma.gIE.update({
      where: { id },
      data: updateData
    });
  }

  // Supprimer un GIE
  static async delete(id: string): Promise<void> {
    await prisma.gIE.delete({
      where: { id }
    });
  }

  // Changer le statut d'un GIE
  static async updateStatus(id: string, statut: StatutGIE): Promise<GIE> {
    return await prisma.gIE.update({
      where: { id },
      data: { statut }
    });
  }

  // Rechercher des GIE
  static async search(searchTerm: string, page: number = 1, limit: number = 10) {
    return await this.findAll(page, limit, searchTerm);
  }

  // CORRECTION: Valider le mot de passe d'un GIE en utilisant AuthUtils
  static async validatePassword(gieId: string, password: string): Promise<boolean> {
    try {
      const gie = await prisma.gIE.findUnique({
        where: { id: gieId }
      });

      if (!gie) {
        throw new Error('GIE non trouvé');
      }

      // CORRECTION: Utiliser AuthUtils.comparePassword au lieu de bcrypt directement
      const isValid = await AuthUtils.comparePassword(password, gie.password);
      return isValid;
      
    } catch (error) {
      console.error('Erreur lors de la validation du mot de passe GIE:', error);
      return false;
    }
  }


  static async findByEmail(email: string) {
  return prisma.gIE.findFirst({
    where: { email: email.toLowerCase() },
  });
}

static async resetPassword(id: string, newPassword: string): Promise<void> {
  if (newPassword.length < 6) {
    throw new Error('Le mot de passe doit contenir au moins 6 caractères');
  }
  const hashed = await AuthUtils.hashPassword(newPassword);
  await prisma.gIE.update({
    where: { id },
    data: { password: hashed },
  });
}
  // CORRECTION: Changer le mot de passe d'un GIE en utilisant AuthUtils
  static async changePassword(gieId: string, currentPassword: string, newPassword: string): Promise<void> {
    try {
      // Vérifier l'ancien mot de passe
      const isCurrentPasswordValid = await this.validatePassword(gieId, currentPassword);
      
      if (!isCurrentPasswordValid) {
        throw new Error('Mot de passe actuel incorrect');
      }

      // Valider le nouveau mot de passe (optionnel - selon vos règles)
      if (newPassword.length < 6) {
        throw new Error('Le nouveau mot de passe doit contenir au moins 6 caractères');
      }

      // CORRECTION: Utiliser AuthUtils.hashPassword au lieu de bcrypt directement
      const hashedNewPassword = await AuthUtils.hashPassword(newPassword);

      // Mettre à jour en base
      await prisma.gIE.update({
        where: { id: gieId },
        data: { password: hashedNewPassword }
      });

    } catch (error: any) {
      console.error('Erreur lors du changement de mot de passe GIE:', error);
      throw error;
    }
  }

  // Obtenir les statistiques d'un GIE
  static async getStats(id: string) {
    const gie = await prisma.gIE.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            produits: true
          }
        },
        produits: {
          select: {
            id: true,
            stock: true,
            statut: true
          }
        }
      }
    });

    if (!gie) {
      throw new Error('GIE non trouvé');
    }

    const totalProduits = gie._count.produits;
    const produitsEnStock = gie.produits.filter(p => p.stock > 0).length;
    const produitsEnRupture = gie.produits.filter(p => p.stock === 0).length;

    return {
      totalProduits,
      produitsEnStock,
      produitsEnRupture,
      tauxDisponibilite: totalProduits > 0 ? (produitsEnStock / totalProduits) * 100 : 0
    };
  }
}