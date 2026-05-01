const axios = require('axios');

const BASE_URL = 'https://njabatechbackend.onrender.com/api';

async function testCreateGIE() {
  console.log('🧪 Test de création de GIE...\n');
  
  try {
    // Étape 1: Se connecter pour obtenir un token
    console.log('1️⃣ Connexion pour obtenir un token...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/admin/login`, {
      email: 'admin@gie.com',
      password: 'admin123'
    });
    
    if (loginResponse.data.success && loginResponse.data.data?.token) {
      const token = loginResponse.data.data.token;
      console.log('✅ Token obtenu:', token.substring(0, 20) + '...');
      
      // Étape 2: Tester l'endpoint GET /gies (doit fonctionner)
      console.log('\n2️⃣ Test GET /gies avec token...');
      try {
        const getResponse = await axios.get(`${BASE_URL}/gies`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log('✅ GET /gies fonctionne:', getResponse.data.success ? 'SUCCÈS' : 'ÉCHEC');
        console.log('📊 Nombre de GIEs:', getResponse.data.data?.gies?.length || 0);
      } catch (error) {
        console.log('❌ GET /gies échoue:', error.response?.status, error.response?.data?.message);
      }
      
      // Étape 3: Tester l'endpoint POST /gies (création)
      console.log('\n3️⃣ Test POST /gies avec token...');
      try {
        const gieData = {
          nom: 'GIE Test Script',
          description: 'GIE créé par le script de test',
          adresse: 'Dakar, Sénégal',
          telephone: '+221788888888',
          email: 'test-script@gie.com',
          password: 'test123456'
        };
        
        const createResponse = await axios.post(`${BASE_URL}/gies`, gieData, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log('✅ POST /gies fonctionne:', createResponse.data.success ? 'SUCCÈS' : 'ÉCHEC');
        if (createResponse.data.success) {
          console.log('📊 GIE créé avec ID:', createResponse.data.data?.id);
        } else {
          console.log('❌ Message d\'erreur:', createResponse.data.message);
        }
      } catch (error) {
        console.log('❌ POST /gies échoue:', error.response?.status, error.response?.data?.message);
        if (error.response?.data) {
          console.log('📋 Détails de l\'erreur:', JSON.stringify(error.response.data, null, 2));
        }
      }
      
    } else {
      console.log('❌ Échec de la connexion:', loginResponse.data.message);
    }
    
  } catch (error) {
    console.error('💥 Erreur générale:', error.message);
    if (error.response) {
      console.log('📊 Statut:', error.response.status);
      console.log('📋 Données:', error.response.data);
    }
  }
}

// Exécuter les tests
testCreateGIE(); 