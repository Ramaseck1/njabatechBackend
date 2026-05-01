import { Request, Response } from 'express';
export declare class ClientController {
    static getAll(req: Request, res: Response): Promise<void>;
    static getById(req: Request, res: Response): Promise<void>;
    static create(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
    static createAvis(req: Request, res: Response): Promise<Response>;
    static getByClient(req: Request, res: Response): Promise<Response>;
    static getAllavis(req: Request, res: Response): Promise<Response>;
    static deleteAvisavis(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=clientController.d.ts.map