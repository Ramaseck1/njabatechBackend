"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3002;
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../swagger.yaml'));
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument, {
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
app.get('/swagger.yaml', (req, res) => {
    res.setHeader('Content-Type', 'application/yaml');
    res.setHeader('Content-Disposition', 'attachment; filename=swagger.yaml');
    res.sendFile(path_1.default.join(__dirname, '../swagger.yaml'));
});
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    console.error('Erreur:', err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Erreur interne du serveur',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});
app.use('/api/*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route API non trouvée: ${req.originalUrl}`
    });
});
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route non trouvée'
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    console.log(`📊 Environnement: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API disponible sur: http://localhost:${PORT}/api`);
    console.log(`📚 Documentation Swagger: http://localhost:${PORT}/api-docs`);
    console.log(`📄 Fichier Swagger YAML: http://localhost:${PORT}/swagger.yaml`);
    console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
});
process.on('SIGTERM', () => {
    console.log('SIGTERM reçu, arrêt gracieux...');
    process.exit(0);
});
process.on('SIGINT', () => {
    console.log('SIGINT reçu, arrêt gracieux...');
    process.exit(0);
});
exports.default = app;
//# sourceMappingURL=index.js.map