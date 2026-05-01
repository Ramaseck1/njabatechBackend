# Implémentation des Catégories de Produits

## 📋 Vue d'ensemble

Cette implémentation ajoute une table `categorie` séparée liée à la table `produits` pour permettre de choisir une catégorie existante lors de l'ajout d'un produit, au lieu d'utiliser un simple champ texte.

## 🗄️ Modifications de la base de données

### 1. Nouvelle table `Categorie`

```sql
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL UNIQUE,
    "description" TEXT,
    "couleur" TEXT DEFAULT '#3B82F6',
    "icone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    PRIMARY KEY ("id")
);
```

### 2. Modification de la table `Produit`

- **Suppression** : Champ `categorie` (string)
- **Ajout** : Champ `categorieId` (string, nullable) avec clé étrangère vers `categories.id`
- **Relation** : `ON DELETE SET NULL` - si une catégorie est supprimée, les produits gardent `categorieId = NULL`

## 🔧 Fichiers modifiés/créés

### Nouveaux fichiers

1. **`src/services/categorieService.ts`**
   - Service complet pour gérer les catégories
   - Méthodes CRUD + recherche + création par défaut

2. **`src/controllers/categorieController.ts`**
   - Contrôleur pour les endpoints API des catégories
   - Validation et gestion d'erreurs

3. **`src/routes/categorie.ts`**
   - Routes pour les catégories
   - Routes publiques et protégées

4. **`migration_categories.sql`**
   - Script SQL pour migrer les données existantes

### Fichiers modifiés

1. **`prisma/schema.prisma`**
   - Ajout du modèle `Categorie`
   - Modification du modèle `Produit`
   - Relation entre les deux modèles

2. **`src/types/index.ts`**
   - Ajout de l'interface `ICategorie`
   - Modification de `IProduit` et `CreateProduitDto`

3. **`src/services/produitService.ts`**
   - Ajout de la relation `categorie` dans les requêtes
   - Modification de la recherche pour utiliser `categorie.nom`

4. **`src/controllers/produitController.ts`**
   - Gestion du `categorieId` lors de la création/mise à jour

5. **`src/routes/produit.ts`**
   - Modification de la route `/category/:categorieId`

6. **`src/routes/index.ts`**
   - Ajout des routes des catégories

7. **`src/seed.ts`**
   - Création des catégories par défaut
   - Utilisation des catégories dans les produits

## 🚀 Endpoints API

### Catégories

#### Routes publiques
- `GET /api/categories` - Liste toutes les catégories
- `GET /api/categories/with-count` - Catégories avec nombre de produits
- `GET /api/categories/search?q=terme` - Recherche de catégories
- `GET /api/categories/:id` - Détails d'une catégorie

#### Routes protégées (Admin)
- `POST /api/categories` - Créer une catégorie
- `PUT /api/categories/:id` - Modifier une catégorie
- `DELETE /api/categories/:id` - Supprimer une catégorie
- `POST /api/categories/default` - Créer les catégories par défaut

### Produits (modifiés)

- `GET /api/produits/category/:categorieId` - Produits par catégorie (ID)
- `POST /api/produits` - Ajout du champ `categorieId`
- `PUT /api/produits/:id` - Ajout du champ `categorieId`

## 📊 Catégories par défaut

Le système crée automatiquement 9 catégories par défaut :

1. **Légumes** 🥬 - `#22C55E`
2. **Fruits** 🍎 - `#F59E0B`
3. **Céréales** 🌾 - `#8B4513`
4. **Laitiers** 🥛 - `#FFFFFF`
5. **Viandes** 🥩 - `#DC2626`
6. **Poissons** 🐟 - `#0EA5E9`
7. **Épices** 🌶️ - `#7C3AED`
8. **Boissons** 🥤 - `#EC4899`
9. **Autres** 📦 - `#6B7280`

## 🔄 Migration des données

### Script SQL (`migration_categories.sql`)

1. **Création de la table** `categories`
2. **Ajout de la colonne** `categorieId` à `produits`
3. **Insertion des catégories** par défaut
4. **Migration des données** existantes :
   - Mapping des anciennes catégories vers les nouvelles
   - Produits non mappés → catégorie "Autres"
5. **Ajout de la contrainte** de clé étrangère

### Exécution

```bash
# 1. Exécuter le script SQL
psql -d votre_base -f migration_categories.sql

# 2. Générer la migration Prisma
npx prisma migrate dev --name add_categories_table

# 3. Mettre à jour le client Prisma
npx prisma generate

# 4. Exécuter le seed
npm run db:seed
```

## 💡 Avantages

### 1. **Cohérence des données**
- Évite les erreurs de saisie (typos, variations)
- Standardisation des noms de catégories

### 2. **Fonctionnalités avancées**
- Couleurs et icônes pour l'interface
- Statistiques par catégorie
- Recherche améliorée

### 3. **Maintenance**
- Modification centralisée des catégories
- Suppression sécurisée (vérification des produits)

### 4. **Performance**
- Index sur les clés étrangères
- Requêtes optimisées avec relations

## 🛠️ Utilisation

### Créer un produit avec catégorie

```javascript
// Récupérer les catégories disponibles
const categories = await fetch('/api/categories').then(r => r.json());

// Créer un produit
const formData = new FormData();
formData.append('nom', 'Tomates Bio');
formData.append('prix', '2.50');
formData.append('categorieId', 'cat_legumes'); // ID de la catégorie
formData.append('image', imageFile);

await fetch('/api/produits', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}` },
  body: formData
});
```

### Filtrer par catégorie

```javascript
// Produits d'une catégorie spécifique
const produits = await fetch('/api/produits/category/cat_legumes')
  .then(r => r.json());
```

## 🔍 Recherche améliorée

La recherche dans les produits inclut maintenant :
- Nom du produit
- Description du produit
- **Nom de la catégorie** (nouveau)

## 📱 Interface utilisateur

### Sélecteur de catégorie

```javascript
// Exemple de composant React
const CategorySelector = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch('/api/categories')
      .then(r => r.json())
      .then(data => setCategories(data.data.categories));
  }, []);

  return (
    <select name="categorieId">
      <option value="">Sélectionner une catégorie</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.icone} {cat.nom}
        </option>
      ))}
    </select>
  );
};
```

## 🚨 Points d'attention

### 1. **Migration des données**
- Sauvegarder la base avant migration
- Tester en environnement de développement
- Vérifier les données après migration

### 2. **Compatibilité**
- Les anciens produits sans catégorie auront `categorieId = NULL`
- L'interface doit gérer les produits sans catégorie

### 3. **Suppression de catégories**
- Impossible de supprimer une catégorie avec des produits
- Les produits gardent leur `categorieId` même si la catégorie est supprimée

## 🔮 Évolutions futures

1. **Sous-catégories** : Hiérarchie de catégories
2. **Tags** : Système de tags multiples par produit
3. **Filtres avancés** : Combinaison de catégories et autres critères
4. **Statistiques** : Analytics par catégorie
5. **Import/Export** : Gestion en lot des catégories 