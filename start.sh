#!/bin/bash

echo "🚀 Démarrage du backend GIE..."

# Vérifier les variables d'environnement critiques
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERREUR: DATABASE_URL n'est pas définie"
    exit 1
fi

if [ -z "$JWT_SECRET" ]; then
    echo "❌ ERREUR: JWT_SECRET n'est pas définie"
    exit 1
fi

echo "✅ Variables d'environnement critiques vérifiées"

# Générer le client Prisma
echo "🔧 Génération du client Prisma..."
npx prisma generate

# Pousser le schéma de base de données (si nécessaire)
echo "🗄️ Synchronisation de la base de données..."
npx prisma db push --accept-data-loss

# Démarrer l'application
echo "🌐 Démarrage du serveur..."
npm start 