const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:3000';
const TOKEN = 'your_jwt_token_here'; // Remplacez par votre token JWT
const PRODUIT_ID = 'your_produit_id_here'; // Remplacez par l'ID du produit à mettre à jour

// Test de mise à jour d'un produit avec image
async function testUpdateProduitWithImage() {
  try {
    console.log('🚀 Test de mise à jour d\'un produit avec image...');

    // Créer un FormData
    const formData = new FormData();
    
    // Ajouter les données du produit
    formData.append('nom', 'Produit mis à jour avec image');
    formData.append('description', 'Description mise à jour avec nouvelle image');
    formData.append('prix', '45.99');
    formData.append('stock', '25');
    formData.append('categorie', 'Test');

    // Ajouter une image (remplacez par le chemin de votre image)
    const imagePath = './test-image.jpg';
    if (fs.existsSync(imagePath)) {
      formData.append('image', fs.createReadStream(imagePath));
      console.log('📸 Image ajoutée au FormData');
    } else {
      console.log('⚠️  Image non trouvée, test sans image');
    }

    // Faire la requête
    const response = await axios.put(`${BASE_URL}/api/produits/${PRODUIT_ID}`, formData, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        ...formData.getHeaders()
      }
    });

    console.log('✅ Succès!');
    console.log('📊 Réponse:', JSON.stringify(response.data, null, 2));

  } catch (error) {
    console.error('❌ Erreur:', error.response?.data || error.message);
  }
}

// Test de mise à jour d'un produit sans image
async function testUpdateProduitWithoutImage() {
  try {
    console.log('\n🚀 Test de mise à jour d\'un produit sans image...');

    // Créer un FormData
    const formData = new FormData();
    
    // Ajouter seulement les données du produit
    formData.append('nom', 'Produit mis à jour sans image');
    formData.append('description', 'Description mise à jour sans changer l\'image');
    formData.append('prix', '39.99');
    formData.append('stock', '15');

    // Faire la requête
    const response = await axios.put(`${BASE_URL}/api/produits/${PRODUIT_ID}`, formData, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        ...formData.getHeaders()
      }
    });

    console.log('✅ Succès!');
    console.log('📊 Réponse:', JSON.stringify(response.data, null, 2));

  } catch (error) {
    console.error('❌ Erreur:', error.response?.data || error.message);
  }
}

// Test de récupération d'un produit pour voir l'image
async function testGetProduit() {
  try {
    console.log('\n🚀 Test de récupération du produit...');

    const response = await axios.get(`${BASE_URL}/api/produits/${PRODUIT_ID}`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });

    console.log('✅ Succès!');
    console.log('📊 Produit récupéré:', JSON.stringify(response.data, null, 2));
    
    if (response.data.data.image) {
      console.log('🖼️  URL de l\'image:', response.data.data.image);
    }

  } catch (error) {
    console.error('❌ Erreur:', error.response?.data || error.message);
  }
}

// Fonction principale
async function runTests() {
  console.log('🧪 Tests de l\'endpoint updateProduit avec images\n');
  
  // Vérifier les prérequis
  if (TOKEN === 'your_jwt_token_here') {
    console.log('❌ Veuillez configurer votre token JWT dans le script');
    return;
  }
  
  if (PRODUIT_ID === 'your_produit_id_here') {
    console.log('❌ Veuillez configurer l\'ID du produit dans le script');
    return;
  }

  // Exécuter les tests
  await testUpdateProduitWithImage();
  await testUpdateProduitWithoutImage();
  await testGetProduit();
  
  console.log('\n🎉 Tests terminés!');
}

// Exécuter les tests si le script est appelé directement
if (require.main === module) {
  runTests();
}

module.exports = {
  testUpdateProduitWithImage,
  testUpdateProduitWithoutImage,
  testGetProduit
}; 