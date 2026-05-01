import { PrismaClient } from '@prisma/client';
import { IRegion, CreateRegionDto, UpdateRegionDto } from '../types';

const prisma = new PrismaClient();

export class RegionService {
  // Créer une nouvelle région
  static async create(data: CreateRegionDto): Promise<IRegion> {
    try {
      const region = await prisma.regions.create({
        data: {
          id: `reg_${Date.now()}`,
          nom: data.nom,
          description: data.description,
          fraisLivraisonInterne: data.fraisLivraisonInterne || 500,
          fraisLivraisonExterne: data.fraisLivraisonExterne || 2000,
          updatedAt: new Date()
        },
      });
      return region as IRegion;
    } catch (error) {
      throw new Error(`Erreur lors de la création de la région: ${error}`);
    }
  }

  // Trouver une région par ID
  static async findById(id: string): Promise<IRegion | null> {
    try {
      const region = await prisma.regions.findUnique({
        where: { id },
        include: {
          gies: true,
          commandes: true,
          adresses: true,
        },
      });
      return region as IRegion | null;
    } catch (error) {
      throw new Error(`Erreur lors de la recherche de la région: ${error}`);
    }
  }

  // Trouver une région par nom
  static async findByName(nom: string): Promise<IRegion | null> {
    try {
      const region = await prisma.regions.findUnique({
        where: { nom },
        include: {
          gies: true,
          commandes: true,
          adresses: true,
        },
      });
      return region as IRegion | null;
    } catch (error) {
      throw new Error(`Erreur lors de la recherche de la région: ${error}`);
    }
  }

  // Récupérer toutes les régions
  static async findAll(): Promise<IRegion[]> {
    try {
      const regions = await prisma.regions.findMany({
        include: {
          gies: true,
          commandes: true,
          adresses: true,
        },
        orderBy: { nom: 'asc' },
      });
      return regions as IRegion[];
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des régions: ${error}`);
    }
  }

  // Mettre à jour une région
  static async update(id: string, data: UpdateRegionDto): Promise<IRegion> {
    try {
      const region = await prisma.regions.update({
        where: { id },
        data: {
          nom: data.nom,
          description: data.description,
          fraisLivraisonInterne: data.fraisLivraisonInterne,
          fraisLivraisonExterne: data.fraisLivraisonExterne,
        },
        include: {
          gies: true,
          commandes: true,
          adresses: true,
        },
      });
      return region as IRegion;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour de la région: ${error}`);
    }
  }

  // Supprimer une région
  static async delete(id: string): Promise<void> {
    try {
      await prisma.regions.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Erreur lors de la suppression de la région: ${error}`);
    }
  }

  // Calculer les frais de livraison entre deux régions
  static async calculateFraisLivraison(regionSourceId: string, regionDestinationId: string): Promise<number> {
    try {
      const regionSource = await prisma.regions.findUnique({
        where: { id: regionSourceId },
      });

      const regionDestination = await prisma.regions.findUnique({
        where: { id: regionDestinationId },
      });

      if (!regionSource || !regionDestination) {
        throw new Error('Région source ou destination introuvable');
      }

      // Si c'est la même région, utiliser les frais internes
      if (regionSourceId === regionDestinationId) {
        return regionDestination.fraisLivraisonInterne;
      }

      // Sinon, utiliser les frais externes
      return regionDestination.fraisLivraisonExterne;
    } catch (error) {
      throw new Error(`Erreur lors du calcul des frais de livraison: ${error}`);
    }
  }

  // Créer les régions par défaut (Saint-Louis, Mbour, Dakar)
  static async createDefaultRegions(): Promise<void> {
    try {
      const defaultRegions = [
        {
          nom: 'Dakar',
          description: 'Région de Dakar',
          fraisLivraisonInterne: 500,
          fraisLivraisonExterne: 2000,
        },
        {
          nom: 'Saint-Louis',
          description: 'Région de Saint-Louis',
          fraisLivraisonInterne: 500,
          fraisLivraisonExterne: 2000,
        },
        {
          nom: 'Mbour',
          description: 'Région de Mbour',
          fraisLivraisonInterne: 500,
          fraisLivraisonExterne: 2000,
        },
      ];

      for (const regionData of defaultRegions) {
        const existingRegion = await prisma.regions.findUnique({
          where: { nom: regionData.nom },
        });

        if (!existingRegion) {
          await prisma.regions.create({
            data: {
              id: `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
              ...regionData,
              updatedAt: new Date()
            },
          });
        }
      }
    } catch (error) {
      throw new Error(`Erreur lors de la création des régions par défaut: ${error}`);
    }
  }
} 