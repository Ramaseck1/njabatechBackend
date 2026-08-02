import { Request, Response } from 'express';
export declare class LivreurController {
    static create(req: Request, res: Response): Promise<void>;
    static findAll(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static forgotPassword(req: Request, res: Response): Promise<void>;
    static verifyResetCode(req: Request, res: Response): Promise<void>;
    static resetPassword(req: Request, res: Response): Promise<void>;
    static changePassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static findById(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static login(req: Request, res: Response): Promise<void>;
    static getCommandes(req: Request, res: Response): Promise<void>;
    static getCommandesByLivreur(req: Request, res: Response): Promise<void>;
    static getCommandesDisponibles(req: Request, res: Response): Promise<void>;
    static assignerCommande(req: Request, res: Response): Promise<void>;
    static annulerCommande(req: Request, res: Response): Promise<void>;
    static marquerLivree(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=livreurController.d.ts.map