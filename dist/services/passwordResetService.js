"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordService = exports.verifyResetCodeService = exports.requestPasswordResetService = void 0;
const database_1 = require("../config/database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});
const sendCodeByEmail = async (email, code) => {
    await transporter.sendMail({
        from: `"NjabaTech" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Code de réinitialisation de mot de passe",
        html: `
      <div style="font-family: Arial; padding: 20px; max-width: 400px;">
        <h2>Réinitialisation de mot de passe</h2>
        <p>Voici votre code de vérification :</p>
        <h1 style="letter-spacing: 8px; color: #4F46E5; font-size: 36px;">${code}</h1>
        <p>Ce code expire dans <strong>15 minutes</strong>.</p>
        <p style="color: #888;">Si vous n'avez pas demandé ce code, ignorez ce message.</p>
      </div>
    `,
    });
};
const findUserByEmail = async (email, userType) => {
    switch (userType) {
        case "ADMIN":
            return database_1.prisma.administrateur.findUnique({ where: { email } });
        case "CLIENT":
            return database_1.prisma.client.findUnique({ where: { email } });
        case "GIE":
            return database_1.prisma.gIE.findFirst({ where: { email } });
    }
};
const updatePasswordByType = async (id, hashed, userType) => {
    switch (userType) {
        case "ADMIN":
            return database_1.prisma.administrateur.update({ where: { id }, data: { password: hashed } });
        case "CLIENT":
            return database_1.prisma.client.update({ where: { id }, data: { password: hashed } });
        case "GIE":
            return database_1.prisma.gIE.update({ where: { id }, data: { password: hashed } });
    }
};
const requestPasswordResetService = async (email, userType) => {
    const user = await findUserByEmail(email, userType);
    if (!user)
        throw new Error("Aucun compte trouvé avec cet email");
    const code = crypto_1.default.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    await database_1.prisma.passwordResetCode.updateMany({
        where: { email, userType: userType, used: false },
        data: { used: true },
    });
    await database_1.prisma.passwordResetCode.create({
        data: { email, userType: userType, code, expiresAt },
    });
    await sendCodeByEmail(email, code);
    return { message: "Code envoyé à votre adresse email" };
};
exports.requestPasswordResetService = requestPasswordResetService;
const verifyResetCodeService = async (email, code, userType) => {
    const resetEntry = await database_1.prisma.passwordResetCode.findFirst({
        where: {
            email,
            userType: userType,
            code,
            used: false,
            verified: false,
            expiresAt: { gt: new Date() },
        },
    });
    if (!resetEntry)
        throw new Error("Code invalide ou expiré");
    await database_1.prisma.passwordResetCode.update({
        where: { id: resetEntry.id },
        data: { verified: true },
    });
    return { message: "Code vérifié avec succès" };
};
exports.verifyResetCodeService = verifyResetCodeService;
const resetPasswordService = async (email, newPassword, confirmPassword, userType) => {
    if (newPassword !== confirmPassword) {
        throw new Error("Les mots de passe ne correspondent pas");
    }
    if (newPassword.length < 6) {
        throw new Error("Le mot de passe doit contenir au moins 6 caractères");
    }
    const user = await findUserByEmail(email, userType);
    if (!user)
        throw new Error("Aucun compte trouvé");
    const resetEntry = await database_1.prisma.passwordResetCode.findFirst({
        where: {
            email,
            userType: userType,
            verified: true,
            used: false,
            expiresAt: { gt: new Date() },
        },
    });
    if (!resetEntry)
        throw new Error("Aucune vérification valide trouvée, recommencez");
    await database_1.prisma.passwordResetCode.update({
        where: { id: resetEntry.id },
        data: { used: true },
    });
    const hashed = await bcryptjs_1.default.hash(newPassword, 10);
    await updatePasswordByType(user.id, hashed, userType);
    return { message: "Mot de passe modifié avec succès" };
};
exports.resetPasswordService = resetPasswordService;
//# sourceMappingURL=passwordResetService.js.map