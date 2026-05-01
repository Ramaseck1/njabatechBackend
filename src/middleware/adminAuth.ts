import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Étendre les types Express directement ici
declare global {
  namespace Express {
    interface Request {
      
        id: string;
        email: string;
        role: 'ADMIN' | 'SUPER_ADMIN' | 'livreur';
      
    }
  }
}

interface AdminTokenPayload {
  id: string;
  email: string;
  role: 'ADMIN' | 'SUPER_ADMIN';
}

export const requireAdminAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Token d\'authentification requis pour les administrateurs'
      });
      return;
    }

    const token = authHeader.substring(7); // Enlever "Bearer "
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as AdminTokenPayload;
    
    // Vérifier que l'utilisateur est un administrateur
    if (decoded.role !== 'ADMIN' && decoded.role !== 'SUPER_ADMIN') {
      res.status(403).json({
        success: false,
        message: 'Accès refusé. Seuls les administrateurs peuvent gérer les livreurs.'
      });
      return;
    }

    // Ajouter les informations de l'admin à la requête
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role
    };

    next();
  } catch (error) {
    console.error('Erreur middleware requireAdminAuth:', error);
    res.status(401).json({
      success: false,
      message: 'Token d\'authentification invalide'
    });
  }
};

// Middleware pour vérifier que l'utilisateur est le livreur lui-même ou un admin
export const requireLivreurOrAdminAuth = (req: Request, res: Response, next: NextFunction): void => {
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
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    
    const livreurId = req.params.id || req.body.livreurId;
    
    // Permettre l'accès si c'est un admin
    if (decoded.role === 'ADMIN' || decoded.role === 'SUPER_ADMIN') {
      req.user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role
      };
      return next();
    }
    
    // Pour les endpoints assigner-commande et marquer-livree, permettre l'accès si c'est un livreur
    if (decoded.role === 'livreur' && (req.path === '/assigner-commande' || req.path === '/marquer-livree')) {
      req.user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role
      };
      return next();
    }
    
    // Permettre l'accès si c'est le livreur lui-même (pour les autres endpoints)
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
  } catch (error) {
    console.error('Erreur middleware requireLivreurOrAdminAuth:', error);
    res.status(401).json({
      success: false,
      message: 'Token d\'authentification invalide'
    });
  }
  
};

export const requireLivreurAuth = (req: Request, res: Response, next: NextFunction): void => {
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
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    
    // Permettre l'accès aux admins et livreurs
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
  } catch (error) {
    console.error('Erreur middleware requireLivreurAuth:', error);
    res.status(401).json({
      success: false,
      message: 'Token d\'authentification invalide'
    });
  }
};
