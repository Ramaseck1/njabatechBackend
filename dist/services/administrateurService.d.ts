import { CreateAdministrateurDto, IAdministrateur } from '../types';
export declare class AdministrateurService {
    static create(data: CreateAdministrateurDto): Promise<IAdministrateur>;
    static findByEmail(email: string): Promise<{
        id: string;
        email: string;
        password: string;
        nom: string;
        prenom: string;
        telephone: string | null;
        role: import("@/generated/prisma").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    static findById(id: string): Promise<IAdministrateur | null>;
    static findAll(page?: number, limit?: number): Promise<{
        administrateurs: {
            id: string;
            email: string;
            nom: string;
            prenom: string;
            telephone: string | null;
            role: import("@/generated/prisma").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static update(id: string, data: Partial<CreateAdministrateurDto>): Promise<IAdministrateur | null>;
    static delete(id: string): Promise<boolean>;
    static authenticate(email: string, password: string): Promise<{
        id: string;
        email: string;
        nom: string;
        prenom: string;
        telephone: string | null;
        role: import("@/generated/prisma").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static changePassword(id: string, currentPassword: string, newPassword: string): Promise<void>;
}
//# sourceMappingURL=administrateurService.d.ts.map