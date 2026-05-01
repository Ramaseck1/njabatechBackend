const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkCommandes() {
  try {
    console.log('🔍 Vérification des commandes dans la base de données...\n');

    // 1. Toutes les commandes
    const allCommandes = await prisma.commande.findMany({
      include: {
        client: true,
        regionLivraison: true,
        livreur: true,
        panierProduits: {
          include: {
            produit: {
              include: {
                gie: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    console.log(`📊 Total des commandes: ${allCommandes.length}\n`);

    if (allCommandes.length === 0) {
      console.log('❌ Aucune commande trouvée dans la base de données');
      console.log('💡 Créez d\'abord des commandes via l\'interface client');
      return;
    }

    // 2. Commandes par statut
    const commandesByStatus = {};
    allCommandes.forEach(commande => {
      const status = commande.statut;
      if (!commandesByStatus[status]) {
        commandesByStatus[status] = [];
      }
      commandesByStatus[status].push(commande);
    });

    console.log('📈 Répartition par statut:');
    Object.entries(commandesByStatus).forEach(([status, commandes]) => {
      console.log(`   ${status}: ${commandes.length} commande(s)`);
    });
    console.log('');

    // 3. Commandes disponibles pour les livreurs
    const commandesDisponibles = allCommandes.filter(commande => 
      (commande.statut === 'CONFIRMEE' || commande.statut === 'EN_PREPARATION') &&
      !commande.livreurId
    );

    console.log(`🚚 Commandes disponibles pour les livreurs: ${commandesDisponibles.length}\n`);

    if (commandesDisponibles.length === 0) {
      console.log('❌ Aucune commande disponible pour les livreurs');
      console.log('💡 Raisons possibles:');
      console.log('   - Toutes les commandes sont déjà assignées à des livreurs');
      console.log('   - Les commandes ne sont pas en statut CONFIRMEE ou EN_PREPARATION');
      console.log('   - Il n\'y a pas de commandes dans la base de données');
    } else {
      console.log('✅ Commandes disponibles:');
      commandesDisponibles.forEach((commande, index) => {
        console.log(`   ${index + 1}. Commande #${commande.id.slice(-8)}`);
        console.log(`      Client: ${commande.client?.prenom} ${commande.client?.nom}`);
        console.log(`      Statut: ${commande.statut}`);
        console.log(`      Montant: ${commande.montantTotal} Fcfa`);
        console.log(`      Produits: ${commande.panierProduits?.length || 0} article(s)`);
        console.log(`      Région: ${commande.regionLivraison?.nom || 'Non définie'}`);
        console.log('');
      });
    }

    // 4. Commandes assignées
    const commandesAssignees = allCommandes.filter(commande => commande.livreurId);
    console.log(`📦 Commandes assignées à des livreurs: ${commandesAssignees.length}\n`);

    if (commandesAssignees.length > 0) {
      console.log('📋 Commandes assignées:');
      commandesAssignees.forEach((commande, index) => {
        console.log(`   ${index + 1}. Commande #${commande.id.slice(-8)}`);
        console.log(`      Livreur: ${commande.livreur?.prenom} ${commande.livreur?.nom}`);
        console.log(`      Statut: ${commande.statut}`);
        console.log('');
      });
    }

    // 5. Vérification des régions
    const regions = await prisma.region.findMany();
    console.log(`🗺️ Régions disponibles: ${regions.length}`);
    regions.forEach(region => {
      console.log(`   - ${region.nom} (${region.id})`);
    });

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkCommandes(); 