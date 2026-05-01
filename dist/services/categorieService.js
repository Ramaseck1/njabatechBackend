"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieService = void 0;
const database_1 = require("../config/database");
class CategorieService {
    static async create(data) {
        const categorie = await database_1.prisma.categorie.create({
            data
        });
        return categorie;
    }
    static async findById(id) {
        const categorie = await database_1.prisma.categorie.findUnique({
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
        return categorie;
    }
    static async findByNom(nom) {
        const categorie = await database_1.prisma.categorie.findUnique({
            where: { nom }
        });
        return categorie;
    }
    static async findAll(page = 1, limit = 50) {
        const skip = (page - 1) * limit;
        const [categories, total] = await Promise.all([
            database_1.prisma.categorie.findMany({
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
            database_1.prisma.categorie.count()
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
    static async update(id, data) {
        const categorie = await database_1.prisma.categorie.update({
            where: { id },
            data
        });
        return categorie;
    }
    static async delete(id, force = false) {
        if (force) {
            await database_1.prisma.produit.deleteMany({
                where: { categorieId: id }
            });
            console.log(`🗑️ Produits supprimés de la catégorie ${id} (suppression forcée)`);
        }
        await database_1.prisma.categorie.delete({
            where: { id }
        });
    }
    static async getWithProductCount() {
        const categories = await database_1.prisma.categorie.findMany({
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
    static async search(searchTerm, page = 1, limit = 50) {
        const skip = (page - 1) * limit;
        const [categories, total] = await Promise.all([
            database_1.prisma.categorie.findMany({
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
            database_1.prisma.categorie.count({
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
    static async createDefaultCategories() {
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
exports.CategorieService = CategorieService;
//# sourceMappingURL=categorieService.js.map