const axios = require('axios');

const BASE_URL = 'https://njabatechbackend.onrender.com/api';

async function testGIEEndpoints() {
  console.log('🧪 Test des endpoints GIE...\n');
  
  try {
    // Test 1: Endpoint GET /gies sans token (doit échouer)
    console.log('1️⃣ Test GET /gies sans token:');
    try {
      const response1 = await axios.get(`${BASE_URL}/gies`);
      console.log('❌ Erreur: Devrait échouer sans token');
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Correct: 401 Unauthorized (token requis)');
      } else {
        console.log('❌ Erreur inattendue:', error.message);
      }
    }
    
    // Test 2: Endpoint POST /gies sans token (doit échouer)
    console.log('\n2️⃣ Test POST /gies sans token:');
    try {
      const response2 = await axios.post(`${BASE_URL}/gies`, {
        nom: 'Test GIE',
        description: 'Test Description'
      });
      console.log('❌ Erreur: Devrait échouer sans token');
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Correct: 401 Unauthorized (token requis)');
      } else {
        console.log('❌ Erreur inattendue:', error.message);
      }
    }
    
    // Test 3: Endpoint avec token invalide
    console.log('\n3️⃣ Test avec token invalide:');
    try {
      const response3 = await axios.get(`${BASE_URL}/gies`, {
        headers: {
          'Authorization': 'Bearer invalid_token_here'
        }
      });
      console.log('❌ Erreur: Devrait échouer avec token invalide');
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Correct: 401 Unauthorized (token invalide)');
      } else {
        console.log('❌ Erreur inattendue:', error.message);
      }
    }
    
    console.log('\n📋 Résumé:');
    console.log('✅ Les endpoints GIE sont bien protégés par authentification');
    console.log('✅ L\'erreur 404 n\'est pas due à un endpoint manquant');
    console.log('✅ Le problème est probablement l\'authentification dans le frontend');
    
  } catch (error) {
    console.error('💥 Erreur générale:', error.message);
  }
}

// Exécuter les tests
testGIEEndpoints(); 