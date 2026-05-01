const fetch = require('node-fetch');

async function testAdminLogin() {
  try {
    console.log('🔐 Test de connexion admin...\n');

    // Test de connexion admin
    const loginResponse = await fetch('http://localhost:3003/api/auth/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@gie.com',
        password: 'admin123'
      })
    });

    const loginData = await loginResponse.json();
    console.log('📡 Réponse de connexion:', JSON.stringify(loginData, null, 2));

    if (loginData.success && loginData.data?.token) {
      const token = loginData.data.token;
      console.log('\n✅ Connexion réussie ! Token obtenu.');
      console.log('🔑 Token:', token.substring(0, 50) + '...');

      // Test des endpoints avec le token
      console.log('\n🧪 Test des endpoints avec authentification...');

      // Test des GIEs
      const giesResponse = await fetch('http://localhost:3003/api/gies?page=1&limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const giesData = await giesResponse.json();
      console.log('\n📊 Réponse GIEs:', JSON.stringify(giesData, null, 2));

      // Test des produits
      const produitsResponse = await fetch('http://localhost:3003/api/produits?page=1&limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const produitsData = await produitsResponse.json();
      console.log('\n📦 Réponse Produits:', JSON.stringify(produitsData, null, 2));

      // Test des commandes
      const commandesResponse = await fetch('http://localhost:3003/api/commandes?page=1&limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const commandesData = await commandesResponse.json();
      console.log('\n🛒 Réponse Commandes:', JSON.stringify(commandesData, null, 2));

    } else {
      console.log('❌ Échec de la connexion:', loginData.message);
    }

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
  }
}

testAdminLogin(); 