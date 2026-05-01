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
        rating: number;
        clientId: string;
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
            rating: number;
            clientId: string;
            produitId: string;
        })[];
        moyenne: number;
    }>;
    static findByClientAndProduit(clientId: string, produitId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        clientId: string;
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
    static getByCategory(categorieId: string, page?: number, limit?: number): Promise<{
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