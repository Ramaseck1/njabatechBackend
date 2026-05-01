"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrateurService = void 0;
const database_1 = require("../config/database");
const auth_1 = require("../utils/auth");
class AdministrateurService {
    static async create(data) {
        const hashedPassword = await auth_1.AuthUtils.hashPassword(data.password);
        const administrateur = await database_1.prisma.administrateur.create({
            data: {
                email: data.email,
                password: hashedPassword,
                nom: data.nom,
                prenom: data.prenom,
                telephone: data.telephone,
                role: data.role || 'ADMIN'
            }
        });
        const { password, ...adminWithoutPassword } = administrateur;
        return adminWithoutPassword;
    }
    static async findByEmail(email) {
        return database_1.prisma.administrateur.findUnique({
            where: { email }
        });
    }
    static async findById(id) {
        const administrateur = await database_1.prisma.administrateur.findUnique({
            where: { id }
        });
        if (!administrateur)
            return null;
        const { password, ...adminWithoutPassword } = administrateur;
        return adminWithoutPassword;
    }
    static async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [administrateurs, total] = await Promise.all([
            database_1.prisma.administrateur.findMany({
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
            database_1.prisma.administrateur.count()
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
    static async update(id, data) {
        const updateData = { ...data };
        if (data.password) {
            updateData.password = await auth_1.AuthUtils.hashPassword(data.password);
        }
        const administrateur = await database_1.prisma.administrateur.update({
            where: { id },
            data: updateData
        });
        if (!administrateur)
            return null;
        const { password, ...adminWithoutPassword } = administrateur;
        return adminWithoutPassword;
    }
    static async delete(id) {
        try {
            await database_1.prisma.administrateur.delete({
                where: { id }
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    static async authenticate(email, password) {
        const administrateur = await this.findByEmail(email);
        if (!administrateur) {
            throw new Error('Email ou mot de passe incorrect');
        }
        const isValidPassword = await auth_1.AuthUtils.comparePassword(password, administrateur.password);
        if (!isValidPassword) {
            throw new Error('Email ou mot de passe incorrect');
        }
        const { password: _, ...adminWithoutPassword } = administrateur;
        return adminWithoutPassword;
    }
    static async changePassword(id, currentPassword, newPassword) {
        const administrateur = await database_1.prisma.administrateur.findUnique({
            where: { id }
        });
        if (!administrateur) {
            throw new Error('Administrateur non trouvé');
        }
        const isValidPassword = await auth_1.AuthUtils.comparePassword(currentPassword, administrateur.password);
        if (!isValidPassword) {
            throw new Error('Ancien mot de passe incorrect');
        }
        const hashedNewPassword = await auth_1.AuthUtils.hashPassword(newPassword);
        await database_1.prisma.administrateur.update({
            where: { id },
            data: { password: hashedNewPassword }
        });
    }
}
exports.AdministrateurService = AdministrateurService;
//# sourceMappingURL=administrateurService.js.map