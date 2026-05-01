import { Router } from 'express';
import { RegionController } from '../controllers/regionController';

const router = Router();

// Routes pour les régions
router.post('/', RegionController.create);
router.get('/', RegionController.findAll);
router.get('/:id', RegionController.findById);
router.put('/:id', RegionController.update);
router.delete('/:id', RegionController.delete);

// Routes spéciales
router.post('/calculate-frais-livraison', RegionController.calculateFraisLivraison);
router.post('/create-default', RegionController.createDefaultRegions);

export default router; 