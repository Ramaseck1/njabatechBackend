import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
export interface AuthenticatedUser {
    id: string;
    email: string;
    role: 'ADMIN' | 'SUPER_ADMIN' | 'GIE' | 'CLIENT' | 'livreur';
}
export declare const authenticateToken: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireAdmin: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireSuperAdmin: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireGIE: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireClient: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireLivreur: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireRoles: (...roles: ("ADMIN" | "SUPER_ADMIN" | "GIE" | "CLIENT" | "livreur")[]) => (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireOwnership: (resourceType: "client" | "gie" | "produit" | "commande") => (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map