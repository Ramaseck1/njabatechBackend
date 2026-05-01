// Script pour créer des données de test - Régions et Adresses
const API_BASE = 'http://localhost:3003/api';

console.log('🚀 Création des données de test...');

// Données de test pour les régions
const testRegions = [
  {
    nom: 'Dakar',
    description: 'Région de Dakar - Capitale du Sénégal',
    fraisLivraisonInterne: 500,
    fraisLivraisonExterne: 1500
  },
  {
    nom: 'Thiès',
    description: 'Région de Thiès - Centre du Sénégal',
    fraisLivraisonInterne: 800,
    fraisLivraisonExterne: 2000
  },
  {
    nom: 'Saint-Louis',
    description: 'Région de Saint-Louis - Nord du Sénégal',
    fraisLivraisonInterne: 1000,
    fraisLivraisonExterne: 2500
  },
  {
    nom: 'Kaolack',
    description: 'Région de Kaolack - Centre-Sud du Sénégal',
    fraisLivraisonInterne: 900,
    fraisLivraisonExterne: 2200
  }
];

// Données de test pour les adresses
const testAdresses = [
  {
    nom: 'Plateau',
    description: 'Centre-ville de Dakar',
    codePostal: '11000',
    fraisLivraison: 500,
    regionId: '' // Sera rempli après création des régions
  },
  {
    nom: 'Médina',
    description: 'Quartier historique de Dakar',
    codePostal: '11001',
    fraisLivraison: 500,
    regionId: ''
  },
  {
    nom: 'Yoff',
    description: 'Quartier côtier de Dakar',
    codePostal: '11002',
    fraisLivraison: 500,
    regionId: ''
  },
  {
    nom: 'Ouakam',
    description: 'Quartier résidentiel de Dakar',
    codePostal: '11003',
    fraisLivraison: 500,
    regionId: ''
  }
];

// Fonction pour créer les régions
async function createRegions() {
  console.log('📍 Création des régions...');
  const createdRegions = [];
  
  for (const region of testRegions) {
    try {
      const response = await fetch(`${API_BASE}/regions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(region)
      });
      
      const data = await response.json();
      if (data.success) {
        console.log(`✅ Région créée: ${region.nom} (ID: ${data.data.id})`);
        createdRegions.push(data.data);
      } else {
        console.log(`⚠️ Erreur création région ${region.nom}:`, data.message);
      }
    } catch (error) {
      console.error(`❌ Erreur création région ${region.nom}:`, error);
    }
  }
  
  return createdRegions;
}

// Fonction pour créer les adresses
async function createAdresses(regions) {
  console.log('🏠 Création des adresses...');
  
  if (regions.length === 0) {
    console.log('⚠️ Aucune région créée, impossible de créer des adresses');
    return;
  }
  
  // Utiliser la première région (Dakar) pour toutes les adresses de test
  const dakarRegion = regions.find(r => r.nom === 'Dakar');
  if (!dakarRegion) {
    console.log('⚠️ Région Dakar non trouvée');
    return;
  }
  
  for (const adresse of testAdresses) {
    try {
      const adresseData = {
        ...adresse,
        regionId: dakarRegion.id
      };
      
      const response = await fetch(`${API_BASE}/adresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adresseData)
      });
      
      const data = await response.json();
      if (data.success) {
        console.log(`✅ Adresse créée: ${adresse.nom} (ID: ${data.data.id})`);
      } else {
        console.log(`⚠️ Erreur création adresse ${adresse.nom}:`, data.message);
      }
    } catch (error) {
      console.error(`❌ Erreur création adresse ${adresse.nom}:`, error);
    }
  }
}

// Fonction pour vérifier les données existantes
async function checkExistingData() {
  console.log('🔍 Vérification des données existantes...');
  
  try {
    // Vérifier les régions
    const regionsResponse = await fetch(`${API_BASE}/regions`);
    const regionsData = await regionsResponse.json();
    console.log(`📊 Régions existantes: ${regionsData.data?.length || 0}`);
    
    // Vérifier les adresses
    const adressesResponse = await fetch(`${API_BASE}/adresses`);
    const adressesData = await adressesResponse.json();
    console.log(`📊 Adresses existantes: ${adressesData.data?.length || 0}`);
    
    return {
      regions: regionsData.data || [],
      adresses: adressesData.data || []
    };
  } catch (error) {
    console.error('❌ Erreur vérification données:', error);
    return { regions: [], adresses: [] };
  }
}

// Fonction principale
async function main() {
  try {
    // Vérifier les données existantes
    const existingData = await checkExistingData();
    
    if (existingData.regions.length === 0) {
      console.log('🆕 Aucune région trouvée, création des régions de test...');
      const createdRegions = await createRegions();
      
      if (createdRegions.length > 0) {
        console.log('🆕 Création des adresses de test...');
        await createAdresses(createdRegions);
      }
    } else {
      console.log('✅ Des régions existent déjà');
      
      if (existingData.adresses.length === 0) {
        console.log('🆕 Aucune adresse trouvée, création des adresses de test...');
        await createAdresses(existingData.regions);
      } else {
        console.log('✅ Des adresses existent déjà');
      }
    }
    
    // Vérification finale
    console.log('\n🔍 Vérification finale...');
    await checkExistingData();
    
    console.log('\n✨ Script terminé !');
    
  } catch (error) {
    console.error('❌ Erreur dans le script principal:', error);
  }
}

// Exécuter le script
main(); 
 