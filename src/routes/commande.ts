import { Router } from 'express';
import { CommandeController } from '../controllers/commandeController';
import { authenticateToken, requireGIE,requireClient } from '../middleware/auth';

const router = Router();

router.use(authenticateToken);

// Liste des commandes
router.get('/', CommandeController.getAll);         // GET /api/commandes
// Création d'une commande
router.post('/', CommandeController.create);        // POST /api/commandes
router.post('/compay', CommandeController.createcomPayement);        // POST /api/commandes
// Détail d'une commande
router.get('/mes-commandes', requireGIE, CommandeController.getMyCommandes);
router.get('/mes-commandes/:commandeId', requireGIE, CommandeController.getMyCommandeById);
router.get('/mes-commandes-client', requireClient, CommandeController.getMyClientCommandes);
router.get('/mes-commandes-stats', requireGIE, CommandeController.getMyStats);
router.get('/:id', CommandeController.getById);     // GET /api/commandes/:id

// Modifier le statut d'une commande
router.patch('/:id/statut', CommandeController.updateStatut);

// Annuler une commande (et mettre à jour le paiement)
router.patch('/:id/annuler', CommandeController.annulerCommande);

// Confirmer une commande (statut PRETE + SMS)
router.patch('/:id/confirmer', CommandeController.confirmerCommande);

// Corriger les stocks négatifs (admin seulement)
router.post('/fix-negative-stocks', requireGIE, CommandeController.fixNegativeStocks);

// === NOUVELLES ROUTES POUR GESTION MULTI-GIE ===

// Récupérer les commandes avec détails GIE
router.get('/mes-commandes-details', requireGIE, CommandeController.getMyCommandesWithDetails);

// Statistiques GIE
router.get('/stats-gie', requireGIE, CommandeController.getGIEStats);

// Marquer un produit comme en préparation
router.patch('/produit/:panierProduitId/en-preparation', requireGIE, CommandeController.marquerEnPreparation);

// Marquer un produit comme prêt
router.patch('/produit/:panierProduitId/pret', requireGIE, CommandeController.marquerPret);

// Annuler un produit
router.patch('/produit/:panierProduitId/annuler', requireGIE, CommandeController.annulerProduit);

export default router; 