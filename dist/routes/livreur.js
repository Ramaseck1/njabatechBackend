"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livreurController_1 = require("../controllers/livreurController");
const adminAuth_1 = require("../middleware/adminAuth");
const router = express_1.default.Router();
router.post('/login', livreurController_1.LivreurController.login);
router.get('/commandes-disponibles', livreurController_1.LivreurController.getCommandesDisponibles);
router.get('/commandes', adminAuth_1.requireLivreurAuth, livreurController_1.LivreurController.getCommandes);
router.post('/assigner-commande', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.assignerCommande);
router.post('/marquer-livree', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.marquerLivree);
router.get('/:id', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.findById);
router.put('/:id', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.update);
router.post('/', adminAuth_1.requireAdminAuth, livreurController_1.LivreurController.create);
router.get('/', adminAuth_1.requireAdminAuth, livreurController_1.LivreurController.findAll);
router.delete('/:id', adminAuth_1.requireAdminAuth, livreurController_1.LivreurController.delete);
exports.default = router;
//# sourceMappingURL=livreur.js.map