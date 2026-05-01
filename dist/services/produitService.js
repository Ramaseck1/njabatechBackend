"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitService = void 0;
const database_1 = require("../config/database");
class ProduitService {
    static async create(data) {
        const produit = await database_1.prisma.produit.create({
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
        return produit;
    }
    static async createAvis(data) {
        const avis = await database_1.prisma.avisProduit.create({
            data
        });
        return avis;
    }
    static async getByAvisProduit(produitId) {
        const avis = await database_1.prisma.avisProduit.findMany({
            where: { produitId },
            include: { client: { select: { id: true, nom: true, prenom: true } } },
            orderBy: { createdAt: 'desc' }
        });
        const moyenne = avis.length > 0 ? avis.reduce((sum, a) => sum + a.rating, 0) / avis.length : 0;
        return { avis, moyenne };
    }
    static async findByClientAndProduit(clientId, produitId) {
        return database_1.prisma.avisProduit.findFirst({ where: { clientId, produitId } });
    }
    static async findById(id) {
        const produit = await database_1.prisma.produit.findUnique({
            where: { id },
            include: {
                gie: {
                    select: {
                        id: true,
                        nom: true,
                        email: true,
                        description: true,
                        adresse: true,
                        telephone: true,
                        logo: true,
                        Annee: true,
                        membre: true,
                        specialite: true
                    }
                },
                categorie: true
            }
        });
        return produit;
    }
    static async findAll(page = 1, limit = 10, gieId) {
        const skip = (page - 1) * limit;
        const where = gieId ? { gieId } : {};
        console.log('🔍 Debug ProduitService.findAll:');
        console.log('   - GIE ID:', gieId);
        console.log('   - Where clause:', where);
        console.log('   - Page:', page, 'Limit:', limit);
        const [produits, total] = await Promise.all([
            database_1.prisma.produit.findMany({
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
            database_1.prisma.produit.count({ where })
        ]);
        console.log('📦 Résultats:');
        console.log('   - Produits trouvés:', produits.length);
        console.log('   - Total:', total);
        return {
            produits: produits,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }
    static async update(id, data) {
        const existingProduit = await database_1.prisma.produit.findUnique({
            where: { id }
        });
        if (!existingProduit) {
            return null;
        }
        const produit = await database_1.prisma.produit.update({
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
        return produit;
    }
    static async delete(id) {
        await database_1.prisma.produit.delete({
            where: { id }
        });
    }
    static async updateStock(id, quantite) {
        const produit = await database_1.prisma.produit.findUnique({
            where: { id }
        });
        if (!produit)
            return null;
        const nouveauStock = produit.stock + quantite;
        const statut = nouveauStock <= 0 ? 'HORS_STOCK' : nouveauStock < 10 ? 'RUPTURE' : 'DISPONIBLE';
        const produitMisAJour = await database_1.prisma.produit.update({
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
        return produitMisAJour;
    }
    static async search(searchTerm, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [produits, total] = await Promise.all([
            database_1.prisma.produit.findMany({
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
            database_1.prisma.produit.count({
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
            produits: produits,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }
    static async getByCategory(categorieId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [produits, total] = await Promise.all([
            database_1.prisma.produit.findMany({
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
            database_1.prisma.produit.count({
                where: { categorieId }
            })
        ]);
        return {
            produits: produits,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }
    static async getOutOfStock(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [produits, total] = await Promise.all([
            database_1.prisma.produit.findMany({
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
            database_1.prisma.produit.count({
                where: {
                    OR: [
                        { statut: 'RUPTURE' },
                        { statut: 'HORS_STOCK' }
                    ]
                }
            })
        ]);
        return {
            produits: produits,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }
}
exports.ProduitService = ProduitService;
//# sourceMappingURL=produitService.js.map