-- Migration pour ajouter la table catégorie
-- Ce script doit être exécuté avant de générer la migration Prisma

-- 1. Créer la table categories
CREATE TABLE IF NOT EXISTS "categories" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "couleur" TEXT DEFAULT '#3B82F6',
    "icone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- 2. Créer l'index unique sur le nom
CREATE UNIQUE INDEX IF NOT EXISTS "categories_nom_key" ON "categories"("nom");

-- 3. Ajouter la colonne categorieId à la table produits
ALTER TABLE "produits" ADD COLUMN IF NOT EXISTS "categorieId" TEXT;

-- 4. Créer des catégories par défaut basées sur les catégories existantes
INSERT INTO "categories" ("id", "nom", "description", "couleur", "icone", "createdAt", "updatedAt")
VALUES 
    ('cat_legumes', 'Légumes', 'Légumes frais et biologiques', '#22C55E', '🥬', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_fruits', 'Fruits', 'Fruits frais et de saison', '#F59E0B', '🍎', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_cereales', 'Céréales', 'Céréales et grains', '#8B4513', '🌾', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_laitiers', 'Laitiers', 'Produits laitiers', '#FFFFFF', '🥛', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_viandes', 'Viandes', 'Viandes et volailles', '#DC2626', '🥩', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_poissons', 'Poissons', 'Poissons et fruits de mer', '#0EA5E9', '🐟', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_epices', 'Épices', 'Épices et condiments', '#7C3AED', '🌶️', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_boissons', 'Boissons', 'Boissons et jus', '#EC4899', '🥤', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cat_autres', 'Autres', 'Autres produits', '#6B7280', '📦', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT ("nom") DO NOTHING;

-- 5. Migrer les données existantes
-- Mettre à jour les produits avec des catégories existantes
UPDATE "produits" 
SET "categorieId" = 'cat_legumes' 
WHERE LOWER("categorie") IN ('légumes', 'legumes', 'vegetables', 'légume', 'legume');

UPDATE "produits" 
SET "categorieId" = 'cat_fruits' 
WHERE LOWER("categorie") IN ('fruits', 'fruit', 'fruits frais');

UPDATE "produits" 
SET "categorieId" = 'cat_cereales' 
WHERE LOWER("categorie") IN ('céréales', 'cereales', 'céréale', 'cereale', 'grains', 'grain');

UPDATE "produits" 
SET "categorieId" = 'cat_laitiers' 
WHERE LOWER("categorie") IN ('laitiers', 'laitier', 'lait', 'dairy', 'produits laitiers');

UPDATE "produits" 
SET "categorieId" = 'cat_viandes' 
WHERE LOWER("categorie") IN ('viandes', 'viande', 'viande rouge', 'volaille', 'poulet', 'boeuf');

UPDATE "produits" 
SET "categorieId" = 'cat_poissons' 
WHERE LOWER("categorie") IN ('poissons', 'poisson', 'fruits de mer', 'seafood', 'poisson frais');

UPDATE "produits" 
SET "categorieId" = 'cat_epices' 
WHERE LOWER("categorie") IN ('épices', 'epices', 'épice', 'epice', 'condiments', 'condiment');

UPDATE "produits" 
SET "categorieId" = 'cat_boissons' 
WHERE LOWER("categorie") IN ('boissons', 'boisson', 'jus', 'beverages', 'drinks');

-- Mettre tous les autres produits dans la catégorie "Autres"
UPDATE "produits" 
SET "categorieId" = 'cat_autres' 
WHERE "categorieId" IS NULL AND "categorie" IS NOT NULL;

-- 6. Supprimer l'ancienne colonne categorie (optionnel - à faire après vérification)
-- ALTER TABLE "produits" DROP COLUMN IF EXISTS "categorie";

-- 7. Ajouter la contrainte de clé étrangère
ALTER TABLE "produits" ADD CONSTRAINT "produits_categorieId_fkey" 
FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE; 