import { Request, Response } from 'express';
import { AdresseService } from '../services/adresseService';
import { CreateAdresseDto, UpdateAdresseDto } from '../types';

export class AdresseController {
  // Créer une nouvelle adresse
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateAdresseDto = req.body;
      
      // Validation des données
      if (!data.nom || !data.regionId) {
        res.status(400).json({
          success: false,
          message: 'Le nom de l\'adresse et la région sont obligatoires'
        });
        return;
      }

      const adresse = await AdresseService.create(data);
      
      res.status(201).json({
        success: true,
        message: 'Adresse créée avec succès',
        data: adresse
      });
    } catch (error) {
      console.error('Erreur lors de la création de l\'adresse:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création de l\'adresse',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Récupérer toutes les adresses
  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const adresses = await AdresseService.findAll();
      
      res.status(200).json({
        success: true,
        message: 'Adresses récupérées avec succès',
        data: adresses
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des adresses:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des adresses',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Récupérer une adresse par ID
  static async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      const adresse = await AdresseService.findById(id);
      
      if (!adresse) {
        res.status(404).json({
          success: false,
          message: 'Adresse non trouvée'
        });
        return;
      }
      
      res.status(200).json({
        success: true,
        message: 'Adresse récupérée avec succès',
        data: adresse
      });
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'adresse:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération de l\'adresse',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Récupérer les adresses par région
  static async findByRegion(req: Request, res: Response): Promise<void> {
    try {
      const { regionId } = req.params;
      
      const adresses = await AdresseService.findByRegion(regionId);
      
      res.status(200).json({
        success: true,
        message: 'Adresses récupérées avec succès',
        data: adresses
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des adresses par région:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des adresses par région',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Mettre à jour une adresse
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: UpdateAdresseDto = req.body;
      
      const adresse = await AdresseService.update(id, data);
      
      res.status(200).json({
        success: true,
        message: 'Adresse mise à jour avec succès',
        data: adresse
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'adresse:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour de l\'adresse',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Supprimer une adresse
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      await AdresseService.delete(id);
      
      res.status(200).json({
        success: true,
        message: 'Adresse supprimée avec succès'
      });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'adresse:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la suppression de l\'adresse',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Créer les adresses par défaut
  static async createDefaultAdresses(req: Request, res: Response): Promise<void> {
    try {
      await AdresseService.createDefaultAdresses();
      
      res.status(200).json({
        success: true,
        message: 'Adresses par défaut créées avec succès'
      });
    } catch (error) {
      console.error('Erreur lors de la création des adresses par défaut:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création des adresses par défaut',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }
} 