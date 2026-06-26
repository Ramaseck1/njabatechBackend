"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GIEController = void 0;
const gieService_1 = require("../services/gieService");
class GIEController {
    static async create(req, res) {
        try {
            const data = req.body;
            const administrateurId = req.user.id;
            if (!data.nom) {
                res.status(400).json({
                    success: false,
                    message: 'Le nom du GIE est requis'
                });
                return;
            }
            const gie = await gieService_1.GIEService.create(data, administrateurId);
            res.status(201).json({
                success: true,
                message: 'GIE créé avec succès',
                data: gie
            });
        }
        catch (error) {
            if (error.message.includes('numéro existe déjà')) {
                res.status(400).json({
                    success: false,
                    message: 'Le numéro de téléphone doit être unique',
                    error: error.message
                });
                return;
            }
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création du GIE',
                error: error.message
            });
        }
    }
    static async getAll(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search;
            const result = await gieService_1.GIEService.findAll(page, limit, search);
            res.json({
                success: true,
                message: 'GIE récupérés avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des GIE',
                error: error.message
            });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const gie = await gieService_1.GIEService.findById(id);
            if (!gie) {
                res.status(404).json({
                    success: false,
                    message: 'GIE non trouvé'
                });
                return;
            }
            res.json({
                success: true,
                message: 'GIE récupéré avec succès',
                data: gie
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération du GIE',
                error: error.message
            });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const gie = await gieService_1.GIEService.update(id, data);
            res.json({
                success: true,
                message: 'GIE mis à jour avec succès',
                data: gie
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour du GIE',
                error: error.message
            });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            await gieService_1.GIEService.delete(id);
            res.json({
                success: true,
                message: 'GIE supprimé avec succès'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression du GIE',
                error: error.message
            });
        }
    }
    static async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { statut } = req.body;
            if (!statut || !['ACTIF', 'INACTIF', 'SUSPENDU'].includes(statut)) {
                res.status(400).json({
                    success: false,
                    message: 'Statut invalide'
                });
                return;
            }
            const gie = await gieService_1.GIEService.updateStatus(id, statut);
            res.json({
                success: true,
                message: 'Statut du GIE mis à jour avec succès',
                data: gie
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour du statut',
                error: error.message
            });
        }
    }
    static async getStats(req, res) {
        try {
            const { id } = req.params;
            const stats = await gieService_1.GIEService.getStats(id);
            res.json({
                success: true,
                message: 'Statistiques récupérées avec succès',
                data: stats
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des statistiques',
                error: error.message
            });
        }
    }
    static async search(req, res) {
        try {
            const { q } = req.query;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            if (!q) {
                res.status(400).json({
                    success: false,
                    message: 'Terme de recherche requis'
                });
                return;
            }
            const result = await gieService_1.GIEService.search(q, page, limit);
            res.json({
                success: true,
                message: 'Recherche effectuée avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la recherche',
                error: error.message
            });
        }
    }
    static async getCommandes(req, res) {
        try {
            const { id } = req.params;
            const { statut, dateDebut, dateFin } = req.query;
            const where = {
                panierProduits: {
                    some: {
                        produit: {
                            gieId: id
                        }
                    }
                }
            };
            if (statut)
                where.statut = statut;
            if (dateDebut || dateFin) {
                where.dateCommande = {};
                if (dateDebut)
                    where.dateCommande.gte = new Date(dateDebut);
                if (dateFin)
                    where.dateCommande.lte = new Date(dateFin);
            }
            const commandes = await (await Promise.resolve().then(() => __importStar(require('../config/database')))).default.commande.findMany({
                where,
                orderBy: { dateCommande: 'desc' },
                include: { client: true, panierProduits: { include: { produit: true } }, paiement: true }
            });
            res.json({ success: true, data: commandes });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération des commandes', error: error.message });
        }
    }
    static async getCommandeById(req, res) {
        try {
            const { id, commandeId } = req.params;
            const commande = await (await Promise.resolve().then(() => __importStar(require('../config/database')))).default.commande.findFirst({
                where: {
                    id: commandeId,
                    panierProduits: {
                        some: {
                            produit: {
                                gieId: id
                            }
                        }
                    }
                },
                include: { client: true, panierProduits: { include: { produit: true } }, paiement: true }
            });
            if (!commande) {
                res.status(404).json({ success: false, message: 'Commande non trouvée pour ce GIE' });
                return;
            }
            res.json({ success: true, data: commande });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération de la commande', error: error.message });
        }
    }
    static async getProduits(req, res) {
        try {
            const { id } = req.params;
            const produits = await (await Promise.resolve().then(() => __importStar(require('../config/database')))).default.produit.findMany({
                where: { gieId: id },
                orderBy: { createdAt: 'desc' }
            });
            res.json({ success: true, data: produits });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération des produits', error: error.message });
        }
    }
}
exports.GIEController = GIEController;
//# sourceMappingURL=gieController.js.map