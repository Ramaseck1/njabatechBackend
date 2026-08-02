"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitController = exports.upload = void 0;
const produitService_1 = require("../services/produitService");
const categorieService_1 = require("../services/categorieService");
const cloudinary_1 = require("../utils/cloudinary");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({ storage });
class ProduitController {
    static async create(req, res) {
        try {
            const data = req.body;
            const gieId = req.user.id;
            if (data.categorieId) {
                const categorie = await categorieService_1.CategorieService.findById(data.categorieId);
                if (!categorie) {
                    res.status(400).json({
                        success: false,
                        message: 'Catégorie non trouvée. Veuillez fournir un ID de catégorie valide.'
                    });
                    return;
                }
            }
            let imageUrl = '';
            if (req.file) {
                imageUrl = await cloudinary_1.CloudinaryUtils.uploadImage(req.file.buffer, 'produits');
            }
            const produit = await produitService_1.ProduitService.create({
                ...data,
                gieId,
                image: imageUrl,
                prix: parseFloat(data.prix),
                stock: parseInt(data.stock, 10),
                categorieId: data.categorieId || null
            });
            res.status(201).json({
                success: true,
                message: 'Produit créé avec succès',
                data: produit
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création du produit',
                error: error.message
            });
        }
    }
    static async getAll(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 100000000;
            const gieId = req.query.gieId;
            const result = await produitService_1.ProduitService.findAll(page, limit, gieId);
            res.json({
                success: true,
                message: 'Produits récupérés avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des produits',
                error: error.message
            });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const produit = await produitService_1.ProduitService.findById(id);
            if (!produit) {
                res.status(404).json({
                    success: false,
                    message: 'Produit non trouvé'
                });
                return;
            }
            res.json({
                success: true,
                message: 'Produit récupéré avec succès',
                data: produit
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération du produit',
                error: error.message
            });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const gieId = req.user.id;
            delete data.gieId;
            const produit = await produitService_1.ProduitService.findById(id);
            if (!produit || produit.gieId !== gieId) {
                res.status(403).json({ success: false, message: "Accès refusé. Ce produit ne vous appartient pas." });
                return;
            }
            if (data.prix !== undefined && data.prix <= 0) {
                res.status(400).json({
                    success: false,
                    message: 'Le prix doit être supérieur à 0'
                });
                return;
            }
            if (data.stock !== undefined && data.stock < 0) {
                res.status(400).json({
                    success: false,
                    message: 'Le stock ne peut pas être négatif'
                });
                return;
            }
            if (data.categorieId) {
                const categorie = await categorieService_1.CategorieService.findById(data.categorieId);
                if (!categorie) {
                    res.status(400).json({
                        success: false,
                        message: 'Catégorie non trouvée. Veuillez fournir un ID de catégorie valide.'
                    });
                    return;
                }
            }
            let imageUrl = produit.image;
            if (req.file) {
                try {
                    if (produit.image && cloudinary_1.CloudinaryUtils.isCloudinaryUrl(produit.image)) {
                        await cloudinary_1.CloudinaryUtils.deleteImage(produit.image);
                    }
                    imageUrl = await cloudinary_1.CloudinaryUtils.uploadImage(req.file.buffer, 'produits');
                }
                catch (uploadError) {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur lors de l\'upload de l\'image',
                        error: uploadError.message
                    });
                    return;
                }
            }
            const updateData = {
                ...data,
                image: imageUrl
            };
            if (data.prix !== undefined) {
                updateData.prix = parseFloat(data.prix);
            }
            if (data.stock !== undefined) {
                updateData.stock = parseInt(data.stock, 10);
            }
            if (data.categorieId !== undefined) {
                updateData.categorieId = data.categorieId || null;
            }
            const updatedProduit = await produitService_1.ProduitService.update(id, updateData);
            res.json({
                success: true,
                message: 'Produit mis à jour avec succès',
                data: updatedProduit
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour du produit',
                error: error.message
            });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            const produit = await produitService_1.ProduitService.findById(id);
            if (!produit || produit.gieId !== req.user.id) {
                res.status(403).json({ success: false, message: "Accès refusé. Ce produit ne vous appartient pas." });
                return;
            }
            if (produit.image && cloudinary_1.CloudinaryUtils.isCloudinaryUrl(produit.image)) {
                await cloudinary_1.CloudinaryUtils.deleteImage(produit.image);
            }
            await produitService_1.ProduitService.delete(id);
            res.json({
                success: true,
                message: 'Produit supprimé avec succès'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression du produit',
                error: error.message
            });
        }
    }
    static async updateStock(req, res) {
        try {
            const { id } = req.params;
            const { quantite } = req.body;
            if (quantite === undefined || isNaN(quantite) || quantite <= 0) {
                res.status(400).json({
                    success: false,
                    message: 'Quantité valide requise (supérieure à 0)'
                });
                return;
            }
            const produit = await produitService_1.ProduitService.findById(id);
            if (!produit) {
                res.status(404).json({
                    success: false,
                    message: 'Produit non trouvé'
                });
                return;
            }
            if (produit.stock < quantite) {
                res.status(400).json({
                    success: false,
                    message: 'Rupture de stock'
                });
                return;
            }
            const nouveauStock = produit.stock - quantite;
            const updatedProduit = await produitService_1.ProduitService.update(id, { stock: nouveauStock });
            res.json({
                success: true,
                message: 'Stock mis à jour avec succès',
                data: updatedProduit
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour du stock',
                error: error.message
            });
        }
    }
    static async search(req, res) {
        try {
            const { q } = req.query;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 100000;
            if (!q) {
                res.status(400).json({
                    success: false,
                    message: 'Terme de recherche requis'
                });
                return;
            }
            const result = await produitService_1.ProduitService.search(q, page, limit);
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
    static async createAvis(req, res) {
        try {
            const clientId = req.user?.id;
            const { produitId, rating } = req.body;
            if (!clientId) {
                return res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
            }
            if (!produitId) {
                return res.status(400).json({ success: false, message: 'produitId requis' });
            }
            const avis = await produitService_1.ProduitService.createAvis({ clientId, produitId, rating });
            return res.status(201).json({ success: true, data: avis });
        }
        catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getByAvisProduit(req, res) {
        try {
            const { produitId } = req.params;
            const result = await produitService_1.ProduitService.getByAvisProduit(produitId);
            res.json({ success: true, message: 'Avis récupérés', data: result });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération des avis', error: error.message });
        }
    }
    static async getByCategory(req, res) {
        try {
            const { categorieId } = req.params;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 50;
            const excludeId = req.query.excludeId;
            const result = await produitService_1.ProduitService.getByCategory(categorieId, page, limit, excludeId);
            res.json({
                success: true,
                message: 'Produits récupérés avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des produits',
                error: error.message
            });
        }
    }
    static async getOutOfStock(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 50;
            const result = await produitService_1.ProduitService.getOutOfStock(page, limit);
            res.json({
                success: true,
                message: 'Produits en rupture récupérés avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des produits en rupture',
                error: error.message
            });
        }
    }
    static async getMyProducts(req, res) {
        try {
            const gieId = req.user.id;
            const userRole = req.user.role;
            console.log('🔍 Debug getMyProducts:');
            console.log('   - GIE ID:', gieId);
            console.log('   - User Role:', userRole);
            console.log('   - User object:', req.user);
            if (!gieId) {
                res.status(400).json({
                    success: false,
                    message: 'ID du GIE non trouvé dans le token'
                });
                return;
            }
            const produits = await produitService_1.ProduitService.findAll(1, 1000, gieId);
            console.log('📦 Produits trouvés:', produits.produits.length);
            res.json({
                success: true,
                message: 'Liste des produits du GIE connecté',
                data: produits
            });
        }
        catch (error) {
            console.error('❌ Erreur getMyProducts:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des produits',
                error: error.message
            });
        }
    }
    static async getTopAchetes(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 5;
            const produits = await produitService_1.ProduitService.getTopAchetes(limit);
            res.json({
                success: true,
                message: 'Top produits les plus achetés (min. 2 commandes)',
                data: produits
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération',
                error: error.message
            });
        }
    }
    static async incrementerVues(req, res) {
        try {
            const { id } = req.params;
            await produitService_1.ProduitService.incrementerVues(id);
            res.json({ success: true, message: 'Vue enregistrée' });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}
exports.ProduitController = ProduitController;
//# sourceMappingURL=produitController.js.map