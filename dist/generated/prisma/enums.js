"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatutLivreur = exports.StatutGIEProduit = exports.MethodePaiement = exports.StatutPaiement = exports.StatutCommande = exports.StatutProduit = exports.StatutClient = exports.StatutGIE = exports.Role = void 0;
exports.Role = {
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN'
};
exports.StatutGIE = {
    ACTIF: 'ACTIF',
    INACTIF: 'INACTIF',
    SUSPENDU: 'SUSPENDU'
};
exports.StatutClient = {
    ACTIF: 'ACTIF',
    INACTIF: 'INACTIF',
    BLOQUE: 'BLOQUE'
};
exports.StatutProduit = {
    DISPONIBLE: 'DISPONIBLE',
    RUPTURE: 'RUPTURE',
    HORS_STOCK: 'HORS_STOCK'
};
exports.StatutCommande = {
    EN_ATTENTE: 'EN_ATTENTE',
    CONFIRMEE: 'CONFIRMEE',
    EN_PREPARATION: 'EN_PREPARATION',
    EXPEDIEE: 'EXPEDIEE',
    LIVREE: 'LIVREE',
    ANNULEE: 'ANNULEE'
};
exports.StatutPaiement = {
    EN_ATTENTE: 'EN_ATTENTE',
    VALIDE: 'VALIDE',
    ECHEC: 'ECHEC',
    REMBOURSE: 'REMBOURSE'
};
exports.MethodePaiement = {
    CARTE_BANCAIRE: 'CARTE_BANCAIRE',
    VIREMENT: 'VIREMENT',
    ESPECES: 'ESPECES',
    MOBILE_MONEY: 'MOBILE_MONEY',
    PAIEMENT_A_LA_LIVRAISON: 'PAIEMENT_A_LA_LIVRAISON',
    WAVE: 'WAVE',
    ORANGE_MONEY: 'ORANGE_MONEY'
};
exports.StatutGIEProduit = {
    EN_ATTENTE: 'EN_ATTENTE',
    EN_PREPARATION: 'EN_PREPARATION',
    PRET: 'PRET',
    ANNULE: 'ANNULE'
};
exports.StatutLivreur = {
    DISPONIBLE: 'DISPONIBLE',
    EN_LIVRAISON: 'EN_LIVRAISON',
    INDISPONIBLE: 'INDISPONIBLE',
    BLOQUE: 'BLOQUE'
};
//# sourceMappingURL=enums.js.map