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
router.post('/gie/forgot-password',   AuthController.forgotPasswordGIE);      // 1. Envoi code
router.post('/gie/verify-reset-code', AuthController.verifyResetCodeGIE);     // 2. Vérif code
router.post('/gie/reset-password',    AuthController.resetPasswordGIE);       // 3. Nouveau mdp

// Ancien reset par téléphone/email (conservé)
router.post('/reset-password-phone', AuthController.resetPasswordByPhone);
router.post('/reset-password-email', AuthController.resetPasswordByEmail);

// ── Routes protégées ──────────────────────────────────────────────────────────
router.post('/admin/register', authenticateToken, requireSuperAdmin, AuthController.registerAdmin);
router.post('/gie/register',   authenticateToken, requireAdmin,      AuthController.registerGIE);
router.post('/change-password', authenticateToken, AuthController.changePassword);
router.get('/me',  authenticateToken, AuthController.getUser);
router.patch('/me', authenticateToken, AuthController.updateUser);

export default router;