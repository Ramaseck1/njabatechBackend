"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GIENotificationService = void 0;
const database_1 = __importDefault(require("../config/database"));
const smsService_1 = require("./smsService");
class GIENotificationService {
    static async notifyGIEsOfNewOrder(commandeId) {
        try {
            const gieProduits = await database_1.default.panierProduit.findMany({
                where: { commandeId },
                include: {
                    produit: {
                        include: {
                            gie: true
                        }
                    },
                    commande: {
                        include: {
                            client: true
                        }
                    }
                }
            });
            const gieMap = new Map();
            for (const panierProduit of gieProduits) {
                const gieId = panierProduit.produit.gieId;
                if (!gieMap.has(gieId)) {
                    gieMap.set(gieId, {
                        gie: panierProduit.produit.gie,
                        produits: [],
                        commande: panierProduit.commande
                    });
                }
                gieMap.get(gieId).produits.push({
                    nom: panierProduit.produit.nom,
                    quantite: panierProduit.quantite,
                    prixUnitaire: panierProduit.prixUnitaire
                });
            }
            for (const [gieId, data] of gieMap) {
                await this.sendNotificationToGIE(gieId, data);
            }
            console.log(`✅ Notifications envoyées à ${gieMap.size} GIE(s) pour la commande ${commandeId}`);
        }
        catch (error) {
            console.error('❌ Erreur lors de l\'envoi des notifications GIE:', error);
        }
    }
    static async sendNotificationToGIE(gieId, data) {
        try {
            const { gie, produits, commande } = data;
            if (!gie.telephone) {
                console.log(`⚠️ GIE ${gie.nom} n'a pas de numéro de téléphone configuré`);
                return;
            }
            const montantGIE = produits.reduce((sum, p) => sum + (p.prixUnitaire * p.quantite), 0);
            const produitsList = produits.map((p) => `${p.quantite}x ${p.nom}`).join(', ');
            const message = `Nouvelle commande #${commande.numero} reçue ! 
Produits: ${produitsList}
Montant: ${montantGIE} FCFA
Client: ${commande.client.nom}
Connectez-vous à votre interface pour traiter la commande.`;
            const smsResponse = await (0, smsService_1.sendOrderSms)(gie.telephone, message);
            console.log(`📱 SMS envoyé au GIE ${gie.nom}:`, smsResponse.sid || 'SMS simulé');
        }
        catch (error) {
            console.error(`❌ Erreur lors de l'envoi de notification au GIE ${gieId}:`, error);
        }
    }
    static async notifyClientWhenAllReady(commandeId) {
        try {
            const commande = await database_1.default.commande.findUnique({
                where: { id: commandeId },
                include: {
                    client: true,
                    panierProduits: {
                        include: {
                            produit: {
                                include: {
                                    gie: true
                                }
                            }
                        }
                    }
                }
            });
            if (!commande || !commande.client.telephone) {
                return;
            }
            const tousPrets = commande.panierProduits.every(pp => pp.statutGIE === 'PRET');
            if (tousPrets) {
                const message = `Bonjour ${commande.client.nom}, votre commande #${commande.numero} est prête ! Tous les GIE ont confirmé la préparation. Vous serez livré dans 30 minutes.`;
                const smsResponse = await (0, smsService_1.sendOrderSms)(commande.client.telephone, message);
                console.log(`📱 SMS de confirmation envoyé au client:`, smsResponse.sid || 'SMS simulé');
            }
        }
        catch (error) {
            console.error('❌ Erreur lors de la notification client:', error);
        }
    }
    static async getGIEStats(gieId) {
        try {
            const stats = await database_1.default.panierProduit.groupBy({
                by: ['statutGIE'],
                where: {
                    produit: {
                        gieId
                    }
                },
                _count: true
            });
            const totalCommandes = await database_1.default.panierProduit.count({
                where: {
                    produit: {
                        gieId
                    }
                }
            });
            const commandesEnAttente = await database_1.default.panierProduit.count({
                where: {
                    produit: {
                        gieId
                    },
                    statutGIE: 'EN_ATTENTE'
                }
            });
            return {
                totalCommandes,
                commandesEnAttente,
                repartition: stats.reduce((acc, stat) => {
                    acc[stat.statutGIE] = stat._count;
                    return acc;
                }, {})
            };
        }
        catch (error) {
            console.error('❌ Erreur lors de la récupération des stats GIE:', error);
            throw error;
        }
    }
    static async markAsInPreparation(panierProduitId, gieId) {
        try {
            const panierProduit = await database_1.default.panierProduit.update({
                where: {
                    id: panierProduitId,
                    produit: {
                        gieId
                    }
                },
                data: {
                    statutGIE: 'EN_PREPARATION',
                    updatedAt: new Date()
                }
            });
            console.log(`✅ Produit marqué comme en préparation: ${panierProduitId}`);
        }
        catch (error) {
            console.error('❌ Erreur lors du marquage en préparation:', error);
            throw error;
        }
    }
    static async markAsReady(panierProduitId, gieId) {
        try {
            const panierProduit = await database_1.default.panierProduit.update({
                where: {
                    id: panierProduitId,
                    produit: {
                        gieId
                    }
                },
                data: {
                    statutGIE: 'PRET',
                    dateConfirmation: new Date(),
                    updatedAt: new Date()
                }
            });
            console.log(`✅ Produit marqué comme prêt: ${panierProduitId}`);
            await this.notifyClientWhenAllReady(panierProduit.commandeId);
        }
        catch (error) {
            console.error('❌ Erreur lors du marquage comme prêt:', error);
            throw error;
        }
    }
    static async cancelProduct(panierProduitId, gieId, raison) {
        try {
            const panierProduit = await database_1.default.panierProduit.update({
                where: {
                    id: panierProduitId,
                    produit: {
                        gieId
                    }
                },
                data: {
                    statutGIE: 'ANNULE',
                    updatedAt: new Date()
                }
            });
            console.log(`✅ Produit annulé: ${panierProduitId}`);
            const panierProduitWithDetails = await database_1.default.panierProduit.findUnique({
                where: { id: panierProduitId },
                include: {
                    commande: {
                        include: {
                            client: true
                        }
                    },
                    produit: true
                }
            });
            if (panierProduitWithDetails?.commande.client.telephone) {
                const message = `Bonjour ${panierProduitWithDetails.commande.client.nom}, le produit "${panierProduitWithDetails.produit.nom}" de votre commande #${panierProduitWithDetails.commande.numero} a été annulé${raison ? ` (${raison})` : ''}.`;
                await (0, smsService_1.sendOrderSms)(panierProduitWithDetails.commande.client.telephone, message);
            }
        }
        catch (error) {
            console.error('❌ Erreur lors de l\'annulation:', error);
            throw error;
        }
    }
}
exports.GIENotificationService = GIENotificationService;
//# sourceMappingURL=gieNotificationService.js.map