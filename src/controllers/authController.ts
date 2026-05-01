import { Request, Response } from 'express';
import { AuthUtils } from '../utils/auth';
import { AdministrateurService } from '../services/administrateurService';
import { ClientService } from '../services/clientService';
import { GIEService } from '../services/gieService';
import { CreateAdministrateurDto, CreateClientDto, CreateGIEDto } from '../types';

export class AuthController {
  // Connexion administrateur
  static async loginAdmin(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: 'Email et mot de passe requis'
        });
        return;
      }

      const administrateur = await AdministrateurService.authenticate(email, password);
      const token = AuthUtils.generateToken({
        id: administrateur.id,
        email: administrateur.email,
        role: administrateur.role
      });

      res.json({
        success: true,
        message: 'Connexion réussie',
        data: {
          administrateur,
          token
        }
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  }

  // Connexion GIE
  static async loginGIE(req: Request, res: Response): Promise<void> {
    try {
      const { identifiant, password } = req.body;

      if (!identifiant || !password) {
        res.status(400).json({
          success: false,
          message: 'Email/téléphone et mot de passe requis'
        });
        return;
      }

      const gie = await GIEService.authenticate(identifiant, password);
      const token = AuthUtils.generateToken({
        id: gie.id,
        email: gie.email ?? '',
        role: 'GIE'
      });

      res.json({
        success: true,
        message: 'Connexion GIE réussie',
        data: {
          gie: {
            id: gie.id,
            nom: gie.nom,
            email: gie.email,
            telephone: gie.telephone,
            statut: gie.statut
          },
          token
        }
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  }

  // Connexion client
  static async loginClient(req: Request, res: Response): Promise<void> {
    try {
      const { identifiant, password } = req.body;

      if (!identifiant || !password) {
        res.status(400).json({
          success: false,
          message: 'Email et mot de passe requis'
        });
        return;
      }

      const client = await ClientService.authenticate(identifiant, password);
      const token = AuthUtils.generateTokenclient({
        id: client.id,
        telephone: client.telephone,
        role: 'CLIENT'
      });

      res.json({
        success: true,
        message: 'Connexion réussie',
        data: {
          client:{
            nom: client.nom,
            email: client.email,
            telephone: client.telephone,
            statut: client.statut
          },
          token
        }
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  }

  // Inscription administrateur (réservé aux super admins)
  static async registerAdmin(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateAdministrateurDto = req.body;

      if (!data.email || !data.password || !data.nom || !data.prenom) {
        res.status(400).json({
          success: false,
          message: 'Tous les champs obligatoires doivent être remplis'
        });
        return;
      }

      const existingAdmin = await AdministrateurService.findByEmail(data.email);
      if (existingAdmin) {
        res.status(400).json({
          success: false,
          message: 'Un administrateur avec cet email existe déjà'
        });
        return;
      }

      const administrateur = await AdministrateurService.create(data);

      res.status(201).json({
        success: true,
        message: 'Administrateur créé avec succès',
        data: administrateur
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création de l\'administrateur',
        error: error.message
      });
    }
  }

  // Créer un compte GIE (réservé aux admins)
  static async registerGIE(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateGIEDto = req.body;
      const administrateurId = (req as any).user.id;

      if (!data.telephone || !data.password || !data.nom) {
        res.status(400).json({
          success: false,
          message: 'telephone, mot de passe et nom du GIE sont obligatoires'
        });
        return;
      }

      const gie = await GIEService.create(data, administrateurId);

      res.status(201).json({
        success: true,
        message: 'Compte GIE créé avec succès',
        data: {
          id: gie.id,
          nom: gie.nom,
          telephone: gie.telephone,
          statut: gie.statut
        }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création du compte GIE',
        error: error.message
      });
    }
  }

  // Inscription client (publique)
  static async registerClient(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateClientDto = req.body;

      if ( !data.password || !data.nom || !data.prenom || !data.telephone) {
        res.status(400).json({
          success: false,
          message: 'Tous les champs obligatoires doivent être remplis'
        });
        return;
      }

      const existingClient = await ClientService.findByEmail(data.email);
      const existingClienttel = await ClientService.findByTel(data.telephone);
      if (existingClient) {
        res.status(400).json({
          success: false,
          message: 'Un client avec cet email existe déjà'
        });
        return;
      }
       if (existingClienttel) {
        res.status(400).json({
          success: false,
          message: 'Un client avec cet telephone existe déjà'
        });
        return;
      }

      const defaultAdmin = await AdministrateurService.findByEmail('admin@gie.com');
      if (!defaultAdmin) {
        res.status(500).json({
          success: false,
          message: 'Erreur de configuration système'
        });
        return;
      }

      const client = await ClientService.create(data, defaultAdmin.id);

      res.status(201).json({
        success: true,
        message: 'Compte client créé avec succès',
        data: {
          id: client.id,
          nom: client.nom,
          prenom: client.prenom,
          email: client.email,
          telephone: client.telephone
        }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la création du compte client',
        error: error.message
      });
    }
  }

  // Vérifier le token
  static async verifyToken(req: Request, res: Response): Promise<void> {
    try {
      const authHeader = req.headers.authorization;
      const token = AuthUtils.extractTokenFromHeader(authHeader);

      if (!token) {
        res.status(401).json({
          success: false,
          message: 'Token requis'
        });
        return;
      }

      const decoded = AuthUtils.verifyToken(token);

      res.json({
        success: true,
        message: 'Token valide',
        data: decoded
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: 'Token invalide'
      });
    }
  }

  // NOUVELLE MÉTHODE : Réinitialiser le mot de passe par téléphone (GIE uniquement)
  static async resetPasswordByPhone(req: Request, res: Response): Promise<void> {
    try {
      const { telephone, currentPassword, newPassword } = req.body;

      if (!telephone || !currentPassword || !newPassword) {
        res.status(400).json({
          success: false,
          message: 'Numéro de téléphone, ancien mot de passe et nouveau mot de passe requis'
        });
        return;
      }

      // Validation du nouveau mot de passe
      if (newPassword.length < 6) {
        res.status(400).json({
          success: false,
          message: 'Le nouveau mot de passe doit contenir au moins 6 caractères'
        });
        return;
      }

      // Rechercher l'utilisateur GIE par téléphone
      const gie = await GIEService.findByPhone(telephone);
      
      if (!gie) {
        res.status(404).json({
          success: false,
          message: 'Aucun utilisateur trouvé avec ce numéro de téléphone'
        });
        return;
      }

      // Changer le mot de passe en vérifiant l'ancien
      await GIEService.changePassword(gie.id, currentPassword, newPassword);

      res.json({
        success: true,
        message: 'Mot de passe modifié avec succès',
        data: {
          message: 'Vous pouvez maintenant vous connecter avec votre nouveau mot de passe'
        }
      });

    } catch (error: any) {
      let errorMessage = 'Erreur lors de la modification du mot de passe';
      let statusCode = 500;

      if (error.message.includes('incorrect') || error.message.includes('Mot de passe actuel incorrect')) {
        errorMessage = 'Ancien mot de passe incorrect';
        statusCode = 400;
      } else if (error.message.includes('6 caractères')) {
        errorMessage = 'Le nouveau mot de passe doit contenir au moins 6 caractères';
        statusCode = 400;
      }

      res.status(statusCode).json({
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // NOUVELLE MÉTHODE : Réinitialiser le mot de passe par email (Admin et Client)
  static async resetPasswordByEmail(req: Request, res: Response): Promise<void> {
    try {
      const { email, currentPassword, newPassword, userType } = req.body;

      if (!email || !currentPassword || !newPassword || !userType) {
        res.status(400).json({
          success: false,
          message: 'Email, ancien mot de passe, nouveau mot de passe et type d\'utilisateur requis'
        });
        return;
      }

      // Validation du nouveau mot de passe
      if (newPassword.length < 6) {
        res.status(400).json({
          success: false,
          message: 'Le nouveau mot de passe doit contenir au moins 6 caractères'
        });
        return;
      }

      let user = null;

      switch (userType.toUpperCase()) {
        case 'ADMIN':
        case 'ADMINISTRATEUR':
          user = await AdministrateurService.findByEmail(email);
          if (user) {
            // Utiliser changePassword qui vérifie l'ancien mot de passe
            await AdministrateurService.changePassword(user.id, currentPassword, newPassword);
          }
          break;

        case 'CLIENT':
          user = await ClientService.findByEmail(email);
          if (user) {
            // Utiliser changePassword qui vérifie l'ancien mot de passe
            await ClientService.changePassword(user.id, currentPassword, newPassword);
          }
          break;

        default:
          res.status(400).json({
            success: false,
            message: 'Type d\'utilisateur non valide. Utilisez ADMIN ou CLIENT'
          });
          return;
      }

      if (!user) {
        res.status(404).json({
          success: false,
          message: 'Aucun utilisateur trouvé avec cet email'
        });
        return;
      }

      res.json({
        success: true,
        message: 'Mot de passe modifié avec succès',
        data: {
          message: 'Vous pouvez maintenant vous connecter avec votre nouveau mot de passe'
        }
      });

    } catch (error: any) {
      let errorMessage = 'Erreur lors de la modification du mot de passe';
      let statusCode = 500;

      if (error.message.includes('incorrect') || error.message.includes('Mot de passe actuel incorrect')) {
        errorMessage = 'Ancien mot de passe incorrect';
        statusCode = 400;
      } else if (error.message.includes('6 caractères')) {
        errorMessage = 'Le nouveau mot de passe doit contenir au moins 6 caractères';
        statusCode = 400;
      }

      res.status(statusCode).json({
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Changer le mot de passe (avec authentification)
  static async changePassword(req: Request, res: Response): Promise<void> {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = (req as any).user.id;
      const userRole = (req as any).user.role;

      if (!currentPassword || !newPassword) {
        res.status(400).json({
          success: false,
          message: 'Ancien et nouveau mot de passe requis'
        });
        return;
      }

      let user;
      switch (userRole) {
        case 'ADMIN':
        case 'SUPER_ADMIN':
          user = await AdministrateurService.findById(userId);
          if (!user) {
            res.status(404).json({
              success: false,
              message: 'Administrateur non trouvé'
            });
            return;
          }
          await AdministrateurService.changePassword(userId, currentPassword, newPassword);
          break;
          
        case 'GIE':
          user = await GIEService.findById(userId);
          if (!user) {
            res.status(404).json({
              success: false,
              message: 'GIE non trouvé'
            });
            return;
          }
          await GIEService.changePassword(userId, currentPassword, newPassword);
          break;
          
        case 'CLIENT':
          user = await ClientService.findById(userId);
          if (!user) {
            res.status(404).json({
              success: false,
              message: 'Client non trouvé'
            });
            return;
          }
          await ClientService.changePassword(userId, currentPassword, newPassword);
          break;
          
        default:
          res.status(400).json({
            success: false,
            message: 'Type d\'utilisateur non reconnu'
          });
          return;
      }

      res.json({
        success: true,
        message: 'Mot de passe modifié avec succès'
      });
      
    } catch (error: any) {
      let errorMessage = 'Erreur lors de la modification du mot de passe';
      let statusCode = 500;

      if (error.message.includes('incorrect') || error.message.includes('Mot de passe actuel incorrect')) {
        errorMessage = 'Mot de passe actuel incorrect';
        statusCode = 400;
      } else if (error.message.includes('6 caractères')) {
        errorMessage = 'Le nouveau mot de passe doit contenir au moins 6 caractères';
        statusCode = 400;
      } else if (error.message.includes('non trouvé')) {
        errorMessage = 'Utilisateur non trouvé';
        statusCode = 404;
      }

      res.status(statusCode).json({
        success: false,
        message: errorMessage,
        ...(process.env.NODE_ENV === 'development' && { error: error.message })
      });
    }
  }

  static async getUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const userRole = (req as any).user.role;

      let user = null;
      switch (userRole) {
        case 'ADMIN':
        case 'SUPER_ADMIN':
          user = await AdministrateurService.findById(userId);
          break;
        case 'GIE':
          user = await GIEService.findById(userId);
          break;
        case 'CLIENT':
          user = await ClientService.findById(userId);
          break;
        default:
          res.status(400).json({ success: false, message: 'Rôle utilisateur inconnu' });
          return;
      }

      if (!user) {
        res.status(404).json({ success: false, message: 'Utilisateur non trouvé' });
        return;
      }

      res.json({ success: true, data: user });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: 'Erreur lors de la récupération de l\'utilisateur', 
        error: process.env.NODE_ENV === 'development' ? error.message : undefined 
      });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const userRole = (req as any).user.role;
      const data = req.body;

      if (!data || Object.keys(data).length === 0) {
        res.status(400).json({
          success: false,
          message: 'Aucune donnée fournie pour la mise à jour'
        });
        return;
      }

      let user = null;
      switch (userRole) {
        case 'ADMIN':
        case 'SUPER_ADMIN':
          user = await AdministrateurService.update(userId, data);
          break;
        case 'GIE':
          user = await GIEService.update(userId, data);
          break;
        case 'CLIENT':
          user = await ClientService.update(userId, data);
          break;
        default:
          res.status(400).json({
            success: false,
            message: 'Rôle utilisateur inconnu'
          });
          return;
      }

      if (!user) {
        res.status(404).json({ success: false, message: 'Utilisateur non trouvé' });
        return;
      }

      res.json({
        success: true,
        message: 'Utilisateur mis à jour avec succès',
        data: user
      });
    } catch (error: any) {
      console.error("Erreur updateUser:", error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour de l\'utilisateur',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}