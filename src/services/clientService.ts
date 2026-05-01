import { prisma } from '../config/database';
import { AuthUtils } from '../utils/auth';
import { CreateClientDto, IClient } from '../types';

interface CreateAvisDto {
  rating?: number;
  comment?: string;
}

export class ClientService {
  // Créer un nouveau client
  static async create(data: CreateClientDto, administrateurId: string): Promise<IClient> {
    const hashedPassword = await AuthUtils.hashPassword(data.password);

    const client = await prisma.client.create({
      data: {
        email: data.email,
        password: hashedPassword,
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone,
        adresse: data.adresse,
        administrateurId
      }
    });

    const { password, ...clientWithoutPassword } = client;
    return clientWithoutPassword as IClient;
  }



  static async createAvis(clientId: string, data: CreateAvisDto) {
       const avis = await prisma.avis.create({
      data: {
        clientId,
        rating: data.rating ?? 0,
        comment: data.comment ?? ''
      },
      include: {
        client: {
          select: {
            nom: true,
            prenom: true
          }
        }
      }
    });
    return avis;
  }

static async findByClientAvis(clientId: string) {
  return prisma.avis.findMany({
    where: { clientId },
    orderBy: { createdAt: 'desc' },
    include: {
      client: {
        select: {
          nom: true,
          prenom: true
        }
      }
    }
  });
}


 // Service
static async findAllAvis() {
  return prisma.avis.findMany({
    include: {
      client: {
        select: {
          id: true,
          nom: true,
          prenom: true,
          email: true
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
}


  static async deleteAvis(id: string) {
    await prisma.avis.delete({ where: { id } });
  }

  // Trouver un client par email
  static async findByEmail(email: string) {
    return prisma.client.findUnique({
      where: { email }
    });
  }
    static async findByTel(telephone: string) {
    return prisma.client.findFirst({
      where: { telephone }
    });
  }

  // Trouver un client par ID
  static async findById(id: string): Promise<IClient | null> {
    const client = await prisma.client.findUnique({
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
        commandes: {
          select: {
            id: true,
            numero: true,
            montant: true,
            statut: true,
            dateCommande: true
          },
          orderBy: { dateCommande: 'desc' }
        }
      }
    });

    if (!client) return null;

    const { password, ...clientWithoutPassword } = client;
    return clientWithoutPassword as IClient;
  }

  // Récupérer tous les clients
  static async findAll(page: number = 1, limit: number = 10, administrateurId?: string) {
    const skip = (page - 1) * limit;
    const where = administrateurId ? { administrateurId } : {};

    const [clients, total] = await Promise.all([
      prisma.client.findMany({
        where,
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          nom: true,
          prenom: true,
          telephone: true,
          adresse: true,
          statut: true,
          createdAt: true,
          updatedAt: true,
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
              commandes: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.client.count({ where })
    ]);

    return {
      clients,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Mettre à jour un client
  static async update(id: string, data: Partial<CreateClientDto>): Promise<IClient | null> {
    const updateData: any = { ...data };
    
    if (data.password) {
      updateData.password = await AuthUtils.hashPassword(data.password);
    }

    const client = await prisma.client.update({
      where: { id },
      data: updateData
    });

    if (!client) return null;

    const { password, ...clientWithoutPassword } = client;
    return clientWithoutPassword as IClient;
  }

  // Supprimer un client
  static async delete(id: string): Promise<boolean> {
    try {
      await prisma.client.delete({
        where: { id }
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  // Changer le statut d'un client
  static async updateStatus(id: string, statut: 'ACTIF' | 'INACTIF' | 'BLOQUE'): Promise<IClient | null> {
    const client = await prisma.client.update({
      where: { id },
      data: { statut }
    });

    const { password, ...clientWithoutPassword } = client;
    return clientWithoutPassword as IClient;
  }

  // Authentifier un client
  static async authenticate(identifiant: string, password: string) {
  const client = await this.findByEmail(identifiant) || await this.findByTel(identifiant);
    
    if (!client) {
    throw new Error('Email/téléphone ou mot de passe incorrect');
    }

    const isValidPassword = await AuthUtils.comparePassword(password, client.password);
    
    if (!isValidPassword) {
    throw new Error('Email/téléphone ou mot de passe incorrect');
    }

    const { password: _, ...clientWithoutPassword } = client;
    return clientWithoutPassword;
  }

  // Récupérer les statistiques d'un client
  static async getStats(id: string) {
    const [commandes, totalDepense, commandesRecentes] = await Promise.all([
      prisma.commande.count({
        where: { clientId: id }
      }),
      prisma.commande.aggregate({
        where: { clientId: id },
        _sum: {
          montant: true
        }
      }),
      prisma.commande.findMany({
        where: { clientId: id },
        select: {
          id: true,
          numero: true,
          montant: true,
          statut: true,
          dateCommande: true
        },
        orderBy: { dateCommande: 'desc' },
        take: 5
      })
    ]);

    return {
      totalCommandes: commandes,
      totalDepense: totalDepense._sum.montant || 0,
      commandesRecentes
    };
  }

  // Rechercher des clients
  static async search(searchTerm: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [clients, total] = await Promise.all([
      prisma.client.findMany({
        where: {
          OR: [
            { nom: { contains: searchTerm, mode: 'insensitive' } },
            { prenom: { contains: searchTerm, mode: 'insensitive' } },
            { email: { contains: searchTerm, mode: 'insensitive' } }
          ]
        },
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          nom: true,
          prenom: true,
          telephone: true,
          adresse: true,
          statut: true,
          createdAt: true,
          updatedAt: true,
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
              commandes: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.client.count({
        where: {
          OR: [
            { nom: { contains: searchTerm, mode: 'insensitive' } },
            { prenom: { contains: searchTerm, mode: 'insensitive' } },
            { email: { contains: searchTerm, mode: 'insensitive' } }
          ]
        }
      })
    ]);

    return {
      clients,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Changer le mot de passe d'un client
  static async changePassword(id: string, currentPassword: string, newPassword: string): Promise<void> {
    const client = await prisma.client.findUnique({
      where: { id }
    });

    if (!client) {
      throw new Error('Client non trouvé');
    }

    // Vérifier l'ancien mot de passe
    const isValidPassword = await AuthUtils.comparePassword(currentPassword, client.password);
    if (!isValidPassword) {
      throw new Error('Ancien mot de passe incorrect');
    }

    // Hasher et mettre à jour le nouveau mot de passe
    const hashedNewPassword = await AuthUtils.hashPassword(newPassword);
    await prisma.client.update({
      where: { id },
      data: { password: hashedNewPassword }
    });
  }
} 