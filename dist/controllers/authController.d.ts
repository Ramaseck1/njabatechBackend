import { Request, Response } from 'express';
export declare class AuthController {
    static loginAdmin(req: Request, res: Response): Promise<void>;
    static loginGIE(req: Request, res: Response): Promise<void>;
    static loginClient(req: Request, res: Response): Promise<void>;
    static registerAdmin(req: Request, res: Response): Promise<void>;
    static registerGIE(req: Request, res: Response): Promise<void>;
    static registerClient(req: Request, res: Response): Promise<void>;
    static verifyToken(req: Request, res: Response): Promise<void>;
    static resetPasswordByPhone(req: Request, res: Response): Promise<void>;
    static resetPasswordByEmail(req: Request, res: Response): Promise<void>;
    static changePassword(req: Request, res: Response): Promise<void>;
    static getUser(req: Request, res: Response): Promise<void>;
    static updateUser(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=authController.d.ts.map