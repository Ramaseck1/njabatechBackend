import { ICategorie } from '../types';
export declare class CategorieService {
    static create(data: {
        nom: string;
        description?: string;
        couleur?: string;
        image?: string;
    }): Promise<ICategorie>;
    static findById(id: string): Promise<ICategorie | null>;
    static findByNom(nom: string): Promise<ICategorie | null>;
    static findAll(page?: number, limit?: number): Promise<{
        categories: ({
            _count: {
                produits: number;
            };
        } & {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            image: string | null;
            conservation: string | null;
            couleur: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static update(id: string, data: Partial<{
        nom: string;
        description: string;
        couleur: string;
        image: string;
    }>): Promise<ICategorie | null>;
    static delete(id: string, force?: boolean): Promise<void>;
    static getWithProductCount(): Promise<({
        _count: {
            produits: number;
        };
    } & {
        id: string;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        image: string | null;
        conservation: string | null;
        couleur: string | null;
    })[]>;
    static search(searchTerm: string, page?: number, limit?: number): Promise<{
        categories: ({
            _count: {
                produits: number;
            };
        } & {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            image: string | null;
            conservation: string | null;
            couleur: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    static createDefaultCategories(): Promise<void>;
}
//# sourceMappingURL=categorieService.d.ts.map