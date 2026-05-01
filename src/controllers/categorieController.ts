import { Request, Response } from 'express';
import { CategorieService } from '../services/categorieService';
import { CloudinaryUtils } from '../utils/cloudinary';

export class CategorieController {
  // Créer une nouvelle catégorie
  static async create(req: Request, res: Response): Promise<void> {
    try {
      console.log('🔄 Création de catégorie - Body:', req.body);
      console.log('🔄 Création de catégorie - File:', req.file);
      
      const { nom, description, couleur } = req.body;
      const imageFile = req.file; // Fichier uploadé via multer

      // Validation des données
      if (!nom || nom.trim().length === 0) {
        res.status(400).json({
          success: false,
          message: 'Le nom de la catégorie est requis'
        });
        return;
      }

      // Vérifier si la catégorie existe déjà
      const existingCategorie = await CategorieService.findByNom(nom.trim());
      if (existingCategorie) {
        res.status(400).json({
          success: false,
          message: 'Une catégorie avec ce nom existe déjà'
        });
        return;
      }

      // Préparer les données de la catégorie
      const categorieData: any = {
        nom: nom.trim(),
        description: description?.trim(),
        couleur
      };

      // Si une image a été uploadée, l'uploader vers Cloudinary
      if (imageFile) {
        try {
          console.log('📸 Upload de l\'image vers Cloudinary...');
          const imageUrl = await CloudinaryUtils.uploadImage(imageFile.buffer, 'categories');
          categorieData.image = imageUrl;
          console.log(`✅ Image uploadée vers Cloudinary: ${imageUrl}`);
        } catch (uploadError) {
          console.error('❌ Erreur lors de l\'upload vers Cloudinary:', uploadError);
          res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'upload de l\'image'
          });
          return;
        }
      }

      console.log('🔄 Données de la catégorie à créer:', categorieData);

      const categorie = await CategorieService.create(categorieData);

      res.status(201).json({
        success: true,
        message: 'Catégorie créée avec succès',
        data: categorie
      });
    } catch (error: any) {
      console.error('💥 Erreur lors de la création:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création de la catégorie',
        error: error.message
      });
    }
  }

  // Récupérer toutes les catégories
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 50;

      const result = await CategorieService.findAll(page, limit);

      res.json({
        success: true,
        message: 'Catégories récupérées avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des catégories',
        error: error.message
      });
    }
  }

  // Récupérer une catégorie par ID
  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const categorie = await CategorieService.findById(id);

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
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération de la catégorie',
        error: error.message
      });
    }
  }

  // Mettre à jour une catégorie
  static async update(req: Request, res: Response): Promise<void> {
    try {
      console.log('🔄 Mise à jour de catégorie - Body:', req.body);
      console.log('🔄 Mise à jour de catégorie - File:', req.file);
      
      const { id } = req.params;
      const { nom, description, couleur } = req.body;
      const imageFile = req.file; // Fichier uploadé via multer

      // Vérifier si la catégorie existe
      const existingCategorie = await CategorieService.findById(id);
      if (!existingCategorie) {
        res.status(404).json({
          success: false,
          message: 'Catégorie non trouvée'
        });
        return;
      }

      // Si le nom est modifié, vérifier qu'il n'existe pas déjà
      if (nom && nom !== existingCategorie.nom) {
        const categorieWithSameName = await CategorieService.findByNom(nom.trim());
        if (categorieWithSameName) {
          res.status(400).json({
            success: false,
            message: 'Une catégorie avec ce nom existe déjà'
          });
          return;
        }
      }

      // Préparer les données de mise à jour
      const updateData: any = {
        nom: nom?.trim(),
        description: description?.trim(),
        couleur
      };

      // Si une nouvelle image a été uploadée, l'uploader vers Cloudinary
      if (imageFile) {
        try {
          console.log('📸 Upload de la nouvelle image vers Cloudinary...');
          const imageUrl = await CloudinaryUtils.uploadImage(imageFile.buffer, 'categories');
          updateData.image = imageUrl;
          console.log(`✅ Nouvelle image uploadée vers Cloudinary: ${imageUrl}`);
        } catch (uploadError) {
          console.error('❌ Erreur lors de l\'upload vers Cloudinary:', uploadError);
          res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'upload de l\'image'
          });
          return;
        }
      } else {
        // Si pas de nouvelle image, garder l'ancienne
        console.log('📸 Aucune nouvelle image, conservation de l\'image existante');
        updateData.image = existingCategorie.image;
      }

      console.log('🔄 Données de mise à jour:', updateData);

      const updatedCategorie = await CategorieService.update(id, updateData);

      res.json({
        success: true,
        message: 'Catégorie mise à jour avec succès',
        data: updatedCategorie
      });
    } catch (error: any) {
      console.error('💥 Erreur lors de la mise à jour:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour de la catégorie',
        error: error.message
      });
    }
  }

  // Supprimer une catégorie
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const force = req.query.force === 'true';

      // Vérifier si la catégorie existe
      const categorie = await CategorieService.findById(id);
      if (!categorie) {
        res.status(404).json({
          success: false,
          message: 'Catégorie non trouvée'
        });
        return;
      }

      // Vérifier si la catégorie a des produits
      if (categorie.produits && categorie.produits.length > 0) {
        if (!force) {
          res.status(400).json({
            success: false,
            message: 'Impossible de supprimer une catégorie qui contient des produits',
            suggestion: 'Utilisez le paramètre force=true pour forcer la suppression'
          });
          return;
        } else {
          console.log(`⚠️ Suppression forcée de la catégorie ${id} qui contient ${categorie.produits.length} produits`);
        }
      }

      await CategorieService.delete(id, force);

      res.json({
        success: true,
        message: force 
          ? 'Catégorie supprimée avec succès (suppression forcée)' 
          : 'Catégorie supprimée avec succès'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la suppression de la catégorie',
        error: error.message
      });
    }
  }

  // Rechercher des catégories
  static async search(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 50;

      if (!q) {
        res.status(400).json({
          success: false,
          message: 'Terme de recherche requis'
        });
        return;
      }

      const result = await CategorieService.search(q as string, page, limit);

      res.json({
        success: true,
        message: 'Recherche effectuée avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la recherche',
        error: error.message
      });
    }
  }

  // Récupérer les catégories avec le nombre de produits
  static async getWithProductCount(req: Request, res: Response): Promise<void> {
    try {
      const categories = await CategorieService.getWithProductCount();

      res.json({
        success: true,
        message: 'Catégories récupérées avec succès',
        data: categories
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des catégories',
        error: error.message
      });
    }
  }

  // Créer les catégories par défaut
  static async createDefaultCategories(req: Request, res: Response): Promise<void> {
    try {
      await CategorieService.createDefaultCategories();

      res.json({
        success: true,
        message: 'Catégories par défaut créées avec succès'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création des catégories par défaut',
        error: error.message
      });
    }
  }
} 