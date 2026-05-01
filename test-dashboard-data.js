const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testDashboardData() {
  try {
    console.log('🔍 Test des données du dashboard...\n');

    // Compter les GIEs
    const totalGIEs = await prisma.gIE.count();
    console.log(`📊 Total GIEs: ${totalGIEs}`);

    // Compter les clients
    const totalClients = await prisma.client.count();
    console.log(`👥 Total Clients: ${totalClients}`);

    // Compter les produits
    const totalProduits = await prisma.produit.count();
    console.log(`📦 Total Produits: ${totalProduits}`);

    // Compter les commandes
    const totalCommandes = await prisma.commande.count();
    console.log(`🛒 Total Commandes: ${totalCommandes}`);

    // Voir tous les statuts de commande disponibles
    console.log('\n📋 Statuts de commande disponibles:');
    const statuts = await prisma.commande.groupBy({
      by: ['statut'],
      _count: {
        statut: true
      }
    });
    statuts.forEach(stat => {
      console.log(`  - ${stat.statut}: ${stat._count.statut}`);
    });

    // Lister quelques GIEs
    console.log('\n🏢 GIEs disponibles:');
    const gies = await prisma.gIE.findMany({
      take: 5,
      select: {
        id: true,
        nom: true,
        email: true,
        statut: true
      }
    });
    gies.forEach(gie => {
      console.log(`  - ${gie.nom} (${gie.email}) - ${gie.statut}`);
    });

    // Lister quelques clients
    console.log('\n👤 Clients disponibles:');
    const clients = await prisma.client.findMany({
      take: 5,
      select: {
        id: true,
        nom: true,
        prenom: true,
        email: true
      }
    });
    clients.forEach(client => {
      console.log(`  - ${client.prenom} ${client.nom} (${client.email})`);
    });

    // Lister quelques commandes
    console.log('\n🛒 Commandes disponibles:');
    const commandes = await prisma.commande.findMany({
      take: 5,
      select: {
        id: true,
        numero: true,
        montant: true,
        statut: true,
        dateCommande: true
      }
    });
    commandes.forEach(commande => {
      console.log(`  - ${commande.numero}: ${commande.montant}€ - ${commande.statut}`);
    });

    // Lister quelques produits
    console.log('\n📦 Produits disponibles:');
    const produits = await prisma.produit.findMany({
      take: 5,
      select: {
        id: true,
        nom: true,
        prix: true,
        stock: true
      }
    });
    produits.forEach(produit => {
      console.log(`  - ${produit.nom}: ${produit.prix}€ (stock: ${produit.stock})`);
    });

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDashboardData(); 