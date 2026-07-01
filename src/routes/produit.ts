import { Router } from 'express';
import { ProduitController, upload } from '../controllers/produitController';
import { authenticateToken, requireAdmin, requireGIE } from '../middleware/auth';

const router = Router();
router.get('/public', ProduitController.getAll);
router.get('/search', ProduitController.search);
router.get('/avis/:produitId', ProduitController.getByAvisProduit);

// ✅ Top produits AVANT /:id
router.get('/top/achetes', ProduitController.getTopAchetes);
 
router.get('/', ProduitController.getAll);

// ============================================
// 🔒 ROUTES PROTÉGÉES
// ============================================
router.get('/mes-produits', authenticateToken, requireGIE, ProduitController.getMyProducts);
router.get('/categorie/:categorieId', ProduitController.getByCategory);
router.get('/out-of-stock', authenticateToken, requireAdmin, ProduitController.getOutOfStock);

router.post('/avis-produit', authenticateToken, ProduitController.createAvis);
router.post('/', authenticateToken, requireGIE, upload.single('image'), ProduitController.create);
router.put('/:id', authenticateToken, requireGIE, upload.single('image'), ProduitController.update);
router.patch('/:id/stock', authenticateToken, requireGIE, ProduitController.updateStock);
router.delete('/:id', authenticateToken, requireGIE, ProduitController.delete);

// ✅ /:id et /:id/vues EN DERNIER
router.post('/:id/vues', ProduitController.incrementerVues);
router.get('/:id', ProduitController.getById);



export default router;