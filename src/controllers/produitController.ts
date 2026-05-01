import { Request, Response } from 'express';
import { ProduitService } from '../services/produitService';
import { CategorieService } from '../services/categorieService';
import { CreateProduitDto } from '../types';
import { CloudinaryUtils } from '../utils/cloudinary';
import multer from 'multer';

// Configuration de multer pour accepter un fichier
const storage = multer.memoryStorage();
export const upload = multer({ storage });

export class ProduitController {
  // Créer un nouveau produit
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const data: any = req.body;
      const gieId = (req as any).user.id;

      // Validation de la catégorie si fournie
      if (data.categorieId) {
        const categorie = await CategorieService.findById(data.categorieId);
        if (!categorie) {
          res.status(400).json({
            success: false,
            message: 'Catégorie non trouvée. Veuillez fournir un ID de catégorie valide.'
          });
          return;
        }
      }

      // Upload de l'image sur Cloudinary si présente
      let imageUrl = '';
      if (req.file) {
        imageUrl = await CloudinaryUtils.uploadImage(req.file.buffer, 'produits');
      }

      // Création du produit avec l'URL de l'image
      const produit = await ProduitService.create({
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
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création du produit',
        error: error.message
      });
    }
  }

  // Récupérer tous les produits
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const gieId = req.query.gieId as string;

      const result = await ProduitService.findAll(page, limit, gieId);

      res.json({
        success: true,
        message: 'Produits récupérés avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des produits',
        error: error.message
      });
    }
  }

  // Récupérer un produit par ID
  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const produit = await ProduitService.findById(id);

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
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération du produit',
        error: error.message
      });
    }
  }

  // Mettre à jour un produit
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: any = req.body;
      const gieId = (req as any).user.id;

      // Empêcher la modification du gieId
      delete data.gieId;

      // Vérification de propriété : le GIE ne peut modifier que ses propres produits
      const produit = await ProduitService.findById(id);
      if (!produit || produit.gieId !== gieId) {
        res.status(403).json({ success: false, message: "Accès refusé. Ce produit ne vous appartient pas." });
        return;
      }

      // Validation des données
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

      // Validation de la catégorie si fournie
      if (data.categorieId) {
        const categorie = await CategorieService.findById(data.categorieId);
        if (!categorie) {
          res.status(400).json({
            success: false,
            message: 'Catégorie non trouvée. Veuillez fournir un ID de catégorie valide.'
          });
          return;
        }
      }

      // Upload de l'image sur Cloudinary si présente
      let imageUrl = produit.image; // Garder l'image existante par défaut
      if (req.file) {
        try {
          // Supprimer l'ancienne image si elle existe
          if (produit.image && CloudinaryUtils.isCloudinaryUrl(produit.image)) {
            await CloudinaryUtils.deleteImage(produit.image);
          }
          
          // Upload de la nouvelle image
          imageUrl = await CloudinaryUtils.uploadImage(req.file.buffer, 'produits');
        } catch (uploadError: any) {
          res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'upload de l\'image',
            error: uploadError.message
          });
          return;
        }
      }

      // Préparer les données pour la mise à jour
      const updateData: Partial<CreateProduitDto> = {
        ...data,
        image: imageUrl
      };

      // Convertir les types si nécessaire
      if (data.prix !== undefined) {
        updateData.prix = parseFloat(data.prix);
      }
      if (data.stock !== undefined) {
        updateData.stock = parseInt(data.stock, 10);
      }
      if (data.categorieId !== undefined) {
        updateData.categorieId = data.categorieId || null;
      }

      const updatedProduit = await ProduitService.update(id, updateData);
      
      res.json({
        success: true,
        message: 'Produit mis à jour avec succès',
        data: updatedProduit
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour du produit',
        error: error.message
      });
    }
  }

  // Supprimer un produit
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      // Vérification de propriété : le GIE ne peut supprimer que ses propres produits
      const produit = await ProduitService.findById(id);
      if (!produit || produit.gieId !== (req as any).user.id) {
        res.status(403).json({ success: false, message: "Accès refusé. Ce produit ne vous appartient pas." });
        return;
      }

      // Supprimer l'image de Cloudinary si elle existe
      if (produit.image && CloudinaryUtils.isCloudinaryUrl(produit.image)) {
        await CloudinaryUtils.deleteImage(produit.image);
      }

      await ProduitService.delete(id);
      res.json({
        success: true,
        message: 'Produit supprimé avec succès'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la suppression du produit',
        error: error.message
      });
    }
  }

  // Mettre à jour le stock d'un produit
