export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const StatutGIE: {
    readonly ACTIF: "ACTIF";
    readonly INACTIF: "INACTIF";
    readonly SUSPENDU: "SUSPENDU";
};
export type StatutGIE = (typeof StatutGIE)[keyof typeof StatutGIE];
export declare const StatutClient: {
    readonly ACTIF: "ACTIF";
    readonly INACTIF: "INACTIF";
    readonly BLOQUE: "BLOQUE";
};
export type StatutClient = (typeof StatutClient)[keyof typeof StatutClient];
export declare const StatutProduit: {
    readonly DISPONIBLE: "DISPONIBLE";
    readonly RUPTURE: "RUPTURE";
    readonly HORS_STOCK: "HORS_STOCK";
};
export type StatutProduit = (typeof StatutProduit)[keyof typeof StatutProduit];
export declare const StatutCommande: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly CONFIRMEE: "CONFIRMEE";
    readonly EN_PREPARATION: "EN_PREPARATION";
    readonly EXPEDIEE: "EXPEDIEE";
    readonly LIVREE: "LIVREE";
    readonly ANNULEE: "ANNULEE";
};
export type StatutCommande = (typeof StatutCommande)[keyof typeof StatutCommande];
export declare const StatutPaiement: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly VALIDE: "VALIDE";
    readonly ECHEC: "ECHEC";
    readonly REMBOURSE: "REMBOURSE";
};
export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement];
export declare const MethodePaiement: {
    readonly CARTE_BANCAIRE: "CARTE_BANCAIRE";
    readonly VIREMENT: "VIREMENT";
    readonly ESPECES: "ESPECES";
    readonly MOBILE_MONEY: "MOBILE_MONEY";
    readonly PAIEMENT_A_LA_LIVRAISON: "PAIEMENT_A_LA_LIVRAISON";
    readonly WAVE: "WAVE";
    readonly ORANGE_MONEY: "ORANGE_MONEY";
};
export type MethodePaiement = (typeof MethodePaiement)[keyof typeof MethodePaiement];
export declare const StatutGIEProduit: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly EN_PREPARATION: "EN_PREPARATION";
    readonly PRET: "PRET";
    readonly ANNULE: "ANNULE";
};
export type StatutGIEProduit = (typeof StatutGIEProduit)[keyof typeof StatutGIEProduit];
export declare const StatutLivreur: {
    readonly DISPONIBLE: "DISPONIBLE";
    readonly EN_LIVRAISON: "EN_LIVRAISON";
    readonly INDISPONIBLE: "INDISPONIBLE";
    readonly BLOQUE: "BLOQUE";
};
export type StatutLivreur = (typeof StatutLivreur)[keyof typeof StatutLivreur];
//# sourceMappingURL=enums.d.ts.map