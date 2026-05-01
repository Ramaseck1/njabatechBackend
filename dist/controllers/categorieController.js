"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieController = void 0;
const categorieService_1 = require("../services/categorieService");
const cloudinary_1 = require("../utils/cloudinary");
class CategorieController {
    static async create(req, res) {
        try {
            console.log('🔄 Création de catégorie - Body:', req.body);
            console.log('🔄 Création de catégorie - File:', req.file);
            const { nom, description, couleur } = req.body;
            const imageFile = req.file;
            if (!nom || nom.trim().length === 0) {
                res.status(400).json({
                    success: false,
                    message: 'Le nom de la catégorie est requis'
                });
                return;
            }
            const existingCategorie = await categorieService_1.CategorieService.findByNom(nom.trim());
            if (existingCategorie) {
                res.status(400).json({
                    success: false,
                    message: 'Une catégorie avec ce nom existe déjà'
                });
                return;
            }
            const categorieData = {
                nom: nom.trim(),
                description: description?.trim(),
                couleur
            };
            if (imageFile) {
                try {
                    console.log('📸 Upload de l\'image vers Cloudinary...');
                    const imageUrl = await cloudinary_1.CloudinaryUtils.uploadImage(imageFile.buffer, 'categories');
                    categorieData.image = imageUrl;
                    console.log(`✅ Image uploadée vers Cloudinary: ${imageUrl}`);
                }
                catch (uploadError) {
                    console.error('❌ Erreur lors de l\'upload vers Cloudinary:', uploadError);
                    res.status(500).json({
                        success: false,
                        message: 'Erreur lors de l\'upload de l\'image'
                    });
                    return;
                }
            }
            console.log('🔄 Données de la catégorie à créer:', categorieData);
            const categorie = await categorieService_1.CategorieService.create(categorieData);
            res.status(201).json({
                success: true,
                message: 'Catégorie créée avec succès',
                data: categorie
            });
        }
        catch (error) {
            console.error('💥 Erreur lors de la création:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création de la catégorie',
                error: error.message
            });
        }
    }
    static async getAll(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 50;
            const result = await categorieService_1.CategorieService.findAll(page, limit);
            res.json({
                success: true,
                message: 'Catégories récupérées avec succès',
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des catégories',
                error: error.message
            });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const categorie = await categorieService_1.CategorieService.findById(id);
            if (!categorie) {
                res.status(404).json({
                    success: false,
                    message: 'Catégorie non trouvée'
                });
                return;
            }
            res.json({
                success: true,
                message: 'Catégorie récupérée avec succès',
                data: categorie
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération de la catégorie',
                error: error.message
            });
        }
    }
    static async update(req, res) {
        try {
            console.log('🔄 Mise à jour de catégorie - Body:', req.body);
            console.log('🔄 Mise à jour de catégorie - File:', req.file);
            const { id } = req.params;
            const { nom, description, couleur } = req.body;
            const imageFile = req.file;
            const existingCategorie = await categorieService_1.CategorieService.findById(id);
            if (!existingCategorie) {
                res.status(404).json({
                    success: false,
                    message: 'Catégorie non trouvée'
                });
                return;
            }
            if (nom && nom !== existingCategorie.nom) {
                const categorieWithSameName = await categorieService_1.CategorieService.findByNom(nom.trim());
                if (categorieWithSameName) {
                    res.status(400).json({
                        success: false,
                        message: 'Une catégorie avec ce nom existe déjà'
                    });
                    return;
                }
            }
            const updateData = {
                nom: nom?.trim(),
                description: description?.trim(),
                couleur
            };
            if (imageFile) {
                try {
                    console.log('📸 Upload de la nouvelle image vers Cloudinary...');
                    const imageUrl = await cloudinary_1.CloudinaryUtils.uploadImage(imageFile.buffer, 'categories');
                    updateData.image = imageUrl;
                    console.log(`✅ Nouvelle image uploadée vers Cloudinary: ${imageUrl}`);
                }
                catch (uploadError) {
                    console.error('❌ Erreur lors de l\'upload vers Cloudinary:', uploadError);
                    res.status(500).json({
                        success: false,
                        message: 'Erreur lors de l\'upload de l\'image'
                    });
                    return;
                }
            }
            else {
                console.log('📸 Aucune nouvelle image, conservation de l\'image existante');
                updateData.image = existingCategorie.image;
            }
            console.log('🔄 Données de mise à jour:', updateData);
            const updatedCategorie = await categorieService_1.CategorieService.update(id, updateData);
            res.json({
                success: true,
                message: 'Catégorie mise à jour avec succès',
                data: updatedCategorie
            });
        }
        catch (error) {
            console.error('💥 Erreur lors de la mise à jour:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour de la catégorie',
                error: error.message
            });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            const force = req.query.force === 'true';
            const categorie = await categorieService_1.CategorieService.findById(id);
            if (!categorie) {
                res.status(404).json({
                    success: false,
                    message: 'Catégorie non trouvée'
                });
                return;
            }
            if (categorie.produits && categorie.produits.length > 0) {
                if (!force) {
                    res.status(400).json({
                        success: false,
                        message: 'Impossible de supprimer une catégorie qui contient des produits',
                        suggestion: 'Utilisez le paramètre force=true pour forcer la suppression'
                    });
                    return;
                }
                else {
                    console.log(`⚠️ Suppression forcée de la catégorie ${id} qui contient ${categorie.produits.length} produits`);
                }
            }
            await categorieService_1.CategorieService.delete(id, force);
            res.json({
                success: true,
                message: force
                    ? 'Catégorie supprimée avec succès (suppression forcée)'
                    : 'Catégorie supprimée avec succès'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression de la catégorie',
                error: error.message
            });
        }
    }
    static async search(req, res) {
        try {
            const { q } = req.query;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 50;
            if (!q) {
                res.status(400).json({
                    success: false,
                    message: 'Terme de recherche requis'
                });
                return;
            }
            const result = await categorieService_1.CategorieService.search(q, page, limit);
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
    static async getWithProductCount(req, res) {
        try {
            const categories = await categorieService_1.CategorieService.getWithProductCount();
            res.json({
                success: true,
                message: 'Catégories récupérées avec succès',
                data: categories
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des catégories',
                error: error.message
            });
        }
    }
    static async createDefaultCategories(req, res) {
        try {
            await categorieService_1.CategorieService.createDefaultCategories();
            res.json({
                success: true,
                message: 'Catégories par défaut créées avec succès'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création des catégories par défaut',
                error: error.message
            });
        }
    }
}
exports.CategorieController = CategorieController;
//# sourceMappingURL=categorieController.js.map