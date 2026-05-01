# 📚 Mise à jour du Swagger - Système Multi-GIE

## 🎯 Vue d'ensemble

Ce document décrit les modifications apportées au fichier `swagger.yaml` pour documenter les nouvelles fonctionnalités du système multi-GIE.

## ✨ Nouvelles fonctionnalités documentées

### 1. **Description principale mise à jour**
- Ajout d'une section complète sur le système multi-GIE
- Explication du flux de commandes multi-GIE
- Exemples concrets d'utilisation

### 2. **Nouveaux tags organisés**
- **Commandes Multi-GIE** : Nouveau tag pour les endpoints multi-GIE
- Organisation claire des endpoints par fonctionnalité

### 3. **Nouvelles routes ajoutées**

#### **GET /commandes/mes-commandes-details**
- Récupération des commandes avec détails GIE
- Progression par produit
- Statistiques de préparation
- Montant spécifique au GIE

#### **GET /commandes/stats-gie**
- Statistiques détaillées du GIE
- Répartition par statut
- Vue d'ensemble de l'activité

#### **PATCH /commandes/produit/{panierProduitId}/en-preparation**
- Marquage d'un produit en préparation
- Mise à jour automatique du statut global

#### **PATCH /commandes/produit/{panierProduitId}/pret**
- Marquage d'un produit comme prêt
- Notification automatique au client si tous prêts

#### **PATCH /commandes/produit/{panierProduitId}/annuler**
- Annulation d'un produit avec raison optionnelle
- Notification automatique au client

### 4. **Nouveaux schémas ajoutés**

#### **StatutGIEProduit**
```yaml
type: string
enum: [EN_ATTENTE, EN_PREPARATION, PRET, ANNULE]
```

#### **PanierProduitMultiGIE**
- Statut par GIE
- Date de confirmation
- Informations produit

#### **DetailsGIE**
- Statistiques de progression
- Montant spécifique au GIE
- Pourcentage de progression

#### **CommandeMultiGIE**
- Vue d'ensemble avec détails GIE
- Statut global calculé automatiquement

## 🔧 Modifications techniques

### **Fichiers modifiés**
1. `swagger.yaml` - Fichier principal mis à jour
2. `swagger-multi-gie.yaml` - Nouvelles routes et schémas
3. `update-swagger.js` - Script d'automatisation

### **Structure des modifications**
```yaml
# Description principale
info:
  description: |
    ## 🏢 Système Multi-GIE (Nouveau)
    L'API gère maintenant un système avancé...

# Nouveaux tags
tags:
  - name: Commandes Multi-GIE
    description: Gestion avancée des commandes multi-GIE...

# Nouvelles routes
paths:
  /commandes/mes-commandes-details:
    get:
      tags: [Commandes Multi-GIE]
      # ...

# Nouveaux schémas
components:
  schemas:
    StatutGIEProduit:
      # ...
```

## 📱 Exemples d'utilisation

### **Récupération des commandes avec détails**
```bash
curl -X GET "http://localhost:3003/api/commandes/mes-commandes-details" \
  -H "Authorization: Bearer <token_gie>"
```

### **Marquage d'un produit comme prêt**
```bash
curl -X PATCH "http://localhost:3003/api/commandes/produit/pp_123/pret" \
  -H "Authorization: Bearer <token_gie>"
```

### **Annulation d'un produit**
```bash
curl -X PATCH "http://localhost:3003/api/commandes/produit/pp_123/annuler" \
  -H "Authorization: Bearer <token_gie>" \
  -H "Content-Type: application/json" \
  -d '{"raison": "Rupture de stock"}'
```

## 🎨 Interface Swagger UI

### **Organisation des endpoints**
- **Commandes Multi-GIE** : Nouvelle section dédiée
- **Filtrage par tag** : Navigation facilitée
- **Documentation complète** : Exemples et descriptions détaillées

### **Avantages pour les développeurs**
- **Documentation claire** : Chaque endpoint est bien documenté
- **Exemples concrets** : Requêtes et réponses d'exemple
- **Schémas détaillés** : Structures de données complètes
- **Tests intégrés** : Possibilité de tester directement depuis Swagger UI

## 🚀 Déploiement

### **Mise à jour automatique**
Le script `update-swagger.js` permet de :
1. Extraire les nouvelles routes du fichier `swagger-multi-gie.yaml`
2. Les insérer dans le fichier principal `swagger.yaml`
3. Ajouter les nouveaux schémas
4. Maintenir la cohérence du fichier

### **Validation**
Après mise à jour, vérifier :
- ✅ Toutes les nouvelles routes sont présentes
- ✅ Les schémas sont correctement définis
- ✅ La documentation est cohérente
- ✅ Swagger UI fonctionne correctement

## 📋 Checklist de validation

- [ ] Description principale mise à jour
- [ ] Nouveaux tags ajoutés
- [ ] Routes multi-GIE documentées
- [ ] Schémas ajoutés
- [ ] Exemples d'utilisation inclus
- [ ] Tests Swagger UI fonctionnels
- [ ] Documentation cohérente

## 🔄 Maintenance

### **Ajout de nouvelles fonctionnalités**
1. Créer les nouvelles routes dans `swagger-multi-gie.yaml`
2. Exécuter `node update-swagger.js`
3. Vérifier la cohérence
4. Tester dans Swagger UI

### **Modifications existantes**
1. Modifier directement `swagger.yaml`
2. Vérifier la syntaxe YAML
3. Tester les endpoints

---

**Version :** 1.0  
**Date :** 2024  
**Auteur :** Équipe Technique 