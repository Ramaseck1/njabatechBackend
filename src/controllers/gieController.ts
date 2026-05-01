import { Request, Response } from 'express';
import { GIEService } from '../services/gieService';
import { CreateGIEDto } from '../types';

export class GIEController {
  // Créer un nouveau GIE
static async create(req: Request, res: Response): Promise<void> {
  try {
    const data: CreateGIEDto = req.body;
    const administrateurId = (req as any).user.id;

    if (!data.nom) {
      res.status(400).json({
        success: false,
        message: 'Le nom du GIE est requis'
      });
      return;
    }

    const gie = await GIEService.create(data, administrateurId);

    res.status(201).json({
      success: true,
      message: 'GIE créé avec succès',
      data: gie
    });

  } catch (error: any) {
    // Vérification spécifique pour le numéro de téléphone existant
    if (error.message.includes('numéro existe déjà')) {
      res.status(400).json({
        success: false,
        message: 'Le numéro de téléphone doit être unique',
        error: error.message
      });
      return;
    }

    // Toutes les autres erreurs restent 500
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création du GIE',
      error: error.message
    });
  }
}

  // Récupérer tous les GIE
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = req.query.search as string;

      const result = await GIEService.findAll(page, limit, search);

      res.json({
        success: true,
        message: 'GIE récupérés avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des GIE',
        error: error.message
      });
    }
  }

  // Récupérer un GIE par ID
  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const gie = await GIEService.findById(id);

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
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération du GIE',
        error: error.message
      });
    }
  }

  // Mettre à jour un GIE
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: Partial<CreateGIEDto> = req.body;

      const gie = await GIEService.update(id, data);

      res.json({
        success: true,
        message: 'GIE mis à jour avec succès',
        data: gie
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour du GIE',
        error: error.message
      });
    }
  }

  // Supprimer un GIE
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await GIEService.delete(id);

      res.json({
        success: true,
        message: 'GIE supprimé avec succès'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la suppression du GIE',
        error: error.message
      });
    }
  }

  // Changer le statut d'un GIE
  static async updateStatus(req: Request, res: Response): Promise<void> {
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

      const gie = await GIEService.updateStatus(id, statut);

      res.json({
        success: true,
        message: 'Statut du GIE mis à jour avec succès',
        data: gie
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour du statut',
        error: error.message
      });
    }
  }

  // Récupérer les statistiques d'un GIE
  static async getStats(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const stats = await GIEService.getStats(id);

      res.json({
        success: true,
        message: 'Statistiques récupérées avec succès',
        data: stats
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des statistiques',
        error: error.message
      });
    }
  }

  // Rechercher des GIE
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

      const result = await GIEService.search(q as string, page, limit);

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

  // Lister les commandes d'un GIE
  static async getCommandes(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params; // id du GIE
      const { statut, dateDebut, dateFin } = req.query;
      const where: any = {
        panierProduits: {
          some: {
            produit: {
              gieId: id
            }
          }
        }
      };
      if (statut) where.statut = statut;
      if (dateDebut || dateFin) {
        where.dateCommande = {};
        if (dateDebut) where.dateCommande.gte = new Date(dateDebut as string);
        if (dateFin) where.dateCommande.lte = new Date(dateFin as string);
      }
      const commandes = await (await import('../config/database')).default.commande.findMany({
        where,
        orderBy: { dateCommande: 'desc' },
        include: { client: true, panierProduits: { include: { produit: true } }, paiement: true }
      });
      res.json({ success: true, data: commandes });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération des commandes', error: error.message });
    }
  }

  // Détail d'une commande d'un GIE
  static async getCommandeById(req: Request, res: Response): Promise<void> {
    try {
      const { id, commandeId } = req.params;
      const commande = await (await import('../config/database')).default.commande.findFirst({
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
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération de la commande', error: error.message });
    }
  }

  // Lister les produits d'un GIE
  static async getProduits(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const produits = await (await import('../config/database')).default.produit.findMany({
        where: { gieId: id },
        orderBy: { createdAt: 'desc' }
      });
      res.json({ success: true, data: produits });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération des produits', error: error.message });
    }
  }
} 