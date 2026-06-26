"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaiementController = void 0;
const database_1 = __importDefault(require("../config/database"));
class PaiementController {
    static async getAll(req, res) {
        try {
            const paiements = await database_1.default.paiement.findMany();
            res.json({ success: true, data: paiements });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async getById(req, res) {
        try {
            const id = req.params.id;
            const paiement = await database_1.default.paiement.findUnique({ where: { id } });
            if (!paiement) {
                res.status(404).json({ success: false, message: "Paiement non trouvé" });
                return;
            }
            res.json({ success: true, data: paiement });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async create(req, res) {
        try {
            const { commandeId, montant, methode, statut: statutInput, reference } = req.body;
            const paiementExistant = await database_1.default.paiement.findUnique({ where: { commandeId } });
            if (paiementExistant) {
                res.status(400).json({ success: false, message: "Cette commande a déjà un paiement associé." });
                return;
            }
            let statut = 'EN_ATTENTE';
            if (methode === 'MOBILE_MONEY' ||
                methode === 'WAVE' ||
                methode === 'ORANGE_MONEY') {
                statut = 'VALIDE';
            }
            else if (methode === 'ESPECES' || methode === 'PAIEMENT_A_LA_LIVRAISON') {
                statut = 'EN_ATTENTE';
            }
            else if (statutInput) {
                statut = statutInput;
            }
            const paiement = await database_1.default.paiement.create({
                data: { commandeId, montant, methode, statut: statut, reference }
            });
            res.status(201).json({ success: true, data: paiement });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async update(req, res) {
        try {
            const id = req.params.id;
            const { commandeId, montant, methode, statut, reference } = req.body;
            const paiement = await database_1.default.paiement.update({
                where: { id },
                data: { commandeId, montant, methode, statut, reference }
            });
            res.json({ success: true, data: paiement });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id;
            await database_1.default.paiement.delete({ where: { id } });
            res.json({ success: true, message: "Paiement supprimé" });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
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
            const paiement = await database_1.default.paiement.update({
                where: { id },
                data: { statut }
            });
            res.json({ success: true, data: paiement });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur lors de la mise à jour du statut du paiement" });
        }
    }
}
exports.PaiementController = PaiementController;
//# sourceMappingURL=paiementController.js.map