import { GIE, StatutGIE } from '@prisma/client';
import { CreateGIEDto } from '../types';
export declare class GIEService {
    static create(data: CreateGIEDto, administrateurId: string): Promise<GIE>;
    static findByPhone(telephone: string): Promise<GIE | null>;
    static resetPassword(id: number, newPassword: string): Promise<void>;
    static authenticate(emailOrPhone: string, password: string): Promise<GIE>;
    static findAll(page?: number, limit?: number, search?: string): Promise<{
        gies: ({
            administrateur: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            };
            _count: {
                produits: number;
            };
        } & {
            id: string;
            email: string | null;
            password: string;
            nom: string;
            telephone: string | null;
            createdAt: Date;
            updatedAt: Date;
            adresse: string | null;
            statut: import(".prisma/client").$Enums.StatutGIE;
            administrateurId: string;
            description: string | null;
            logo: string | null;
            url: string | null;
            membre: number | null;
            Annee: Date | null;
            specialite: number | null;
            regionId: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static findById(id: string): Promise<GIE | null>;
    static update(id: string, data: Partial<CreateGIEDto>): Promise<GIE>;
    static delete(id: string): Promise<void>;
    static updateStatus(id: string, statut: StatutGIE): Promise<GIE>;
    static search(searchTerm: string, page?: number, limit?: number): Promise<{
        gies: ({
            administrateur: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            };
            _count: {
                produits: number;
            };
        } & {
            id: string;
            email: string | null;
            password: string;
            nom: string;
            telephone: string | null;
            createdAt: Date;
            updatedAt: Date;
            adresse: string | null;
            statut: import(".prisma/client").$Enums.StatutGIE;
            administrateurId: string;
            description: string | null;
            logo: string | null;
            url: string | null;
            membre: number | null;
            Annee: Date | null;
            specialite: number | null;
            regionId: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static validatePassword(gieId: string, password: string): Promise<boolean>;
    static changePassword(gieId: string, currentPassword: string, newPassword: string): Promise<void>;
    static getStats(id: string): Promise<{
        totalProduits: number;
        produitsEnStock: number;
        produitsEnRupture: number;
        tauxDisponibilite: number;
    }>;
}
//# sourceMappingURL=gieService.d.ts.map