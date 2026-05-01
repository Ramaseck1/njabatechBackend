/**
 * Exemple de script pour créer un livreur via l'API admin
 * 
 * Ce script montre comment un administrateur peut créer un livreur
 * 
 * Prérequis :
 * 1. Avoir un token d'authentification admin
 * 2. Avoir une région existante dans la base de données
 */

const API_BASE_URL = 'http://localhost:3003/api';

// Token d'authentification admin (à remplacer par un vrai token)
const ADMIN_TOKEN = 'your-admin-jwt-token-here';

// Données du livreur à créer
const livreurData = {
  nom: "Diop",
  prenom: "Moussa",
  email: "moussa.diop@livraison.com",
  telephone: "+221701234567",
  password: "password123",
  regionId: "region-dakar" // ID de la région existante
};

async function createLivreur() {
  try {
    console.log('🚚 Création d\'un nouveau livreur...');
    
    const response = await fetch(`${API_BASE_URL}/livreurs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ADMIN_TOKEN}`
      },
      body: JSON.stringify(livreurData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Livreur créé avec succès !');
      console.log('📋 Informations du livreur :');
      console.log(`   - ID: ${result.data.id}`);
      console.log(`   - Nom: ${result.data.nom} ${result.data.prenom}`);
      console.log(`   - Email: ${result.data.email}`);
      console.log(`   - Téléphone: ${result.data.telephone}`);
      console.log(`   - Statut: ${result.data.statut}`);
      console.log(`   - Région: ${result.data.region?.nom || 'Non assignée'}`);
      
      console.log('\n📱 Le livreur peut maintenant :');
      console.log('   1. Se connecter via l\'app mobile');
      console.log('   2. Voir les commandes disponibles');
      console.log('   3. Accepter des livraisons');
      
    } else {
      console.error('❌ Erreur lors de la création :', result.message);
    }
  } catch (error) {
    console.error('❌ Erreur de connexion :', error.message);
  }
}

async function listLivreurs() {
  try {
    console.log('\n📋 Liste des livreurs existants...');
    
    const response = await fetch(`${API_BASE_URL}/livreurs`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ADMIN_TOKEN}`
      }
    });

    const result = await response.json();

    if (response.ok) {
      console.log(`✅ ${result.data.livreurs.length} livreur(s) trouvé(s) :`);
      result.data.livreurs.forEach((livreur, index) => {
        console.log(`   ${index + 1}. ${livreur.prenom} ${livreur.nom} (${livreur.email}) - ${livreur.statut}`);
      });
    } else {
      console.error('❌ Erreur lors de la récupération :', result.message);
    }
  } catch (error) {
    console.error('❌ Erreur de connexion :', error.message);
  }
}

// Exemple d'utilisation
async function main() {
  console.log('🔐 Script de gestion des livreurs (Admin)');
  console.log('==========================================\n');
  
  // Créer un nouveau livreur
  await createLivreur();
  
  // Lister les livreurs existants
  await listLivreurs();
}

// Instructions d'utilisation
console.log(`
📖 Instructions d'utilisation :

1. Remplacez ADMIN_TOKEN par un vrai token d'administrateur
2. Assurez-vous qu'une région existe dans la base de données
3. Modifiez livreurData selon vos besoins
4. Exécutez le script : node create-livreur-example.js

🔑 Pour obtenir un token admin :
   POST ${API_BASE_URL}/auth/admin/login
   {
     "email": "admin@gie.com",
     "password": "admin123"
   }
`);

// Décommentez la ligne suivante pour exécuter le script
// main(); 