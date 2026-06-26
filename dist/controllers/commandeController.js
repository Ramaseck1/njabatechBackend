"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandeController = void 0;
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
const smsService_1 = require("../services/smsService");
const gieNotificationService_1 = require("../services/gieNotificationService");
class CommandeController {
    static async getAll(req, res) {
        try {
            const commandes = await database_1.default.commande.findMany();
            res.json({ success: true, data: commandes });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async getById(req, res) {
        try {
            const id = req.params.id;
            const commande = await database_1.default.commande.findUnique({ where: { id } });
            if (!commande) {
                res.status(404).json({ success: false, message: "Commande non trouvée" });
                return;
            }
            res.json({ success: true, data: commande });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async create(req, res) {
        try {
            const { produits, adresseLivraison, dateLivraison, methodePaiement, referencePaiement } = req.body;
            const clientId = req.user.id;
            const numero = 'CMD-' + (0, uuid_1.v4)();
            if (!produits || !Array.isArray(produits) || produits.length === 0) {
                res.status(400).json({ success: false, message: "Aucun produit fourni" });
                return;
            }
            if (produits.some((p) => !p.produitId || !p.quantite || p.quantite <= 0 || typeof p.prixUnitaire !== 'number')) {
                res.status(400).json({ success: false, message: "Produit, quantité ou prix unitaire invalide" });
                return;
            }
            const montant = produits.reduce((sum, p) => sum + (p.prixUnitaire * p.quantite), 0);
            const commande = await database_1.default.$transaction(async (tx) => {
                for (const p of produits) {
                    const produit = await tx.produit.findUnique({
                        where: { id: p.produitId },
                        select: { stock: true, nom: true }
                    });
                    if (!produit) {
                        throw new Error(`Produit non trouvé: ${p.produitId}`);
                    }
                    if (produit.stock < p.quantite) {
                        throw new Error(`Stock insuffisant pour le produit "${produit.nom}". Stock actuel : ${produit.stock}, demandé : ${p.quantite}`);
                    }
                    if (produit.stock === 0) {
                        throw new Error(`Le produit "${produit.nom}" est en rupture de stock`);
                    }
                }
                const commande = await tx.commande.create({
                    data: {
                        numero,
                        clientId,
                        montant,
                        statut: 'EN_ATTENTE',
                        adresseLivraison,
                        ...(dateLivraison && { dateLivraison }),
                        panierProduits: {
                            create: produits.map((p) => ({
                                produitId: p.produitId,
                                quantite: p.quantite,
                                prixUnitaire: p.prixUnitaire
                            }))
                        },
                        ...(methodePaiement && {
                            paiement: {
                                create: {
                                    montant,
                                    methode: methodePaiement,
                                    statut: methodePaiement === 'PAIEMENT_A_LA_LIVRAISON' ? 'EN_ATTENTE' : 'VALIDE',
                                    reference: referencePaiement || `PAY-${Date.now()}`
                                }
                            }
                        })
                    },
                    include: {
                        panierProduits: true,
                        paiement: true
                    }
                });
                for (const p of produits) {
                    const result = await tx.produit.updateMany({
                        where: {
                            id: p.produitId,
                            stock: { gte: p.quantite }
                        },
                        data: {
                            stock: { decrement: p.quantite }
                        }
                    });
                    if (result.count === 0) {
                        const produit = await tx.produit.findUnique({
                            where: { id: p.produitId },
                            select: { stock: true, nom: true }
                        });
                        if (!produit) {
                            throw new Error(`Produit non trouvé: ${p.produitId}`);
                        }
                        throw new Error(`Stock insuffisant pour le produit "${produit.nom}". Stock actuel : ${produit.stock}, demandé : ${p.quantite}`);
                    }
                }
                return commande;
            });
            await gieNotificationService_1.GIENotificationService.notifyGIEsOfNewOrder(commande.id);
            const client = await database_1.default.client.findUnique({ where: { id: clientId } });
            if (client && client.telephone) {
                const message = `Bonjour ${client.nom}, votre commande ${commande.numero} a été reçue et est en cours de traitement par nos GIE partenaires.`;
                console.log(message);
                try {
                    const smsResponse = await (0, smsService_1.sendOrderSms)(client.telephone, message);
                    console.log('Réponse Twilio:', smsResponse);
                    console.log('Statut SMS Twilio:', smsResponse.status);
                    console.log('Numéro destinataire:', smsResponse.to);
                }
                catch (e) {
                    console.error("Erreur lors de l'envoi du SMS au client:", e);
                }
            }
            res.status(201).json({ success: true, data: commande });
        }
        catch (error) {
            console.error('Erreur lors de la création de la commande:', error);
            if (error instanceof Error) {
                if (error.message.includes('Stock insuffisant') || error.message.includes('rupture de stock') || error.message.includes('Produit non trouvé')) {
                    res.status(400).json({ success: false, message: error.message });
                    return;
                }
            }
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async createcomPayement(req, res) {
        try {
            const { produits, adresseLivraison, regionLivraisonId, dateLivraison, methodePaiement, referencePaiement, fraisLivraison } = req.body;
            const clientId = req.user.id;
            const numero = 'CMD-' + (0, uuid_1.v4)();
            if (!produits || !Array.isArray(produits) || produits.length === 0) {
                res.status(400).json({ success: false, message: "Aucun produit fourni" });
                return;
            }
            if (produits.some((p) => !p.produitId || !p.quantite || p.quantite <= 0 || typeof p.prixUnitaire !== 'number')) {
                res.status(400).json({ success: false, message: "Produit, quantité ou prix unitaire invalide" });
                return;
            }
            const montant = produits.reduce((sum, p) => sum + (p.prixUnitaire * p.quantite), 0);
            let statutPaiement = 'EN_ATTENTE';
            if (methodePaiement) {
                if (methodePaiement === 'MOBILE_MONEY' ||
                    methodePaiement === 'WAVE' ||
                    methodePaiement === 'ORANGE_MONEY') {
                    statutPaiement = 'VALIDE';
                }
                else if (methodePaiement === 'ESPECES' ||
                    methodePaiement === 'PAIEMENT_A_LA_LIVRAISON') {
                    statutPaiement = 'EN_ATTENTE';
                }
            }
            const commande = await database_1.default.$transaction(async (tx) => {
                const produitsData = await tx.produit.findMany({
                    where: {
                        id: { in: produits.map((p) => p.produitId) }
                    },
                    select: { id: true, stock: true, nom: true }
                });
                const produitsMap = new Map(produitsData.map(p => [p.id, p]));
                for (const p of produits) {
                    const produitData = produitsMap.get(p.produitId);
                    if (!produitData) {
                        throw new Error(`Produit non trouvé: ${p.produitId}`);
                    }
                    if (produitData.stock < p.quantite) {
                        throw new Error(`Stock insuffisant pour le produit "${produitData.nom}". Stock actuel : ${produitData.stock}, demandé : ${p.quantite}`);
                    }
                    if (produitData.stock === 0) {
                        throw new Error(`Le produit "${produitData.nom}" est en rupture de stock`);
                    }
                }
                const stockUpdates = produits.map((p) => tx.produit.updateMany({
                    where: {
                        id: p.produitId,
                        stock: { gte: p.quantite }
                    },
                    data: {
                        stock: { decrement: p.quantite }
                    }
                }));
                const stockResults = await Promise.all(stockUpdates);
                stockResults.forEach((result, index) => {
                    if (result.count === 0) {
                        const produit = produitsMap.get(produits[index].produitId);
                        throw new Error(`Échec de mise à jour du stock pour "${produit?.nom}"`);
                    }
                });
                const commande = await tx.commande.create({
                    data: {
                        numero,
                        clientId,
                        montant,
                        statut: 'EN_ATTENTE',
                        adresseLivraison,
                        regionLivraisonId,
                        fraisLivraison,
                        ...(dateLivraison && { dateLivraison }),
                        panierProduits: {
                            create: produits.map((p) => ({
                                produitId: p.produitId,
                                quantite: p.quantite,
                                prixUnitaire: p.prixUnitaire
                            }))
                        },
                        ...(methodePaiement && {
                            paiement: {
                                create: {
                                    montant,
                                    methode: methodePaiement,
                                    statut: statutPaiement,
                                    reference: referencePaiement || `PAY-${Date.now()}`
                                }
                            }
                        })
                    },
                    include: {
                        panierProduits: true,
                        paiement: true
                    }
                });
                return commande;
            }, {
                maxWait: 10000,
                timeout: 15000,
            });
            await gieNotificationService_1.GIENotificationService.notifyGIEsOfNewOrder(commande.id);
            const client = await database_1.default.client.findUnique({ where: { id: clientId } });
            if (client && client.telephone) {
                let message = `Bonjour ${client.nom}, votre commande ${commande.numero} a été reçue et est en cours de traitement par nos GIE partenaires.`;
                if (commande.paiement) {
                    if (commande.paiement.statut === 'VALIDE') {
                        message += ' Votre paiement a été confirmé.';
                    }
                    else if (commande.paiement.statut === 'EN_ATTENTE') {
                        if (methodePaiement === 'PAIEMENT_A_LA_LIVRAISON') {
                            message += ' Paiement à effectuer à la livraison.';
                        }
                        else {
                            message += ' En attente de confirmation de paiement.';
                        }
                    }
                }
                console.log(message);
                try {
                    const smsResponse = await (0, smsService_1.sendOrderSms)(client.telephone, message);
                    console.log('Réponse Twilio:', smsResponse);
                    console.log('Statut SMS Twilio:', smsResponse.status);
                    console.log('Numéro destinataire:', smsResponse.to);
                }
                catch (e) {
                    console.error("Erreur lors de l'envoi du SMS au client:", e);
                }
            }
            res.status(201).json({
                success: true,
                data: {
                    ...commande,
                    paiementInfo: commande.paiement ? {
                        statut: commande.paiement.statut,
                        methode: commande.paiement.methode,
                        reference: commande.paiement.reference
                    } : null
                }
            });
        }
        catch (error) {
            console.error('Erreur lors de la création de la commande:', error);
            if (error instanceof Error) {
                if (error.message.includes('Stock insuffisant') || error.message.includes('rupture de stock') || error.message.includes('Produit non trouvé')) {
                    res.status(400).json({ success: false, message: error.message });
                    return;
                }
            }
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async update(req, res) {
        try {
            const id = req.params.id;
            const { clientId, montant, statut, adresseLivraison, dateLivraison } = req.body;
            const commande = await database_1.default.commande.update({
                where: { id },
                data: { clientId, montant, statut, adresseLivraison, dateLivraison }
            });
            res.json({ success: true, data: commande });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id;
            await database_1.default.commande.delete({ where: { id } });
            res.json({ success: true, message: "Commande supprimée" });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async getMyCommandes(req, res) {
        try {
            const gieId = req.user.id;
            const where = {
                panierProduits: {
                    some: {
                        produit: {
                            gieId
                        }
                    }
                }
            };
            if (req.query.statut) {
                where.statut = req.query.statut;
            }
            const commandes = await database_1.default.commande.findMany({
                where,
                orderBy: { dateCommande: 'desc' },
                include: {
                    client: true,
                    panierProduits: { include: { produit: true } },
                    paiement: true
                }
            });
            res.json({ success: true, data: commandes });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération des commandes', error: error.message });
        }
    }
    static async getMyCommandeById(req, res) {
        try {
            const gieId = req.user.id;
            const { commandeId } = req.params;
            const commande = await database_1.default.commande.findFirst({
                where: {
                    id: commandeId,
                    panierProduits: {
                        some: {
                            produit: {
                                gieId
                            }
                        }
                    }
                },
                include: {
                    client: true,
                    panierProduits: { include: { produit: true } },
                    paiement: true
                }
            });
            if (!commande) {
                res.status(404).json({ success: false, message: 'Commande non trouvée pour ce GIE' });
                return;
            }
            res.json({ success: true, data: commande });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération de la commande', error: error.message });
        }
    }
    static async getMyStats(req, res) {
        try {
            const gieId = req.user.id;
            const commandes = await database_1.default.commande.findMany({
                where: {
                    panierProduits: {
                        some: {
                            produit: {
                                gieId
                            }
                        }
                    }
                },
                include: {
                    paiement: true
                }
            });
            const totalCommandes = commandes.length;
            const chiffreAffaires = commandes.reduce((sum, c) => {
                if (c.paiement && c.paiement.statut === 'VALIDE') {
                    return sum + c.montant;
                }
                return sum;
            }, 0);
            const produits = await database_1.default.produit.findMany({
                where: { gieId },
                include: { panierProduits: true }
            });
            const produitsVendus = produits.map(p => ({
                nom: p.nom,
                totalVendu: p.panierProduits.reduce((sum, pp) => sum + pp.quantite, 0)
            })).sort((a, b) => b.totalVendu - a.totalVendu);
            res.json({
                success: true,
                data: {
                    totalCommandes,
                    chiffreAffaires,
                    produitsLesPlusVendus: produitsVendus.slice(0, 5)
                }
            });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération des statistiques', error: error.message });
        }
    }
    static async updateStatut(req, res) {
        try {
            const id = req.params.id;
            const { statut } = req.body;
            if (!statut) {
                res.status(400).json({ success: false, message: "Le statut est requis" });
                return;
            }
            const commande = await database_1.default.commande.update({
                where: { id },
                data: { statut },
                include: { paiement: true, client: true }
            });
            if (statut === 'CONFIRMEE' && commande.client && commande.client.telephone) {
                const message = `Bonjour ${commande.client.nom}, votre commande ${commande.numero} est prête, vous serez livré dans 30min.`;
                try {
                    const smsResponse = await (0, smsService_1.sendOrderSms)(commande.client.telephone, message);
                    console.log('Réponse Twilio:', smsResponse);
                    console.log('Statut SMS Twilio:', smsResponse.status);
                    console.log('Numéro destinataire:', smsResponse.to);
                }
                catch (e) {
                    console.error("Erreur lors de l'envoi du SMS de confirmation:", e);
                }
            }
            if (statut === 'ANNULEE') {
                let montantSoustrait = 0;
                if (commande.paiement && commande.paiement.statut === 'VALIDE') {
                    await database_1.default.paiement.update({
                        where: { commandeId: id },
                        data: { statut: 'REMBOURSE' }
                    });
                    montantSoustrait = commande.montant;
                }
                const gieId = req.user.id;
                const commandes = await database_1.default.commande.findMany({
                    where: {
                        panierProduits: {
                            some: {
                                produit: {
                                    gieId
                                }
                            }
                        }
                    },
                    include: { paiement: true }
                });
                const chiffreAffaires = commandes.reduce((sum, c) => {
                    if (c.paiement && c.paiement.statut === 'VALIDE') {
                        return sum + c.montant;
                    }
                    return sum;
                }, 0);
                res.json({
                    success: true,
                    message: `Commande annulée: ${commande.numero}`,
                    commandeAnnulee: commande.numero,
                    montantSoustrait,
                    chiffreAffaires
                });
                return;
            }
            res.json({ success: true, data: commande });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async annulerCommande(req, res) {
        try {
            const id = req.params.id;
            const commande = await database_1.default.commande.update({
                where: { id },
                data: { statut: 'ANNULEE' },
                include: { paiement: true }
            });
            let montantSoustrait = 0;
            if (commande.paiement && commande.paiement.statut === 'VALIDE') {
                await database_1.default.paiement.update({
                    where: { commandeId: id },
                    data: { statut: 'REMBOURSE' }
                });
                montantSoustrait = commande.montant;
            }
            const gieId = req.user.id;
            const commandes = await database_1.default.commande.findMany({
                where: {
                    panierProduits: {
                        some: {
                            produit: {
                                gieId
                            }
                        }
                    }
                },
                include: { paiement: true }
            });
            const chiffreAffaires = commandes.reduce((sum, c) => {
                if (c.paiement && c.paiement.statut === 'VALIDE') {
                    return sum + c.montant;
                }
                return sum;
            }, 0);
            res.json({
                success: true,
                message: `Commande annulée: ${commande.numero}`,
                commandeAnnulee: commande.numero,
                montantSoustrait,
                chiffreAffaires
            });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur lors de l'annulation de la commande" });
        }
    }
    static async confirmerCommande(req, res) {
        try {
            const id = req.params.id;
            const commande = await database_1.default.commande.update({
                where: { id },
                data: { statut: 'CONFIRMEE' },
                include: { client: true }
            });
            if (commande.client && commande.client.telephone) {
                const message = `Bonjour ${commande.client.nom}, votre commande ${commande.numero} est prête, vous serez livré dans 30min.`;
                try {
                    const smsResponse = await (0, smsService_1.sendOrderSms)(commande.client.telephone, message);
                    console.log('Réponse Twilio:', smsResponse);
                    console.log('Statut SMS Twilio:', smsResponse.status);
                    console.log('Numéro destinataire:', smsResponse.to);
                }
                catch (e) {
                    console.error("Erreur lors de l'envoi du SMS de confirmation:", e);
                }
            }
            res.json({ success: true, message: 'Commande confirmée et SMS envoyé', data: commande });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur lors de la confirmation de la commande" });
        }
    }
    static async getMyClientCommandes(req, res) {
        try {
            const clientId = req.user.id;
            const commandes = await database_1.default.commande.findMany({
                where: { clientId },
                orderBy: { dateCommande: 'desc' },
                include: {
                    panierProduits: { include: { produit: true } },
                    paiement: true
                }
            });
            res.json({ success: true, data: commandes });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur lors de la récupération des commandes" });
        }
    }
    static async fixNegativeStocks(req, res) {
        try {
            const produitsNegatifs = await database_1.default.produit.findMany({
                where: {
                    stock: { lt: 0 }
                },
                select: {
                    id: true,
                    nom: true,
                    stock: true
                }
            });
            if (produitsNegatifs.length === 0) {
                res.json({ success: true, message: "Aucun stock négatif trouvé" });
                return;
            }
            const result = await database_1.default.produit.updateMany({
                where: {
                    stock: { lt: 0 }
                },
                data: {
                    stock: 0
                }
            });
            res.json({
                success: true,
                message: `${result.count} produits avec stock négatif ont été corrigés`,
                produitsCorriges: produitsNegatifs
            });
        }
        catch (error) {
            console.error('Erreur lors de la correction des stocks:', error);
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async marquerEnPreparation(req, res) {
        try {
            const gieId = req.user.id;
            const { panierProduitId } = req.params;
            await gieNotificationService_1.GIENotificationService.markAsInPreparation(panierProduitId, gieId);
            res.json({
                success: true,
                message: 'Produit marqué comme en préparation'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors du marquage en préparation',
                error: error.message
            });
        }
    }
    static async marquerPret(req, res) {
        try {
            const gieId = req.user.id;
            const { panierProduitId } = req.params;
            await gieNotificationService_1.GIENotificationService.markAsReady(panierProduitId, gieId);
            res.json({
                success: true,
                message: 'Produit marqué comme prêt'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors du marquage comme prêt',
                error: error.message
            });
        }
    }
    static async annulerProduit(req, res) {
        try {
            const gieId = req.user.id;
            const { panierProduitId } = req.params;
            const { raison } = req.body;
            await gieNotificationService_1.GIENotificationService.cancelProduct(panierProduitId, gieId, raison);
            res.json({
                success: true,
                message: 'Produit annulé avec succès'
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'annulation du produit',
                error: error.message
            });
        }
    }
    static async getGIEStats(req, res) {
        try {
            const gieId = req.user.id;
            const stats = await gieNotificationService_1.GIENotificationService.getGIEStats(gieId);
            res.json({
                success: true,
                data: stats
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des statistiques',
                error: error.message
            });
        }
    }
    static async getMyCommandesWithDetails(req, res) {
        try {
            const gieId = req.user.id;
            const where = {
                panierProduits: {
                    some: {
                        produit: {
                            gieId
                        }
                    }
                }
            };
            if (req.query.statut) {
                where.statut = req.query.statut;
            }
            const commandes = await database_1.default.commande.findMany({
                where,
                orderBy: { dateCommande: 'desc' },
                include: {
                    client: true,
                    panierProduits: {
                        include: {
                            produit: {
                                include: {
                                    gie: true
                                }
                            }
                        },
                        where: {
                            produit: {
                                gieId
                            }
                        }
                    },
                    paiement: true
                }
            });
            const commandesAvecDetails = commandes.map(commande => {
                const mesProduits = commande.panierProduits;
                const totalProduits = mesProduits.length;
                const produitsPrets = mesProduits.filter(p => p.statutGIE === 'PRET').length;
                const produitsEnPreparation = mesProduits.filter(p => p.statutGIE === 'EN_PREPARATION').length;
                const produitsEnAttente = mesProduits.filter(p => p.statutGIE === 'EN_ATTENTE').length;
                const produitsAnnules = mesProduits.filter(p => p.statutGIE === 'ANNULE').length;
                const montantGIE = mesProduits.reduce((sum, p) => sum + (p.prixUnitaire * p.quantite), 0);
                return {
                    ...commande,
                    detailsGIE: {
                        totalProduits,
                        produitsPrets,
                        produitsEnPreparation,
                        produitsEnAttente,
                        produitsAnnules,
                        montantGIE,
                        progression: totalProduits > 0 ? (produitsPrets / totalProduits) * 100 : 0
                    }
                };
            });
            res.json({ success: true, data: commandesAvecDetails });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des commandes',
                error: error.message
            });
        }
    }
}
exports.CommandeController = CommandeController;
//# sourceMappingURL=commandeController.js.map