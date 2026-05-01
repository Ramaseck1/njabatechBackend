"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gieAuthController_1 = require("../controllers/gieAuthController");
const router = (0, express_1.Router)();
router.post('/login', gieAuthController_1.GieAuthController.loginGIE);
exports.default = router;
//# sourceMappingURL=gieAuth.js.map