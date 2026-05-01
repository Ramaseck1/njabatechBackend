import { Request, Response } from 'express';
import prisma from '../config/database';
import { ClientService } from '../services/clientService';
import { CreateAvisDto } from '../types';

export class ClientController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const clients = await prisma.client.findMany();
      res.json({ success: true, data: clients });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const client = await prisma.client.findUnique({ where: { id } });
      if (!client) {
        res.status(404).json({ success: false, message: "Client non trouvé" });
        return;
      }
      res.json({ success: true, data: client });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { nom, prenom, email, password, telephone, adresse, administrateurId } = req.body;
      const client = await prisma.client.create({
        data: { nom, prenom, email, password, telephone, adresse, administrateurId }
      });
      res.status(201).json({ success: true, data: client });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const { nom, prenom, email, password, telephone, adresse, administrateurId } = req.body;
      const client = await prisma.client.update({
        where: { id },
        data: { nom, prenom, email, password, telephone, adresse, administrateurId }
      });
      res.json({ success: true, data: client });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await prisma.client.delete({ where: { id } });
      res.json({ success: true, message: "Client supprimé" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }

  //avis
 static async createAvis(req: Request, res: Response): Promise<Response> {
  try {
    const clientId = (req as any).user?.id;
      const { rating, comment } = req.body as CreateAvisDto;

    if (!clientId) {
      return res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
    }

    const avis = await ClientService.createAvis(clientId, { rating, comment });

    return res.status(201).json({ success: true, data: avis });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

static async getByClient(req: Request, res: Response): Promise<Response> {
  try {
    const clientId = (req as any).user?.id;

    if (!clientId) {
      return res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
    }

    const avis = await ClientService.findByClientAvis(clientId);
    return res.json({ success: true, data: avis });  // <-- ajouter return ici
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message }); // <-- et ici
  }
}


static async getAllavis(req: Request, res: Response): Promise<Response> {
  try {
    const avis = await ClientService.findAllAvis();
    return res.json({ success: true, data: avis });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

  static async deleteAvisavis(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ClientService.deleteAvis(id);
      res.json({ success: true, message: 'Avis supprimé' });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
} 