static async updateStock(req: Request, res: Response): Promise<void> {
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

    // Récupération du produit pour vérifier son stock actuel
    const produit = await ProduitService.findById(id);

    if (!produit) {
      res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
      return;
    }

    // Vérifie si le stock est suffisant
    if (produit.stock < quantite) {
      res.status(400).json({
        success: false,
        message: 'Rupture de stock'
      });
      return;
    }

    // Calcul du nouveau stock
    const nouveauStock = produit.stock - quantite;

    // Mise à jour du stock
    const updatedProduit = await ProduitService.update(id, { stock: nouveauStock });

    res.json({
      success: true,
      message: 'Stock mis à jour avec succès',
      data: updatedProduit
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du stock',
      error: error.message
    });
  }
}

  // Rechercher des produits
  static async search(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      if (!q) {
        res.status(400).json({
          success: false,
          message: 'Terme de recherche requis'
        });
        return;
      }

      const result = await ProduitService.search(q as string, page, limit);

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

  //Avis

static async createAvis(req: Request, res: Response) {
  try {
    // Récupère le clientId depuis le token
    const clientId = (req as any).user?.id; 
    const { produitId, rating } = req.body;

    if (!clientId) {
      return res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
    }

    if (!produitId) {
      return res.status(400).json({ success: false, message: 'produitId requis' });
    }

    const avis = await ProduitService.createAvis({ clientId, produitId, rating });

    return res.status(201).json({ success: true, data: avis });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

   static async getByAvisProduit(req: Request, res: Response) {
    try {
      const { produitId } = req.params;
      const result = await ProduitService.getByAvisProduit(produitId);
      res.json({ success: true, message: 'Avis récupérés', data: result });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération des avis', error: error.message });
    }
  }

  // Récupérer les produits par catégorie
  static async getByCategory(req: Request, res: Response): Promise<void> {
    try {
      const { categorieId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await ProduitService.getByCategory(categorieId, page, limit);

      res.json({
        success: true,
        message: 'Produits récupérés avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des produits',
        error: error.message
      });
    }
  }

  // Récupérer les produits en rupture de stock
  static async getOutOfStock(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await ProduitService.getOutOfStock(page, limit);

      res.json({
        success: true,
        message: 'Produits en rupture récupérés avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des produits en rupture',
        error: error.message
      });
    }
  }

  static async getMyProducts(req: Request, res: Response): Promise<void> {
    try {
      const gieId = (req as any).user.id;
      const userRole = (req as any).user.role;
      
      console.log('🔍 Debug getMyProducts:');
      console.log('   - GIE ID:', gieId);
      console.log('   - User Role:', userRole);
      console.log('   - User object:', (req as any).user);
      
      if (!gieId) {
        res.status(400).json({
          success: false,
          message: 'ID du GIE non trouvé dans le token'
        });
        return;
      }
      
      const produits = await ProduitService.findAll(1, 1000, gieId);
      
      console.log('📦 Produits trouvés:', produits.produits.length);
      
      res.json({
        success: true,
        message: 'Liste des produits du GIE connecté',
        data: produits
      });
    } catch (error: any) {
      console.error('❌ Erreur getMyProducts:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des produits',
        error: error.message
      });
    }
  }
} 