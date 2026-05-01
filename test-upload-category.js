const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

console.log('🧪 Test de l\'upload de catégorie avec FormData...');

// Créer un fichier de test simple
const testImagePath = './test-image.txt';
fs.writeFileSync(testImagePath, 'Test image content');

// Créer FormData
const formData = new FormData();
formData.append('nom', 'Test Catégorie Upload');
formData.append('description', 'Catégorie de test pour l\'upload');
formData.append('couleur', '#FF6B6B');
formData.append('image', fs.createReadStream(testImagePath), {
  filename: 'test-image.jpg',
  contentType: 'image/jpeg'
});

// Configuration pour la requête
const config = {
  headers: {
    ...formData.getHeaders(),
    'Authorization': `Bearer ${process.env.ADMIN_TOKEN || 'your-admin-token-here'}`
  }
};

// Tester l'upload
async function testUpload() {
  try {
    console.log('🔄 Envoi de la requête...');
    console.log('📋 Données envoyées:');
    console.log('  - nom: Test Catégorie Upload');
    console.log('  - description: Catégorie de test pour l\'upload');
    console.log('  - couleur: #FF6B6B');
    console.log('  - image: test-image.txt (simulé)');
    
    const response = await axios.post('http://localhost:3003/api/categories', formData, config);
    
    console.log('✅ Succès!');
    console.log('📊 Réponse:', response.data);
    
  } catch (error) {
    console.error('❌ Erreur:');
    if (error.response) {
      console.error('  Status:', error.response.status);
      console.error('  Message:', error.response.data.message);
      console.error('  Détails:', error.response.data);
    } else {
      console.error('  Message:', error.message);
    }
  } finally {
    // Nettoyer le fichier de test
    if (fs.existsSync(testImagePath)) {
      fs.unlinkSync(testImagePath);
    }
  }
}

// Exécuter le test
testUpload(); 
 