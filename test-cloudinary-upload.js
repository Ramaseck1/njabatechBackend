const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

console.log('🧪 Test de l\'upload de catégorie vers Cloudinary...');

// Créer un fichier de test simple (simulation d'image)
const testImagePath = './test-image.txt';
fs.writeFileSync(testImagePath, 'Test image content for Cloudinary');

// Créer FormData
const formData = new FormData();
formData.append('nom', 'Test Catégorie Cloudinary');
formData.append('description', 'Catégorie de test avec upload vers Cloudinary');
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
async function testCloudinaryUpload() {
  try {
    console.log('🔄 Envoi de la requête vers Cloudinary...');
    console.log('📋 Données envoyées:');
    console.log('  - nom: Test Catégorie Cloudinary');
    console.log('  - description: Catégorie de test avec upload vers Cloudinary');
    console.log('  - couleur: #FF6B6B');
    console.log('  - image: test-image.txt (simulé)');
    
    const response = await axios.post('http://localhost:3003/api/categories', formData, config);
    
    console.log('✅ Succès!');
    console.log('📊 Réponse:', response.data);
    
    if (response.data.data?.image) {
      console.log('🌐 Image Cloudinary:', response.data.data.image);
      console.log('✅ Upload vers Cloudinary réussi!');
    }
    
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
testCloudinaryUpload(); 
 