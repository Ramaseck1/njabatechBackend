import { Request, Response } from 'express';
import { LivreurService } from '../services/livreurService';
import { CreateLivreurDto, UpdateLivreurDto, LoginLivreurDto } from '../types';

export class LivreurController {
  // ========================================
  // ROUTES ADMIN SEULEMENT
  // ========================================

  // Créer un nouveau livreur (Admin seulement)
  static async create(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Ajouter middleware de vérification du rôle ADMIN
      const livreurData: CreateLivreurDto = req.body;
      const livreur = await LivreurService.create(livreurData);

      res.status(201).json({
        success: true,
        message: 'Livreur créé avec succès par l\'administrateur',
        data: livreur
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  // Récupérer tous les livreurs (Admin seulement)
  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Ajouter middleware de vérification du rôle ADMIN
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const result = await LivreurService.findAll(page, limit);

      res.status(200).json({
        success: true,
        message: 'Liste des livreurs récupérée par l\'administrateur',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Supprimer un livreur (Admin seulement)
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Ajouter middleware de vérification du rôle ADMIN
      const { id } = req.params;
      await LivreurService.delete(id);

      res.status(200).json({
        success: true,
        message: 'Livreur supprimé avec succès par l\'administrateur'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  // ========================================
  // ROUTES MIXTES (ADMIN + LIVREUR)
  // ========================================

  // Récupérer un livreur par ID (Admin ou le livreur lui-même)
  static async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const livreur = await LivreurService.findById(id);

      res.status(200).json({
        success: true,
        message: 'Livreur récupéré avec succès',
        data: livreur
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  // Mettre à jour un livreur (Admin ou le livreur lui-même)
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: UpdateLivreurDto = req.body;
      const livreur = await LivreurService.update(id, updateData);

      res.status(200).json({
        success: true,
        message: 'Livreur mis à jour avec succès',
        data: livreur
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  // ========================================
  // ROUTES PUBLIQUES
  // ========================================

  // Authentification du livreur (Public)
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const credentials: LoginLivreurDto = req.body;
      const result = await LivreurService.login(credentials);

      res.status(200).json({
        success: true,
        message: 'Connexion livreur réussie',
        data: result
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  }

  // ========================================
  // ROUTES LIVREUR SEULEMENT
  // ========================================

  // Récupérer les commandes d'un livreur
// Récupérer TOUTES les commandes (plus besoin d'ID de livreur)
static async getCommandes(req: Request, res: Response): Promise<void> {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    // Appeler le service avec 'all' pour récupérer toutes les commandes
    const result = await LivreurService.getCommandes('all');

    res.status(200).json({
      success: true,
      message: 'Toutes les commandes récupérées avec succès',
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

  // Récupérer les commandes disponibles pour un livreur
  static async getCommandesDisponibles(req: Request, res: Response): Promise<void> {
    try {
      const { regionId } = req.query;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const result = await LivreurService.getCommandesDisponibles(
        regionId as string, 
        page, 
        limit
      );

      res.status(200).json({
        success: true,
        message: 'Commandes disponibles récupérées avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Assigner une commande à un livreur
  static async assignerCommande(req: Request, res: Response): Promise<void> {
    try {
      const { commandeId } = req.body;
      const livreurId = (req as any).user?.id; // Extraire l'ID du livreur du token JWT
      
      if (!livreurId) {
        res.status(401).json({
          success: false,
          message: 'Token invalide ou livreur non authentifié'
        });
        return;
      }
      
      await LivreurService.assignerCommande(livreurId, commandeId);

      res.status(200).json({
        success: true,
        message: 'Commande assignée avec succès au livreur'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  // Marquer une commande comme livrée
 // Marquer une commande comme livrée (n'importe quel livreur peut livrer n'importe quelle commande)
static async marquerLivree(req: Request, res: Response): Promise<void> {
  try {
    const { commandeId } = req.body;
    const livreurId = (req as any).user?.id; // Extraire l'ID du livreur du token JWT
    
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
    
    // Appeler le service avec la nouvelle logique qui permet à n'importe quel livreur de livrer
    await LivreurService.marquerLivrees(livreurId, commandeId);

    res.status(200).json({
      success: true,
      message: 'Commande marquée comme livrée avec succès'
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}
} 