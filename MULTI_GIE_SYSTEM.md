# 🏢 Système Multi-GIE - Documentation Complète

## 📋 Vue d'ensemble

Le système multi-GIE permet de gérer efficacement les commandes impliquant plusieurs Groupements d'Intérêt Économique (GIE) de manière coordonnée et transparente.

## 🔄 Flux de Commande Multi-GIE

### 1. **Création de Commande**
```
Client commande → Système crée commande → Notifications envoyées aux GIE → SMS client
```

### 2. **Traitement par GIE**
```
GIE reçoit notification → Marque en préparation → Marque comme prêt → Système vérifie si tous prêts
```

### 3. **Notification Client**
```
Tous les GIE prêts → SMS automatique au client → Commande prête pour livraison
```

## 📊 Structure des Données

### **Nouveaux Champs dans `PanierProduit`**
```sql
statutGIE: ENUM('EN_ATTENTE', 'EN_PREPARATION', 'PRET', 'ANNULE')
dateConfirmation: TIMESTAMP
updatedAt: TIMESTAMP
```

### **Statuts par GIE**
- **EN_ATTENTE** : Commande reçue, en attente de traitement
- **EN_PREPARATION** : GIE a commencé la préparation
- **PRET** : Produit prêt pour la livraison
- **ANNULE** : Produit annulé (rupture de stock, etc.)

## 🚀 Nouvelles Fonctionnalités

### **1. Notifications Automatiques**

#### **Notification aux GIE**
```typescript
// SMS envoyé automatiquement à chaque GIE
"Nouvelle commande #CMD-123 reçue ! 
Produits: 2x Tomates, 1x Pain
Montant: 1200 FCFA
Client: Jean Dupont
Connectez-vous à votre interface pour traiter la commande."
```

#### **Notification au Client**
```typescript
// SMS envoyé seulement quand TOUS les GIE sont prêts
"Bonjour Jean Dupont, votre commande #CMD-123 est prête ! 
Tous les GIE ont confirmé la préparation. 
Vous serez livré dans 30 minutes."
```

### **2. Gestion des Statuts par GIE**

#### **Marquer en Préparation**
```http
PATCH /api/commandes/produit/:panierProduitId/en-preparation
Authorization: Bearer <token_gie>
```

#### **Marquer comme Prêt**
```http
PATCH /api/commandes/produit/:panierProduitId/pret
Authorization: Bearer <token_gie>
```

#### **Annuler un Produit**
```http
PATCH /api/commandes/produit/:panierProduitId/annuler
Authorization: Bearer <token_gie>
Content-Type: application/json

{
  "raison": "Rupture de stock"
}
```

### **3. Statistiques Détaillées**

#### **Récupérer les Stats GIE**
```http
GET /api/commandes/stats-gie
Authorization: Bearer <token_gie>
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "totalCommandes": 50,
    "commandesEnAttente": 5,
    "repartition": {
      "EN_ATTENTE": 5,
      "EN_PREPARATION": 10,
      "PRET": 30,
      "ANNULE": 5
    }
  }
}
```

#### **Commandes avec Détails**
```http
GET /api/commandes/mes-commandes-details
Authorization: Bearer <token_gie>
```

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": "cmd_123",
      "numero": "CMD-123",
      "statut": "EN_PREPARATION",
      "client": { "nom": "Jean Dupont" },
      "panierProduits": [
        {
          "id": "pp_1",
          "quantite": 2,
          "prixUnitaire": 500,
          "statutGIE": "EN_PREPARATION",
          "produit": { "nom": "Tomates" }
        }
      ],
      "detailsGIE": {
        "totalProduits": 1,
        "produitsPrets": 0,
        "produitsEnPreparation": 1,
        "produitsEnAttente": 0,
        "produitsAnnules": 0,
        "montantGIE": 1000,
        "progression": 0
      }
    }
  ]
}
```

## 🔧 Base de Données

### **Triggers Automatiques**
```sql
-- Mise à jour automatique du statut global
CREATE TRIGGER trigger_update_statut_global
    AFTER UPDATE OF "statutGIE" ON "panier_produits"
    FOR EACH ROW
    EXECUTE FUNCTION update_statut_global_commande();
