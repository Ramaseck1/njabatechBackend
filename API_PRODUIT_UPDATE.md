# API Produit - Mise à jour avec Images

## Endpoint: PUT /api/produits/:id

Cet endpoint permet de mettre à jour un produit existant avec support des images Cloudinary.

### Authentification
- **Token requis**: Oui
- **Rôle requis**: GIE (propriétaire du produit)

### Headers
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

### Paramètres de requête
- `id` (string, requis): ID du produit à mettre à jour

### Corps de la requête (multipart/form-data)

#### Champs de données
- `nom` (string, optionnel): Nom du produit
- `description` (string, optionnel): Description du produit
- `prix` (number, optionnel): Prix du produit
- `stock` (number, optionnel): Quantité en stock
- `categorie` (string, optionnel): Catégorie du produit

#### Fichier image
- `image` (file, optionnel): Nouvelle image du produit
  - Formats supportés: JPG, PNG, GIF, WebP
  - Taille maximale: 10MB

### Exemple de requête avec cURL

```bash
curl -X PUT \
  http://localhost:3000/api/produits/123e4567-e89b-12d3-a456-426614174000 \
  -H 'Authorization: Bearer your_jwt_token_here' \
  -F 'nom=Nouveau nom du produit' \
  -F 'description=Nouvelle description' \
  -F 'prix=29.99' \
  -F 'stock=50' \
  -F 'categorie=Electronique' \
  -F 'image=@/path/to/your/image.jpg'
```

### Exemple de requête avec JavaScript (FormData)

```javascript
const formData = new FormData();
formData.append('nom', 'Nouveau nom du produit');
formData.append('description', 'Nouvelle description');
formData.append('prix', '29.99');
formData.append('stock', '50');
formData.append('categorie', 'Electronique');

// Ajouter l'image si nécessaire
const imageFile = document.getElementById('imageInput').files[0];
if (imageFile) {
  formData.append('image', imageFile);
}

fetch(`/api/produits/${produitId}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

### Réponse de succès

```json
{
  "success": true,
  "message": "Produit mis à jour avec succès",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "nom": "Nouveau nom du produit",
    "description": "Nouvelle description",
    "prix": 29.99,
    "stock": 50,
    "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/produits/image.jpg",
    "categorie": "Electronique",
    "statut": "DISPONIBLE",
    "gieId": "gie-id-here",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

### Gestion des images

1. **Si une nouvelle image est fournie**:
   - L'ancienne image est automatiquement supprimée de Cloudinary
   - La nouvelle image est uploadée dans le dossier `produits`
   - L'URL de la nouvelle image est mise à jour dans la base de données

2. **Si aucune image n'est fournie**:
   - L'image existante est conservée
   - Aucune modification n'est apportée au champ image

3. **Format des URLs Cloudinary**:
   - Les images sont stockées avec des URLs sécurisées (HTTPS)
   - Format: `https://res.cloudinary.com/cloud-name/image/upload/v1234567890/produits/filename.jpg`

### Codes d'erreur

- `400`: Données invalides (prix négatif, stock négatif)
- `403`: Accès refusé (produit ne vous appartient pas)
- `404`: Produit non trouvé
- `500`: Erreur serveur (upload d'image, base de données)

### Notes importantes

- Seul le propriétaire du produit (GIE) peut le modifier
- Les champs non fournis conservent leurs valeurs actuelles
- L'upload d'image est optionnel lors de la mise à jour
- Les images sont automatiquement optimisées par Cloudinary
- La suppression de l'ancienne image est gérée automatiquement 