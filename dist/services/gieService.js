"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GIEService = void 0;
const client_1 = require("@prisma/client");
const auth_1 = require("../utils/auth");
const prisma = new client_1.PrismaClient();
class GIEService {
    static async create(data, administrateurId) {
        if (data.telephone) {
            const existingGIEByPhone = await prisma.gIE.findFirst({
                where: { telephone: data.telephone }
            });
            if (existingGIEByPhone) {
                throw new Error('Un GIE avec ce numéro existe déjà');
            }
        }
        const hashedPassword = await auth_1.AuthUtils.hashPassword(data.password);
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
    static async findByPhone(telephone) {
        const gie = await prisma.gIE.findFirst({
            where: { telephone }
        });
        return gie;
    }
    static async resetPassword(id, newPassword) { }
    static async authenticate(emailOrPhone, password) {
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
        const isValidPassword = await auth_1.AuthUtils.comparePassword(password, gie.password);
        if (!isValidPassword) {
            throw new Error('Identifiant ou mot de passe incorrect');
        }
        return gie;
    }
    static async findAll(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = search ? {
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
    static async findById(id) {
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
    static async update(id, data) {
        const updateData = { ...data };
        if (data.password) {
            updateData.password = await auth_1.AuthUtils.hashPassword(data.password);
        }
        return await prisma.gIE.update({
            where: { id },
            data: updateData
        });
    }
    static async delete(id) {
        await prisma.gIE.delete({
            where: { id }
        });
    }
    static async updateStatus(id, statut) {
        return await prisma.gIE.update({
            where: { id },
            data: { statut }
        });
    }
    static async search(searchTerm, page = 1, limit = 10) {
        return await this.findAll(page, limit, searchTerm);
    }
    static async validatePassword(gieId, password) {
        try {
            const gie = await prisma.gIE.findUnique({
                where: { id: gieId }
            });
            if (!gie) {
                throw new Error('GIE non trouvé');
            }
            const isValid = await auth_1.AuthUtils.comparePassword(password, gie.password);
            return isValid;
        }
        catch (error) {
            console.error('Erreur lors de la validation du mot de passe GIE:', error);
            return false;
        }
    }
    static async changePassword(gieId, currentPassword, newPassword) {
        try {
            const isCurrentPasswordValid = await this.validatePassword(gieId, currentPassword);
            if (!isCurrentPasswordValid) {
                throw new Error('Mot de passe actuel incorrect');
            }
            if (newPassword.length < 6) {
                throw new Error('Le nouveau mot de passe doit contenir au moins 6 caractères');
            }
            const hashedNewPassword = await auth_1.AuthUtils.hashPassword(newPassword);
            await prisma.gIE.update({
                where: { id: gieId },
                data: { password: hashedNewPassword }
            });
        }
        catch (error) {
            console.error('Erreur lors du changement de mot de passe GIE:', error);
            throw error;
        }
    }
    static async getStats(id) {
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
exports.GIEService = GIEService;
//# sourceMappingURL=gieService.js.map