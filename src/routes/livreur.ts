import express from 'express';
import { LivreurController } from '../controllers/livreurController';
import { requireAdminAuth, requireLivreurOrAdminAuth, requireLivreurAuth } from '../middleware/adminAuth';

const router = express.Router();

// Routes publiques
router.post('/login', LivreurController.login);
router.get('/commandes-disponibles', LivreurController.getCommandesDisponibles);

// Routes spécifiques AVANT les routes avec paramètres
router.get('/commandes', requireLivreurAuth, LivreurController.getCommandes); // ← DÉPLACÉ ICI
router.post('/assigner-commande', requireLivreurOrAdminAuth, LivreurController.assignerCommande);
router.post('/marquer-livree', requireLivreurOrAdminAuth, LivreurController.marquerLivree);

// Routes avec paramètres APRÈS
router.get('/:id', requireLivreurOrAdminAuth, LivreurController.findById);
router.put('/:id', requireLivreurOrAdminAuth, LivreurController.update);

// Routes Admin seulement
router.post('/', requireAdminAuth, LivreurController.create);
router.get('/', requireAdminAuth, LivreurController.findAll);
router.delete('/:id', requireAdminAuth, LivreurController.delete);

export default router;