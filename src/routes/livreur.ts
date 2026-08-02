import express from 'express';
import { LivreurController } from '../controllers/livreurController';
import {
  requireAdminAuth,
  requireLivreurOrAdminAuth,
  requireLivreurAuth,
} from '../middleware/adminAuth';

const router = express.Router();

// Routes publiques
router.post('/login', LivreurController.login);
router.get('/commandes-disponibles', LivreurController.getCommandesDisponibles);

// Mot de passe oublié (3 étapes)
router.post('/forgot-password', LivreurController.forgotPassword);
router.post('/verify-reset-code', LivreurController.verifyResetCode);
router.post('/reset-password', LivreurController.resetPassword);

// Routes spécifiques AVANT les routes avec paramètres
router.get('/commandes', requireLivreurAuth, LivreurController.getCommandes);
router.post('/change-password', requireLivreurAuth, LivreurController.changePassword);
router.post('/assigner-commande', requireLivreurOrAdminAuth, LivreurController.assignerCommande);
router.post('/annuler-commande', requireLivreurOrAdminAuth, LivreurController.annulerCommande); // ← AJOUTÉ
router.post('/marquer-livree', requireLivreurOrAdminAuth, LivreurController.marquerLivree);

// NOUVEAU : route paramétrée réellement utilisée par l'app mobile
// (apiService.getCommandes appelle GET /livreurs/{livreurId}/commandes),
// qui n'existait pas et renvoyait donc systématiquement 404 auparavant.
router.get('/:livreurId/commandes', requireLivreurOrAdminAuth, LivreurController.getCommandesByLivreur);

// Routes avec paramètres APRÈS
router.get('/:id', requireLivreurOrAdminAuth, LivreurController.findById);
router.put('/:id', requireLivreurOrAdminAuth, LivreurController.update);

// Routes Admin seulement
router.post('/', requireAdminAuth, LivreurController.create);
router.get('/', requireAdminAuth, LivreurController.findAll);
router.delete('/:id', requireAdminAuth, LivreurController.delete);

export default router;