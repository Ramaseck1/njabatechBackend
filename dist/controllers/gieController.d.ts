import { Request, Response } from 'express';
export declare class GIEController {
    static create(req: Request, res: Response): Promise<void>;
    static getAll(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static updateStatus(req: Request, res: Response): Promise<void>;
    static getStats(req: Request, res: Response): Promise<void>;
    static search(req: Request, res: Response): Promise<void>;
    static getCommandes(req: Request, res: Response): Promise<void>;
    static getCommandeById(req: Request, res: Response): Promise<void>;
    static getProduits(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=gieController.d.ts.map