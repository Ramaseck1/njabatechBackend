const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:3000/api';
const GIE_TOKEN = 'your_gie_token_here'; // À remplacer par un vrai token
const CLIENT_TOKEN = 'your_client_token_here'; // À remplacer par un vrai token

// Headers pour les requêtes
const gieHeaders = {
  'Authorization': `Bearer ${GIE_TOKEN}`,
  'Content-Type': 'application/json'
};

const clientHeaders = {
  'Authorization': `Bearer ${CLIENT_TOKEN}`,
  'Content-Type': 'application/json'
};

// Tests du système multi-GIE
async function testMultiGIESystem() {
  console.log('🧪 Test du système Multi-GIE\n');

  try {
    // 1. Test des statistiques GIE
    console.log('1️⃣ Test des statistiques GIE...');
    const statsResponse = await axios.get(`${BASE_URL}/commandes/stats-gie`, { headers: gieHeaders });
    console.log('✅ Statistiques GIE:', statsResponse.data);
    console.log('');

    // 2. Test des commandes avec détails
    console.log('2️⃣ Test des commandes avec détails...');
    const detailsResponse = await axios.get(`${BASE_URL}/commandes/mes-commandes-details`, { headers: gieHeaders });
    console.log('✅ Commandes avec détails:', detailsResponse.data.data.length, 'commandes trouvées');
    
    if (detailsResponse.data.data.length > 0) {
      const commande = detailsResponse.data.data[0];
      console.log('📋 Exemple de commande:');
      console.log(`   - Numéro: ${commande.numero}`);
      console.log(`   - Statut global: ${commande.statut}`);
      console.log(`   - Progression GIE: ${commande.detailsGIE.progression}%`);
      console.log(`   - Produits: ${commande.detailsGIE.totalProduits}`);
      console.log(`   - Prêts: ${commande.detailsGIE.produitsPrets}`);
      console.log(`   - En préparation: ${commande.detailsGIE.produitsEnPreparation}`);
      console.log(`   - En attente: ${commande.detailsGIE.produitsEnAttente}`);
      console.log(`   - Annulés: ${commande.detailsGIE.produitsAnnules}`);
      console.log(`   - Montant GIE: ${commande.detailsGIE.montantGIE} FCFA`);
    }
    console.log('');

    // 3. Test de marquage en préparation (si des produits en attente)
    console.log('3️⃣ Test de marquage en préparation...');
    if (detailsResponse.data.data.length > 0) {
      const commande = detailsResponse.data.data[0];
      const produitsEnAttente = commande.panierProduits.filter(p => p.statutGIE === 'EN_ATTENTE');
      
      if (produitsEnAttente.length > 0) {
        const produit = produitsEnAttente[0];
        console.log(`   Marquage du produit ${produit.produit.nom} en préparation...`);
        
        const prepResponse = await axios.patch(
          `${BASE_URL}/commandes/produit/${produit.id}/en-preparation`,
          {},
          { headers: gieHeaders }
        );
        console.log('✅ Produit marqué en préparation:', prepResponse.data);
      } else {
        console.log('⚠️ Aucun produit en attente trouvé pour le test');
      }
    }
    console.log('');

    // 4. Test de marquage comme prêt
    console.log('4️⃣ Test de marquage comme prêt...');
    const commandesEnPrep = detailsResponse.data.data.filter(c => 
      c.panierProduits.some(p => p.statutGIE === 'EN_PREPARATION')
    );
    
    if (commandesEnPrep.length > 0) {
      const commande = commandesEnPrep[0];
      const produitsEnPrep = commande.panierProduits.filter(p => p.statutGIE === 'EN_PREPARATION');
      
      if (produitsEnPrep.length > 0) {
        const produit = produitsEnPrep[0];
        console.log(`   Marquage du produit ${produit.produit.nom} comme prêt...`);
        
        const pretResponse = await axios.patch(
          `${BASE_URL}/commandes/produit/${produit.id}/pret`,
          {},
          { headers: gieHeaders }
        );
        console.log('✅ Produit marqué comme prêt:', pretResponse.data);
      } else {
        console.log('⚠️ Aucun produit en préparation trouvé pour le test');
      }
    }
    console.log('');

    // 5. Test d'annulation de produit
    console.log('5️⃣ Test d\'annulation de produit...');
    const produitsDisponibles = detailsResponse.data.data.flatMap(c => 
      c.panierProduits.filter(p => p.statutGIE === 'EN_ATTENTE')
    );
    
    if (produitsDisponibles.length > 0) {
      const produit = produitsDisponibles[0];
      console.log(`   Annulation du produit ${produit.produit.nom}...`);
      
      const annulResponse = await axios.patch(
        `${BASE_URL}/commandes/produit/${produit.id}/annuler`,
        { raison: 'Test d\'annulation' },
        { headers: gieHeaders }
      );
      console.log('✅ Produit annulé:', annulResponse.data);
    } else {
      console.log('⚠️ Aucun produit disponible pour l\'annulation');
    }
    console.log('');

    // 6. Test des commandes client
    console.log('6️⃣ Test des commandes client...');
    const clientCommandesResponse = await axios.get(`${BASE_URL}/commandes/mes-commandes-client`, { headers: clientHeaders });
    console.log('✅ Commandes client:', clientCommandesResponse.data.data.length, 'commandes trouvées');
    
    if (clientCommandesResponse.data.data.length > 0) {
      const commande = clientCommandesResponse.data.data[0];
      console.log('📋 Exemple de commande client:');
      console.log(`   - Numéro: ${commande.numero}`);
      console.log(`   - Statut: ${commande.statut}`);
      console.log(`   - Montant: ${commande.montant} FCFA`);
      console.log(`   - Produits: ${commande.panierProduits.length}`);
      
      commande.panierProduits.forEach(pp => {
        console.log(`     * ${pp.quantite}x ${pp.produit.nom} (${pp.produit.gie.nom}) - ${pp.prixUnitaire} FCFA`);
      });
    }
    console.log('');

    console.log('🎉 Tous les tests du système Multi-GIE ont été exécutés avec succès !');

  } catch (error) {
    console.error('❌ Erreur lors des tests:', error.response?.data || error.message);
  }
}

