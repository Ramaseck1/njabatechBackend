"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', clientController_1.ClientController.getAll);
router.post('/', clientController_1.ClientController.create);
router.get('/:id', clientController_1.ClientController.getById);
router.put('/:id', clientController_1.ClientController.update);
router.delete('/:id', clientController_1.ClientController.delete);
router.post('/avis', auth_1.authenticateToken, clientController_1.ClientController.createAvis);
router.get('/me', auth_1.authenticateToken, clientController_1.ClientController.getByClient);
router.get('/avis/all', clientController_1.ClientController.getAllavis);
router.delete('/:id', auth_1.authenticateToken, clientController_1.ClientController.deleteAvisavis);
exports.default = router;
//# sourceMappingURL=client.js.map