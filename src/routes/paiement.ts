import { Router } from 'express';
import { PaiementController } from '../controllers/paiementController';
import { authenticateToken, requireAdmin, requireGIE } from '../middleware/auth';

const router = Router();

// Routes publiques (sans authentification)

// Toutes les autres routes nécessitent une authentification
router.use(authenticateToken);

// Routes pour tous les utilisateurs authentifiés
router.get('/', PaiementController.getAll);         // GET /api/paiements
router.get('/:id', PaiementController.getById);     // GET /api/paiements/:id

// Routes admin uniquement
router.post('/', requireAdmin, PaiementController.create);        // POST /api/paiements
router.put('/:id', requireAdmin, PaiementController.update);     // PUT /api/paiements/:id
router.delete('/:id', requireAdmin, PaiementController.delete);  // DELETE /api/paiements/:id

// Modifier le statut d'un paiement (admin uniquement)
router.patch('/:id/statut', requireGIE, PaiementController.updateStatut);

export default router; 