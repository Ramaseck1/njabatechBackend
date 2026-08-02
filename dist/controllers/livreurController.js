"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreurController = void 0;
const livreurService_1 = require("../services/livreurService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
            res.status(400).json({ success: false, message: error.message });
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
            res.status(500).json({ success: false, message: error.message });
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
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            if (!email) {
                res.status(400).json({ success: false, message: 'Email requis' });
                return;
            }
            await livreurService_1.LivreurService.forgotPassword(email);
            res.status(200).json({
                success: true,
                message: 'Si cet email existe, un code de vérification a été envoyé',
            });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async verifyResetCode(req, res) {
        try {
            const { email, code } = req.body;
            if (!email || !code) {
                res.status(400).json({ success: false, message: 'Email et code requis' });
                return;
            }
            await livreurService_1.LivreurService.verifyResetCode(email, code);
            res.status(200).json({ success: true, message: 'Code valide' });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async resetPassword(req, res) {
        try {
            const { email, code, newPassword } = req.body;
            if (!email || !code || !newPassword) {
                res.status(400).json({ success: false, message: 'Champs requis manquants' });
                return;
            }
            if (newPassword.length < 6) {
                res.status(400).json({
                    success: false,
                    message: 'Le mot de passe doit contenir au moins 6 caractères',
                });
                return;
            }
            await livreurService_1.LivreurService.resetPassword(email, code, newPassword);
            res.status(200).json({ success: true, message: 'Mot de passe réinitialisé avec succès' });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async changePassword(req, res) {
        try {
            const livreurId = req.user?.id;
            const { currentPassword, newPassword } = req.body;
            if (!livreurId) {
                return res.status(401).json({ success: false, message: 'Non authentifié' });
            }
            if (!currentPassword || !newPassword) {
                return res.status(400).json({
                    success: false,
                    message: 'Mot de passe actuel et nouveau mot de passe requis',
                });
            }
            if (newPassword.length < 6) {
                return res.status(400).json({
                    success: false,
                    message: 'Le nouveau mot de passe doit contenir au moins 6 caractères',
                });
            }
            const livreur = await prisma.livreurs.findUnique({ where: { id: livreurId } });
            if (!livreur) {
                return res.status(404).json({ success: false, message: 'Livreur introuvable' });
            }
            const isValid = await bcrypt_1.default.compare(currentPassword, livreur.password);
            if (!isValid) {
                return res.status(400).json({
                    success: false,
                    message: 'Mot de passe actuel incorrect',
                });
            }
            const hashedNewPassword = await bcrypt_1.default.hash(newPassword, 10);
            await prisma.livreurs.update({
                where: { id: livreurId },
                data: { password: hashedNewPassword },
            });
            return res.json({
                success: true,
                message: 'Mot de passe modifié avec succès',
            });
        }
        catch (error) {
            console.error('❌ Erreur changePassword livreur:', error);
            return res.status(500).json({
                success: false,
                message: 'Erreur serveur lors du changement de mot de passe',
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
            res.status(404).json({ success: false, message: error.message });
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
            res.status(400).json({ success: false, message: error.message });
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
            res.status(401).json({ success: false, message: error.message });
        }
    }
    static async getCommandes(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const requester = req.user;
            const isAdmin = requester?.role === 'ADMIN' || requester?.role === 'SUPER_ADMIN';
            const scopeId = isAdmin ? 'all' : requester?.id;
            if (!scopeId) {
                res.status(401).json({ success: false, message: 'Non authentifié' });
                return;
            }
            const result = await livreurService_1.LivreurService.getCommandes(scopeId, page, limit);
            res.status(200).json({
                success: true,
                message: 'Commandes récupérées avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getCommandesByLivreur(req, res) {
        try {
            const { livreurId } = req.params;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const requester = req.user;
            const isAdmin = requester?.role === 'ADMIN' || requester?.role === 'SUPER_ADMIN';
            if (!isAdmin && requester?.id !== livreurId) {
                res.status(403).json({ success: false, message: 'Accès refusé à ces commandes' });
                return;
            }
            const result = await livreurService_1.LivreurService.getCommandes(livreurId, page, limit);
            res.status(200).json({
                success: true,
                message: 'Commandes du livreur récupérées avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
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
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async assignerCommande(req, res) {
        try {
            const { commandeId } = req.body;
            const livreurId = req.user?.id;
            if (!livreurId) {
                res.status(401).json({ success: false, message: 'Token invalide ou livreur non authentifié' });
                return;
            }
            if (!commandeId) {
                res.status(400).json({ success: false, message: 'commandeId est requis' });
                return;
            }
            await livreurService_1.LivreurService.assignerCommande(livreurId, commandeId);
            res.status(200).json({ success: true, message: 'Commande assignée avec succès au livreur' });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async annulerCommande(req, res) {
        try {
            const { commandeId } = req.body;
            const livreurId = req.user?.id;
            if (!livreurId) {
                res.status(401).json({ success: false, message: 'Token invalide ou livreur non authentifié' });
                return;
            }
            if (!commandeId) {
                res.status(400).json({ success: false, message: 'commandeId est requis' });
                return;
            }
            await livreurService_1.LivreurService.annulerCommande(livreurId, commandeId);
            res.status(200).json({
                success: true,
                message: 'Commande annulée avec succès, elle est de nouveau disponible'
            });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async marquerLivree(req, res) {
        try {
            const { commandeId } = req.body;
            const livreurId = req.user?.id;
            if (!livreurId) {
                res.status(401).json({ success: false, message: 'Token invalide ou livreur non authentifié' });
                return;
            }
            if (!commandeId) {
                res.status(400).json({ success: false, message: 'commandeId est requis' });
                return;
            }
            await livreurService_1.LivreurService.marquerLivrees(livreurId, commandeId);
            res.status(200).json({ success: true, message: 'Commande marquée comme livrée avec succès' });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
exports.LivreurController = LivreurController;
//# sourceMappingURL=livreurController.js.map