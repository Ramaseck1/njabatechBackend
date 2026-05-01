const axios = require('axios');

const API_BASE_URL = 'http://localhost:3003/api';

// Configuration pour les tests
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.ADMIN_TOKEN || 'your-admin-token-here'}`
  }
};

// Test 1: Récupérer toutes les catégories
async function testGetCategories() {
  console.log('\n🔍 Test 1: Récupérer toutes les catégories');
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`, config);
    console.log('✅ Succès:', response.data.message);
    console.log(`📊 Nombre de catégories: ${response.data.data.categories.length}`);
    
    // Afficher les premières catégories
    response.data.data.categories.slice(0, 3).forEach(cat => {
      console.log(`  - ${cat.nom} (${cat._count?.produits || 0} produits)`);
    });
    
    return response.data.data.categories;
  } catch (error) {
    console.error('❌ Erreur:', error.response?.data?.message || error.message);
    return [];
  }
}

// Test 2: Créer une nouvelle catégorie
async function testCreateCategory() {
  console.log('\n🔍 Test 2: Créer une nouvelle catégorie');
  try {
    const categoryData = {
      nom: 'Test Catégorie',
      description: 'Catégorie de test pour les tests API',
      couleur: '#FF6B6B'
    };
    
    const response = await axios.post(`${API_BASE_URL}/categories`, categoryData, config);
    console.log('✅ Succès:', response.data.message);
    console.log(`🆔 ID créé: ${response.data.data.id}`);
    
    return response.data.data.id;
  } catch (error) {
    console.error('❌ Erreur:', error.response?.data?.message || error.message);
    return null;
  }
}

// Test 3: Essayer de supprimer une catégorie avec des produits (sans force)
async function testDeleteCategoryWithoutForce(categoryId) {
  console.log('\n🔍 Test 3: Essayer de supprimer une catégorie avec des produits (sans force)');
  try {
    const response = await axios.delete(`${API_BASE_URL}/categories/${categoryId}`, config);
    console.log('✅ Succès (inattendu):', response.data.message);
  } catch (error) {
    if (error.response?.status === 400) {
      console.log('✅ Comportement attendu (400):', error.response.data.message);
      if (error.response.data.suggestion) {
        console.log(`💡 Suggestion: ${error.response.data.suggestion}`);
      }
    } else {
      console.error('❌ Erreur inattendue:', error.response?.data?.message || error.message);
    }
  }
}

// Test 4: Supprimer une catégorie avec des produits (avec force)
async function testDeleteCategoryWithForce(categoryId) {
  console.log('\n🔍 Test 4: Supprimer une catégorie avec des produits (avec force)');
  try {
    const response = await axios.delete(`${API_BASE_URL}/categories/${categoryId}?force=true`, config);
    console.log('✅ Succès (suppression forcée):', response.data.message);
  } catch (error) {
    console.error('❌ Erreur:', error.response?.data?.message || error.message);
  }
}

// Test 5: Créer une catégorie avec image (FormData)
async function testCreateCategoryWithImage() {
  console.log('\n🔍 Test 5: Créer une catégorie avec image (FormData)');
  try {
    // Note: Ce test nécessite un fichier image réel
    // Pour le test, on utilise juste les données textuelles
    const categoryData = {
      nom: 'Catégorie avec Image',
      description: 'Catégorie test avec support d\'image',
      couleur: '#4ECDC4'
    };
    
    const response = await axios.post(`${API_BASE_URL}/categories`, categoryData, config);
    console.log('✅ Succès:', response.data.message);
    console.log(`🆔 ID créé: ${response.data.data.id}`);
    
    return response.data.data.id;
  } catch (error) {
    console.error('❌ Erreur:', error.response?.data?.message || error.message);
    return null;
  }
}

// Test principal
async function runTests() {
  console.log('🚀 Démarrage des tests des catégories...\n');
  
  try {
    // Test 1: Récupérer les catégories existantes
    const categories = await testGetCategories();
    
    if (categories.length === 0) {
      console.log('⚠️ Aucune catégorie trouvée, arrêt des tests');
      return;
    }
    
    // Trouver une catégorie avec des produits pour tester la suppression
    const categoryWithProducts = categories.find(cat => (cat._count?.produits || 0) > 0);
    
    if (categoryWithProducts) {
      console.log(`\n🎯 Catégorie sélectionnée pour les tests: ${categoryWithProducts.nom} (${categoryWithProducts._count.produits} produits)`);
      
      // Test 3: Essayer de supprimer sans force
      await testDeleteCategoryWithoutForce(categoryWithProducts.id);
      
      // Test 4: Supprimer avec force
      await testDeleteCategoryWithForce(categoryWithProducts.id);
    } else {
      console.log('\n⚠️ Aucune catégorie avec des produits trouvée, test de suppression forcée ignoré');
    }
    
    // Test 2: Créer une nouvelle catégorie
    const newCategoryId = await testCreateCategory();
    
    // Test 5: Créer une catégorie avec image
    await testCreateCategoryWithImage();
    
    console.log('\n✅ Tous les tests terminés !');
    
  } catch (error) {
    console.error('\n💥 Erreur lors de l\'exécution des tests:', error.message);
  }
}

// Exécuter les tests si le script est appelé directement
if (require.main === module) {
  runTests();
}

module.exports = {
  testGetCategories,
  testCreateCategory,
  testDeleteCategoryWithoutForce,
  testDeleteCategoryWithForce,
  testCreateCategoryWithImage
}; 
 