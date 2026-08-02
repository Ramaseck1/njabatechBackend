import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authenticateToken, requireAdmin, requireSuperAdmin } from '../middleware/auth';
import { PasswordValidationMiddleware } from '../middleware/passwordValidation';

const router = Router();

// ── Routes publiques ──────────────────────────────────────────────────────────
router.post('/admin/login', AuthController.loginAdmin);
router.post('/gie/login', AuthController.loginGIE);
router.post('/client/login', AuthController.loginClient);
router.post('/client/register', PasswordValidationMiddleware.validateRegistrationMiddleware, AuthController.registerClient);
router.post('/verify-token', AuthController.verifyToken);

// Réinitialisation mot de passe GIE (3 étapes)
// Réinitialisation mot de passe par code (Admin, Client, GIE)
router.post('/gie/forgot-password',   AuthController.requestPasswordReset);
router.post('/gie/verify-reset-code', AuthController.verifyResetCode);
router.post('/gie/reset-password',    AuthController.resetPasswordWithCode);
// ── Routes protégées ──────────────────────────────────────────────────────────
router.post('/admin/register', authenticateToken, requireSuperAdmin, AuthController.registerAdmin);
router.post('/gie/register',   authenticateToken, requireAdmin,      AuthController.registerGIE);
 router.get('/me',  authenticateToken, AuthController.getUser);
router.patch('/me', authenticateToken, AuthController.updateUser);

export default router;