import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import routes from './routes';

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002; // Changé de 3000 à 3003

// Charger le fichier Swagger
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

// Middleware
app.use(cors({
   origin: '*', // Autorise toutes les origines (à restreindre en prod)
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

// Configuration Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'GIE Backend API Documentation',
  customfavIcon: '/favicon.ico',
  swaggerOptions: {
    docExpansion: 'list',
    filter: true,
    showRequestHeaders: true,
    tryItOutEnabled: true
  }
}));

// Route pour télécharger le fichier Swagger YAML
app.get('/swagger.yaml', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/yaml');
  res.setHeader('Content-Disposition', 'attachment; filename=swagger.yaml');
  res.sendFile(path.join(__dirname, '../swagger.yaml'));
});

// Routes
app.use('/api', routes);

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

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📊 Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API disponible sur: http://localhost:${PORT}/api`);
  console.log(`📚 Documentation Swagger: http://localhost:${PORT}/api-docs`);
  console.log(`📄 Fichier Swagger YAML: http://localhost:${PORT}/swagger.yaml`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);
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