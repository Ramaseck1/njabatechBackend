import { prisma } from '../config/database';
import { CreateProduitDto, IProduit } from '../types';

export class ProduitService {
  // Créer un nouveau produit
  static async create(data: CreateProduitDto): Promise<IProduit> {
    const produit = await prisma.produit.create({
      data,
      include: {
        gie: {
          select: {
            id: true,
            nom: true,
            email: true
          }
        },
        categorie: true
      }
    });

    return produit as IProduit;
  }
static async createAvis(data: { clientId: string, produitId: string, rating: number }) {
  const avis = await prisma.avisProduit.create({
    data
  });
  return avis;
}


  static async getByAvisProduit(produitId: string) {
    const avis = await prisma.avisProduit.findMany({
      where: { produitId },
      include: { client: { select: { id: true, nom: true, prenom: true } } },
      orderBy: { createdAt: 'desc' }
    });

    const moyenne = avis.length > 0 ? avis.reduce((sum, a) => sum + a.rating, 0) / avis.length : 0;

    return { avis, moyenne };
  }

  // Vérifier si un client a déjà noté le produit
  static async findByClientAndProduit(clientId: string, produitId: string) {
    return prisma.avisProduit.findFirst({ where: { clientId, produitId } });
  }


  // Trouver un produit par ID
  static async findById(id: string): Promise<IProduit | null> {
    const produit = await prisma.produit.findUnique({
      where: { id },
      include: {
        gie: {
          select: {
            id: true,
            nom: true,
            email: true,
            description:true,
            adresse:true,
            telephone:true,
            logo:true,
            Annee:true,
            membre:true,
            specialite:true


          }
        },
        categorie: true
      }
    });

    return produit as IProduit | null;
  }

  // Récupérer tous les produits
  static async findAll(page: number = 1, limit: number = 10, gieId?: string) {
    const skip = (page - 1) * limit;
    const where = gieId ? { gieId } : {};

    console.log('🔍 Debug ProduitService.findAll:');
    console.log('   - GIE ID:', gieId);
    console.log('   - Where clause:', where);
    console.log('   - Page:', page, 'Limit:', limit);

    const [produits, total] = await Promise.all([
      prisma.produit.findMany({
        where,
        skip,
        take: limit,
        include: {
          gie: {
            select: {
              id: true,
              nom: true,
              email: true
            }
          },
          categorie: true
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.produit.count({ where })
    ]);

    console.log('📦 Résultats:');
    console.log('   - Produits trouvés:', produits.length);
    console.log('   - Total:', total);

    return {
      produits: produits as IProduit[],
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Mettre à jour un produit
  static async update(id: string, data: Partial<CreateProduitDto>): Promise<IProduit | null> {
    // Récupérer le produit existant pour comparer les images
    const existingProduit = await prisma.produit.findUnique({
      where: { id }
    });

    if (!existingProduit) {
      return null;
    }

    // Mettre à jour le produit
    const produit = await prisma.produit.update({
      where: { id },
      data,
      include: {
        gie: {
          select: {
            id: true,
            nom: true,
            email: true
          }
        },
        categorie: true
      }
    });

    return produit as IProduit;
  }

  // Supprimer un produit
  static async delete(id: string): Promise<void> {
    await prisma.produit.delete({
      where: { id }
    });
  }

  // Mettre à jour le stock d'un produit
  static async updateStock(id: string, quantite: number): Promise<IProduit | null> {
    const produit = await prisma.produit.findUnique({
      where: { id }
    });

    if (!produit) return null;

    const nouveauStock = produit.stock + quantite;
    const statut = nouveauStock <= 0 ? 'HORS_STOCK' : nouveauStock < 10 ? 'RUPTURE' : 'DISPONIBLE';

    const produitMisAJour = await prisma.produit.update({
      where: { id },
      data: {
        stock: nouveauStock,
        statut
      },
      include: {
        gie: {
          select: {
            id: true,
            nom: true,
            email: true
          }
        },
        categorie: true
      }
    });

    return produitMisAJour as IProduit;
  }

  // Rechercher des produits
  static async search(searchTerm: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [produits, total] = await Promise.all([
      prisma.produit.findMany({
        where: {
          OR: [
            { nom: { contains: searchTerm, mode: 'insensitive' } },
            { description: { contains: searchTerm, mode: 'insensitive' } },
            { categorie: { nom: { contains: searchTerm, mode: 'insensitive' } } }
          ]
        },
        skip,
        take: limit,
        include: {
          gie: {
            select: {
              id: true,
              nom: true,
              email: true
            }
          },
          categorie: true
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.produit.count({
        where: {
          OR: [
            { nom: { contains: searchTerm, mode: 'insensitive' } },
            { description: { contains: searchTerm, mode: 'insensitive' } },
            { categorie: { nom: { contains: searchTerm, mode: 'insensitive' } } }
          ]
        }
      })
    ]);

    return {
      produits: produits as IProduit[],
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Récupérer les produits par catégorie
  static async getByCategory(categorieId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [produits, total] = await Promise.all([
      prisma.produit.findMany({
        where: { categorieId },
        skip,
        take: limit,
        include: {
          gie: {
            select: {
              id: true,
              nom: true,
              email: true
            }
          },
          categorie: true
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.produit.count({
        where: { categorieId }
      })
    ]);

    return {
      produits: produits as IProduit[],
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Récupérer les produits en rupture de stock
  static async getOutOfStock(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [produits, total] = await Promise.all([
      prisma.produit.findMany({
        where: {
          OR: [
            { statut: 'RUPTURE' },
            { statut: 'HORS_STOCK' }
          ]
        },
        skip,
        take: limit,
        include: {
          gie: {
            select: {
              id: true,
              nom: true,
              email: true
            }
          },
          categorie: true
        },
        orderBy: { stock: 'asc' }
      }),
      prisma.produit.count({
        where: {
          OR: [
            { statut: 'RUPTURE' },
            { statut: 'HORS_STOCK' }
          ]
        }
      })
    ]);

    return {
      produits: produits as IProduit[],
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }
} 