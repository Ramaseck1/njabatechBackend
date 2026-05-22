import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import path from 'path';

// Charger les variables d'environnement en premier
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Middleware de base
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check (avant tout le reste pour garantir qu'il fonctionne)
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ success: true, message: 'API opérationnelle', env: process.env.NODE_ENV });
});

// Charger Swagger avec protection
try {
  const YAML = require('yamljs');
  const swaggerUi = require('swagger-ui-express');
  const swaggerPath = path.join(__dirname, '../swagger.yaml');
  const swaggerDocument = YAML.load(swaggerPath);

  if (swaggerDocument && Object.keys(swaggerDocument).length > 0) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'GIE Backend API Documentation',
      swaggerOptions: {
        docExpansion: 'list',
        filter: true,
        showRequestHeaders: true,
        tryItOutEnabled: true
      }
    }));

    app.get('/swagger.yaml', (req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/yaml');
      res.setHeader('Content-Disposition', 'attachment; filename=swagger.yaml');
      res.sendFile(swaggerPath);
    });

    console.log('✅ Swagger chargé');
  }
} catch (e) {
  console.warn('⚠️ Swagger désactivé:', (e as Error).message);
}

// Charger les routes avec protection
try {
  const routes = require('./routes').default;
  app.use('/api', routes);
  console.log('✅ Routes chargées');
} catch (e) {
  console.error('❌ Erreur chargement routes:', (e as Error).message);
  // Fallback si les routes échouent
  app.use('/api', (req: Request, res: Response) => {
    res.status(500).json({ success: false, message: 'Routes non disponibles' });
  });
}

// Middleware de gestion d'erreurs
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Erreur:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Erreur interne du serveur',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 pour les routes API
app.use('/api/*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route API non trouvée: ${req.originalUrl}`
  });
});

// 404 pour le reste
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée'
  });
});

// Démarrer le serveur sur 0.0.0.0 pour Hostinger
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📊 Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
});

// Gestion de l'arrêt gracieux
process.on('SIGTERM', () => {
  console.log('SIGTERM reçu, arrêt gracieux...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT reçu, arrêt gracieux...');
  process.exit(0);
});

export default app;