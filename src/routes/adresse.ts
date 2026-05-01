import { Router } from 'express';
import { AdresseController } from '../controllers/adresseController';

const router = Router();

// Routes pour les adresses
router.post('/', AdresseController.create);
router.get('/', AdresseController.findAll);
router.get('/:id', AdresseController.findById);
router.get('/region/:regionId', AdresseController.findByRegion);
router.put('/:id', AdresseController.update);
router.delete('/:id', AdresseController.delete);

// Routes spéciales
router.post('/create-default', AdresseController.createDefaultAdresses);

export default router; 