import { Request, Response } from 'express';
export declare class CommandeController {
    static getAll(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static create(req: Request, res: Response): Promise<void>;
    static createcomPayement(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static getMyCommandes(req: Request, res: Response): Promise<void>;
    static getMyCommandeById(req: Request, res: Response): Promise<void>;
    static getMyStats(req: Request, res: Response): Promise<void>;
    static updateStatut(req: Request, res: Response): Promise<void>;
    static annulerCommande(req: Request, res: Response): Promise<void>;
    static confirmerCommande(req: Request, res: Response): Promise<void>;
    static getMyClientCommandes(req: Request, res: Response): Promise<void>;
    static fixNegativeStocks(req: Request, res: Response): Promise<void>;
    static marquerEnPreparation(req: Request, res: Response): Promise<void>;
    static marquerPret(req: Request, res: Response): Promise<void>;
    static annulerProduit(req: Request, res: Response): Promise<void>;
    static getGIEStats(req: Request, res: Response): Promise<void>;
    static getMyCommandesWithDetails(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=commandeController.d.ts.map