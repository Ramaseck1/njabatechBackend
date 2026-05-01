import { Router } from 'express';
import authRoutes from './auth';
import gieRoutes from './gie';
import produitRoutes from './produit';
import clientRoutes from './client';
import commandeRoutes from './commande';
import paiementRoutes from './paiement';
import gieAuthRoutes from './gieAuth';
import categorieRoutes from './categorie';
import regionRoutes from './region';
import adresseRoutes from './adresse';
import LivreurRoute from './livreur';

const router = Router();

// Authentification
router.use('/auth', authRoutes);
router.use('/gie', gieAuthRoutes);

// GIE, Produits, Clients, Commandes, Paiements, Catégories, Régions, Adresses
router.use('/gies', gieRoutes);
router.use('/produits', produitRoutes);
router.use('/livreurs', LivreurRoute);
router.use('/clients', clientRoutes);
router.use('/commandes', commandeRoutes);
router.use('/paiements', paiementRoutes);
router.use('/categories', categorieRoutes);
router.use('/regions', regionRoutes);
router.use('/adresses', adresseRoutes);

// Route de santé
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API GIE Backend - Service opérationnel',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Route par défaut
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API GIE Backend',
    version: '1.0.0',
    endpoints: {
      auth: '/auth',
      gie: '/gie',
      gies: '/gies',
      livreurs: '/livreurs',
      produits: '/produits',
      clients: '/clients',
      commandes: '/commandes',
      paiements: '/paiements',
      categories: '/categories',
      regions: '/regions',
      adresses: '/adresses',
      health: '/health'
    }
  });
});

export default router; 