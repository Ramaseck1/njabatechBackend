# Modifications Swagger - Endpoint updateProduit avec Images

## 📝 Modifications apportées au fichier `swagger.yaml`

### 1. **Description de l'endpoint PUT /produits/{id}**

#### Avant :
```yaml
put:
  summary: Mettre à jour un produit
  description: Mettre à jour les informations d'un produit
```

#### Après :
```yaml
put:
  summary: Mettre à jour un produit
  description: |
    Mettre à jour les informations d'un produit avec support des images Cloudinary.
    
    **Fonctionnalités :**
    - Mise à jour des données du produit (nom, description, prix, stock, catégorie)
    - Upload de nouvelle image (optionnel) - remplace automatiquement l'ancienne
    - Conservation de l'image existante si aucune nouvelle image n'est fournie
    - Suppression automatique de l'ancienne image de Cloudinary lors de l'upload d'une nouvelle
    
    **Formats d'image supportés :** JPG, PNG, GIF, WebP
    **Taille maximale :** 10MB
```

### 2. **Corps de la requête (requestBody)**

#### Avant :
```yaml
requestBody:
  required: true
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/CreateProduitDto'
```

#### Après :
```yaml
requestBody:
  required: true
  content:
    multipart/form-data:
      schema:
        type: object
        properties:
          nom:
            type: string
            description: Nom du produit
            example: "Tomates Bio Mises à Jour"
          description:
            type: string
            description: Description du produit
            example: "Tomates biologiques fraîches du jardin - nouvelle récolte"
          prix:
            type: number
            format: float
            description: Prix du produit (doit être > 0)
            example: 3.50
          stock:
            type: integer
            description: Quantité en stock (doit être >= 0)
            example: 75
          categorie:
            type: string
            description: Catégorie du produit
            example: "Légumes"
          image:
            type: string
            format: binary
            description: |
              Nouvelle image du produit (optionnel).
              Si fournie, remplace automatiquement l'ancienne image.
              Si non fournie, l'image existante est conservée.
      encoding:
        image:
          contentType: image/*
```

### 3. **Réponses détaillées**

#### Nouvelles réponses ajoutées :

**400 - Données invalides :**
```yaml
'400':
  description: |
    Données invalides
    - Prix négatif ou égal à zéro
    - Stock négatif
    - Erreur lors de l'upload d'image
  content:
    application/json:
      schema:
        type: object
        properties:
          success:
            type: boolean
            example: false
          message:
            type: string
            example: "Le prix doit être supérieur à 0"
          error:
            type: string
            example: "Erreur lors de l'upload de l'image"
```

**403 - Accès refusé :**
```yaml
'403':
  description: |
    Accès refusé
    - Le produit ne vous appartient pas (seul le GIE propriétaire peut modifier)
  content:
    application/json:
      schema:
        type: object
        properties:
          success:
            type: boolean
            example: false
          message:
            type: string
            example: "Accès refusé. Ce produit ne vous appartient pas."
```

**500 - Erreur serveur :**
```yaml
'500':
  description: Erreur serveur
  content:
    application/json:
      schema:
        type: object
        properties:
          success:
            type: boolean
            example: false
          message:
            type: string
            example: "Erreur lors de la mise à jour du produit"
          error:
            type: string
            example: "Erreur interne du serveur"
```

### 4. **Schémas mis à jour**

#### Schéma Produit :
```yaml
image:
  type: string
  description: URL de l'image du produit (Cloudinary)
  example: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/produits/tomates-bio.jpg"
```

#### Schéma CreateProduitDto :
```yaml
image:
  type: string
  description: URL de l'image du produit (Cloudinary)
  example: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/produits/tomates-bio.jpg"
```

### 5. **Documentation générale**

#### Ajout dans la description principale :
```yaml
## Gestion des images
L'API supporte l'upload d'images pour les produits via Cloudinary :
- **Formats supportés** : JPG, PNG, GIF, WebP
- **Taille maximale** : 10MB
- **Stockage** : Images optimisées et sécurisées sur Cloudinary
- **URLs** : Format HTTPS avec versioning automatique

### Exemple d'utilisation avec images
```bash
# Mise à jour d'un produit avec nouvelle image
curl -X PUT \
  http://localhost:3003/api/produits/123e4567-e89b-12d3-a456-426614174000 \
  -H 'Authorization: Bearer <your-jwt-token>' \
  -F 'nom=Nouveau nom' \
  -F 'prix=29.99' \
  -F 'image=@/path/to/image.jpg'
```
```

## 🎯 Avantages des modifications

### 1. **Clarté de la documentation**
- Description détaillée des fonctionnalités
- Exemples concrets d'utilisation
- Codes d'erreur explicites

### 2. **Support des images**
- Documentation du format `multipart/form-data`
- Spécification des types de fichiers supportés
- Exemples d'URLs Cloudinary

### 3. **Gestion des erreurs**
- Réponses d'erreur détaillées
- Messages d'erreur explicites
- Codes de statut appropriés

### 4. **Exemples pratiques**
- Exemple cURL dans la documentation
- Exemples de requêtes et réponses
- Format des URLs Cloudinary

## 🔧 Utilisation dans Swagger UI

Avec ces modifications, l'interface Swagger UI permettra :

1. **Upload de fichiers** : Interface native pour sélectionner des images
2. **Test en ligne** : Possibilité de tester l'endpoint directement
3. **Documentation interactive** : Exemples cliquables et exécutables
4. **Validation** : Vérification automatique des types de fichiers

## 📋 Vérification

Pour vérifier que les modifications sont correctes :

1. **Redémarrer le serveur** pour recharger Swagger
2. **Accéder à Swagger UI** : `http://localhost:3003/api-docs`
3. **Tester l'endpoint** PUT /produits/{id}
4. **Vérifier l'upload** de fichiers dans l'interface

## 🚀 Prochaines étapes

- Tester l'endpoint via Swagger UI
- Vérifier que les exemples fonctionnent
- Ajouter d'autres exemples si nécessaire
- Mettre à jour la documentation des autres endpoints si besoin 