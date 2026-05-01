const jwt = require('jsonwebtoken');
require('dotenv').config();

console.log('🔍 Test de la Durée de Validité des Tokens JWT\n');

// Configuration actuelle
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

console.log('📋 Configuration actuelle:');
console.log('   - JWT_SECRET:', JWT_SECRET ? '✅ Défini' : '❌ Non défini');
console.log('   - JWT_EXPIRES_IN:', JWT_EXPIRES_IN);
console.log('');

// Fonction pour tester différents formats d'expiration
function testTokenExpiration(expiresIn, description) {
  console.log(`🧪 Test avec: ${description}`);
  
  const payload = {
    id: 'test_user_123',
    email: 'test@example.com',
    role: 'CLIENT'
  };
  
  try {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
    const decoded = jwt.verify(token, JWT_SECRET);
    
    const now = Math.floor(Date.now() / 1000);
    const timeUntilExpiry = decoded.exp - now;
    const hoursUntilExpiry = Math.floor(timeUntilExpiry / 3600);
    const minutesUntilExpiry = Math.floor((timeUntilExpiry % 3600) / 60);
    
    console.log(`   ✅ Token généré avec succès`);
    console.log(`   📅 Expire le: ${new Date(decoded.exp * 1000).toLocaleString()}`);
    console.log(`   ⏰ Temps restant: ${hoursUntilExpiry}h ${minutesUntilExpiry}m`);
    console.log(`   🔑 Token: ${token.substring(0, 50)}...`);
    console.log('');
    
    return { token, decoded, timeUntilExpiry };
  } catch (error) {
    console.log(`   ❌ Erreur: ${error.message}`);
    console.log('');
    return null;
  }
}

// Fonction pour convertir les formats d'expiration en secondes
function getExpirationInSeconds(expiresIn) {
  const unit = expiresIn.slice(-1);
  const value = parseInt(expiresIn.slice(0, -1));
  
  switch (unit) {
    case 's': return value; // secondes
    case 'm': return value * 60; // minutes
    case 'h': return value * 3600; // heures
    case 'd': return value * 86400; // jours
    default: return 86400; // 1 jour par défaut
  }
}

// Fonction pour tester l'expiration d'un token
function testTokenExpiry(token, description) {
  console.log(`⏰ Test d'expiration: ${description}`);
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const now = Math.floor(Date.now() / 1000);
    
    if (decoded.exp > now) {
      const timeLeft = decoded.exp - now;
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      console.log(`   ✅ Token valide - Expire dans ${hours}h ${minutes}m`);
    } else {
      console.log(`   ❌ Token expiré - Expiré il y a ${Math.abs(decoded.exp - now)} secondes`);
    }
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.log(`   ❌ Token expiré: ${error.message}`);
    } else {
      console.log(`   ❌ Erreur de vérification: ${error.message}`);
    }
  }
  console.log('');
}

// Tests avec différentes durées
console.log('🚀 Tests de génération de tokens:\n');

const testResults = [];

// Test avec la configuration actuelle
const currentConfig = testTokenExpiration(JWT_EXPIRES_IN, `Configuration actuelle (${JWT_EXPIRES_IN})`);
if (currentConfig) testResults.push(currentConfig);

// Test avec 1 jour
const oneDay = testTokenExpiration('1d', '1 jour');
if (oneDay) testResults.push(oneDay);

// Test avec 1 heure
const oneHour = testTokenExpiration('1h', '1 heure');
if (oneHour) testResults.push(oneHour);

// Test avec 30 minutes
const thirtyMinutes = testTokenExpiration('30m', '30 minutes');
if (thirtyMinutes) testResults.push(thirtyMinutes);

// Test avec 1 minute
const oneMinute = testTokenExpiration('1m', '1 minute');
if (oneMinute) testResults.push(oneMinute);

console.log('⏰ Tests d\'expiration des tokens:\n');

// Tester l'expiration de chaque token
testResults.forEach((result, index) => {
  testTokenExpiry(result.token, `Token ${index + 1} (${result.timeUntilExpiry} secondes restantes)`);
});

// Recommandations
console.log('💡 Recommandations pour la production:');
console.log('   - JWT_EXPIRES_IN: 24h ou 1d (24 heures)');
console.log('   - JWT_SECRET: Clé secrète forte et unique');
console.log('   - Refresh tokens: Pour une meilleure sécurité');
console.log('   - Rotation des clés: Changer JWT_SECRET régulièrement');
console.log('');

// Vérification de la sécurité
console.log('🔒 Vérification de la sécurité:');
if (JWT_SECRET === 'your-super-secret-jwt-key-change-this-in-production') {
  console.log('   ⚠️  JWT_SECRET utilise la valeur par défaut - Changez-la en production !');
} else {
  console.log('   ✅ JWT_SECRET est personnalisé');
}

if (JWT_EXPIRES_IN === '7d') {
  console.log('   ⚠️  JWT_EXPIRES_IN est à 7 jours - Considérez réduire à 24h en production');
} else {
  console.log('   ✅ JWT_EXPIRES_IN est configuré');
}

console.log('');
console.log('✅ Tests terminés !'); 