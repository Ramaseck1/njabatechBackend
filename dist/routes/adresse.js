"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adresseController_1 = require("../controllers/adresseController");
const router = (0, express_1.Router)();
router.post('/', adresseController_1.AdresseController.create);
router.get('/', adresseController_1.AdresseController.findAll);
router.get('/:id', adresseController_1.AdresseController.findById);
router.get('/region/:regionId', adresseController_1.AdresseController.findByRegion);
router.put('/:id', adresseController_1.AdresseController.update);
router.delete('/:id', adresseController_1.AdresseController.delete);
router.post('/create-default', adresseController_1.AdresseController.createDefaultAdresses);
exports.default = router;
//# sourceMappingURL=adresse.js.map