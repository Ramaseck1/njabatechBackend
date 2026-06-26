"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdresseController = void 0;
const adresseService_1 = require("../services/adresseService");
class AdresseController {
    static async create(req, res) {
        try {
            const data = req.body;
            if (!data.nom || !data.regionId) {
                res.status(400).json({
                    success: false,
                    message: 'Le nom de l\'adresse et la région sont obligatoires'
                });
                return;
            }
            const adresse = await adresseService_1.AdresseService.create(data);
            res.status(201).json({
                success: true,
                message: 'Adresse créée avec succès',
                data: adresse
            });
        }
        catch (error) {
            console.error('Erreur lors de la création de l\'adresse:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création de l\'adresse',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async findAll(req, res) {
        try {
            const adresses = await adresseService_1.AdresseService.findAll();
            res.status(200).json({
                success: true,
                message: 'Adresses récupérées avec succès',
                data: adresses
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération des adresses:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des adresses',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async findById(req, res) {
        try {
            const { id } = req.params;
            const adresse = await adresseService_1.AdresseService.findById(id);
            if (!adresse) {
                res.status(404).json({
                    success: false,
                    message: 'Adresse non trouvée'
                });
                return;
            }
            res.status(200).json({
                success: true,
                message: 'Adresse récupérée avec succès',
                data: adresse
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'adresse:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération de l\'adresse',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async findByRegion(req, res) {
        try {
            const { regionId } = req.params;
            const adresses = await adresseService_1.AdresseService.findByRegion(regionId);
            res.status(200).json({
                success: true,
                message: 'Adresses récupérées avec succès',
                data: adresses
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération des adresses par région:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des adresses par région',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const adresse = await adresseService_1.AdresseService.update(id, data);
            res.status(200).json({
                success: true,
                message: 'Adresse mise à jour avec succès',
                data: adresse
            });
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour de l\'adresse:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour de l\'adresse',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            await adresseService_1.AdresseService.delete(id);
            res.status(200).json({
                success: true,
                message: 'Adresse supprimée avec succès'
            });
        }
        catch (error) {
            console.error('Erreur lors de la suppression de l\'adresse:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression de l\'adresse',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
    static async createDefaultAdresses(req, res) {
        try {
            await adresseService_1.AdresseService.createDefaultAdresses();
            res.status(200).json({
                success: true,
                message: 'Adresses par défaut créées avec succès'
            });
        }
        catch (error) {
            console.error('Erreur lors de la création des adresses par défaut:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création des adresses par défaut',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            });
        }
    }
}
exports.AdresseController = AdresseController;
//# sourceMappingURL=adresseController.js.map