import { prisma } from '../config/database';
import { AuthUtils } from '../utils/auth';
import { CreateAdministrateurDto, IAdministrateur } from '../types';

export class AdministrateurService {
  // Créer un nouvel administrateur
  static async create(data: CreateAdministrateurDto): Promise<IAdministrateur> {
    const hashedPassword = await AuthUtils.hashPassword(data.password);

    const administrateur = await prisma.administrateur.create({
      data: {
        email: data.email,
        password: hashedPassword,
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone,
        role: data.role || 'ADMIN'
      }
    });

    // Retourner sans le mot de passe
    const { password, ...adminWithoutPassword } = administrateur;
    return adminWithoutPassword as IAdministrateur;
  }

  // Trouver un administrateur par email
  static async findByEmail(email: string) {
    return prisma.administrateur.findUnique({
      where: { email }
    });
  }

  // Trouver un administrateur par ID
  static async findById(id: string): Promise<IAdministrateur | null> {
    const administrateur = await prisma.administrateur.findUnique({
      where: { id }
    });

    if (!administrateur) return null;

    const { password, ...adminWithoutPassword } = administrateur;
    return adminWithoutPassword as IAdministrateur;
  }

  // Récupérer tous les administrateurs
  static async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [administrateurs, total] = await Promise.all([
      prisma.administrateur.findMany({
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          nom: true,
          prenom: true,
          telephone: true,
          role: true,
          createdAt: true,
          updatedAt: true
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.administrateur.count()
    ]);

    return {
      administrateurs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // Mettre à jour un administrateur
  static async update(id: string, data: Partial<CreateAdministrateurDto>): Promise<IAdministrateur | null> {
    const updateData: any = { ...data };
    
    if (data.password) {
      updateData.password = await AuthUtils.hashPassword(data.password);
    }

    const administrateur = await prisma.administrateur.update({
      where: { id },
      data: updateData
    });

    if (!administrateur) return null;

    const { password, ...adminWithoutPassword } = administrateur;
    return adminWithoutPassword as IAdministrateur;
  }

  // Supprimer un administrateur
  static async delete(id: string): Promise<boolean> {
    try {
      await prisma.administrateur.delete({
        where: { id }
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  // Authentifier un administrateur
  static async authenticate(email: string, password: string) {
    const administrateur = await this.findByEmail(email);
    
    if (!administrateur) {
      throw new Error('Email ou mot de passe incorrect');
    }

    const isValidPassword = await AuthUtils.comparePassword(password, administrateur.password);
    
    if (!isValidPassword) {
      throw new Error('Email ou mot de passe incorrect');
    }

    const { password: _, ...adminWithoutPassword } = administrateur;
    return adminWithoutPassword;
  }

  // Changer le mot de passe d'un administrateur
  static async changePassword(id: string, currentPassword: string, newPassword: string): Promise<void> {
    const administrateur = await prisma.administrateur.findUnique({
      where: { id }
    });

    if (!administrateur) {
      throw new Error('Administrateur non trouvé');
    }

    // Vérifier l'ancien mot de passe
    const isValidPassword = await AuthUtils.comparePassword(currentPassword, administrateur.password);
    if (!isValidPassword) {
      throw new Error('Ancien mot de passe incorrect');
    }

    // Hasher et mettre à jour le nouveau mot de passe
    const hashedNewPassword = await AuthUtils.hashPassword(newPassword);
    await prisma.administrateur.update({
      where: { id },
      data: { password: hashedNewPassword }
    });
  }
} 