# Documentation API GIE Backend

## 📋 Table des matières

1. [Introduction](#introduction)
2. [Installation et configuration](#installation-et-configuration)
3. [Authentification](#authentification)
4. [Endpoints](#endpoints)
5. [Exemples d'utilisation](#exemples-dutilisation)
6. [Codes d'erreur](#codes-derreur)
7. [Tests](#tests)

## 🚀 Introduction

L'API GIE Backend est une API RESTful développée avec Node.js, TypeScript, Express et Prisma pour la gestion des Groupements d'Intérêt Économique (GIE).

### Fonctionnalités principales

- **Authentification sécurisée** avec JWT
- **Gestion des rôles** (SUPER_ADMIN, ADMIN, CLIENT)
- **CRUD complet** pour toutes les entités
- **Recherche et filtrage** avancés
- **Pagination** automatique
- **Validation des données** robuste
- **Documentation Swagger** complète

## 🔧 Installation et configuration

### Prérequis

- Node.js (v16+)
- PostgreSQL (v12+)
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd gie-backend

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp env.example .env

# Configurer les variables d'environnement
# Éditer le fichier .env avec vos paramètres

# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la base de données
npm run db:push

# Exécuter les seeds (données de test)
npm run db:seed

# Démarrer le serveur
npm run dev
```

### Configuration de l'environnement

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gie_db"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Server
PORT=3003
NODE_ENV=development

# File Upload
UPLOAD_PATH="./uploads"
MAX_FILE_SIZE=5242880
```

## 🔐 Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification.

### Types d'utilisateurs

1. **SUPER_ADMIN** : Accès complet à toutes les fonctionnalités
2. **ADMIN** : Gestion des GIE, clients, produits et commandes
3. **CLIENT** : Accès limité à ses propres données

### Connexion

```bash
# Connexion administrateur
curl -X POST http://localhost:3000/api/auth/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@gie.com",
    "password": "admin123"
  }'

# Connexion client
curl -X POST http://localhost:3000/api/auth/client/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "client@example.com",
    "password": "client123"
  }'
```

### Utilisation du token

```bash
# Inclure le token dans le header Authorization
curl -X GET http://localhost:3000/api/gies \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📚 Endpoints

### Authentification

| Méthode | Endpoint | Description | Rôle requis |
|---------|----------|-------------|-------------|
| POST | `/auth/admin/login` | Connexion administrateur | Public |
| POST | `/auth/client/login` | Connexion client | Public |
| POST | `/auth/admin/register` | Inscription administrateur | SUPER_ADMIN |
| POST | `/auth/client/register` | Inscription client | ADMIN |
| POST | `/auth/verify-token` | Vérifier un token | Public |
| POST | `/auth/change-password` | Changer le mot de passe | Authentifié |

### GIE

| Méthode | Endpoint | Description | Rôle requis |
|---------|----------|-------------|-------------|
| GET | `/gies` | Récupérer tous les GIE | ADMIN |
| POST | `/gies` | Créer un GIE | ADMIN |
| GET | `/gies/search` | Rechercher des GIE | ADMIN |
| GET | `/gies/:id` | Récupérer un GIE | ADMIN |
| PUT | `/gies/:id` | Mettre à jour un GIE | ADMIN |
| DELETE | `/gies/:id` | Supprimer un GIE | ADMIN |
| PATCH | `/gies/:id/status` | Changer le statut | ADMIN |
| GET | `/gies/:id/stats` | Statistiques du GIE | ADMIN |

### Produits

| Méthode | Endpoint | Description | Rôle requis |
|---------|----------|-------------|-------------|
| GET | `/produits` | Récupérer tous les produits | Authentifié |
| POST | `/produits` | Créer un produit | ADMIN |
| GET | `/produits/search` | Rechercher des produits | Authentifié |
| GET | `/produits/category/:categorie` | Produits par catégorie | Authentifié |
| GET | `/produits/out-of-stock` | Produits en rupture | ADMIN |
| GET | `/produits/:id` | Récupérer un produit | Authentifié |
| PUT | `/produits/:id` | Mettre à jour un produit | ADMIN |
| PATCH | `/produits/:id/stock` | Mettre à jour le stock | ADMIN |
| DELETE | `/produits/:id` | Supprimer un produit | ADMIN |

## 💡 Exemples d'utilisation

### 1. Créer un GIE

```bash
curl -X POST http://localhost:3000/api/gies \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "GIE Agricole du Sud",
    "description": "Groupement agricole spécialisé dans les cultures du sud",
    "adresse": "456 Avenue des Cultures, Sud",
    "telephone": "+1234567890",
    "email": "contact@gie-agricole-sud.com"
  }'
```

**Réponse :**
```json
{
  "success": true,
  "message": "GIE créé avec succès",
  "data": {
    "id": "clx1234567890abcdef",
    "nom": "GIE Agricole du Sud",
    "description": "Groupement agricole spécialisé dans les cultures du sud",
    "adresse": "456 Avenue des Cultures, Sud",
    "telephone": "+1234567890",
    "email": "contact@gie-agricole-sud.com",
    "statut": "ACTIF",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 2. Créer un produit

```bash
curl -X POST http://localhost:3000/api/produits \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Oranges Bio",
    "description": "Oranges biologiques fraîches",
    "prix": 3.50,
    "stock": 75,
    "categorie": "Fruits",
    "gieId": "clx1234567890abcdef"
  }'
```

### 3. Rechercher des produits

```bash
curl -X GET "http://localhost:3000/api/produits/search?q=tomates&page=1&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 4. Mettre à jour le stock d'un produit

```bash
curl -X PATCH http://localhost:3000/api/produits/clx1234567890abcdef/stock \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "quantite": -5
  }'
```

### 5. Récupérer les statistiques d'un GIE

```bash
curl -X GET http://localhost:3000/api/gies/clx1234567890abcdef/stats \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

**Réponse :**
```json
{
  "success": true,
  "message": "Statistiques récupérées avec succès",
  "data": {
    "totalProduits": 25,
    "totalCommandes": 150,
    "totalVentes": 12500.50
  }
}
```

## 📊 Pagination

La plupart des endpoints de liste supportent la pagination avec les paramètres suivants :

- `page` : Numéro de page (défaut : 1)
- `limit` : Nombre d'éléments par page (défaut : 10)

**Exemple :**
```bash
curl -X GET "http://localhost:3000/api/gies?page=2&limit=5" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Réponse :**
```json
{
  "success": true,
  "message": "GIE récupérés avec succès",
  "data": {
    "gies": [...],
    "pagination": {
      "page": 2,
      "limit": 5,
      "total": 25,
      "pages": 5
    }
  }
}
```

## 🔍 Recherche

Les endpoints de recherche supportent la recherche textuelle dans plusieurs champs :

- **GIE** : nom, description, email
- **Produits** : nom, description, catégorie
- **Clients** : nom, prénom, email, téléphone

**Exemple :**
```bash
curl -X GET "http://localhost:3000/api/gies/search?q=agricole" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## ❌ Codes d'erreur

| Code | Description |
|------|-------------|
| 200 | Succès |
| 201 | Créé avec succès |
| 400 | Données invalides |
| 401 | Non autorisé (token manquant ou invalide) |
| 403 | Accès refusé (rôle insuffisant) |
| 404 | Ressource non trouvée |
| 500 | Erreur interne du serveur |

**Exemple d'erreur :**
```json
{
  "success": false,
  "message": "GIE non trouvé",
  "error": "Aucun GIE trouvé avec l'ID fourni"
}
```

## 🧪 Tests

### Comptes de test

Après avoir exécuté les seeds, vous pouvez utiliser ces comptes de test :

```bash
# Super Administrateur
Email: superadmin@gie.com
Mot de passe: admin123

# Administrateur
Email: admin@gie.com
Mot de passe: admin123

# Client 1
Email: client1@example.com
Mot de passe: client123

# Client 2
Email: client2@example.com
Mot de passe: client123
```

### Tests avec curl

```bash
# 1. Connexion administrateur
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@gie.com", "password": "admin123"}' \
  | jq -r '.data.token')

# 2. Récupérer tous les GIE
curl -X GET http://localhost:3000/api/gies \
  -H "Authorization: Bearer $TOKEN"

# 3. Créer un nouveau GIE
curl -X POST http://localhost:3000/api/gies \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "GIE Test",
    "description": "GIE de test",
    "adresse": "123 Test Street",
    "telephone": "+1234567890",
    "email": "test@gie.com"
  }'
```

### Tests avec Postman

1. Importez le fichier `swagger.yaml` dans Postman
2. Configurez une variable d'environnement `baseUrl` avec la valeur `http://localhost:3000/api`
3. Configurez une variable d'environnement `token` après vous être connecté
4. Utilisez `{{baseUrl}}` et `{{token}}` dans vos requêtes

## 📝 Validation des données

### Règles de validation

- **Email** : Format email valide et unique
- **Mot de passe** : Minimum 6 caractères
- **Prix** : Nombre positif
- **Stock** : Entier positif ou nul
- **Téléphone** : Format international recommandé
- **Statuts** : Valeurs enum spécifiques

### Exemples de validation

```json
// ✅ Valide
{
  "nom": "GIE Test",
  "email": "test@example.com",
  "prix": 10.50,
  "stock": 100
}

// ❌ Invalide
{
  "nom": "",  // Nom requis
  "email": "invalid-email",  // Format email invalide
  "prix": -5,  // Prix négatif
  "stock": -10  // Stock négatif
}
```

## 🔧 Configuration avancée

### Variables d'environnement supplémentaires

```env
# Logging
LOG_LEVEL=info
LOG_FILE=./logs/app.log

# Rate limiting
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX=100

# CORS
CORS_ORIGIN=http://localhost:3000,http://localhost:3001

# File upload
UPLOAD_MAX_SIZE=5242880
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif
```

### Middleware personnalisé

L'API inclut plusieurs middlewares pour la sécurité et la performance :

- **CORS** : Gestion des requêtes cross-origin
- **Rate Limiting** : Limitation du taux de requêtes
- **Helmet** : Sécurité des headers HTTP
- **Compression** : Compression des réponses
- **Logging** : Logs des requêtes

## 📚 Ressources supplémentaires

- [Documentation Swagger](http://localhost:3000/api-docs) (après démarrage)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Express.js Documentation](https://expressjs.com/)
- [JWT Documentation](https://jwt.io/)

## 🤝 Support

Pour toute question ou problème :

1. Consultez la documentation Swagger
2. Vérifiez les logs du serveur
3. Testez avec les comptes de test fournis
4. Contactez l'équipe de développement

---

**Version :** 1.0.0  
**Dernière mise à jour :** Janvier 2024 