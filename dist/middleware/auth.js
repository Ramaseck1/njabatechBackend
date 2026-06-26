"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireOwnership = exports.requireRoles = exports.requireLivreur = exports.requireClient = exports.requireGIE = exports.requireSuperAdmin = exports.requireAdmin = exports.authenticateToken = void 0;
const auth_1 = require("../utils/auth");
const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = auth_1.AuthUtils.extractTokenFromHeader(authHeader);
        if (!token) {
            res.status(401).json({
                success: false,
                message: 'Token d\'authentification requis'
            });
            return;
        }
        const decoded = auth_1.AuthUtils.verifyToken(token);
        console.log('Token décodé:', decoded);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: 'Token invalide ou expiré'
        });
    }
};
exports.authenticateToken = authenticateToken;
const requireAdmin = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            success: false,
            message: 'Authentification requise'
        });
        return;
    }
    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Rôle administrateur requis'
        });
        return;
    }
    next();
};
exports.requireAdmin = requireAdmin;
const requireSuperAdmin = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            success: false,
            message: 'Authentification requise'
        });
        return;
    }
    if (req.user.role !== 'SUPER_ADMIN') {
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Rôle super administrateur requis'
        });
        return;
    }
    next();
};
exports.requireSuperAdmin = requireSuperAdmin;
const requireGIE = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            success: false,
            message: 'Authentification requise'
        });
        return;
    }
    if (req.user.role !== 'GIE') {
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Rôle GIE requis'
        });
        return;
    }
    next();
};
exports.requireGIE = requireGIE;
const requireClient = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            success: false,
            message: 'Authentification requise'
        });
        return;
    }
    if (req.user.role !== 'CLIENT') {
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Rôle client requis'
        });
        return;
    }
    next();
};
exports.requireClient = requireClient;
const requireLivreur = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            success: false,
            message: 'Authentification requise'
        });
        return;
    }
    if (req.user.role !== 'livreur') {
        res.status(403).json({
            success: false,
            message: 'Accès refusé. Rôle livreur requis'
        });
        return;
    }
    next();
};
exports.requireLivreur = requireLivreur;
const requireRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: 'Authentification requise'
            });
            return;
        }
        if (!roles.includes(req.user.role)) {
            res.status(403).json({
                success: false,
                message: `Accès refusé. Rôles requis: ${roles.join(', ')}`
            });
            return;
        }
        next();
    };
};
exports.requireRoles = requireRoles;
const requireOwnership = (resourceType) => {
    return async (req, res, next) => {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: 'Authentification requise'
            });
            return;
        }
        if (req.user.role === 'SUPER_ADMIN') {
            next();
            return;
        }
        if (req.user.role === 'ADMIN') {
            next();
            return;
        }
        if (req.user.role === 'GIE' && resourceType === 'produit') {
            next();
            return;
        }
        if (req.user.role === 'CLIENT' && resourceType === 'commande') {
            next();
            return;
        }
        res.status(403).json({
            success: false,
            message: 'Accès refusé à cette ressource'
        });
    };
};
exports.requireOwnership = requireOwnership;
//# sourceMappingURL=auth.js.map