"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const database_1 = __importDefault(require("../config/database"));
const clientService_1 = require("../services/clientService");
class ClientController {
    static async getAll(req, res) {
        try {
            const clients = await database_1.default.client.findMany();
            res.json({ success: true, data: clients });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async getById(req, res) {
        try {
            const id = req.params.id;
            const client = await database_1.default.client.findUnique({ where: { id } });
            if (!client) {
                res.status(404).json({ success: false, message: "Client non trouvé" });
                return;
            }
            res.json({ success: true, data: client });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async create(req, res) {
        try {
            const { nom, prenom, email, password, telephone, adresse, administrateurId } = req.body;
            const client = await database_1.default.client.create({
                data: { nom, prenom, email, password, telephone, adresse, administrateurId }
            });
            res.status(201).json({ success: true, data: client });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async update(req, res) {
        try {
            const id = req.params.id;
            const { nom, prenom, email, password, telephone, adresse, administrateurId } = req.body;
            const client = await database_1.default.client.update({
                where: { id },
                data: { nom, prenom, email, password, telephone, adresse, administrateurId }
            });
            res.json({ success: true, data: client });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id;
            await database_1.default.client.delete({ where: { id } });
            res.json({ success: true, message: "Client supprimé" });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur" });
        }
    }
    static async createAvis(req, res) {
        try {
            const clientId = req.user?.id;
            const { rating, comment } = req.body;
            if (!clientId) {
                return res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
            }
            const avis = await clientService_1.ClientService.createAvis(clientId, { rating, comment });
            return res.status(201).json({ success: true, data: avis });
        }
        catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getByClient(req, res) {
        try {
            const clientId = req.user?.id;
            if (!clientId) {
                return res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
            }
            const avis = await clientService_1.ClientService.findByClientAvis(clientId);
            return res.json({ success: true, data: avis });
        }
        catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getAllavis(req, res) {
        try {
            const avis = await clientService_1.ClientService.findAllAvis();
            return res.json({ success: true, data: avis });
        }
        catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    static async deleteAvisavis(req, res) {
        try {
            const { id } = req.params;
            await clientService_1.ClientService.deleteAvis(id);
            res.json({ success: true, message: 'Avis supprimé' });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}
exports.ClientController = ClientController;
//# sourceMappingURL=clientController.js.map