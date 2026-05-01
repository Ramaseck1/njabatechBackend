import { prisma } from '../config/database';
import { ICategorie } from '../types';

export class CategorieService {
  // Créer une nouvelle catégorie
  static async create(data: { nom: string; description?: string; couleur?: string; image?: string }): Promise<ICategorie> {
    const categorie = await prisma.categorie.create({
      data
    });

    return categorie as ICategorie;
  }

  // Trouver une catégorie par ID
  static async findById(id: string): Promise<ICategorie | null> {
    const categorie = await prisma.categorie.findUnique({
      where: { id },
      include: {
        produits: {
          select: {
            id: true,
            nom: true,
            prix: true,
            stock: true,
            statut: true
          }
        }
      }
    });

    return categorie as ICategorie | null;
  }

  // Trouver une catégorie par nom
  static async findByNom(nom: string): Promise<ICategorie | null> {
    const categorie = await prisma.categorie.findUnique({
      where: { nom }
    });

    return categorie as ICategorie | null;
  }

  // Récupérer toutes les catégories
  static async findAll(page: number = 1, limit: number = 50) {
    const skip = (page - 1) * limit;

    const [categories, total] = await Promise.all([
      prisma.categorie.findMany({
        skip,
        take: limit,
        include: {
          _count: {
            select: {
              produits: true
            }
          }
        },
        orderBy: { nom: 'asc' }
      }),
      prisma.categorie.count()
    ]);

    return {
      categories,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Mettre à jour une catégorie
  static async update(id: string, data: Partial<{ nom: string; description: string; couleur: string; image: string }>): Promise<ICategorie | null> {
    const categorie = await prisma.categorie.update({
      where: { id },
      data
    });

    return categorie as ICategorie;
  }

  // Supprimer une catégorie
  static async delete(id: string, force: boolean = false): Promise<void> {
    if (force) {
      // Suppression forcée : d'abord supprimer tous les produits de la catégorie
      await prisma.produit.deleteMany({
        where: { categorieId: id }
      });
      console.log(`🗑️ Produits supprimés de la catégorie ${id} (suppression forcée)`);
    }

    // Supprimer la catégorie
    await prisma.categorie.delete({
      where: { id }
    });
  }

  // Récupérer les catégories avec le nombre de produits
  static async getWithProductCount() {
    const categories = await prisma.categorie.findMany({
      include: {
        _count: {
          select: {
            produits: true
          }
        }
      },
      orderBy: { nom: 'asc' }
    });

    return categories;
  }

  // Rechercher des catégories
  static async search(searchTerm: string, page: number = 1, limit: number = 50) {
    const skip = (page - 1) * limit;

    const [categories, total] = await Promise.all([
      prisma.categorie.findMany({
        where: {
          OR: [
            { nom: { contains: searchTerm, mode: 'insensitive' } },
            { description: { contains: searchTerm, mode: 'insensitive' } }
          ]
        },
        skip,
        take: limit,
        include: {
          _count: {
            select: {
              produits: true
            }
          }
        },
        orderBy: { nom: 'asc' }
      }),
      prisma.categorie.count({
        where: {
          OR: [
            { nom: { contains: searchTerm, mode: 'insensitive' } },
            { description: { contains: searchTerm, mode: 'insensitive' } }
          ]
        }
      })
    ]);

    return {
      categories,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Créer des catégories par défaut
  static async createDefaultCategories(): Promise<void> {
    const defaultCategories = [
      { nom: 'Légumes', description: 'Légumes frais et biologiques', couleur: '#22C55E', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/legumes.jpg' },
      { nom: 'Fruits', description: 'Fruits frais et de saison', couleur: '#F59E0B', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/fruits.jpg' },
      { nom: 'Céréales', description: 'Céréales et grains', couleur: '#8B4513', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/cereales.jpg' },
      { nom: 'Laitiers', description: 'Produits laitiers', couleur: '#FFFFFF', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/laitiers.jpg' },
      { nom: 'Viandes', description: 'Viandes et volailles', couleur: '#DC2626', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/viandes.jpg' },
      { nom: 'Poissons', description: 'Poissons et fruits de mer', couleur: '#0EA5E9', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/poissons.jpg' },
      { nom: 'Épices', description: 'Épices et condiments', couleur: '#7C3AED', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/epices.jpg' },
      { nom: 'Boissons', description: 'Boissons et jus', couleur: '#EC4899', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/boissons.jpg' },
      { nom: 'Autres', description: 'Autres produits', couleur: '#6B7280', image: 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/autres.jpg' }
    ];

    for (const categorie of defaultCategories) {
      const existingCategorie = await this.findByNom(categorie.nom);
      if (!existingCategorie) {
        await this.create(categorie);
      }
    }
  }
} 