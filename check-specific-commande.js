const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkSpecificCommande() {
  try {
    console.log('🔍 Vérification de la commande spécifique...\n');

    // Trouver la commande CONFIRMEE
    const commande = await prisma.commande.findFirst({
      where: {
        statut: 'CONFIRMEE'
      },
      include: {
        client: true,
        regionLivraison: true,
        livreur: true,
        panierProduits: {
          include: {
            produit: {
              include: {
                gie: {
                  include: {
                    region: true
                  }
                }
              }
            }
          }
        },
        paiement: true
      }
    });

    if (!commande) {
      console.log('❌ Aucune commande CONFIRMEE trouvée');
      return;
    }

    console.log('📋 Détails de la commande:');
    console.log(`   ID: ${commande.id}`);
    console.log(`   Statut: ${commande.statut}`);
    console.log(`   Montant Total: ${commande.montantTotal}`);
    console.log(`   Date création: ${commande.createdAt}`);
    console.log(`   Livreur ID: ${commande.livreurId || 'Non assignée'}`);
    console.log(`   Région Livraison ID: ${commande.regionLivraisonId || 'Non définie'}`);
    console.log(`   Adresse Livraison: ${commande.adresseLivraison || 'Non définie'}`);
    console.log('');

    console.log('👤 Client:');
    if (commande.client) {
      console.log(`   Nom: ${commande.client.prenom} ${commande.client.nom}`);
      console.log(`   Email: ${commande.client.email}`);
      console.log(`   Téléphone: ${commande.client.telephone}`);
    } else {
      console.log('   ❌ Client non trouvé');
    }
    console.log('');

    console.log('📦 Produits:');
    if (commande.panierProduits && commande.panierProduits.length > 0) {
      commande.panierProduits.forEach((item, index) => {
        console.log(`   ${index + 1}. ${item.produit?.nom || 'Produit inconnu'}`);
        console.log(`      Quantité: ${item.quantite}`);
        console.log(`      Prix unitaire: ${item.prixUnitaire}`);
        console.log(`      GIE: ${item.produit?.gie?.nom || 'GIE inconnu'}`);
      });
    } else {
      console.log('   ❌ Aucun produit dans la commande');
    }
    console.log('');

    console.log('💳 Paiement:');
    if (commande.paiement) {
      console.log(`   Statut: ${commande.paiement.statut}`);
      console.log(`   Méthode: ${commande.paiement.methode}`);
      console.log(`   Montant: ${commande.paiement.montant}`);
    } else {
      console.log('   ❌ Aucun paiement associé');
    }
    console.log('');

    // Vérifier pourquoi cette commande n'apparaît pas dans l'API
    console.log('🔍 Vérification des critères pour l\'API livreur:');
    console.log(`   Statut CONFIRMEE ou EN_PREPARATION: ${commande.statut === 'CONFIRMEE' || commande.statut === 'EN_PREPARATION'}`);
    console.log(`   Non assignée à un livreur: ${!commande.livreurId}`);
    console.log(`   Région Dakar: ${commande.regionLivraisonId === 'cmdszwnom0001qok92j84uljw'}`);
    console.log(`   Produits présents: ${commande.panierProduits && commande.panierProduits.length > 0}`);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkSpecificCommande(); 