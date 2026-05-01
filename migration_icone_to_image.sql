-- Migration pour remplacer l'attribut 'icone' par 'image' dans la table categories
-- Date: 2024-12-30

-- 1. Ajouter la nouvelle colonne 'image'
ALTER TABLE categories ADD COLUMN image VARCHAR(500);

-- 2. Mettre à jour les données existantes avec des URLs d'images par défaut
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/legumes.jpg' WHERE nom = 'Légumes';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/fruits.jpg' WHERE nom = 'Fruits';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/cereales.jpg' WHERE nom = 'Céréales';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/laitiers.jpg' WHERE nom = 'Laitiers';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/viandes.jpg' WHERE nom = 'Viandes';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/poissons.jpg' WHERE nom = 'Poissons';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/epices.jpg' WHERE nom = 'Épices';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/boissons.jpg' WHERE nom = 'Boissons';
UPDATE categories SET image = 'https://res.cloudinary.com/dtpvh5zrk/image/upload/v1753962805/produits/autres.jpg' WHERE nom = 'Autres';

-- 3. Supprimer l'ancienne colonne 'icone'
ALTER TABLE categories DROP COLUMN icone;

-- 4. Vérifier les changements
SELECT id, nom, image FROM categories ORDER BY nom; 