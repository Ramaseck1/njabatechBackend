# Guide de déploiement sur Render

## Variables d'environnement requises

Configurez ces variables dans votre dashboard Render :

### Base de données (requis)
```
DATABASE_URL=postgresql://username:password@host:port/database
```

### JWT (requis)
```
JWT_SECRET=votre_secret_jwt_tres_securise
```

### Cloudinary (optionnel - pour les images)
```
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

### Twilio (optionnel - pour les SMS)
```
TWILIO_ACCOUNT_SID=votre_account_sid
TWILIO_AUTH_TOKEN=votre_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

### Serveur (optionnel)
```
PORT=3003
NODE_ENV=production
```

## Configuration Render

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `npm start`
3. **Environment**: Node.js

## Notes importantes

- Le service SMS fonctionnera même sans Twilio configuré (mode simulation)
- Assurez-vous que votre base de données PostgreSQL est accessible
- Le backend fonctionne sur le port 3003 par défaut 