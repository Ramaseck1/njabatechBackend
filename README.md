# GIE Backend API

Backend API pour la gestion des GIE (Groupement d'Intérêt Économique) développé avec Node.js, TypeScript, Express et Prisma.

## 🚀 Fonctionnalités

### Authentification et Autorisations
- **ADMIN** : Peut s'inscrire/se connecter et créer les comptes GIE
- **GIE** : Peut seulement se connecter (pas d'inscription autonome)
- **CLIENT** : Peut s'inscrire/se connecter, mais la connexion n'est obligatoire qu'au moment de la commande
- Gestion des tokens JWT
- Middleware d'autorisation par rôle
- Changement de mot de passe sécurisé

### Gestion des GIE
- CRUD complet pour les GIE
- Gestion des statuts (ACTIF, INACTIF, SUSPENDU)
- Statistiques des GIE
- Recherche avancée

### Gestion des Clients
- CRUD complet pour les clients
- Gestion des statuts (ACTIF, INACTIF, BLOQUE)
- Statistiques des clients
- Recherche avancée

### Gestion des Produits
- CRUD complet pour les produits
- Gestion des stocks
- Catégorisation des produits
- Images des produits

### Gestion des Commandes
- Création de commandes
- Gestion des statuts de commande
- Calcul automatique des montants
- Historique des commandes

### Gestion des Paiements
- Suivi des paiements
- Méthodes de paiement multiples
- Statuts de paiement

## 🛠️ Technologies utilisées

- **Node.js** - Runtime JavaScript
- **TypeScript** - Langage de programmation typé
- **Express.js** - Framework web
- **Prisma** - ORM pour PostgreSQL
- **PostgreSQL** - Base de données
- **JWT** - Authentification
- **bcryptjs** - Hashage des mots de passe
- **CORS** - Gestion des requêtes cross-origin
- **Swagger UI** - Documentation interactive de l'API

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- PostgreSQL (version 12 ou supérieure)
- npm ou yarn

## 🔧 Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd gie-backend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'environnement**
   ```bash
   cp env.example .env
   ```
   
   Modifier le fichier `.env` avec vos paramètres :
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/gie_db"
   JWT_SECRET="your-super-secret-jwt-key"
   PORT=3000
   NODE_ENV=development
   ```

4. **Configuration de la base de données**
   ```bash
   # Générer le client Prisma
   npm run db:generate
   
   # Pousser le schéma vers la base de données
   npm run db:push
   
   # Ou créer une migration
   npm run db:migrate
   ```

5. **Démarrer le serveur**
   ```bash
   # Mode développement
   npm run dev
   
   # Mode production
   npm run build
   npm start
   ```

## 📚 API Endpoints

### Authentification

#### Routes publiques (pas besoin d'authentification)
- `POST /api/auth/admin/login` - Connexion administrateur
- `POST /api/auth/gie/login` - Connexion GIE
- `POST /api/auth/client/login` - Connexion client
- `POST /api/auth/client/register` - Inscription client (publique)
- `POST /api/auth/verify-token` - Vérifier un token

#### Routes protégées
- `POST /api/auth/admin/register` - Inscription administrateur (SUPER_ADMIN uniquement)
- `POST /api/auth/gie/register` - Créer un compte GIE (ADMIN uniquement)
- `POST /api/auth/change-password` - Changer le mot de passe (authentifié)

### GIE
- `GET /api/gies` - Récupérer tous les GIE
- `POST /api/gies` - Créer un GIE
- `GET /api/gies/:id` - Récupérer un GIE
- `PUT /api/gies/:id` - Mettre à jour un GIE
- `DELETE /api/gies/:id` - Supprimer un GIE
- `PATCH /api/gies/:id/status` - Changer le statut d'un GIE
- `GET /api/gies/:id/stats` - Statistiques d'un GIE
- `GET /api/gies/search?q=term` - Rechercher des GIE

### Clients
- `GET /api/clients` - Récupérer tous les clients
- `POST /api/clients` - Créer un client
- `GET /api/clients/:id` - Récupérer un client
- `PUT /api/clients/:id` - Mettre à jour un client
- `DELETE /api/clients/:id` - Supprimer un client
- `PATCH /api/clients/:id/status` - Changer le statut d'un client
- `GET /api/clients/:id/stats` - Statistiques d'un client
- `GET /api/clients/search?q=term` - Rechercher des clients

### Produits
- `GET /api/produits` - Récupérer tous les produits
- `POST /api/produits` - Créer un produit
- `GET /api/produits/:id` - Récupérer un produit
- `PUT /api/produits/:id` - Mettre à jour un produit
- `DELETE /api/produits/:id` - Supprimer un produit
- `GET /api/produits/search?q=term` - Rechercher des produits

### Commandes
- `GET /api/commandes` - Récupérer toutes les commandes
- `POST /api/commandes` - Créer une commande
- `GET /api/commandes/:id` - Récupérer une commande
- `PUT /api/commandes/:id` - Mettre à jour une commande
- `PATCH /api/commandes/:id/status` - Changer le statut d'une commande

### Paiements
- `GET /api/paiements` - Récupérer tous les paiements
- `POST /api/paiements` - Créer un paiement
- `GET /api/paiements/:id` - Récupérer un paiement
- `PATCH /api/paiements/:id/status` - Changer le statut d'un paiement

## 📖 Documentation

### Documentation interactive (Swagger UI)
Une fois le serveur démarré, accédez à la documentation interactive :
- **URL** : http://localhost:3000/api-docs
- **Fonctionnalités** :
  - Interface interactive pour tester les endpoints
  - Documentation complète de tous les paramètres
  - Exemples de requêtes et réponses
  - Authentification intégrée

### Fichier Swagger YAML
- **URL** : http://localhost:3000/swagger.yaml
- **Usage** : Importable dans Postman, Insomnia ou autres outils

### Documentation détaillée
Consultez le fichier `API_DOCUMENTATION.md` pour une documentation complète avec des exemples d'utilisation.

## 🔐 Authentification

L'API utilise JWT pour l'authentification. Incluez le token dans le header Authorization :

```
Authorization: Bearer <your-jwt-token>
```

### Rôles et Permissions

#### 🔑 **SUPER_ADMIN**
- Accès complet à toutes les fonctionnalités
- Peut créer des comptes ADMIN
- Peut gérer tous les GIE, clients, produits et commandes

#### 👨‍💼 **ADMIN**
- Peut s'inscrire et se connecter
- Peut créer des comptes GIE
- Peut gérer les GIE, clients, produits et commandes
- Accès limité par rapport au SUPER_ADMIN

#### 🏢 **GIE**
- Peut seulement se connecter (pas d'inscription autonome)
- Peut gérer ses propres produits
- Peut voir ses statistiques
- Accès limité à ses propres ressources

#### 👤 **CLIENT**
- Peut s'inscrire et se connecter (inscription publique)
- Connexion obligatoire seulement au moment de la commande
- Peut voir ses propres commandes et données
- Accès limité à ses propres ressources

## 📊 Structure de la base de données

### Entités principales
- **Administrateur** : Gestionnaires du système
- **GIE** : Groupements d'Intérêt Économique (avec authentification)
- **Client** : Utilisateurs finaux
- **Produit** : Produits proposés par les GIE
- **Commande** : Commandes des clients
- **Paiement** : Paiements associés aux commandes
- **PanierProduit** : Table de liaison commande-produit

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev          # Démarrer en mode développement
npm run build        # Compiler TypeScript
npm start           # Démarrer en mode production

# Base de données
npm run db:generate  # Générer le client Prisma
npm run db:push      # Pousser le schéma vers la DB
npm run db:migrate   # Créer et appliquer une migration
npm run db:studio    # Ouvrir Prisma Studio
npm run db:seed      # Exécuter les seeds

# Tests (à implémenter)
npm test            # Exécuter les tests
npm run test:watch  # Tests en mode watch
```

## 🔧 Configuration

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `DATABASE_URL` | URL de connexion PostgreSQL | - |
| `JWT_SECRET` | Clé secrète pour JWT | - |
| `JWT_EXPIRES_IN` | Durée de validité JWT | 7d |
| `PORT` | Port du serveur | 3000 |
| `NODE_ENV` | Environnement | development |
| `UPLOAD_PATH` | Chemin des uploads | ./uploads |
| `MAX_FILE_SIZE` | Taille max des fichiers | 5242880 |

## 📝 Exemples d'utilisation

### Connexion administrateur
```bash
curl -X POST http://localhost:3000/api/auth/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "password123"
  }'
```

### Créer un GIE (par un admin)
```bash
curl -X POST http://localhost:3000/api/auth/gie/register \
  -H "Authorization: Bearer <admin-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "GIE Agricole du Sud",
    "email": "contact@gie-sud.com",
    "password": "gie123",
    "description": "Groupement agricole du sud",
    "adresse": "123 Rue du Sud",
    "telephone": "+1234567890"
  }'
```

### Connexion GIE
```bash
curl -X POST http://localhost:3000/api/auth/gie/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "contact@gie-sud.com",
    "password": "gie123"
  }'
```

### Inscription client (publique)
```bash
curl -X POST http://localhost:3000/api/auth/client/register \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@example.com",
    "password": "client123",
    "telephone": "+1234567890",
    "adresse": "456 Rue du Client"
  }'
```

## 🎯 Comptes de test

  