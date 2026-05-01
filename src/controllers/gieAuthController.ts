import { Request, Response } from 'express';

export class GieAuthController {
  static async loginGIE(req: Request, res: Response): Promise<void> {
    // Mock: à remplacer par la vraie logique
    res.json({ success: true, message: 'Connexion GIE (mock)' });
  }
} 