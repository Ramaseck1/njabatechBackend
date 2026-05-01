const fetch = require('node-fetch');

const API_BASE_URL = 'http://localhost:3003/api';

async function testBackend() {
  console.log('🧪 Test de connectivité du backend...\n');

  // Test 1: Vérifier si le serveur répond
  try {
    console.log('1️⃣ Test de connectivité...');
    const response = await fetch(`${API_BASE_URL}/health`);
    console.log('✅ Serveur accessible');
  } catch (error) {
    console.log('❌ Serveur inaccessible:', error.message);
    console.log('💡 Assurez-vous que le backend est démarré sur le port 3003');
    return;
  }

  // Test 2: Test de login livreur
  try {
    console.log('\n2️⃣ Test de login livreur...');
    const loginResponse = await fetch(`${API_BASE_URL}/livreurs/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'moussa.diop@livraison.com',
        password: 'password123'
      })
    });

    const loginData = await loginResponse.json();
    console.log('📡 Réponse login:', loginResponse.status);
    console.log('📄 Données:', JSON.stringify(loginData, null, 2));

    if (loginResponse.ok) {
      console.log('✅ Login réussi');
    } else {
      console.log('❌ Login échoué');
    }
  } catch (error) {
    console.log('❌ Erreur lors du login:', error.message);
  }

  // Test 3: Test des commandes disponibles
  try {
    console.log('\n3️⃣ Test des commandes disponibles...');
    const commandesResponse = await fetch(`${API_BASE_URL}/livreurs/commandes-disponibles`);
    const commandesData = await commandesResponse.json();
    
    console.log('📡 Réponse commandes:', commandesResponse.status);
    console.log('📄 Données:', JSON.stringify(commandesData, null, 2));

    if (commandesResponse.ok) {
      console.log('✅ Commandes récupérées');
    } else {
      console.log('❌ Erreur lors de la récupération des commandes');
    }
  } catch (error) {
    console.log('❌ Erreur lors de la récupération des commandes:', error.message);
  }
}

testBackend().catch(console.error); 