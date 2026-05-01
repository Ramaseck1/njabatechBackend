"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class RegionService {
    static async create(data) {
        try {
            const region = await prisma.regions.create({
                data: {
                    id: `reg_${Date.now()}`,
                    nom: data.nom,
                    description: data.description,
                    fraisLivraisonInterne: data.fraisLivraisonInterne || 500,
                    fraisLivraisonExterne: data.fraisLivraisonExterne || 2000,
                    updatedAt: new Date()
                },
            });
            return region;
        }
        catch (error) {
            throw new Error(`Erreur lors de la création de la région: ${error}`);
        }
    }
    static async findById(id) {
        try {
            const region = await prisma.regions.findUnique({
                where: { id },
                include: {
                    gies: true,
                    commandes: true,
                    adresses: true,
                },
            });
            return region;
        }
        catch (error) {
            throw new Error(`Erreur lors de la recherche de la région: ${error}`);
        }
    }
    static async findByName(nom) {
        try {
            const region = await prisma.regions.findUnique({
                where: { nom },
                include: {
                    gies: true,
                    commandes: true,
                    adresses: true,
                },
            });
            return region;
        }
        catch (error) {
            throw new Error(`Erreur lors de la recherche de la région: ${error}`);
        }
    }
    static async findAll() {
        try {
            const regions = await prisma.regions.findMany({
                include: {
                    gies: true,
                    commandes: true,
                    adresses: true,
                },
                orderBy: { nom: 'asc' },
            });
            return regions;
        }
        catch (error) {
            throw new Error(`Erreur lors de la récupération des régions: ${error}`);
        }
    }
    static async update(id, data) {
        try {
            const region = await prisma.regions.update({
                where: { id },
                data: {
                    nom: data.nom,
                    description: data.description,
                    fraisLivraisonInterne: data.fraisLivraisonInterne,
                    fraisLivraisonExterne: data.fraisLivraisonExterne,
                },
                include: {
                    gies: true,
                    commandes: true,
                    adresses: true,
                },
            });
            return region;
        }
        catch (error) {
            throw new Error(`Erreur lors de la mise à jour de la région: ${error}`);
        }
    }
    static async delete(id) {
        try {
            await prisma.regions.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new Error(`Erreur lors de la suppression de la région: ${error}`);
        }
    }
    static async calculateFraisLivraison(regionSourceId, regionDestinationId) {
        try {
            const regionSource = await prisma.regions.findUnique({
                where: { id: regionSourceId },
            });
            const regionDestination = await prisma.regions.findUnique({
                where: { id: regionDestinationId },
            });
            if (!regionSource || !regionDestination) {
                throw new Error('Région source ou destination introuvable');
            }
            if (regionSourceId === regionDestinationId) {
                return regionDestination.fraisLivraisonInterne;
            }
            return regionDestination.fraisLivraisonExterne;
        }
        catch (error) {
            throw new Error(`Erreur lors du calcul des frais de livraison: ${error}`);
        }
    }
    static async createDefaultRegions() {
        try {
            const defaultRegions = [
                {
                    nom: 'Dakar',
                    description: 'Région de Dakar',
                    fraisLivraisonInterne: 500,
                    fraisLivraisonExterne: 2000,
                },
                {
                    nom: 'Saint-Louis',
                    description: 'Région de Saint-Louis',
                    fraisLivraisonInterne: 500,
                    fraisLivraisonExterne: 2000,
                },
                {
                    nom: 'Mbour',
                    description: 'Région de Mbour',
                    fraisLivraisonInterne: 500,
                    fraisLivraisonExterne: 2000,
                },
            ];
            for (const regionData of defaultRegions) {
                const existingRegion = await prisma.regions.findUnique({
                    where: { nom: regionData.nom },
                });
                if (!existingRegion) {
                    await prisma.regions.create({
                        data: {
                            id: `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                            ...regionData,
                            updatedAt: new Date()
                        },
                    });
                }
            }
        }
        catch (error) {
            throw new Error(`Erreur lors de la création des régions par défaut: ${error}`);
        }
    }
}
exports.RegionService = RegionService;
//# sourceMappingURL=regionService.js.map