"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.RegionsScalarFieldEnum = exports.LivreursScalarFieldEnum = exports.AdressesScalarFieldEnum = exports.PanierProduitScalarFieldEnum = exports.PaiementScalarFieldEnum = exports.CommandeScalarFieldEnum = exports.ProduitScalarFieldEnum = exports.CategorieScalarFieldEnum = exports.ClientScalarFieldEnum = exports.GIEScalarFieldEnum = exports.AvisProduitScalarFieldEnum = exports.AvisScalarFieldEnum = exports.AdministrateurScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Administrateur: 'Administrateur',
    Avis: 'Avis',
    AvisProduit: 'AvisProduit',
    GIE: 'GIE',
    Client: 'Client',
    Categorie: 'Categorie',
    Produit: 'Produit',
    Commande: 'Commande',
    Paiement: 'Paiement',
    PanierProduit: 'PanierProduit',
    adresses: 'adresses',
    livreurs: 'livreurs',
    regions: 'regions'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AdministrateurScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AvisScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    nom: 'nom',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AvisProduitScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    produitId: 'produitId',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GIEScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    description: 'description',
    adresse: 'adresse',
    telephone: 'telephone',
    email: 'email',
    password: 'password',
    logo: 'logo',
    url: 'url',
    membre: 'membre',
    Annee: 'Annee',
    specialite: 'specialite',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    administrateurId: 'administrateurId',
    regionId: 'regionId'
};
exports.ClientScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    adresse: 'adresse',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    administrateurId: 'administrateurId'
};
exports.CategorieScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    description: 'description',
    conservation: 'conservation',
    couleur: 'couleur',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image'
};
exports.ProduitScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    quantite: 'quantite',
    description: 'description',
    prix: 'prix',
    stock: 'stock',
    image: 'image',
    vues: 'vues',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gieId: 'gieId',
    categorieId: 'categorieId'
};
exports.CommandeScalarFieldEnum = {
    id: 'id',
    numero: 'numero',
    montant: 'montant',
    statut: 'statut',
    dateCommande: 'dateCommande',
    dateLivraison: 'dateLivraison',
    adresseLivraison: 'adresseLivraison',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId',
    fraisLivraison: 'fraisLivraison',
    regionLivraisonId: 'regionLivraisonId',
    livreurId: 'livreurId'
};
exports.PaiementScalarFieldEnum = {
    id: 'id',
    montant: 'montant',
    methode: 'methode',
    statut: 'statut',
    reference: 'reference',
    datePaiement: 'datePaiement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    commandeId: 'commandeId',
    fraisLivraison: 'fraisLivraison'
};
exports.PanierProduitScalarFieldEnum = {
    id: 'id',
    quantite: 'quantite',
    prixUnitaire: 'prixUnitaire',
    createdAt: 'createdAt',
    commandeId: 'commandeId',
    produitId: 'produitId',
    statutGIE: 'statutGIE',
    dateConfirmation: 'dateConfirmation',
    updatedAt: 'updatedAt'
};
exports.AdressesScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    description: 'description',
    codePostal: 'codePostal',
    fraisLivraison: 'fraisLivraison',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    regionId: 'regionId'
};
exports.LivreursScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    password: 'password',
    statut: 'statut',
    regionId: 'regionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RegionsScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    description: 'description',
    fraisLivraisonInterne: 'fraisLivraisonInterne',
    fraisLivraisonExterne: 'fraisLivraisonExterne',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map