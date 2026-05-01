import { Request, Response } from 'express';
import { RegionService } from '../services/regionService';
import { CreateRegionDto, UpdateRegionDto } from '../types';

export class RegionController {
  // Créer une nouvelle région
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateRegionDto = req.body;
      
      // Validation des données
      if (!data.nom) {
        res.status(400).json({
          success: false,
          message: 'Le nom de la région est obligatoire'
        });
        return;
      }

      const region = await RegionService.create(data);
      
      res.status(201).json({
        success: true,
        message: 'Région créée avec succès',
        data: region
      });
    } catch (error) {
      console.error('Erreur lors de la création de la région:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création de la région',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Récupérer toutes les régions
  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const regions = await RegionService.findAll();
      
      res.status(200).json({
        success: true,
        message: 'Régions récupérées avec succès',
        data: regions
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des régions:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des régions',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Récupérer une région par ID
  static async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      const region = await RegionService.findById(id);
      
      if (!region) {
        res.status(404).json({
          success: false,
          message: 'Région non trouvée'
        });
        return;
      }
      
      res.status(200).json({
        success: true,
        message: 'Région récupérée avec succès',
        data: region
      });
    } catch (error) {
      console.error('Erreur lors de la récupération de la région:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération de la région',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Mettre à jour une région
  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: UpdateRegionDto = req.body;
      
      const region = await RegionService.update(id, data);
      
      res.status(200).json({
        success: true,
        message: 'Région mise à jour avec succès',
        data: region
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la région:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour de la région',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Supprimer une région
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      await RegionService.delete(id);
      
      res.status(200).json({
        success: true,
        message: 'Région supprimée avec succès'
      });
    } catch (error) {
      console.error('Erreur lors de la suppression de la région:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la suppression de la région',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Calculer les frais de livraison
  static async calculateFraisLivraison(req: Request, res: Response): Promise<void> {
    try {
      const { regionSourceId, regionDestinationId } = req.body;
      
      if (!regionSourceId || !regionDestinationId) {
        res.status(400).json({
          success: false,
          message: 'Les IDs des régions source et destination sont obligatoires'
        });
        return;
      }
      
      const fraisLivraison = await RegionService.calculateFraisLivraison(regionSourceId, regionDestinationId);
      
      res.status(200).json({
        success: true,
        message: 'Frais de livraison calculés avec succès',
        data: { fraisLivraison }
      });
    } catch (error) {
      console.error('Erreur lors du calcul des frais de livraison:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors du calcul des frais de livraison',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }

  // Créer les régions par défaut
  static async createDefaultRegions(req: Request, res: Response): Promise<void> {
    try {
      await RegionService.createDefaultRegions();
      
      res.status(200).json({
        success: true,
        message: 'Régions par défaut créées avec succès'
      });
    } catch (error) {
      console.error('Erreur lors de la création des régions par défaut:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création des régions par défaut',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    }
  }
} 