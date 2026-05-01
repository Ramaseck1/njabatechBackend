import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            id: string;
            email: string;
            role: 'ADMIN' | 'SUPER_ADMIN' | 'livreur';
        }
    }
}
export declare const requireAdminAuth: (req: Request, res: Response, next: NextFunction) => void;
export declare const requireLivreurOrAdminAuth: (req: Request, res: Response, next: NextFunction) => void;
export declare const requireLivreurAuth: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=adminAuth.d.ts.map