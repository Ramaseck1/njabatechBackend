const jwt = require('jsonwebtoken');

// Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';

// Fonction pour générer un token GIE de test
function generateGIEToken(gieId = 'test_gie_id') {
  const payload = {
    id: gieId,
    email: 'test@gie.com',
    role: 'GIE'
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  
  console.log('🔑 Token GIE généré:');
  console.log('Token:', token);
  console.log('');
  console.log('📋 Informations du token:');
  console.log('   - GIE ID:', gieId);
  console.log('   - Email:', payload.email);
  console.log('   - Role:', payload.role);
  console.log('');
  console.log('💡 Utilisez ce token dans vos tests:');
  console.log(`   curl -X GET "http://localhost:3000/api/produits/mes-produits" \\`);
  console.log(`     -H "Authorization: Bearer ${token}"`);
  
  return token;
}

// Fonction pour décoder un token
function decodeToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('🔍 Token décodé:');
    console.log(JSON.stringify(decoded, null, 2));
    return decoded;
  } catch (error) {
    console.error('❌ Erreur lors du décodage:', error.message);
    return null;
  }
}

// Fonction principale
function main() {
  console.log('🚀 Générateur de token GIE de test\n');
  
  // Générer un token de test
  const token = generateGIEToken();
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Décoder le token pour vérification
  decodeToken(token);
  
  console.log('\n✅ Token généré avec succès !');
}

// Exécution
if (require.main === module) {
  main();
}

module.exports = {
  generateGIEToken,
  decodeToken
}; 