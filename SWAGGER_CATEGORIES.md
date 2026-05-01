# Documentation Swagger - Catégories de Produits

## 📝 Modifications apportées au fichier `swagger.yaml`

### 1. **Nouveaux endpoints ajoutés**

#### Routes des catégories

**`GET /api/categories`** - Liste toutes les catégories
- Pagination avec `page` et `limit`
- Tri par nom alphabétique
- Inclut le nombre de produits par catégorie

**`POST /api/categories`** - Créer une nouvelle catégorie (Admin)
- Validation : nom obligatoire et unique
- Champs optionnels : description, couleur, icône

**`GET /api/categories/with-count`** - Catégories avec comptage
- Utile pour les statistiques et badges
- Inclut `_count.produits` pour chaque catégorie

**`GET /api/categories/search`** - Recherche de catégories
- Recherche par nom ou description
- Insensible à la casse
- Pagination des résultats

**`GET /api/categories/{id}`** - Détails d'une catégorie
- Inclut la liste des produits associés
- Informations complètes de la catégorie

**`PUT /api/categories/{id}`** - Modifier une catégorie (Admin)
- Validation : nom unique si modifié
- Tous les champs optionnels

**`DELETE /api/categories/{id}`** - Supprimer une catégorie (Admin)
- Sécurité : impossible si contient des produits
- Les produits gardent leur catégorie

**`POST /api/categories/default`** - Créer les catégories par défaut (Admin)
- Crée automatiquement les 9 catégories du système

### 2. **Nouveaux schémas ajoutés**

#### Schéma `Categorie`
```yaml
Categorie:
  type: object
  properties:
    id:
      type: string
      example: "cat_legumes"
    nom:
      type: string
      example: "Légumes"
    description:
      type: string
      example: "Légumes frais et biologiques"
    couleur:
      type: string
      description: Code couleur hexadécimal
      example: "#22C55E"
    icone:
      type: string
      description: Emoji ou nom d'icône
      example: "🥬"
    createdAt:
      type: string
      format: date-time
    updatedAt:
      type: string
      format: date-time
    produits:
      type: array
      description: Liste des produits de cette catégorie (optionnel)
    _count:
      type: object
      description: Nombre de produits dans cette catégorie (optionnel)
      properties:
        produits:
          type: integer
          example: 15
```

#### Schéma `CreateCategorieDto`
```yaml
CreateCategorieDto:
  type: object
  required:
    - nom
  properties:
    nom:
      type: string
      description: Nom de la catégorie (doit être unique)
      example: "Légumes"
    description:
      type: string
      description: Description de la catégorie
      example: "Légumes frais et biologiques"
    couleur:
      type: string
      description: Code couleur hexadécimal
      example: "#22C55E"
    icone:
      type: string
      description: Emoji ou nom d'icône
      example: "🥬"
```

### 3. **Schémas modifiés**

#### Schéma `Produit` mis à jour
- **Supprimé** : Champ `categorie` (string)
- **Ajouté** : Champ `categorieId` (string, optionnel)
- **Ajouté** : Relation `categorie` (référence au schéma Categorie)

#### Schéma `CreateProduitDto` mis à jour
- **Supprimé** : Champ `categorie` (string)
- **Ajouté** : Champ `categorieId` (string, optionnel)

### 4. **Tag ajouté**

```yaml
- name: Catégories
  description: Gestion des catégories de produits
```

### 5. **Description principale mise à jour**

Ajout de "Gestion des catégories de produits" dans les fonctionnalités principales.

## 🎯 Fonctionnalités documentées

### 1. **Gestion complète des catégories**
- CRUD complet (Create, Read, Update, Delete)
- Validation des données
- Gestion des erreurs détaillée

### 2. **Sécurité et permissions**
- Routes publiques : lecture des catégories
- Routes protégées : création/modification/suppression (Admin uniquement)
- Vérifications de sécurité (suppression impossible si produits)

### 3. **Recherche et filtrage**
- Recherche par nom et description
- Pagination des résultats
- Tri automatique par nom

### 4. **Statistiques**
- Comptage des produits par catégorie
- Endpoint dédié pour les statistiques

### 5. **Catégories par défaut**
- Endpoint pour créer les 9 catégories système
- Utile pour l'initialisation

## 📋 Exemples d'utilisation

### Créer une catégorie
```bash
curl -X POST http://localhost:3003/api/categories \
  -H 'Authorization: Bearer <admin-token>' \
  -H 'Content-Type: application/json' \
  -d '{
    "nom": "Électronique",
    "description": "Produits électroniques et gadgets",
    "couleur": "#3B82F6",
    "icone": "📱"
  }'
```

### Lister les catégories
```bash
curl -X GET http://localhost:3003/api/categories?page=1&limit=10
```

### Rechercher des catégories
```bash
curl -X GET "http://localhost:3003/api/categories/search?q=légumes"
```

### Créer un produit avec catégorie
```bash
curl -X POST http://localhost:3003/api/produits \
  -H 'Authorization: Bearer <gie-token>' \
  -F 'nom=Tomates Bio' \
  -F 'prix=2.50' \
  -F 'categorieId=cat_legumes' \
  -F 'image=@/path/to/image.jpg'
```

## 🔧 Utilisation dans Swagger UI

Avec ces modifications, l'interface Swagger UI permettra :

1. **Test des endpoints catégories** :
   - Création, modification, suppression
   - Recherche et filtrage
   - Visualisation des statistiques

2. **Documentation interactive** :
   - Schémas cliquables
   - Exemples d'utilisation
   - Codes d'erreur détaillés

3. **Validation automatique** :
   - Vérification des types de données
   - Validation des champs requis
   - Test des contraintes

## 📊 Avantages de la documentation

### 1. **Clarté**
- Description détaillée de chaque endpoint
- Exemples concrets d'utilisation
- Codes d'erreur explicites

### 2. **Complétude**
- Tous les endpoints documentés
- Tous les schémas définis
- Toutes les réponses détaillées

### 3. **Cohérence**
- Format uniforme pour tous les endpoints
- Structure cohérente des réponses
- Naming convention respecté

### 4. **Maintenabilité**
- Documentation à jour avec le code
- Facile à modifier et étendre
- Versioning automatique

## 🚀 Prochaines étapes

1. **Tester les endpoints** via Swagger UI
2. **Vérifier la cohérence** avec l'implémentation
3. **Ajouter des exemples** supplémentaires si nécessaire
4. **Mettre à jour** la documentation des autres endpoints si besoin 