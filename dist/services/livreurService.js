"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreurService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const types_1 = require("../types");
const database_1 = require("../config/database");
class LivreurService {
    static async create(data) {
        const existingLivreur = await database_1.prisma.livreurs.findUnique({
            where: { email: data.email }
        });
        if (existingLivreur) {
            throw new Error('Un livreur avec cet email existe déjà');
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        if (data.regionId) {
            const region = await database_1.prisma.regions.findUnique({
                where: { id: data.regionId }
            });
            if (!region) {
                throw new Error('Région introuvable');
            }
        }
        const livreur = await database_1.prisma.livreurs.create({
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
        return livreur;
    }
    static async findAll(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [livreurs, total] = await Promise.all([
            database_1.prisma.livreurs.findMany({
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
            database_1.prisma.livreurs.count()
        ]);
        return {
            livreurs: livreurs,
            total,
            pages: Math.ceil(total / limit)
        };
    }
    static async findById(id) {
        const livreur = await database_1.prisma.livreurs.findUnique({
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
        return livreur;
    }
    static async update(id, data) {
        const livreur = await database_1.prisma.livreurs.findUnique({
            where: { id }
        });
        if (!livreur) {
            throw new Error('Livreur introuvable');
        }
        if (data.regionId) {
            const region = await database_1.prisma.regions.findUnique({
                where: { id: data.regionId }
            });
            if (!region) {
                throw new Error('Région introuvable');
            }
        }
        const updatedLivreur = await database_1.prisma.livreurs.update({
            where: { id },
            data,
            include: {
                regions: true
            }
        });
        return updatedLivreur;
    }
    static async delete(id) {
        const livreur = await database_1.prisma.livreurs.findUnique({
            where: { id }
        });
        if (!livreur) {
            throw new Error('Livreur introuvable');
        }
        await database_1.prisma.livreurs.delete({
            where: { id }
        });
    }
    static async login(credentials) {
        const livreur = await database_1.prisma.livreurs.findUnique({
            where: { email: credentials.email },
            include: {
                regions: true
            }
        });
        if (!livreur) {
            throw new Error('Email ou mot de passe incorrect');
        }
        const isPasswordValid = await bcryptjs_1.default.compare(credentials.password, livreur.password);
        if (!isPasswordValid) {
            throw new Error('Email ou mot de passe incorrect');
        }
        if (livreur.statut === types_1.StatutLivreur.BLOQUE) {
            throw new Error('Compte bloqué. Contactez l\'administrateur.');
        }
        const token = jsonwebtoken_1.default.sign({
            id: livreur.id,
            email: livreur.email,
            role: 'livreur'
        }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });
        const { password, ...livreurWithoutPassword } = livreur;
        return {
            livreur: livreurWithoutPassword,
            token
        };
    }
    static generateResetCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    static async forgotPassword(email) {
        const livreur = await database_1.prisma.livreurs.findUnique({ where: { email } });
        if (!livreur)
            return;
        const code = this.generateResetCode();
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
        await database_1.prisma.passwordResetCode.create({
            data: {
                email,
                gieId: livreur.id,
                code,
                expiresAt,
            },
        });
        console.log(`📧 [DEV] Code de réinitialisation pour ${email}: ${code}`);
    }
    static async verifyResetCode(email, code) {
        const resetCode = await database_1.prisma.passwordResetCode.findFirst({
            where: { email, code, used: false },
            orderBy: { createdAt: 'desc' },
        });
        if (!resetCode) {
            throw new Error('Code invalide');
        }
        if (resetCode.expiresAt < new Date()) {
            throw new Error('Code expiré, veuillez recommencer');
        }
        await database_1.prisma.passwordResetCode.update({
            where: { id: resetCode.id },
            data: { verified: true },
        });
    }
    static async resetPassword(email, code, newPassword) {
        const resetCode = await database_1.prisma.passwordResetCode.findFirst({
            where: { email, code, used: false, verified: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!resetCode) {
            throw new Error('Code invalide ou non vérifié. Recommencez la procédure.');
        }
        if (resetCode.expiresAt < new Date()) {
            throw new Error('Code expiré, veuillez recommencer');
        }
        const livreur = await database_1.prisma.livreurs.findUnique({ where: { email } });
        if (!livreur) {
            throw new Error('Livreur introuvable');
        }
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, 10);
        await database_1.prisma.$transaction([
            database_1.prisma.livreurs.update({
                where: { id: livreur.id },
                data: { password: hashedPassword },
            }),
            database_1.prisma.passwordResetCode.update({
                where: { id: resetCode.id },
                data: { used: true },
            }),
        ]);
    }
    static async getCommandes(id, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const whereClause = {};
        if (id && id !== 'all' && id !== 'toutes') {
            whereClause.livreurId = id;
        }
        const [commandes, total] = await Promise.all([
            database_1.prisma.commande.findMany({
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
            database_1.prisma.commande.count({
                where: whereClause
            })
        ]);
        return {
            commandes,
            total,
            pages: Math.ceil(total / limit)
        };
    }
    static async getCommandesDisponibles(regionId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const whereClause = {
            livreurId: null,
            statut: { in: ['CONFIRMEE', 'EN_ATTENTE', 'EN_PREPARATION'] }
        };
        if (regionId) {
            whereClause.regionLivraisonId = regionId;
        }
        const [commandes, total] = await Promise.all([
            database_1.prisma.commande.findMany({
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
            database_1.prisma.commande.count({
                where: whereClause
            })
        ]);
        return {
            commandes,
            total,
            pages: Math.ceil(total / limit)
        };
    }
    static async assignerCommande(livreurId, commandeId) {
        const [livreur, commande] = await Promise.all([
            database_1.prisma.livreurs.findUnique({ where: { id: livreurId } }),
            database_1.prisma.commande.findUnique({ where: { id: commandeId } })
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
        if (livreur.statut !== types_1.StatutLivreur.DISPONIBLE) {
            throw new Error('Le livreur n\'est pas disponible');
        }
        await database_1.prisma.commande.update({
            where: { id: commandeId },
            data: { livreurId }
        });
        await database_1.prisma.livreurs.update({
            where: { id: livreurId },
            data: { statut: types_1.StatutLivreur.EN_LIVRAISON }
        });
    }
    static async annulerCommande(livreurId, commandeId) {
        const commande = await database_1.prisma.commande.findUnique({ where: { id: commandeId } });
        if (!commande) {
            throw new Error('Commande introuvable');
        }
        if (commande.livreurId !== livreurId) {
            throw new Error("Cette commande n'est pas assignée à ce livreur");
        }
        if (commande.statut === 'LIVREE') {
            throw new Error('Impossible d\'annuler une commande déjà livrée');
        }
        if (commande.statut === 'ANNULEE') {
            throw new Error('Cette commande est déjà annulée');
        }
        await database_1.prisma.commande.update({
            where: { id: commandeId },
            data: {
                livreurId: null,
                statut: 'CONFIRMEE',
            }
        });
        const livreur = await database_1.prisma.livreurs.findUnique({ where: { id: livreurId } });
        if (livreur && livreur.statut !== types_1.StatutLivreur.BLOQUE) {
            await database_1.prisma.livreurs.update({
                where: { id: livreurId },
                data: { statut: types_1.StatutLivreur.DISPONIBLE }
            });
        }
    }
    static async marquerLivrees(livreurId, commandeId) {
        try {
            const commande = await database_1.prisma.commande.findUnique({
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
            if (commande.livreurId && commande.livreurId !== livreurId) {
                throw new Error('Cette commande est assignée à un autre livreur');
            }
            const livreur = await database_1.prisma.livreurs.findUnique({
                where: { id: livreurId }
            });
            if (!livreur) {
                throw new Error('Livreur introuvable');
            }
            if (livreur.statut === types_1.StatutLivreur.BLOQUE) {
                throw new Error('Livreur bloqué, impossible de livrer');
            }
            await database_1.prisma.commande.update({
                where: { id: commandeId },
                data: {
                    statut: 'LIVREE',
                    livreurId: livreurId,
                    dateLivraison: new Date()
                }
            });
            await database_1.prisma.livreurs.update({
                where: { id: livreurId },
                data: { statut: types_1.StatutLivreur.DISPONIBLE }
            });
            console.log(`✅ Commande ${commandeId} marquée comme livrée par le livreur ${livreurId}`);
        }
        catch (error) {
            console.error('❌ Erreur lors du marquage de la commande comme livrée:', error);
            throw error;
        }
    }
}
exports.LivreurService = LivreurService;
//# sourceMappingURL=livreurService.js.map