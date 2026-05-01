import { Router } from 'express';
import { ProduitController, upload } from '../controllers/produitController';
import { authenticateToken, requireAdmin, requireGIE } from '../middleware/auth';

const router = Router();

// ============================================
// 🌐 ROUTES PUBLIQUES (sans authentification)
// ============================================

// Routes spécifiques AVANT la route avec :id
router.get('/public', ProduitController.getAll);
router.get('/search', ProduitController.search);
router.get('/avis/:produitId', ProduitController.getByAvisProduit);

// Route principale pour la liste des produits
router.get('/', ProduitController.getAll);

// ============================================
// 🔒 ROUTES PROTÉGÉES (avec authentification)
// ============================================

// Routes spécifiques protégées (AVANT router.use)
router.get('/mes-produits', authenticateToken, requireGIE, ProduitController.getMyProducts);
router.get('/category/:categorieId', authenticateToken, ProduitController.getByCategory);
router.get('/out-of-stock', authenticateToken, requireAdmin, ProduitController.getOutOfStock);

// Avis (création nécessite une authentification)
router.post('/avis-produit', authenticateToken, ProduitController.createAvis);

// Routes de gestion des produits
router.post('/', authenticateToken, requireGIE, upload.single('image'), ProduitController.create);
router.put('/:id', authenticateToken, requireGIE, upload.single('image'), ProduitController.update);
router.patch('/:id/stock', authenticateToken, requireGIE, ProduitController.updateStock);
router.delete('/:id', authenticateToken, requireGIE, ProduitController.delete);

// ============================================
// 🌐 Route GET /:id EN DERNIER (publique)
// ============================================
// ⚠️ IMPORTANT: Placée en dernier pour éviter de capturer les autres routes
router.get('/:id', ProduitController.getById);

export default router;