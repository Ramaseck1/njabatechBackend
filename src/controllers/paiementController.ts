import { Request, Response } from 'express';
import prisma from '../config/database';
import { Prisma, StatutPaiement } from '@prisma/client';

export class PaiementController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const paiements = await prisma.paiement.findMany();
      res.json({ success: true, data: paiements });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const paiement = await prisma.paiement.findUnique({ where: { id } });
      if (!paiement) {
        res.status(404).json({ success: false, message: "Paiement non trouvé" });
        return;
      }
      res.json({ success: true, data: paiement });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { commandeId, montant, methode, statut: statutInput, reference } = req.body;

      // Vérifier s'il existe déjà un paiement pour cette commande
      const paiementExistant = await prisma.paiement.findUnique({ where: { commandeId } });
      if (paiementExistant) {
        res.status(400).json({ success: false, message: "Cette commande a déjà un paiement associé." });
        return;
      }

      let statut = 'EN_ATTENTE';
      // Logique métier pour le statut selon la méthode de paiement
      if (
        methode === 'MOBILE_MONEY' ||
        methode === 'WAVE' ||
        methode === 'ORANGE_MONEY'
      ) {
        statut = 'VALIDE';
      } else if (methode === 'ESPECES' || methode === 'PAIEMENT_A_LA_LIVRAISON') {
        statut = 'EN_ATTENTE';
      } else if (statutInput) {
        statut = statutInput;
      }
      const paiement = await prisma.paiement.create({
        data: { commandeId, montant, methode, statut: statut as StatutPaiement, reference }
      });
      res.status(201).json({ success: true, data: paiement });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const { commandeId, montant, methode, statut, reference } = req.body;
      const paiement = await prisma.paiement.update({
        where: { id },
        data: { commandeId, montant, methode, statut, reference }
      });
      res.json({ success: true, data: paiement });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await prisma.paiement.delete({ where: { id } });
      res.json({ success: true, message: "Paiement supprimé" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  }
  static async updateStatut(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const { statut } = req.body;
      if (!statut) {
        res.status(400).json({ success: false, message: "Le statut est requis" });
        return;
      }
      const paiement = await prisma.paiement.update({
        where: { id },
        data: { statut }
      });
      res.json({ success: true, data: paiement });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur lors de la mise à jour du statut du paiement" });
    }
  }
} 