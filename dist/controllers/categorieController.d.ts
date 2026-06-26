import { Request, Response } from 'express';
export declare class CategorieController {
    static create(req: Request, res: Response): Promise<void>;
    static getAll(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static search(req: Request, res: Response): Promise<void>;
    static getWithProductCount(req: Request, res: Response): Promise<void>;
    static createDefaultCategories(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=categorieController.d.ts.map