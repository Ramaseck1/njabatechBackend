"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const database_1 = require("../config/database");
const auth_1 = require("../utils/auth");
class ClientService {
    static async create(data, administrateurId) {
        const hashedPassword = await auth_1.AuthUtils.hashPassword(data.password);
        const client = await database_1.prisma.client.create({
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
        return clientWithoutPassword;
    }
    static async createAvis(clientId, data) {
        const avis = await database_1.prisma.avis.create({
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
    static async findByClientAvis(clientId) {
        return database_1.prisma.avis.findMany({
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
    static async findAllAvis() {
        return database_1.prisma.avis.findMany({
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
    static async deleteAvis(id) {
        await database_1.prisma.avis.delete({ where: { id } });
    }
    static async findByEmail(email) {
        return database_1.prisma.client.findUnique({
            where: { email }
        });
    }
    static async findByTel(telephone) {
        return database_1.prisma.client.findFirst({
            where: { telephone }
        });
    }
    static async findById(id) {
        const client = await database_1.prisma.client.findUnique({
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
        if (!client)
            return null;
        const { password, ...clientWithoutPassword } = client;
        return clientWithoutPassword;
    }
    static async findAll(page = 1, limit = 10, administrateurId) {
        const skip = (page - 1) * limit;
        const where = administrateurId ? { administrateurId } : {};
        const [clients, total] = await Promise.all([
            database_1.prisma.client.findMany({
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
            database_1.prisma.client.count({ where })
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
    static async update(id, data) {
        const updateData = { ...data };
        if (data.password) {
            updateData.password = await auth_1.AuthUtils.hashPassword(data.password);
        }
        const client = await database_1.prisma.client.update({
            where: { id },
            data: updateData
        });
        if (!client)
            return null;
        const { password, ...clientWithoutPassword } = client;
        return clientWithoutPassword;
    }
    static async delete(id) {
        try {
            await database_1.prisma.client.delete({
                where: { id }
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    static async updateStatus(id, statut) {
        const client = await database_1.prisma.client.update({
            where: { id },
            data: { statut }
        });
        const { password, ...clientWithoutPassword } = client;
        return clientWithoutPassword;
    }
    static async authenticate(identifiant, password) {
        const client = await this.findByEmail(identifiant) || await this.findByTel(identifiant);
        if (!client) {
            throw new Error('Email/téléphone ou mot de passe incorrect');
        }
        const isValidPassword = await auth_1.AuthUtils.comparePassword(password, client.password);
        if (!isValidPassword) {
            throw new Error('Email/téléphone ou mot de passe incorrect');
        }
        const { password: _, ...clientWithoutPassword } = client;
        return clientWithoutPassword;
    }
    static async getStats(id) {
        const [commandes, totalDepense, commandesRecentes] = await Promise.all([
            database_1.prisma.commande.count({
                where: { clientId: id }
            }),
            database_1.prisma.commande.aggregate({
                where: { clientId: id },
                _sum: {
                    montant: true
                }
            }),
            database_1.prisma.commande.findMany({
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
    static async search(searchTerm, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [clients, total] = await Promise.all([
            database_1.prisma.client.findMany({
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
            database_1.prisma.client.count({
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
    static async changePassword(id, currentPassword, newPassword) {
        const client = await database_1.prisma.client.findUnique({
            where: { id }
        });
        if (!client) {
            throw new Error('Client non trouvé');
        }
        const isValidPassword = await auth_1.AuthUtils.comparePassword(currentPassword, client.password);
        if (!isValidPassword) {
            throw new Error('Ancien mot de passe incorrect');
        }
        const hashedNewPassword = await auth_1.AuthUtils.hashPassword(newPassword);
        await database_1.prisma.client.update({
            where: { id },
            data: { password: hashedNewPassword }
        });
    }
}
exports.ClientService = ClientService;
//# sourceMappingURL=clientService.js.map