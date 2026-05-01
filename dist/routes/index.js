"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const gie_1 = __importDefault(require("./gie"));
const produit_1 = __importDefault(require("./produit"));
const client_1 = __importDefault(require("./client"));
const commande_1 = __importDefault(require("./commande"));
const paiement_1 = __importDefault(require("./paiement"));
const gieAuth_1 = __importDefault(require("./gieAuth"));
const categorie_1 = __importDefault(require("./categorie"));
const region_1 = __importDefault(require("./region"));
const adresse_1 = __importDefault(require("./adresse"));
const livreur_1 = __importDefault(require("./livreur"));
const router = (0, express_1.Router)();
router.use('/auth', auth_1.default);
router.use('/gie', gieAuth_1.default);
router.use('/gies', gie_1.default);
router.use('/produits', produit_1.default);
router.use('/livreurs', livreur_1.default);
router.use('/clients', client_1.default);
router.use('/commandes', commande_1.default);
router.use('/paiements', paiement_1.default);
router.use('/categories', categorie_1.default);
router.use('/regions', region_1.default);
router.use('/adresses', adresse_1.default);
router.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'API GIE Backend - Service opérationnel',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});
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
exports.default = router;
//# sourceMappingURL=index.js.map