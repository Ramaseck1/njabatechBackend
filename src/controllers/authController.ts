import { Request, Response } from 'express';
import { AuthUtils } from '../utils/auth';
import { AdministrateurService } from '../services/administrateurService';
import { ClientService } from '../services/clientService';
import { requestPasswordResetService,verifyResetCodeService,resetPasswordService } from '../services/passwordResetService';


import { GIEService } from '../services/gieService';
import { CreateAdministrateurDto, CreateClientDto, CreateGIEDto } from '../types';
import { EmailService } from '../utils/emailService';
import { ResetCodeStore } from '../utils/resetCodeStore';

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
        data: { administrateur, token }
      });
    } catch (error: any) {
      res.status(401).json({ success: false, message: error.message });
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
      res.status(401).json({ success: false, message: error.message });
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
          client: {
            nom: client.nom,
            email: client.email,
            telephone: client.telephone,
            statut: client.statut
          },
          token
        }
      });
    } catch (error: any) {
      res.status(401).json({ success: false, message: error.message });
    }
  }

  // Inscription administrateur
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
        message: "Erreur lors de la création de l'administrateur",
        error: error.message
      });
    }
  }

  // Créer un compte GIE
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

      // Champs obligatoires
      if (!data.password || !data.nom || !data.prenom || !data.telephone) {
        res.status(400).json({
          success: false,
          message: 'Tous les champs obligatoires doivent être remplis'
        });
        return;
      }

      // ✅ Vérification email UNIQUEMENT s'il est fourni
      if (data.email && data.email.trim() !== '') {
        const existingClient = await ClientService.findByEmail(data.email);
        if (existingClient) {
          res.status(400).json({
            success: false,
            message: 'Un client avec cet email existe déjà'
          });
          return;
        }
      } else {
        // ✅ Si email vide/absent, on le force à null pour éviter les conflits en BDD
        data.email = null as any;
      }

      // Vérification téléphone (toujours obligatoire)
      const cleanTelephone = data.telephone.replace(/[\s\-\(\)]/g, ''); // ✅ Nettoyer
const existingClientTel = await ClientService.findByTel(cleanTelephone);
if (existingClientTel) {
  res.status(400).json({
    success: false,
    message: 'Un client avec ce téléphone existe déjà'
  });
  return;
}

// ✅ Stocker le numéro nettoyé (sans espaces)
data.telephone = cleanTelephone;

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
        error: error.message  // ← affiché pour déboguer, à retirer en prod
      });
    }
  }

  // Vérifier le token
  static async verifyToken(req: Request, res: Response): Promise<void> {
    try {
      const authHeader = req.headers.authorization;
      const token = AuthUtils.extractTokenFromHeader(authHeader);

      if (!token) {
        res.status(401).json({ success: false, message: 'Token requis' });
        return;
      }

      const decoded = AuthUtils.verifyToken(token);
      res.json({ success: true, message: 'Token valide', data: decoded });
    } catch (error: any) {
      res.status(401).json({ success: false, message: 'Token invalide' });
    }
  }
static async requestPasswordReset(req: Request, res: Response): Promise<void> {
  try {
    const { email, userType } = req.body;
    if (!email || !userType) {
      res.status(400).json({ success: false, message: "Email et type d'utilisateur requis" });
      return;
    }
    const result = await requestPasswordResetService(email, userType);
    res.json({ success: true, ...result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

static async verifyResetCode(req: Request, res: Response): Promise<void> {
  try {
    const { email, code, userType } = req.body;
    if (!email || !code || !userType) {
      res.status(400).json({ success: false, message: "Email, code et type d'utilisateur requis" });
      return;
    }
    const result = await verifyResetCodeService(email, code, userType);
    res.json({ success: true, ...result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

static async resetPasswordWithCode(req: Request, res: Response): Promise<void> {
  try {
    const { email, newPassword, confirmPassword, userType } = req.body;
    if (!email || !newPassword || !confirmPassword || !userType) {
      res.status(400).json({ success: false, message: "Tous les champs sont requis" });
      return;
    }
    const result = await resetPasswordService(email, newPassword, confirmPassword, userType);
    res.json({ success: true, ...result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
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
        message: "Erreur lors de la récupération de l'utilisateur",
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
          res.status(400).json({ success: false, message: 'Rôle utilisateur inconnu' });
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
      console.error('Erreur updateUser:', error);
      res.status(500).json({
        success: false,
        message: "Erreur lors de la mise à jour de l'utilisateur",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}