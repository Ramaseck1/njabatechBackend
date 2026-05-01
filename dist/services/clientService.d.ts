import { CreateClientDto, IClient } from '../types';
interface CreateAvisDto {
    rating?: number;
    comment?: string;
}
export declare class ClientService {
    static create(data: CreateClientDto, administrateurId: string): Promise<IClient>;
    static createAvis(clientId: string, data: CreateAvisDto): Promise<{
        client: {
            nom: string;
            prenom: string;
        };
    } & {
        id: string;
        nom: string | null;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        clientId: string;
    }>;
    static findByClientAvis(clientId: string): Promise<({
        client: {
            nom: string;
            prenom: string;
        };
    } & {
        id: string;
        nom: string | null;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        clientId: string;
    })[]>;
    static findAllAvis(): Promise<({
        client: {
            id: string;
            email: string | null;
            nom: string;
            prenom: string;
        };
    } & {
        id: string;
        nom: string | null;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        clientId: string;
    })[]>;
    static deleteAvis(id: string): Promise<void>;
    static findByEmail(email: string): Promise<{
        id: string;
        email: string | null;
        password: string;
        nom: string;
        prenom: string;
        telephone: string;
        createdAt: Date;
        updatedAt: Date;
        adresse: string | null;
        statut: import("@/generated/prisma").$Enums.StatutClient;
        administrateurId: string;
    } | null>;
    static findByTel(telephone: string): Promise<{
        id: string;
        email: string | null;
        password: string;
        nom: string;
        prenom: string;
        telephone: string;
        createdAt: Date;
        updatedAt: Date;
        adresse: string | null;
        statut: import("@/generated/prisma").$Enums.StatutClient;
        administrateurId: string;
    } | null>;
    static findById(id: string): Promise<IClient | null>;
    static findAll(page?: number, limit?: number, administrateurId?: string): Promise<{
        clients: {
            administrateur: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            };
            id: string;
            email: string | null;
            nom: string;
            prenom: string;
            telephone: string;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                commandes: number;
            };
            adresse: string | null;
            statut: import("@/generated/prisma").$Enums.StatutClient;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static update(id: string, data: Partial<CreateClientDto>): Promise<IClient | null>;
    static delete(id: string): Promise<boolean>;
    static updateStatus(id: string, statut: 'ACTIF' | 'INACTIF' | 'BLOQUE'): Promise<IClient | null>;
    static authenticate(identifiant: string, password: string): Promise<{
        id: string;
        email: string | null;
        nom: string;
        prenom: string;
        telephone: string;
        createdAt: Date;
        updatedAt: Date;
        adresse: string | null;
        statut: import("@/generated/prisma").$Enums.StatutClient;
        administrateurId: string;
    }>;
    static getStats(id: string): Promise<{
        totalCommandes: number;
        totalDepense: number;
        commandesRecentes: {
            id: string;
            statut: import("@/generated/prisma").$Enums.StatutCommande;
            numero: string;
            montant: number;
            dateCommande: Date;
        }[];
    }>;
    static search(searchTerm: string, page?: number, limit?: number): Promise<{
        clients: {
            administrateur: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            };
            id: string;
            email: string | null;
            nom: string;
            prenom: string;
            telephone: string;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                commandes: number;
            };
            adresse: string | null;
            statut: import("@/generated/prisma").$Enums.StatutClient;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static changePassword(id: string, currentPassword: string, newPassword: string): Promise<void>;
}
export {};
//# sourceMappingURL=clientService.d.ts.map