import { Request, Response } from 'express';
export declare class RegionController {
    static create(req: Request, res: Response): Promise<void>;
    static findAll(req: Request, res: Response): Promise<void>;
    static findById(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static calculateFraisLivraison(req: Request, res: Response): Promise<void>;
    static createDefaultRegions(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=regionController.d.ts.map