import { Request, Response } from 'express';
import { LivreurService } from '../services/livreurService';
import { CreateLivreurDto, UpdateLivreurDto, LoginLivreurDto } from '../types';
import bcryptjs from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class LivreurController {
  // ========================================
  // ROUTES ADMIN SEULEMENT
  // ========================================

  static async create(req: Request, res: Response): Promise<void> {
    try {
      const livreurData: CreateLivreurDto = req.body;
      const livreur = await LivreurService.create(livreurData);

      res.status(201).json({
        success: true,
        message: 'Livreur créé avec succès par l\'administrateur',
        data: livreur
      });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      const result = await LivreurService.findAll(page, limit);

      res.status(200).json({
        success: true,
        message: 'Liste des livreurs récupérée par l\'administrateur',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await LivreurService.delete(id);

      res.status(200).json({
        success: true,
        message: 'Livreur supprimé avec succès par l\'administrateur'
      });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  // ========================================
  // MOT DE PASSE OUBLIÉ (public, 3 étapes)
  // → délègue tout à LivreurService, pas de prisma ici
  // ========================================

  static async forgotPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400).json({ success: false, message: 'Email requis' });
        return;
      }

      await LivreurService.forgotPassword(email);

      res.status(200).json({
        success: true,
        message: 'Si cet email existe, un code de vérification a été envoyé',
      });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async verifyResetCode(req: Request, res: Response): Promise<void> {
    try {
      const { email, code } = req.body;

      if (!email || !code) {
        res.status(400).json({ success: false, message: 'Email et code requis' });
        return;
      }

      await LivreurService.verifyResetCode(email, code);

      res.status(200).json({ success: true, message: 'Code valide' });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async resetPassword(req: Request, res: Response): Promise<void> {
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

      await LivreurService.resetPassword(email, code, newPassword);

      res.status(200).json({ success: true, message: 'Mot de passe réinitialisé avec succès' });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  // ========================================
  // CHANGEMENT DE MOT DE PASSE (livreur connecté)
  // ========================================

  static async changePassword(req: Request, res: Response) {
    try {
      // CORRIGÉ : authenticateToken pose `req.user`, pas `req.livreur`.
      // Avec l'ancien code (req as any).livreur?.id, livreurId était toujours
      // undefined et cette route renvoyait systématiquement 401.
      const livreurId = (req as any).user?.id;
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

      const isValid = await bcryptjs.compare(currentPassword, livreur.password);

      if (!isValid) {
        return res.status(400).json({
          success: false,
          message: 'Mot de passe actuel incorrect',
        });
      }

      const hashedNewPassword = await bcryptjs.hash(newPassword, 10);

      await prisma.livreurs.update({
        where: { id: livreurId },
        data: { password: hashedNewPassword },
      });

      return res.json({
        success: true,
        message: 'Mot de passe modifié avec succès',
      });
    } catch (error) {
      console.error('❌ Erreur changePassword livreur:', error);
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur lors du changement de mot de passe',
      });
    }
  }

  // ========================================
  // ROUTES MIXTES (ADMIN + LIVREUR)
  // ========================================

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
      res.status(404).json({ success: false, message: error.message });
    }
  }

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
      res.status(400).json({ success: false, message: error.message });
    }
  }

  // ========================================
  // ROUTES PUBLIQUES
  // ========================================

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
      res.status(401).json({ success: false, message: error.message });
    }
  }

  // ========================================
  // ROUTES LIVREUR SEULEMENT
  // ========================================

  // CORRIGÉ : prend désormais en compte l'utilisateur authentifié.
  // Avant : appelait toujours getCommandes('all'), donc n'importe quel
  // livreur connecté voyait les commandes de TOUS les livreurs.
  static async getCommandes(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const requester = (req as any).user;
      const isAdmin = requester?.role === 'ADMIN' || requester?.role === 'SUPER_ADMIN';
      const scopeId = isAdmin ? 'all' : requester?.id;

      if (!scopeId) {
        res.status(401).json({ success: false, message: 'Non authentifié' });
        return;
      }

      const result = await LivreurService.getCommandes(scopeId, page, limit);

      res.status(200).json({
        success: true,
        message: 'Commandes récupérées avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // NOUVEAU : GET /livreurs/:livreurId/commandes
  // Route paramétrée réellement appelée par l'app mobile (apiService.getCommandes),
  // qui n'existait pas dans le router jusqu'ici -> les requêtes tombaient en 404.
  // Supporte ?statut=ACTIVE ou ?statut=LIVREE pour séparer les commandes en
  // cours des commandes déjà livrées (onglets "Mes livraisons" / "Livrées").
  static async getCommandesByLivreur(req: Request, res: Response): Promise<void> {
    try {
      const { livreurId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      const statutParam = (req.query.statut as string | undefined)?.toUpperCase();
      const statutFilter =
        statutParam === 'LIVREE' ? 'LIVREE' : statutParam === 'ACTIVE' ? 'ACTIVE' : undefined;

      const requester = (req as any).user;
      const isAdmin = requester?.role === 'ADMIN' || requester?.role === 'SUPER_ADMIN';

      // Un livreur ne peut consulter que ses propres commandes ; l'admin voit tout.
      if (!isAdmin && requester?.id !== livreurId) {
        res.status(403).json({ success: false, message: 'Accès refusé à ces commandes' });
        return;
      }

      const result = await LivreurService.getCommandes(livreurId, page, limit, statutFilter);

      res.status(200).json({
        success: true,
        message: 'Commandes du livreur récupérées avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

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
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async assignerCommande(req: Request, res: Response): Promise<void> {
    try {
      const { commandeId } = req.body;
      const livreurId = (req as any).user?.id;

      if (!livreurId) {
        res.status(401).json({ success: false, message: 'Token invalide ou livreur non authentifié' });
        return;
      }

      if (!commandeId) {
        res.status(400).json({ success: false, message: 'commandeId est requis' });
        return;
      }

      await LivreurService.assignerCommande(livreurId, commandeId);

      res.status(200).json({ success: true, message: 'Commande assignée avec succès au livreur' });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  // NOUVEAU : annuler l'acceptation d'une commande.
  // Le livreur redevient disponible et la commande retourne dans le pool
  // des commandes disponibles pour un autre livreur.
  static async annulerCommande(req: Request, res: Response): Promise<void> {
    try {
      const { commandeId } = req.body;
      const livreurId = (req as any).user?.id;

      if (!livreurId) {
        res.status(401).json({ success: false, message: 'Token invalide ou livreur non authentifié' });
        return;
      }

      if (!commandeId) {
        res.status(400).json({ success: false, message: 'commandeId est requis' });
        return;
      }

      await LivreurService.annulerCommande(livreurId, commandeId);

      res.status(200).json({
        success: true,
        message: 'Commande annulée avec succès, elle est de nouveau disponible'
      });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async marquerLivree(req: Request, res: Response): Promise<void> {
    try {
      const { commandeId } = req.body;
      const livreurId = (req as any).user?.id;

      if (!livreurId) {
        res.status(401).json({ success: false, message: 'Token invalide ou livreur non authentifié' });
        return;
      }

      if (!commandeId) {
        res.status(400).json({ success: false, message: 'commandeId est requis' });
        return;
      }

      await LivreurService.marquerLivrees(livreurId, commandeId);

      res.status(200).json({ success: true, message: 'Commande marquée comme livrée avec succès' });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}