import { Request, Response, NextFunction } from 'express';
import { AuthUtils } from '../utils/auth';
import { AuthRequest } from '../types';

// Interface mise à jour avec les rôles typés
export interface AuthenticatedUser {
  id: string;
  email: string;
  role: 'ADMIN' | 'SUPER_ADMIN' | 'GIE' | 'CLIENT' | 'livreur';
}

// Middleware d'authentification général
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;
    const token = AuthUtils.extractTokenFromHeader(authHeader);

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Token d\'authentification requis'
      });
      return;
    }

    const decoded = AuthUtils.verifyToken(token) as AuthenticatedUser;
    console.log('Token décodé:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Token invalide ou expiré'
    });
  }
};

// Middleware pour vérifier le rôle administrateur
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
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


// Middleware pour vérifier le rôle super administrateur
export const requireSuperAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
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

// Middleware pour vérifier le rôle GIE
export const requireGIE = (req: AuthRequest, res: Response, next: NextFunction): void => {
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

// Middleware pour vérifier le rôle client
export const requireClient = (req: AuthRequest, res: Response, next: NextFunction): void => {
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

// Middleware pour vérifier le rôle livreur
export const requireLivreur = (req: AuthRequest, res: Response, next: NextFunction): void => {
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

// Middleware flexible pour plusieurs rôles
export const requireRoles = (...roles: ('ADMIN' | 'SUPER_ADMIN' | 'GIE' | 'CLIENT' | 'livreur')[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
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

// Middleware pour vérifier que l'utilisateur accède à ses propres ressources
export const requireOwnership = (resourceType: 'client' | 'gie' | 'produit' | 'commande') => {
  return async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'Authentification requise'
      });
      return;
    }

    // Les super admins ont accès à tout
    if (req.user.role === 'SUPER_ADMIN') {
      next();
      return;
    }

    // Les admins peuvent accéder aux ressources qu'ils gèrent
    if (req.user.role === 'ADMIN') {
      next();
      return;
    }

    // Les GIE peuvent accéder à leurs propres produits
    if (req.user.role === 'GIE' && resourceType === 'produit') {
      // Vérifier que le produit appartient au GIE
      // Cette logique sera implémentée dans le contrôleur
      next();
      return;
    }

    // Les clients ne peuvent accéder qu'à leurs propres ressources
    if (req.user.role === 'CLIENT' && resourceType === 'commande') {
      // Vérifier que la commande appartient au client
      // Cette logique sera implémentée dans le contrôleur
      next();
      return;
    }

    // Si aucune condition n'est remplie
    res.status(403).json({
      success: false,
      message: 'Accès refusé à cette ressource'
    });
  };
};