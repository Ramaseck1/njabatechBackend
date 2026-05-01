"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdresseService = void 0;
const database_1 = require("../config/database");
class AdresseService {
    static async create(data) {
        try {
            const adresse = await database_1.prisma.adresses.create({
                data: {
                    id: `addr_${Date.now()}`,
                    nom: data.nom,
                    description: data.description,
                    codePostal: data.codePostal,
                    fraisLivraison: data.fraisLivraison || 0,
                    regionId: data.regionId,
                    updatedAt: new Date()
                },
                include: {
                    regions: true,
                },
            });
            return adresse;
        }
        catch (error) {
            throw new Error(`Erreur lors de la création de l'adresse: ${error}`);
        }
    }
    static async findById(id) {
        try {
            const adresse = await database_1.prisma.adresses.findUnique({
                where: { id },
                include: {
                    regions: true,
                },
            });
            return adresse;
        }
        catch (error) {
            throw new Error(`Erreur lors de la recherche de l'adresse: ${error}`);
        }
    }
    static async findAll() {
        try {
            const adresses = await database_1.prisma.adresses.findMany({
                include: {
                    regions: true,
                },
                orderBy: { nom: 'asc' },
            });
            return adresses;
        }
        catch (error) {
            throw new Error(`Erreur lors de la récupération des adresses: ${error}`);
        }
    }
    static async findByRegion(regionId) {
        try {
            const adresses = await database_1.prisma.adresses.findMany({
                where: { regionId },
                include: {
                    regions: true,
                },
                orderBy: { nom: 'asc' },
            });
            return adresses;
        }
        catch (error) {
            throw new Error(`Erreur lors de la récupération des adresses par région: ${error}`);
        }
    }
    static async update(id, data) {
        try {
            const adresse = await database_1.prisma.adresses.update({
                where: { id },
                data: {
                    nom: data.nom,
                    description: data.description,
                    codePostal: data.codePostal,
                    fraisLivraison: data.fraisLivraison,
                    regionId: data.regionId,
                },
                include: {
                    regions: true,
                },
            });
            return adresse;
        }
        catch (error) {
            throw new Error(`Erreur lors de la mise à jour de l'adresse: ${error}`);
        }
    }
    static async delete(id) {
        try {
            await database_1.prisma.adresses.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new Error(`Erreur lors de la suppression de l'adresse: ${error}`);
        }
    }
    static async createDefaultAdresses() {
        try {
            const regions = await database_1.prisma.regions.findMany();
            for (const region of regions) {
                const defaultAdresses = [
                    {
                        nom: `Centre-ville ${region.nom}`,
                        description: `Centre-ville de ${region.nom}`,
                        codePostal: `${region.nom.toUpperCase()}001`,
                        fraisLivraison: 0,
                        regionsId: region.id,
                    },
                    {
                        nom: `Banlieue ${region.nom}`,
                        description: `Banlieue de ${region.nom}`,
                        codePostal: `${region.nom.toUpperCase()}002`,
                        fraisLivraison: 200,
                        regionsId: region.id,
                    },
                    {
                        nom: `Périphérie ${region.nom}`,
                        description: `Périphérie de ${region.nom}`,
                        codePostal: `${region.nom.toUpperCase()}003`,
                        fraisLivraison: 500,
                        regionsId: region.id,
                    },
                ];
                for (const adresseData of defaultAdresses) {
                    const existingAdresse = await database_1.prisma.adresses.findFirst({
                        where: {
                            nom: adresseData.nom,
                            regionId: region.id,
                        },
                    });
                    if (!existingAdresse) {
                        await database_1.prisma.adresses.create({
                            data: {
                                id: `addr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                                ...adresseData,
                                regionId: region.id,
                                updatedAt: new Date()
                            },
                        });
                    }
                }
            }
        }
        catch (error) {
            throw new Error(`Erreur lors de la création des adresses par défaut: ${error}`);
        }
    }
}
exports.AdresseService = AdresseService;
//# sourceMappingURL=adresseService.js.map