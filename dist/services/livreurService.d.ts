import { ILivreur, CreateLivreurDto, UpdateLivreurDto, LoginLivreurDto } from '../types';
export declare class LivreurService {
    static create(data: CreateLivreurDto): Promise<ILivreur>;
    static findAll(page?: number, limit?: number): Promise<{
        livreurs: ILivreur[];
        total: number;
        pages: number;
    }>;
    static findById(id: string): Promise<ILivreur>;
    static update(id: string, data: UpdateLivreurDto): Promise<ILivreur>;
    static delete(id: string): Promise<void>;
    static login(credentials: LoginLivreurDto): Promise<{
        livreur: ILivreur;
        token: string;
    }>;
    static getCommandes(id?: string): Promise<{
        commandes: any[];
        total: number;
    }>;
    static getCommandesDisponibles(regionId?: string, page?: number, limit?: number): Promise<{
        commandes: any[];
        total: number;
        pages: number;
    }>;
    static assignerCommande(livreurId: string, commandeId: string): Promise<void>;
    static marquerLivrees(livreurId: string, commandeId: string): Promise<void>;
}
//# sourceMappingURL=livreurService.d.ts.map