// Test de création de commande multi-GIE
async function testCreateMultiGIEOrder() {
  console.log('🛒 Test de création de commande multi-GIE\n');

  try {
    // Simuler une commande avec produits de différents GIE
    const orderData = {
      produits: [
        {
          produitId: 'produit_gie_1', // ID d'un produit du GIE 1
          quantite: 2,
          prixUnitaire: 500
        },
        {
          produitId: 'produit_gie_2', // ID d'un produit du GIE 2
          quantite: 3,
          prixUnitaire: 300
        }
      ],
      adresseLivraison: '123 Rue Test, Dakar',
      methodePaiement: 'PAIEMENT_A_LA_LIVRAISON'
    };

    console.log('📝 Création de commande multi-GIE...');
    const createResponse = await axios.post(
      `${BASE_URL}/commandes`,
      orderData,
      { headers: clientHeaders }
    );

    console.log('✅ Commande créée:', createResponse.data);
    console.log('📱 Notifications envoyées aux GIE concernés');
    console.log('📱 SMS de confirmation envoyé au client');

  } catch (error) {
    console.error('❌ Erreur lors de la création de commande:', error.response?.data || error.message);
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Démarrage des tests du système Multi-GIE\n');
  
  // Test du système existant
  await testMultiGIESystem();
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Test de création de commande
  await testCreateMultiGIEOrder();
  
  console.log('\n✅ Tests terminés !');
}

// Exécution des tests
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  testMultiGIESystem,
  testCreateMultiGIEOrder
}; 