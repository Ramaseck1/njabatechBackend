import { CreateProduitDto, IProduit } from '../types';
export declare class ProduitService {
    static create(data: CreateProduitDto): Promise<IProduit>;
    static createAvis(data: {
        clientId: string;
        produitId: string;
        rating: number;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        rating: number;
        produitId: string;
    }>;
    static getByAvisProduit(produitId: string): Promise<{
        avis: ({
            client: {
                id: string;
                nom: string;
                prenom: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            rating: number;
            produitId: string;
        })[];
        moyenne: number;
    }>;
    static findByClientAndProduit(clientId: string, produitId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        rating: number;
        produitId: string;
    } | null>;
    static findById(id: string): Promise<IProduit | null>;
    static findAll(page?: number, limit?: number, gieId?: string): Promise<{
        produits: IProduit[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static getTopAchetes(limit?: number): Promise<{
        totalAchats: number;
        nombreCommandes: number;
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            image: string | null;
            conservation: string | null;
            couleur: string | null;
        } | null;
        gie: {
            id: string;
            email: string | null;
            nom: string;
        };
        id: string;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        statut: import("@/generated/prisma").$Enums.StatutProduit;
        description: string | null;
        quantite: string;
        prix: number;
        stock: number;
        image: string | null;
        vues: number;
        gieId: string;
        categorieId: string | null;
    }[]>;
    static incrementerVues(_id: string): Promise<void>;
    static update(id: string, data: Partial<CreateProduitDto>): Promise<IProduit | null>;
    static delete(id: string): Promise<void>;
    static updateStock(id: string, quantite: number): Promise<IProduit | null>;
    static search(searchTerm: string, page?: number, limit?: number): Promise<{
        produits: IProduit[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static getByCategory(categorieId: string, page?: number, limit?: number, excludeId?: string): Promise<{
        produits: IProduit[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static getOutOfStock(page?: number, limit?: number): Promise<{
        produits: IProduit[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
}
//# sourceMappingURL=produitService.d.ts.map