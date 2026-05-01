const fs = require('fs');
const FormData = require('form-data');

// Configuration
const API_BASE_URL = 'http://localhost:3003';
const ADMIN_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtY25jcTIwNTAwMDExMXEweW1kcWZzMDYiLCJlbWFpbCI6ImFkbWluQGdpZS5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NTUyODI3OTYsImV4cCI6MTc1NTg4NzU5Nn0.JL-B2KH3UmmqikGC0dAJ8fVpNn7tCJ9ZGR_8W_CXfEc';

// Fonction pour tester la mise à jour sans image
async function testUpdateWithoutImage() {
  console.log('🧪 Test de mise à jour SANS image...');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/categories/cmed641s20000426svhg5vsnq`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${ADMIN_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nom: 'TEST_UPDATE_' + Date.now(),
        description: 'Test de mise à jour sans image',
        couleur: '#FF0000'
      })
    });
    
    const data = await response.json();
    console.log('📥 Réponse:', data);
    
    if (data.success) {
      console.log('✅ Mise à jour sans image réussie!');
    } else {
      console.error('❌ Mise à jour sans image échouée:', data.message);
    }
  } catch (error) {
    console.error('💥 Erreur:', error);
  }
}

// Fonction pour tester la mise à jour avec image
async function testUpdateWithImage() {
  console.log('🧪 Test de mise à jour AVEC image...');
  
  try {
    // Créer un fichier de test
    const testImagePath = './test-image.png';
    if (!fs.existsSync(testImagePath)) {
      console.log('📸 Création d\'une image de test...');
      // Créer une image PNG simple (1x1 pixel transparent)
      const pngBuffer = Buffer.from([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4, 0x89, 0x00, 0x00, 0x00,
        0x0A, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
        0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]);
      fs.writeFileSync(testImagePath, pngBuffer);
    }
    
    const formData = new FormData();
    formData.append('nom', 'TEST_IMAGE_' + Date.now());
    formData.append('description', 'Test de mise à jour avec image');
    formData.append('couleur', '#00FF00');
    formData.append('image', fs.createReadStream(testImagePath));
    
    console.log('📤 Envoi de la requête avec image...');
    
    const response = await fetch(`${API_BASE_URL}/api/categories/cmed641s20000426svhg5vsnq`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${ADMIN_TOKEN}`
      },
      body: formData
    });
    
    const data = await response.json();
    console.log('📥 Réponse:', data);
    
    if (data.success) {
      console.log('✅ Mise à jour avec image réussie!');
      console.log('🖼️ Nouvelle image:', data.data.image);
    } else {
      console.error('❌ Mise à jour avec image échouée:', data.message);
    }
  } catch (error) {
    console.error('💥 Erreur:', error);
  }
}

// Fonction pour tester la récupération des catégories
async function testGetCategories() {
  console.log('📋 Test de récupération des catégories...');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/categories`);
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Catégories récupérées:', data.data.categories.length);
      data.data.categories.forEach(cat => {
        console.log(`  - ${cat.nom}: ${cat.image || 'Aucune image'}`);
      });
    } else {
      console.error('❌ Erreur récupération:', data.message);
    }
  } catch (error) {
    console.error('💥 Erreur:', error);
  }
}

// Fonction principale
async function runTests() {
  console.log('🚀 Démarrage des tests de l\'API des catégories...\n');
  
  // Test 1: Récupération des catégories
  await testGetCategories();
  console.log('');
  
  // Test 2: Mise à jour sans image
  await testUpdateWithoutImage();
  console.log('');
  
  // Test 3: Mise à jour avec image
  await testUpdateWithImage();
  console.log('');
  
  // Test 4: Vérification finale
  await testGetCategories();
  
  console.log('\n🏁 Tests terminés!');
}

// Exécuter les tests
runTests().catch(console.error); 