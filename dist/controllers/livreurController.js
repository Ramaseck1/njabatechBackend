"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreurController = void 0;
const livreurService_1 = require("../services/livreurService");
class LivreurController {
    static async create(req, res) {
        try {
            const livreurData = req.body;
            const livreur = await livreurService_1.LivreurService.create(livreurData);
            res.status(201).json({
                success: true,
                message: 'Livreur créé avec succès par l\'administrateur',
                data: livreur
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
    static async findAll(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const result = await livreurService_1.LivreurService.findAll(page, limit);
            res.status(200).json({
                success: true,
                message: 'Liste des livreurs récupérée par l\'administrateur',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            await livreurService_1.LivreurService.delete(id);
            res.status(200).json({
                success: true,
                message: 'Livreur supprimé avec succès par l\'administrateur'
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
    static async findById(req, res) {
        try {
            const { id } = req.params;
            const livreur = await livreurService_1.LivreurService.findById(id);
            res.status(200).json({
                success: true,
                message: 'Livreur récupéré avec succès',
                data: livreur
            });
        }
        catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const livreur = await livreurService_1.LivreurService.update(id, updateData);
            res.status(200).json({
                success: true,
                message: 'Livreur mis à jour avec succès',
                data: livreur
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
    static async login(req, res) {
        try {
            const credentials = req.body;
            const result = await livreurService_1.LivreurService.login(credentials);
            res.status(200).json({
                success: true,
                message: 'Connexion livreur réussie',
                data: result
            });
        }
        catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }
    static async getCommandes(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const result = await livreurService_1.LivreurService.getCommandes('all');
            res.status(200).json({
                success: true,
                message: 'Toutes les commandes récupérées avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
    static async getCommandesDisponibles(req, res) {
        try {
            const { regionId } = req.query;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const result = await livreurService_1.LivreurService.getCommandesDisponibles(regionId, page, limit);
            res.status(200).json({
                success: true,
                message: 'Commandes disponibles récupérées avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
    static async assignerCommande(req, res) {
        try {
            const { commandeId } = req.body;
            const livreurId = req.user?.id;
            if (!livreurId) {
                res.status(401).json({
                    success: false,
                    message: 'Token invalide ou livreur non authentifié'
                });
                return;
            }
            await livreurService_1.LivreurService.assignerCommande(livreurId, commandeId);
            res.status(200).json({
                success: true,
                message: 'Commande assignée avec succès au livreur'
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
    static async marquerLivree(req, res) {
        try {
            const { commandeId } = req.body;
            const livreurId = req.user?.id;
            console.log('🔍 marquerLivree - livreurId (from token):', livreurId);
            console.log('🔍 marquerLivree - commandeId:', commandeId);
            console.log('🔍 marquerLivree - req.body:', req.body);
            if (!livreurId) {
                res.status(401).json({
                    success: false,
                    message: 'Token invalide ou livreur non authentifié'
                });
                return;
            }
            if (!commandeId) {
                res.status(400).json({
                    success: false,
                    message: 'commandeId est requis'
                });
                return;
            }
            await livreurService_1.LivreurService.marquerLivrees(livreurId, commandeId);
            res.status(200).json({
                success: true,
                message: 'Commande marquée comme livrée avec succès'
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}
exports.LivreurController = LivreurController;
//# sourceMappingURL=livreurController.js.map