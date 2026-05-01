const fs = require('fs');

// Lire le contenu du fichier swagger-multi-gie.yaml
const multiGIEContent = fs.readFileSync('swagger-multi-gie.yaml', 'utf8');

// Lire le fichier swagger.yaml principal
let swaggerContent = fs.readFileSync('swagger.yaml', 'utf8');

// Trouver la position où insérer les nouvelles routes (avant /auth/me)
const insertPosition = swaggerContent.indexOf('  /auth/me:');

if (insertPosition === -1) {
  console.error('❌ Impossible de trouver la position d\'insertion dans swagger.yaml');
  process.exit(1);
}

// Extraire les routes du fichier multi-GIE (sans les schémas pour l'instant)
const routesMatch = multiGIEContent.match(/(  \/commandes\/[^#]+?)(?=# Nouveaux schémas|$)/s);
const routesContent = routesMatch ? routesMatch[1] : '';

if (!routesContent) {
  console.error('❌ Impossible d\'extraire les routes du fichier multi-GIE');
  process.exit(1);
}

// Insérer les nouvelles routes
const updatedContent = 
  swaggerContent.substring(0, insertPosition) + 
  routesContent + 
  '\n' +
  swaggerContent.substring(insertPosition);

// Écrire le fichier mis à jour
fs.writeFileSync('swagger.yaml', updatedContent);

console.log('✅ Routes multi-GIE ajoutées au fichier swagger.yaml');

// Maintenant, ajoutons les nouveaux schémas à la fin du fichier
const schemasMatch = multiGIEContent.match(/# Nouveaux schémas à ajouter\n\ncomponents:\n  schemas:\n([\s\S]+)$/);
const schemasContent = schemasMatch ? schemasMatch[1] : '';

if (schemasContent) {
  // Trouver la fin de la section components/schemas
  const schemasEndPosition = updatedContent.lastIndexOf('    Commande:');
  
  if (schemasEndPosition !== -1) {
    // Trouver la fin de la définition Commande
    const commandeEndPosition = updatedContent.indexOf('\n\n', schemasEndPosition);
    
    if (commandeEndPosition !== -1) {
      const finalContent = 
        updatedContent.substring(0, commandeEndPosition) + 
        '\n\n' + 
        schemasContent + 
        updatedContent.substring(commandeEndPosition);
      
      fs.writeFileSync('swagger.yaml', finalContent);
      console.log('✅ Schémas multi-GIE ajoutés au fichier swagger.yaml');
    }
  }
}

console.log('🎉 Mise à jour du Swagger terminée avec succès !'); 