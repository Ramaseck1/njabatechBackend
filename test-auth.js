const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

// Fonction pour tester les endpoints d'authentification
async function testAuth() {
  console.log('🧪 Test des nouvelles fonctionnalités d\'authentification\n');

  try {
    // 1. Test connexion admin
    console.log('1️⃣ Test connexion admin...');
    const adminLogin = await axios.post(`${BASE_URL}/auth/admin/login`, {
      email: 'admin@gie.com',
      password: 'admin123'
    });
    console.log('✅ Connexion admin réussie');
    const adminToken = adminLogin.data.data.token;

    // 2. Test connexion GIE
    console.log('\n2️⃣ Test connexion GIE...');
    const gieLogin = await axios.post(`${BASE_URL}/auth/gie/login`, {
      email: 'contact@gie-agricole-nord.com',
      password: 'gie123'
    });
    console.log('✅ Connexion GIE réussie');
    const gieToken = gieLogin.data.data.token;

    // 3. Test inscription client (publique)
    console.log('\n3️⃣ Test inscription client (publique)...');
    const clientRegister = await axios.post(`${BASE_URL}/auth/client/register`, {
      nom: 'Test',
      prenom: 'Client',
      email: 'test.client@example.com',
      password: 'test123',
      telephone: '+1234567899',
      adresse: '123 Rue Test'
    });
    console.log('✅ Inscription client réussie');

    // 4. Test connexion client
    console.log('\n4️⃣ Test connexion client...');
    const clientLogin = await axios.post(`${BASE_URL}/auth/client/login`, {
      email: 'test.client@example.com',
      password: 'test123'
    });
    console.log('✅ Connexion client réussie');
    const clientToken = clientLogin.data.data.token;

    // 5. Test création GIE par admin
    console.log('\n5️⃣ Test création GIE par admin...');
    const createGIE = await axios.post(`${BASE_URL}/auth/gie/register`, {
      nom: 'GIE Test',
      email: 'test@gie-test.com',
      password: 'testgie123',
      description: 'GIE de test créé par admin',
      adresse: '456 Rue Test',
      telephone: '+1234567898'
    }, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    });
    console.log('✅ Création GIE par admin réussie');

    // 6. Test connexion du nouveau GIE
    console.log('\n6️⃣ Test connexion du nouveau GIE...');
    const newGieLogin = await axios.post(`${BASE_URL}/auth/gie/login`, {
      email: 'test@gie-test.com',
      password: 'testgie123'
    });
    console.log('✅ Connexion nouveau GIE réussie');

    console.log('\n🎉 Tous les tests d\'authentification sont passés avec succès !');
    console.log('\n📋 Résumé des tokens obtenus :');
    console.log(`👨‍💼 Admin Token: ${adminToken.substring(0, 20)}...`);
    console.log(`🏢 GIE Token: ${gieToken.substring(0, 20)}...`);
    console.log(`👤 Client Token: ${clientToken.substring(0, 20)}...`);

  } catch (error) {
    console.error('❌ Erreur lors des tests :', error.response?.data || error.message);
  }
}

// Exécuter les tests si le fichier est appelé directement
if (require.main === module) {
  testAuth();
}

module.exports = { testAuth }; 