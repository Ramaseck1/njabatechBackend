"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireLivreurAuth = exports.requireLivreurOrAdminAuth = exports.requireAdminAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAdminAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                success: false,
                message: 'Token d\'authentification requis pour les administrateurs'
            });
            return;
        }
        const token = authHeader.substring(7);
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        if (decoded.role !== 'ADMIN' && decoded.role !== 'SUPER_ADMIN') {
            res.status(403).json({
                success: false,
                message: 'Accès refusé. Seuls les administrateurs peuvent gérer les livreurs.'
            });
            return;
        }
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role
        };
        next();
    }
    catch (error) {
        console.error('Erreur middleware requireAdminAuth:', error);
        res.status(401).json({
            success: false,
            message: 'Token d\'authentification invalide'
        });
    }
};
exports.requireAdminAuth = requireAdminAuth;
const requireLivreurOrAdminAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                success: false,
                message: 'Token d\'authentification requis'
            });
            return;
        }
        const token = authHeader.substring(7);
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const livreurId = req.params.id || req.body.livreurId;
        if (decoded.role === 'ADMIN' || decoded.role === 'SUPER_ADMIN') {
            req.user = {
                id: decoded.id,
                email: decoded.email,
                role: decoded.role
            };
            return next();
        }
        if (decoded.role === 'livreur' && (req.path === '/assigner-commande' || req.path === '/marquer-livree')) {
            req.user = {
                id: decoded.id,
                email: decoded.email,
                role: decoded.role
            };
            return next();
        }
        if (decoded.role === 'livreur' && decoded.id === livreurId) {
            req.user = {
                id: decoded.id,
                email: decoded.email,
                role: decoded.role
            };
            return next();
        }
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Vous ne pouvez accéder qu\'à vos propres données.'
        });
    }
    catch (error) {
        console.error('Erreur middleware requireLivreurOrAdminAuth:', error);
        res.status(401).json({
            success: false,
            message: 'Token d\'authentification invalide'
        });
    }
};
exports.requireLivreurOrAdminAuth = requireLivreurOrAdminAuth;
const requireLivreurAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                success: false,
                message: 'Token d\'authentification requis'
            });
            return;
        }
        const token = authHeader.substring(7);
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        if (decoded.role === 'ADMIN' || decoded.role === 'SUPER_ADMIN' || decoded.role === 'livreur') {
            req.user = {
                id: decoded.id,
                email: decoded.email,
                role: decoded.role
            };
            return next();
        }
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Réservé aux livreurs et administrateurs.'
        });
    }
    catch (error) {
        console.error('Erreur middleware requireLivreurAuth:', error);
        res.status(401).json({
            success: false,
            message: 'Token d\'authentification invalide'
        });
    }
};
exports.requireLivreurAuth = requireLivreurAuth;
//# sourceMappingURL=adminAuth.js.map