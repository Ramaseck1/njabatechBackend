# 🔍 Diagnostic - Endpoint /mes-produits

## 🚨 Problème
L'endpoint `/api/produits/mes-produits` refuse d'afficher les produits du GIE.

## 🔧 Étapes de Diagnostic

### **1. Vérifier l'authentification**

#### **Générer un token GIE de test :**
```bash
cd gie-backend
node generate-gie-token.js
```

#### **Tester l'endpoint avec le token :**
```bash
# Remplacez <TOKEN> par le token généré
curl -X GET "http://localhost:3000/api/produits/mes-produits" \
  -H "Authorization: Bearer <TOKEN>"
```

### **2. Vérifier les logs du serveur**

#### **Démarrer le serveur avec logs détaillés :**
```bash
npm start
```

#### **Les logs devraient afficher :**
```
🔍 Debug getMyProducts:
   - GIE ID: test_gie_id
   - User Role: GIE
   - User object: { id: 'test_gie_id', email: 'test@gie.com', role: 'GIE' }

🔍 Debug ProduitService.findAll:
   - GIE ID: test_gie_id
   - Where clause: { gieId: 'test_gie_id' }
   - Page: 1 Limit: 1000

📦 Résultats:
   - Produits trouvés: 0
   - Total: 0
```

### **3. Vérifier la base de données**

#### **Connecter à la base de données :**
```bash
psql "postgresql://neondb_owner:npg_qkeQFClGLT80@ep-crimson-heart-a8txgnbq-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
```

#### **Vérifier les produits existants :**
```sql
-- Voir tous les produits
SELECT id, nom, "gieId", statut FROM produits;

-- Voir les GIE existants
SELECT id, nom, email FROM gies;

-- Vérifier les produits d'un GIE spécifique
SELECT id, nom, prix, stock FROM produits WHERE "gieId" = 'test_gie_id';
```

### **4. Problèmes possibles et solutions**

#### **Problème 1 : Aucun produit dans la base**
**Symptôme :** `Produits trouvés: 0`
**Solution :** Créer des produits de test

```sql
-- Insérer un produit de test
INSERT INTO produits (id, nom, description, prix, stock, "gieId", statut, "createdAt", "updatedAt")
VALUES (
  'prod_test_1',
  'Tomates Test',
  'Tomates fraîches',
  500.0,
  100,
  'test_gie_id',
  'DISPONIBLE',
  NOW(),
  NOW()
);
```

#### **Problème 2 : GIE ID incorrect**
**Symptôme :** `GIE ID: undefined` ou `GIE ID: null`
**Solution :** Vérifier le token et l'authentification

#### **Problème 3 : Rôle incorrect**
**Symptôme :** `User Role: ADMIN` au lieu de `GIE`
**Solution :** Vérifier que l'utilisateur a bien le rôle GIE

#### **Problème 4 : Erreur de base de données**
**Symptôme :** Erreur 500 avec message d'erreur
**Solution :** Vérifier la connexion à la base de données

### **5. Test complet avec le script**

#### **Configurer le script de test :**
```javascript
// Dans test-mes-produits.js, remplacer :
const GIE_TOKEN = 'your_gie_token_here';
// Par :
const GIE_TOKEN = 'TOKEN_GENERÉ_PAR_GENERATE_GIE_TOKEN_JS';
```

#### **Exécuter le test :**
```bash
node test-mes-produits.js
```

### **6. Vérifications supplémentaires**

#### **Vérifier la route :**
```typescript
// Dans src/routes/produit.ts
router.get('/mes-produits', requireGIE, ProduitController.getMyProducts);
```

#### **Vérifier le middleware :**
```typescript
// Dans src/middleware/auth.ts
export const requireGIE = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (req.user.role !== 'GIE') {
    res.status(403).json({
      success: false,
      message: 'Accès refusé. Rôle GIE requis'
    });
    return;
  }
  next();
};
```

#### **Vérifier le service :**
```typescript
// Dans src/services/produitService.ts
static async findAll(page: number = 1, limit: number = 10, gieId?: string) {
  const where = gieId ? { gieId } : {};
  // ...
}
```

## 🎯 Solutions rapides

### **Solution 1 : Créer des données de test**
```bash
# Générer un token
node generate-gie-token.js

# Créer un produit de test (via l'API ou directement en base)
curl -X POST "http://localhost:3000/api/produits" \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Produit Test",
    "description": "Description test",
    "prix": 1000,
    "stock": 50
  }'
```

### **Solution 2 : Vérifier l'authentification**
```bash
# Tester l'authentification
curl -X GET "http://localhost:3000/api/auth/me" \
  -H "Authorization: Bearer <TOKEN>"
```

### **Solution 3 : Tester l'endpoint public**
```bash
# Vérifier que l'API fonctionne
curl -X GET "http://localhost:3000/api/produits"
```

## 📋 Checklist de diagnostic

- [ ] Token GIE généré et valide
- [ ] Serveur démarré avec logs détaillés
- [ ] Base de données accessible
- [ ] Produits existent pour le GIE
- [ ] Rôle utilisateur = GIE
- [ ] GIE ID correct dans le token
- [ ] Aucune erreur dans les logs
- [ ] Endpoint public fonctionne

## 🚀 Résolution

Une fois le problème identifié, les logs de débogage peuvent être supprimés :

```typescript
// Supprimer les console.log de débogage dans :
// - src/controllers/produitController.ts
// - src/services/produitService.ts
```

---

**Version :** 1.0  
**Date :** 2024  
**Auteur :** Équipe Technique 