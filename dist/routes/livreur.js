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
router.post('/forgot-password', livreurController_1.LivreurController.forgotPassword);
router.post('/verify-reset-code', livreurController_1.LivreurController.verifyResetCode);
router.post('/reset-password', livreurController_1.LivreurController.resetPassword);
router.get('/commandes', adminAuth_1.requireLivreurAuth, livreurController_1.LivreurController.getCommandes);
router.post('/change-password', adminAuth_1.requireLivreurAuth, livreurController_1.LivreurController.changePassword);
router.post('/assigner-commande', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.assignerCommande);
router.post('/annuler-commande', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.annulerCommande);
router.post('/marquer-livree', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.marquerLivree);
router.get('/:livreurId/commandes', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.getCommandesByLivreur);
router.get('/:id', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.findById);
router.put('/:id', adminAuth_1.requireLivreurOrAdminAuth, livreurController_1.LivreurController.update);
router.post('/', adminAuth_1.requireAdminAuth, livreurController_1.LivreurController.create);
router.get('/', adminAuth_1.requireAdminAuth, livreurController_1.LivreurController.findAll);
router.delete('/:id', adminAuth_1.requireAdminAuth, livreurController_1.LivreurController.delete);
exports.default = router;
//# sourceMappingURL=livreur.js.map