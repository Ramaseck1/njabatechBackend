import { Router } from 'express';
import { GieAuthController } from '../controllers/gieAuthController';

const router = Router();

router.post('/login', GieAuthController.loginGIE);

export default router; 