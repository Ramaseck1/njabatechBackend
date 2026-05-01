import { Request } from 'express';
export interface IAdministrateur {
    id: string;
    email: string;
    nom: string;
    prenom: string;
    telephone?: string;
    role: 'ADMIN' | 'SUPER_ADMIN';
    createdAt: Date;
    updatedAt: Date;
}
export interface IGIE {
    id: string;
    nom: string;
    description?: string;
    adresse?: string;
    telephone?: string;
    email: string;
    password: string;
    logo?: string;
    statut: 'ACTIF' | 'INACTIF' | 'SUSPENDU';
    regionId?: string;
    administrateurId: string;
    region?: IRegion;
    createdAt: Date;
    updatedAt: Date;
}
export interface IClient {
    id: string;
    email: string;
    nom: string;
    prenom: string;
    telephone?: string;
    adresse?: string;
    statut: 'ACTIF' | 'INACTIF' | 'BLOQUE';
    administrateurId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ICategorie {
    id: string;
    nom: string;
    description?: string;
    couleur?: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    produits?: IProduit[];
    _count?: {
        produits: number;
    };
}
export interface IProduit {
    id: string;
    nom: string;
    description?: string;
    prix: number;
    stock: number;
    image?: string;
    statut: 'DISPONIBLE' | 'RUPTURE' | 'HORS_STOCK';
    gieId: string;
    categorieId?: string;
    categorie?: ICategorie;
    createdAt: Date;
    updatedAt: Date;
}
export interface ICommande {
    id: string;
    numero: string;
    montant: number;
    fraisLivraison: number;
    statut: 'EN_ATTENTE' | 'CONFIRMEE' | 'EN_PREPARATION' | 'EXPEDIEE' | 'LIVREE' | 'ANNULEE';
    dateCommande: Date;
    dateLivraison?: Date;
    adresseLivraison?: string;
    regionLivraisonId?: string;
    clientId: string;
    regionLivraison?: IRegion;
    createdAt: Date;
    updatedAt: Date;
}
export interface IPaiement {
    id: string;
    montant: number;
    fraisLivraison: number;
    methode: 'CARTE_BANCAIRE' | 'VIREMENT' | 'ESPECES' | 'MOBILE_MONEY' | 'PAIEMENT_A_LA_LIVRAISON' | 'WAVE' | 'ORANGE_MONEY';
    statut: 'EN_ATTENTE' | 'VALIDE' | 'ECHEC' | 'REMBOURSE';
    reference?: string;
    datePaiement: Date;
    commandeId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IPanierProduit {
    id: string;
    quantite: number;
    prixUnitaire: number;
    commandeId: string;
    produitId: string;
    createdAt: Date;
}
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: 'ADMIN' | 'SUPER_ADMIN' | 'GIE' | 'CLIENT' | 'livreur';
            };
        }
    }
}
export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        role: 'ADMIN' | 'SUPER_ADMIN' | 'GIE' | 'CLIENT' | 'livreur';
    };
}
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}
export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface FilterParams {
    search?: string;
    statut?: string;
    categorie?: string;
    dateDebut?: string;
    dateFin?: string;
}
export interface CreateAdministrateurDto {
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string;
    role?: 'ADMIN' | 'SUPER_ADMIN';
}
export interface CreateGIEDto {
    nom: string;
    description?: string;
    adresse?: string;
    telephone?: string;
    email?: string;
    password: string;
    logo?: string;
    regionId?: string;
}
export interface CreateClientDto {
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string;
}
export interface CreateAvisDto {
    nom: string;
    comment: string;
    rating: number;
}
export interface CreateCategorieDto {
    nom: string;
    description?: string;
    couleur?: string;
    image?: string;
}
export interface CreateProduitDto {
    nom: string;
    quantite: string;
    description?: string;
    prix: number;
    stock: number;
    image?: string;
    categorieId?: string;
    gieId: string;
}
export interface CreateCommandeDto {
    clientId: string;
    adresseLivraison?: string;
    regionLivraisonId?: string;
    produits: Array<{
        produitId: string;
        quantite: number;
    }>;
}
export interface CreatePaiementDto {
    commandeId: string;
    methode: 'CARTE_BANCAIRE' | 'VIREMENT' | 'ESPECES' | 'MOBILE_MONEY' | 'PAIEMENT_A_LA_LIVRAISON' | 'WAVE' | 'ORANGE_MONEY';
    reference?: string;
}
export interface LoginDto {
    email: string;
    password: string;
}
export interface ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export interface IRegion {
    id: string;
    nom: string;
    description?: string;
    fraisLivraisonInterne: number;
    fraisLivraisonExterne: number;
    createdAt: Date;
    updatedAt: Date;
    gies?: IGIE[];
    commandes?: ICommande[];
    adresses?: IAdresse[];
}
export interface IAdresse {
    id: string;
    nom: string;
    description?: string;
    codePostal?: string;
    fraisLivraison: number;
    regionId: string;
    region?: IRegion;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateRegionDto {
    nom: string;
    description?: string;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
}
export interface CreateAdresseDto {
    nom: string;
    description?: string;
    codePostal?: string;
    fraisLivraison?: number;
    regionId: string;
}
export interface UpdateRegionDto {
    nom?: string;
    description?: string;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
}
export interface UpdateAdresseDto {
    nom?: string;
    description?: string;
    codePostal?: string;
    fraisLivraison?: number;
    regionId?: string;
}
export interface ILivreur {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    statut: StatutLivreur;
    regionId?: string;
    region?: IRegion;
    commandes?: ICommande[];
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateLivreurDto {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    regionId?: string;
}
export interface UpdateLivreurDto {
    nom?: string;
    prenom?: string;
    email?: string;
    telephone?: string;
    statut?: StatutLivreur;
    regionId?: string;
}
export interface LoginLivreurDto {
    email: string;
    password: string;
}
export declare enum StatutLivreur {
    DISPONIBLE = "DISPONIBLE",
    EN_LIVRAISON = "EN_LIVRAISON",
    INDISPONIBLE = "INDISPONIBLE",
    BLOQUE = "BLOQUE"
}
//# sourceMappingURL=index.d.ts.map