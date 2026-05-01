"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorieController_1 = require("../controllers/categorieController");
const auth_1 = require("../middleware/auth");
const upload_1 = require("../middleware/upload");
const router = (0, express_1.Router)();
router.get('/', categorieController_1.CategorieController.getAll);
router.get('/with-count', categorieController_1.CategorieController.getWithProductCount);
router.get('/search', categorieController_1.CategorieController.search);
router.get('/:id', categorieController_1.CategorieController.getById);
router.use(auth_1.authenticateToken);
router.post('/', auth_1.requireAdmin, upload_1.uploadCategoryImage, upload_1.handleUploadError, categorieController_1.CategorieController.create);
router.put('/:id', auth_1.requireAdmin, upload_1.uploadCategoryImage, upload_1.handleUploadError, categorieController_1.CategorieController.update);
router.delete('/:id', auth_1.requireAdmin, categorieController_1.CategorieController.delete);
router.post('/default', auth_1.requireAdmin, categorieController_1.CategorieController.createDefaultCategories);
exports.default = router;
//# sourceMappingURL=categorie.js.map