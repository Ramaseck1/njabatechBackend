import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authenticateToken, requireAdmin, requireSuperAdmin } from '../middleware/auth';
import { PasswordValidationMiddleware } from '../middleware/passwordValidation';


const router = Router();

// Routes publiques (pas besoin d'authentification)
router.post('/admin/login', AuthController.loginAdmin);
router.post('/gie/login', AuthController.loginGIE);
router.post('/client/login', AuthController.loginClient);
router.post('/client/register',PasswordValidationMiddleware.validateRegistrationMiddleware, AuthController.registerClient);
router.post('/verify-token', AuthController.verifyToken);

// Routes protégées
router.post('/admin/register', authenticateToken, requireSuperAdmin, AuthController.registerAdmin); // Seuls les SUPER_ADMIN peuvent créer des admins
router.post('/gie/register', authenticateToken, requireAdmin, AuthController.registerGIE); // Les admins créent les comptes GIE

// Dans votre router - ROUTES PUBLIQUES
router.post('/reset-password-phone', AuthController.resetPasswordByPhone);   // 🔓 Pas d'auth
router.post('/reset-password-email', AuthController.resetPasswordByEmail);   // 🔓 Pas d'auth

// VS les routes protégées existantes
router.post('/change-password', authenticateToken, AuthController.changePassword);

// Routes protégées pour l'utilisateur connecté
router.get('/me', authenticateToken, AuthController.getUser);
router.patch('/me', authenticateToken, AuthController.updateUser);

export default router; 