-- Migration pour ajouter le statut par GIE dans panier_produits
-- Ajout des colonnes pour gérer les statuts individuels par GIE

-- 1. Ajouter l'enum StatutGIEProduit
CREATE TYPE "StatutGIEProduit" AS ENUM ('EN_ATTENTE', 'EN_PREPARATION', 'PRET', 'ANNULE');

-- 2. Ajouter les nouvelles colonnes dans panier_produits
ALTER TABLE "panier_produits" 
ADD COLUMN "statutGIE" "StatutGIEProduit" NOT NULL DEFAULT 'EN_ATTENTE',
ADD COLUMN "dateConfirmation" TIMESTAMP(3),
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- 3. Créer un index pour optimiser les requêtes par statut
CREATE INDEX "idx_panier_produits_statut_gie" ON "panier_produits"("statutGIE");

-- 4. Créer un index pour optimiser les requêtes par GIE et statut
CREATE INDEX "idx_panier_produits_gie_statut" ON "panier_produits"("produitId", "statutGIE");

-- 5. Mettre à jour les commandes existantes pour avoir un statut cohérent
UPDATE "panier_produits" 
SET "statutGIE" = 'EN_ATTENTE' 
WHERE "statutGIE" IS NULL;

-- 6. Créer une fonction pour calculer le statut global d'une commande
CREATE OR REPLACE FUNCTION calculer_statut_global_commande(commande_id TEXT)
RETURNS TEXT AS $$
DECLARE
    statut_global TEXT;
    total_produits INTEGER;
    produits_prets INTEGER;
    produits_annules INTEGER;
BEGIN
    -- Compter le total des produits dans la commande
    SELECT COUNT(*) INTO total_produits
    FROM "panier_produits"
    WHERE "commandeId" = commande_id;
    
    -- Compter les produits prêts
    SELECT COUNT(*) INTO produits_prets
    FROM "panier_produits"
    WHERE "commandeId" = commande_id AND "statutGIE" = 'PRET';
    
    -- Compter les produits annulés
    SELECT COUNT(*) INTO produits_annules
    FROM "panier_produits"
    WHERE "commandeId" = commande_id AND "statutGIE" = 'ANNULE';
    
    -- Déterminer le statut global
    IF produits_annules = total_produits THEN
        statut_global := 'ANNULEE';
    ELSIF produits_prets = total_produits THEN
        statut_global := 'CONFIRMEE';
    ELSIF produits_prets > 0 THEN
        statut_global := 'EN_PREPARATION';
    ELSE
        statut_global := 'EN_ATTENTE';
    END IF;
    
    RETURN statut_global;
END;
$$ LANGUAGE plpgsql;

-- 7. Créer un trigger pour mettre à jour automatiquement le statut global
CREATE OR REPLACE FUNCTION update_statut_global_commande()
RETURNS TRIGGER AS $$
BEGIN
    -- Mettre à jour le statut global de la commande
    UPDATE "commandes"
    SET "statut" = calculer_statut_global_commande(NEW."commandeId"),
        "updatedAt" = CURRENT_TIMESTAMP
    WHERE "id" = NEW."commandeId";
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Créer le trigger
CREATE TRIGGER trigger_update_statut_global
    AFTER UPDATE OF "statutGIE" ON "panier_produits"
    FOR EACH ROW
    EXECUTE FUNCTION update_statut_global_commande();

-- 9. Créer une vue pour faciliter les requêtes multi-GIE
CREATE VIEW commandes_multi_gie AS
SELECT 
    c.id as commande_id,
    c.numero as commande_numero,
    c.statut as statut_global,
    c."dateCommande",
    c."montant" as montant_total,
    COUNT(pp.id) as total_produits,
    COUNT(CASE WHEN pp."statutGIE" = 'PRET' THEN 1 END) as produits_prets,
    COUNT(CASE WHEN pp."statutGIE" = 'EN_PREPARATION' THEN 1 END) as produits_en_preparation,
    COUNT(CASE WHEN pp."statutGIE" = 'EN_ATTENTE' THEN 1 END) as produits_en_attente,
    COUNT(CASE WHEN pp."statutGIE" = 'ANNULE' THEN 1 END) as produits_annules
FROM "commandes" c
LEFT JOIN "panier_produits" pp ON c.id = pp."commandeId"
GROUP BY c.id, c.numero, c.statut, c."dateCommande", c."montant";

-- 10. Créer une vue pour les notifications GIE
CREATE VIEW notifications_gie AS
SELECT 
    pp.id as panier_produit_id,
    pp."commandeId",
    pp."produitId",
    pp."statutGIE",
    pp."dateConfirmation",
    p.nom as produit_nom,
    p."gieId",
    g.nom as gie_nom,
    g.telephone as gie_telephone,
    g.email as gie_email,
    c.numero as commande_numero,
    c."dateCommande",
    cl.nom as client_nom,
    cl.telephone as client_telephone
FROM "panier_produits" pp
JOIN "produits" p ON pp."produitId" = p.id
JOIN "gies" g ON p."gieId" = g.id
JOIN "commandes" c ON pp."commandeId" = c.id
JOIN "clients" cl ON c."clientId" = cl.id
WHERE pp."statutGIE" = 'EN_ATTENTE';

-- Message de confirmation
SELECT 'Migration GIE Status terminée avec succès!' as message; 