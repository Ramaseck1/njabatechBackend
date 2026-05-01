import { Router } from 'express';
import { CategorieController } from '../controllers/categorieController';
import { authenticateToken, requireAdmin } from '../middleware/auth';
import { uploadCategoryImage, handleUploadError } from '../middleware/upload';

const router = Router();

// Routes publiques (sans authentification)
router.get('/', CategorieController.getAll);
router.get('/with-count', CategorieController.getWithProductCount);
router.get('/search', CategorieController.search);
router.get('/:id', CategorieController.getById);

// Routes protégées (nécessitent une authentification)
router.use(authenticateToken);

// Routes admin uniquement
router.post('/', requireAdmin, uploadCategoryImage, handleUploadError, CategorieController.create);
router.put('/:id', requireAdmin, uploadCategoryImage, handleUploadError, CategorieController.update);
router.delete('/:id', requireAdmin, CategorieController.delete);

// Route pour créer les catégories par défaut (admin uniquement)
router.post('/default', requireAdmin, CategorieController.createDefaultCategories);

export default router; 