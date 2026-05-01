const fs = require('fs');
const path = require('path');

// Fonction pour corriger les noms de modèles Prisma
function fixPrismaNames(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Corrections pour les noms de modèles
  const corrections = [
    { from: 'prisma.region.', to: 'prisma.regions.' },
    { from: 'prisma.adresse.', to: 'prisma.adresses.' },
    { from: 'prisma.livreur.', to: 'prisma.livreurs.' },
    { from: 'region: true', to: 'regions: true' },
    { from: 'regionId: regionDakar.id', to: 'regionsId: regionDakar.id' },
    { from: 'regionId: region.id', to: 'regionsId: region.id' },
    { from: 'regionId: id', to: 'regionsId: id' },
    { from: 'livreurId: id', to: 'livreursId: id' },
    { from: 'livreurId: livreurId', to: 'livreursId: livreurId' },
    { from: 'data: { livreurId }', to: 'data: { livreursId }' },
    { from: 'where: { livreurId: livreurId }', to: 'where: { livreursId: livreurId }' }
  ];
  
  corrections.forEach(correction => {
    content = content.replace(new RegExp(correction.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correction.to);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Corrigé: ${filePath}`);
}

// Fonction pour parcourir récursivement les fichiers
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
      processDirectory(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      fixPrismaNames(filePath);
    }
  });
}

// Traiter le répertoire src
console.log('🔧 Correction des noms de modèles Prisma...');
processDirectory('./src');
console.log('✅ Toutes les corrections ont été appliquées !'); 