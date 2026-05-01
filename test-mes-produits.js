const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:3000/api';
const GIE_TOKEN = 'your_gie_token_here'; // À remplacer par un vrai token

// Headers pour les requêtes
const gieHeaders = {
  'Authorization': `Bearer ${GIE_TOKEN}`,
  'Content-Type': 'application/json'
};

// Test de l'endpoint /mes-produits
async function testMesProduits() {
  console.log('🧪 Test de l\'endpoint /mes-produits\n');

  try {
    console.log('1️⃣ Test de l\'endpoint /mes-produits...');
    const response = await axios.get(`${BASE_URL}/produits/mes-produits`, { headers: gieHeaders });
    
    console.log('✅ Réponse reçue:');
    console.log('Status:', response.status);
    console.log('Data:', JSON.stringify(response.data, null, 2));
    
    if (response.data.success) {
      console.log(`📦 Nombre de produits trouvés: ${response.data.data.produits?.length || 0}`);
      
      if (response.data.data.produits && response.data.data.produits.length > 0) {
        console.log('📋 Exemple de produit:');
        const produit = response.data.data.produits[0];
        console.log(`   - ID: ${produit.id}`);
        console.log(`   - Nom: ${produit.nom}`);
        console.log(`   - Prix: ${produit.prix} FCFA`);
        console.log(`   - Stock: ${produit.stock}`);
        console.log(`   - GIE: ${produit.gie?.nom}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du test:');
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      
      if (error.response.status === 401) {
        console.log('🔑 Problème d\'authentification - Vérifiez le token');
      } else if (error.response.status === 403) {
        console.log('🚫 Problème de permissions - Vérifiez le rôle GIE');
      } else if (error.response.status === 500) {
        console.log('💥 Erreur serveur - Vérifiez les logs du serveur');
      }
    } else {
      console.error('Erreur réseau:', error.message);
    }
  }
}

// Test de l'endpoint public pour comparaison
async function testProduitsPublic() {
  console.log('\n2️⃣ Test de l\'endpoint public /produits...');
  
  try {
    const response = await axios.get(`${BASE_URL}/produits`);
    console.log('✅ Endpoint public fonctionne');
    console.log(`📦 Nombre total de produits: ${response.data.data.produits?.length || 0}`);
  } catch (error) {
    console.error('❌ Erreur endpoint public:', error.response?.data || error.message);
  }
}

// Test de l'authentification
async function testAuth() {
  console.log('\n3️⃣ Test de l\'authentification...');
  
  try {
    // Test avec un token invalide
    const invalidResponse = await axios.get(`${BASE_URL}/produits/mes-produits`, {
      headers: { 'Authorization': 'Bearer invalid_token' }
    });
  } catch (error) {
    if (error.response?.status === 401) {
      console.log('✅ Authentification fonctionne (rejette les tokens invalides)');
    } else {
      console.error('❌ Problème avec l\'authentification');
    }
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Démarrage des tests de diagnostic\n');
  
  // Vérifier si le token est configuré
  if (GIE_TOKEN === 'your_gie_token_here') {
    console.log('⚠️  Veuillez configurer un token GIE valide dans le script');
    console.log('   Remplacez "your_gie_token_here" par un vrai token JWT');
    return;
  }
  
  await testAuth();
  await testProduitsPublic();
  await testMesProduits();
  
  console.log('\n✅ Tests terminés !');
}

// Exécution des tests
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  testMesProduits,
  testProduitsPublic,
  testAuth
}; 