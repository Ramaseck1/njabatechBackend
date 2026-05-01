# 🔄 Mise à jour du Swagger - Endpoints Clients

## 📋 Problème identifié

Les endpoints `/clients` dans le swagger actuel sont incomplets et manquent de :
- Réponses détaillées avec schémas
- Exemples de réponses
- Gestion des erreurs
- Paramètres de pagination et filtrage
- Sécurité et authentification

## 🎯 Endpoints à améliorer

### 1. GET /clients - Liste des clients
**Problème actuel :** Réponse vide sans schéma
**Solution :** Ajouter pagination, filtres et schéma de réponse complet

### 2. POST /clients - Créer un client
**Problème actuel :** Utilise le mauvais schéma (Client au lieu de CreateClientDto)
**Solution :** Corriger le schéma et ajouter validation

### 3. GET /clients/{id} - Détail d'un client
**Problème actuel :** Réponse vide sans schéma
**Solution :** Ajouter schéma de réponse et gestion d'erreur

### 4. PUT /clients/{id} - Modifier un client
**Problème actuel :** Endpoint manquant
**Solution :** Ajouter l'endpoint complet

### 5. DELETE /clients/{id} - Supprimer un client
**Problème actuel :** Endpoint manquant
**Solution :** Ajouter l'endpoint complet

## 🔧 Mise à jour proposée

### Endpoint GET /clients amélioré
```yaml
/clients:
  get:
    tags:
      - Client
    summary: Liste des clients
    description: |
      Récupérer la liste de tous les clients avec pagination et filtres.
      
      **Fonctionnalités :**
      - Liste paginée des clients
      - Tri par date de création (plus récents en premier)
      - Filtres par statut, région, administrateur
      - Inclut les informations complètes des clients
    security:
      - bearerAuth: []
    parameters:
      - name: page
        in: query
        description: Numéro de page
        required: false
        schema:
          type: integer
          default: 1
      - name: limit
        in: query
        description: Nombre d'éléments par page
        required: false
        schema:
          type: integer
          default: 20
      - name: statut
        in: query
        description: Filtrer par statut du client
        required: false
        schema:
          type: string
          enum: [ACTIF, INACTIF, BLOQUE]
      - name: regionId
        in: query
        description: Filtrer par région
        required: false
        schema:
          type: string
      - name: administrateurId
        in: query
        description: Filtrer par administrateur
        required: false
        schema:
          type: string
      - name: search
        in: query
        description: Recherche par nom, prénom ou email
        required: false
        schema:
          type: string
    responses:
      '200':
        description: Liste des clients récupérée avec succès
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                  example: true
                message:
                  type: string
                  example: "Clients récupérés avec succès"
                data:
                  type: object
                  properties:
                    clients:
                      type: array
                      items:
                        $ref: '#/components/schemas/Client'
                    pagination:
                      $ref: '#/components/schemas/Pagination'
      '401':
        description: Non autorisé - Token JWT manquant ou invalide
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ErrorResponse'
      '403':
        description: Accès refusé - Admin requis
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ErrorResponse'
      '500':
        description: Erreur interne du serveur
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ErrorResponse'
```

### Endpoint POST /clients corrigé
```yaml
    post:
      tags:
        - Client
      summary: Créer un client
      description: |
        Créer un nouveau client avec validation des données.
        
        **Validation :**
        - Email unique obligatoire
        - Mot de passe sécurisé
        - Nom et prénom obligatoires
        - Téléphone et adresse optionnels
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateClientDto'
            examples:
              client_basique:
                summary: Client avec informations minimales
                value:
                  email: "client@example.com"
                  password: "motdepasse123"
                  nom: "Dupont"
                  prenom: "Jean"
              client_complet:
                summary: Client avec toutes les informations
                value:
                  email: "client.complet@example.com"
                  password: "motdepasse123"
                  nom: "Martin"
                  prenom: "Marie"
                  telephone: "+221701234567"
                  adresse: "123 Rue du Client, Dakar, Sénégal"
                  administrateurId: "admin123"
      responses:
        '201':
          description: Client créé avec succès
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: true
                  message:
                    type: string
                    example: "Client créé avec succès"
                  data:
                    $ref: '#/components/schemas/Client'
        '400':
          description: Données invalides
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ValidationError'
        '409':
          description: Email déjà utilisé
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
        '401':
          description: Non autorisé
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
```

