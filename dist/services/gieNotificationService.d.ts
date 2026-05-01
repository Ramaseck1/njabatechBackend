export declare class GIENotificationService {
    static notifyGIEsOfNewOrder(commandeId: string): Promise<void>;
    static sendNotificationToGIE(gieId: string, data: any): Promise<void>;
    static notifyClientWhenAllReady(commandeId: string): Promise<void>;
    static getGIEStats(gieId: string): Promise<any>;
    static markAsInPreparation(panierProduitId: string, gieId: string): Promise<void>;
    static markAsReady(panierProduitId: string, gieId: string): Promise<void>;
    static cancelProduct(panierProduitId: string, gieId: string, raison?: string): Promise<void>;
}
//# sourceMappingURL=gieNotificationService.d.ts.map