```

### **Vues Utiles**
```sql
-- Vue pour les commandes multi-GIE
CREATE VIEW commandes_multi_gie AS
SELECT 
    c.id as commande_id,
    c.numero as commande_numero,
    c.statut as statut_global,
    COUNT(pp.id) as total_produits,
    COUNT(CASE WHEN pp."statutGIE" = 'PRET' THEN 1 END) as produits_prets
FROM "commandes" c
LEFT JOIN "panier_produits" pp ON c.id = pp."commandeId"
GROUP BY c.id, c.numero, c.statut;
```

## 📱 Exemples d'Utilisation

### **Scénario 1 : Commande Multi-GIE**
```
1. Client commande : 2 tomates (GIE A) + 3 oranges (GIE B)
2. GIE A reçoit SMS : "Nouvelle commande #CMD-123 reçue ! Produits: 2x Tomates"
3. GIE B reçoit SMS : "Nouvelle commande #CMD-123 reçue ! Produits: 3x Oranges"
4. GIE A marque ses tomates comme "EN_PREPARATION"
5. GIE A marque ses tomates comme "PRET"
6. GIE B marque ses oranges comme "PRET"
7. Client reçoit SMS : "Votre commande #CMD-123 est prête !"
```

### **Scénario 2 : Annulation Partielle**
```
1. GIE A annule les tomates (rupture de stock)
2. Client reçoit SMS : "Le produit 'Tomates' a été annulé (Rupture de stock)"
3. GIE B continue avec les oranges
4. Commande partielle traitée
```

## 🎯 Avantages du Nouveau Système

### ✅ **Coordination Automatique**
- Chaque GIE est notifié automatiquement
- Statut global calculé automatiquement
- Notifications intelligentes au client

### ✅ **Transparence**
- Chaque GIE voit sa progression
- Client voit l'état global de sa commande
- Historique détaillé des actions

### ✅ **Flexibilité**
- Gestion indépendante par GIE
- Possibilité d'annulation partielle
- Statuts granulaires

### ✅ **Efficacité**
- Réduction des erreurs de communication
- Traitement parallèle par GIE
- Notifications en temps réel

## 🔍 Monitoring et Debugging

### **Logs Importants**
```typescript
// Notification GIE
console.log(`📱 SMS envoyé au GIE ${gie.nom}:`, smsResponse.sid);

// Confirmation client
console.log(`📱 SMS de confirmation envoyé au client:`, smsResponse.sid);

// Erreurs
console.error('❌ Erreur lors de l\'envoi de notification au GIE:', error);
```

### **Vérification des Statuts**
```sql
-- Vérifier les commandes en attente
SELECT * FROM commandes_multi_gie 
WHERE produits_en_attente > 0;

-- Vérifier les commandes prêtes
SELECT * FROM commandes_multi_gie 
WHERE produits_prets = total_produits;
```

## 🚀 Déploiement

### **1. Migration de Base de Données**
```bash
# Exécuter la migration
psql -d votre_base -f migration_gie_status.sql
```

### **2. Redémarrage du Service**
```bash
cd gie-backend
npm run build
npm start
```

### **3. Test des Fonctionnalités**
```bash
# Tester les nouvelles routes
curl -X GET "http://localhost:3000/api/commandes/stats-gie" \
  -H "Authorization: Bearer <token_gie>"
```

## 📞 Support

Pour toute question ou problème avec le système multi-GIE, consultez :
- Les logs du serveur
- La vue `commandes_multi_gie` en base
- Les notifications SMS dans Twilio

---

**Version :** 1.0  
**Date :** 2024  
**Auteur :** Équipe Technique 