### Endpoint GET /clients/{id} amélioré
```yaml
/clients/{id}:
  get:
    tags:
      - Client
    summary: Détail d'un client
    description: |
      Récupérer les détails complets d'un client spécifique.
      
      **Inclus :**
      - Informations personnelles
      - Historique des commandes
      - Adresses de livraison
      - Statut et métadonnées
    security:
      - bearerAuth: []
    parameters:
      - in: path
        name: id
        required: true
        description: ID unique du client
        schema:
          type: string
          example: "clx1234567890abcdef"
    responses:
      '200':
        description: Détails du client récupérés avec succès
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                  example: true
                message:
                  type: string
                  example: "Client récupéré avec succès"
                data:
                  $ref: '#/components/schemas/ClientDetail'
      '404':
        description: Client non trouvé
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ErrorResponse'
      '401':
        description: Non autorisé
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ErrorResponse'
```

## 📝 Nouveaux schémas à ajouter

### ClientDetail (Client avec informations étendues)
```yaml
    ClientDetail:
      type: object
      allOf:
        - $ref: '#/components/schemas/Client'
        - type: object
          properties:
            commandes:
              type: array
              description: Historique des commandes du client
              items:
                $ref: '#/components/schemas/CommandeResume'
            adressesLivraison:
              type: array
              description: Adresses de livraison enregistrées
              items:
                $ref: '#/components/schemas/AdresseLivraison'
            totalCommandes:
              type: integer
              description: Nombre total de commandes
              example: 15
            montantTotal:
              type: number
              description: Montant total des commandes
              example: 125000.50
            derniereCommande:
              type: string
              format: date-time
              description: Date de la dernière commande
              example: "2024-01-15T10:30:00Z"
```

### CommandeResume (Résumé de commande pour les listes)
```yaml
    CommandeResume:
      type: object
      properties:
        id:
          type: string
          example: "cmd1234567890abcdef"
        numero:
          type: string
          example: "CMD-2024-001"
        dateCommande:
          type: string
          format: date-time
          example: "2024-01-15T10:30:00Z"
        statut:
          type: string
          enum: [EN_ATTENTE, CONFIRMEE, EN_PREPARATION, EXPEDIEE, LIVREE, ANNULEE]
          example: "LIVREE"
        montantTotal:
          type: number
          example: 15000.00
        nombreProduits:
          type: integer
          example: 5
```

### ValidationError (Erreur de validation)
```yaml
    ValidationError:
      type: object
      properties:
        success:
          type: boolean
          example: false
        message:
          type: string
          example: "Données de validation invalides"
        errors:
          type: array
          items:
            type: object
            properties:
              field:
                type: string
                example: "email"
              message:
                type: string
                example: "L'email doit être une adresse valide"
              value:
                type: string
                example: "email-invalide"
```

## 🚀 Prochaines étapes

1. **Mettre à jour le fichier swagger.yaml** avec ces améliorations
2. **Tester les endpoints** dans l'interface Swagger
3. **Vérifier la cohérence** avec l'implémentation backend
4. **Documenter les exemples** d'utilisation
5. **Ajouter des tests** pour valider les endpoints

## 🔍 Vérification

Après la mise à jour, vérifier que :
- ✅ Les endpoints `/clients` sont complets et détaillés
- ✅ Les schémas de réponse sont corrects
- ✅ La pagination et les filtres fonctionnent
- ✅ La gestion d'erreur est appropriée
- ✅ L'authentification est bien configurée 