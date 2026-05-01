import { Router } from 'express';
import { GIEController } from '../controllers/gieController';
import { authenticateToken, requireAdmin, requireClient, requireGIE } from '../middleware/auth';

const router = Router();

// Routes publiques (sans authentification)
router.get('/', GIEController.getAll);

// Routes protégées (avec authentification)
router.post('/', authenticateToken, requireAdmin, GIEController.create);
router.get('/search', authenticateToken, requireAdmin, GIEController.search);
router.get('/:id', authenticateToken, requireAdmin, GIEController.getById);
router.put('/:id', authenticateToken, requireGIE, GIEController.update);
router.delete('/:id', authenticateToken, requireAdmin, GIEController.delete);
router.patch('/:id/status', authenticateToken, requireAdmin, GIEController.updateStatus);
router.get('/:id/stats', authenticateToken, requireAdmin, GIEController.getStats);
router.get('/:id/commandes', authenticateToken, requireAdmin, GIEController.getCommandes);
router.get('/:id/commandes/:commandeId', authenticateToken, requireAdmin, GIEController.getCommandeById);
router.get('/:id/produits', authenticateToken, requireAdmin, GIEController.getProduits);

export default router;