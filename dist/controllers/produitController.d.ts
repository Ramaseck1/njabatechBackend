import { Request, Response } from 'express';
import multer from 'multer';
export declare const upload: multer.Multer;
export declare class ProduitController {
    static create(req: Request, res: Response): Promise<void>;
    static getAll(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static updateStock(req: Request, res: Response): Promise<void>;
    static search(req: Request, res: Response): Promise<void>;
    static createAvis(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getByAvisProduit(req: Request, res: Response): Promise<void>;
    static getByCategory(req: Request, res: Response): Promise<void>;
    static getOutOfStock(req: Request, res: Response): Promise<void>;
    static getMyProducts(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=produitController.d.ts.map