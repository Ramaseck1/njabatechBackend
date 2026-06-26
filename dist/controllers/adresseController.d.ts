import { Request, Response } from 'express';
export declare class AdresseController {
    static create(req: Request, res: Response): Promise<void>;
    static findAll(req: Request, res: Response): Promise<void>;
    static findById(req: Request, res: Response): Promise<void>;
    static findByRegion(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static createDefaultAdresses(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=adresseController.d.ts.map