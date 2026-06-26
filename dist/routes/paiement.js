"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paiementController_1 = require("../controllers/paiementController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.use(auth_1.authenticateToken);
router.get('/', paiementController_1.PaiementController.getAll);
router.get('/:id', paiementController_1.PaiementController.getById);
router.post('/', auth_1.requireAdmin, paiementController_1.PaiementController.create);
router.put('/:id', auth_1.requireAdmin, paiementController_1.PaiementController.update);
router.delete('/:id', auth_1.requireAdmin, paiementController_1.PaiementController.delete);
router.patch('/:id/statut', auth_1.requireGIE, paiementController_1.PaiementController.updateStatut);
exports.default = router;
//# sourceMappingURL=paiement.js.map