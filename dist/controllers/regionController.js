"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionController = void 0;
const regionService_1 = require("../services/regionService");
class RegionController {
    static async create(req, res) {
        try {
            const data = req.body;
            if (!data.nom) {
                res.status(400).json({
                    success: false,
                    message: 'Le nom de la région est obligatoire'
                });
                return;
            }
            const region = await regionService_1.RegionService.create(data);
            res.status(201).json({
                success: true,
                message: 'Région créée avec succès',
                data: region
            });
        }
        catch (error) {
            console.error('Erreur lors de la création de la région:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création de la région',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async findAll(req, res) {
        try {
            const regions = await regionService_1.RegionService.findAll();
            res.status(200).json({
                success: true,
                message: 'Régions récupérées avec succès',
                data: regions
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération des régions:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des régions',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async findById(req, res) {
        try {
            const { id } = req.params;
            const region = await regionService_1.RegionService.findById(id);
            if (!region) {
                res.status(404).json({
                    success: false,
                    message: 'Région non trouvée'
                });
                return;
            }
            res.status(200).json({
                success: true,
                message: 'Région récupérée avec succès',
                data: region
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de la région:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération de la région',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const region = await regionService_1.RegionService.update(id, data);
            res.status(200).json({
                success: true,
                message: 'Région mise à jour avec succès',
                data: region
            });
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour de la région:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour de la région',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            await regionService_1.RegionService.delete(id);
            res.status(200).json({
                success: true,
                message: 'Région supprimée avec succès'
            });
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la région:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression de la région',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async calculateFraisLivraison(req, res) {
        try {
            const { regionSourceId, regionDestinationId } = req.body;
            if (!regionSourceId || !regionDestinationId) {
                res.status(400).json({
                    success: false,
                    message: 'Les IDs des régions source et destination sont obligatoires'
                });
                return;
            }
            const fraisLivraison = await regionService_1.RegionService.calculateFraisLivraison(regionSourceId, regionDestinationId);
            res.status(200).json({
                success: true,
                message: 'Frais de livraison calculés avec succès',
                data: { fraisLivraison }
            });
        }
        catch (error) {
            console.error('Erreur lors du calcul des frais de livraison:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors du calcul des frais de livraison',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async createDefaultRegions(req, res) {
        try {
            await regionService_1.RegionService.createDefaultRegions();
            res.status(200).json({
                success: true,
                message: 'Régions par défaut créées avec succès'
            });
        }
        catch (error) {
            console.error('Erreur lors de la création des régions par défaut:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création des régions par défaut',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
}
exports.RegionController = RegionController;
//# sourceMappingURL=regionController.js.map