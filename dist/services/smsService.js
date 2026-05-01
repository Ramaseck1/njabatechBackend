"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOrderSms = sendOrderSms;
let twilioClient = null;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_PHONE_NUMBER) {
    try {
        const { Twilio } = require('twilio');
        twilioClient = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
        console.log('✅ Twilio configuré avec succès');
    }
    catch (error) {
        console.warn('⚠️ Erreur lors de l\'initialisation de Twilio:', error);
        console.warn('⚠️ Les SMS ne seront pas envoyés');
    }
}
else {
    console.warn('⚠️ Variables d\'environnement Twilio manquantes - les SMS ne seront pas envoyés');
}
async function sendOrderSms(to, message) {
    try {
        if (!twilioClient) {
            console.log('📱 SMS simulé (Twilio non configuré):', { to, message });
            return { success: true, message: 'SMS simulé' };
        }
        const response = await twilioClient.messages.create({
            body: message,
            from: TWILIO_PHONE_NUMBER,
            to: to
        });
        console.log('✅ SMS envoyé via Twilio:', response.sid);
        return response;
    }
    catch (error) {
        console.error("❌ Erreur lors de l'envoi du SMS:", error);
        return { success: false, error: error };
    }
}
//# sourceMappingURL=smsService.js.map