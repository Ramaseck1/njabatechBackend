# Changelog - Endpoint updateProduit avec Images

## Version 1.1.0 - Support des images Cloudinary

### 🆕 Nouvelles fonctionnalités

#### 1. Support des images dans l'endpoint updateProduit
- **Fichier modifié**: `src/controllers/produitController.ts`
- **Méthode**: `update()`
- **Fonctionnalités ajoutées**:
  - Upload de nouvelles images via Cloudinary
  - Suppression automatique de l'ancienne image
  - Conservation de l'image existante si aucune nouvelle image n'est fournie
  - Gestion des erreurs d'upload

#### 2. Utilitaire Cloudinary
- **Fichier créé**: `src/utils/cloudinary.ts`
- **Classe**: `CloudinaryUtils`
- **Méthodes**:
  - `deleteImage(imageUrl)`: Supprime une image de Cloudinary
  - `uploadImage(buffer, folder)`: Upload une image sur Cloudinary
  - `isCloudinaryUrl(url)`: Vérifie si une URL est une URL Cloudinary valide

#### 3. Amélioration du service produit
- **Fichier modifié**: `src/services/produitService.ts`
- **Méthode**: `update()`
- **Améliorations**:
  - Récupération du produit existant avant mise à jour
  - Meilleure gestion des erreurs

#### 4. Gestion des images lors de la suppression
- **Fichier modifié**: `src/controllers/produitController.ts`
- **Méthode**: `delete()`
- **Fonctionnalité**: Suppression automatique de l'image Cloudinary lors de la suppression d'un produit

### 📝 Documentation

#### 1. Documentation API
- **Fichier créé**: `API_PRODUIT_UPDATE.md`
- **Contenu**:
  - Guide complet d'utilisation de l'endpoint
  - Exemples avec cURL et JavaScript
  - Codes d'erreur et réponses
  - Gestion des images

#### 2. Script de test
- **Fichier créé**: `test-update-produit.js`
- **Fonctionnalités**:
  - Test de mise à jour avec image
  - Test de mise à jour sans image
  - Test de récupération du produit
  - Exemples d'utilisation

#### 3. Documentation Swagger
- **Fichier modifié**: `swagger.yaml`
- **Fichier créé**: `SWAGGER_UPDATE_PRODUIT.md`
- **Modifications**:
  - Support `multipart/form-data` pour l'upload d'images
  - Documentation détaillée des fonctionnalités
  - Exemples d'URLs Cloudinary
  - Réponses d'erreur détaillées
  - Interface Swagger UI améliorée

### 🔧 Modifications techniques

#### 1. Imports mis à jour
- Remplacement de l'import direct de `cloudinary` par `CloudinaryUtils`
- Ajout de la dépendance `form-data` dans `package.json`

#### 2. Gestion des données
- Conversion automatique des types (`prix` en number, `stock` en integer)
- Validation des données avant mise à jour
- Gestion des champs optionnels

#### 3. Sécurité
- Vérification de propriété du produit (seul le GIE propriétaire peut modifier)
- Validation des données d'entrée
- Gestion sécurisée des uploads d'images

### 🚀 Utilisation

#### Endpoint
```
PUT /api/produits/:id
```

#### Headers requis
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

#### Corps de la requête (FormData)
- `nom` (optionnel): Nom du produit
- `description` (optionnel): Description du produit
- `prix` (optionnel): Prix du produit
- `stock` (optionnel): Quantité en stock
- `categorie` (optionnel): Catégorie du produit
- `image` (optionnel): Fichier image

#### Exemple de réponse
```json
{
  "success": true,
  "message": "Produit mis à jour avec succès",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "nom": "Produit mis à jour",
    "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/produits/image.jpg",
    // ... autres champs
  }
}
```

### 🔄 Flux de traitement

1. **Validation des données**: Vérification des types et valeurs
2. **Vérification de propriété**: Seul le GIE propriétaire peut modifier
3. **Gestion de l'image**:
   - Si nouvelle image fournie: suppression de l'ancienne + upload de la nouvelle
   - Si aucune image: conservation de l'image existante
4. **Mise à jour en base**: Sauvegarde des nouvelles données
5. **Réponse**: Retour du produit mis à jour

### 🛠️ Installation

1. Installer la nouvelle dépendance:
```bash
npm install form-data
```

2. Vérifier la configuration Cloudinary dans `.env`:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 🧪 Tests

Pour tester l'endpoint:

1. Configurer le script de test:
   - Remplacer `TOKEN` par votre JWT
   - Remplacer `PRODUIT_ID` par l'ID d'un produit existant

2. Exécuter les tests:
```bash
node test-update-produit.js
```

### 📋 Notes importantes

- Les images sont automatiquement optimisées par Cloudinary
- Les URLs d'images sont sécurisées (HTTPS)
- La suppression d'images échouée n'empêche pas la mise à jour du produit
- Seuls les formats d'image supportés par Cloudinary sont acceptés
- Taille maximale recommandée: 10MB par image 