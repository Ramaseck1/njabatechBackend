"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gieController_1 = require("../controllers/gieController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', gieController_1.GIEController.getAll);
router.post('/', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.create);
router.get('/search', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.search);
router.get('/:id', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.getById);
router.put('/:id', auth_1.authenticateToken, auth_1.requireGIE, gieController_1.GIEController.update);
router.delete('/:id', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.delete);
router.patch('/:id/status', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.updateStatus);
router.get('/:id/stats', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.getStats);
router.get('/:id/commandes', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.getCommandes);
router.get('/:id/commandes/:commandeId', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.getCommandeById);
router.get('/:id/produits', auth_1.authenticateToken, auth_1.requireAdmin, gieController_1.GIEController.getProduits);
exports.default = router;
//# sourceMappingURL=gie.js.map