"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionController_1 = require("../controllers/regionController");
const router = (0, express_1.Router)();
router.post('/', regionController_1.RegionController.create);
router.get('/', regionController_1.RegionController.findAll);
router.get('/:id', regionController_1.RegionController.findById);
router.put('/:id', regionController_1.RegionController.update);
router.delete('/:id', regionController_1.RegionController.delete);
router.post('/calculate-frais-livraison', regionController_1.RegionController.calculateFraisLivraison);
router.post('/create-default', regionController_1.RegionController.createDefaultRegions);
exports.default = router;
//# sourceMappingURL=region.js.map