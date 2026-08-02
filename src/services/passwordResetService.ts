import { prisma } from "../config/database";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendCodeByEmail = async (email: string, code: string) => {
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

type UserType = "ADMIN" | "CLIENT" | "GIE";

// Trouver l'utilisateur selon son type
const findUserByEmail = async (email: string, userType: UserType) => {
  switch (userType) {
    case "ADMIN":
      return prisma.administrateur.findUnique({ where: { email } });
    case "CLIENT":
      return prisma.client.findUnique({ where: { email } });
    case "GIE":
      return prisma.gIE.findFirst({ where: { email } });
  }
};

// Mettre à jour le mot de passe selon le type
const updatePasswordByType = async (id: string, hashed: string, userType: UserType) => {
  switch (userType) {
    case "ADMIN":
      return prisma.administrateur.update({ where: { id }, data: { password: hashed } });
    case "CLIENT":
      return prisma.client.update({ where: { id }, data: { password: hashed } });
    case "GIE":
      return prisma.gIE.update({ where: { id }, data: { password: hashed } });
  }
};

// ─── ÉTAPE 1 : Demande de code ────────────────────────────
export const requestPasswordResetService = async (email: string, userType: UserType) => {
  const user = await findUserByEmail(email, userType);
  if (!user) throw new Error("Aucun compte trouvé avec cet email");

  const code = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await prisma.passwordResetCode.updateMany({
    where: { email, userType: userType as any, used: false },
    data: { used: true },
  });

  await prisma.passwordResetCode.create({
    data: { email, userType: userType as any, code, expiresAt },
  });

  await sendCodeByEmail(email, code);
  return { message: "Code envoyé à votre adresse email" };
};

// ─── ÉTAPE 2 : Vérification du code ───────────────────────
export const verifyResetCodeService = async (email: string, code: string, userType: UserType) => {
  const resetEntry = await prisma.passwordResetCode.findFirst({
    where: {
      email,
      userType: userType as any,
      code,
      used: false,
      verified: false,
      expiresAt: { gt: new Date() },
    },
  });

  if (!resetEntry) throw new Error("Code invalide ou expiré");

  await prisma.passwordResetCode.update({
    where: { id: resetEntry.id },
    data: { verified: true },
  });

  return { message: "Code vérifié avec succès" };
};

// ─── ÉTAPE 3 : Nouveau mot de passe ───────────────────────
export const resetPasswordService = async (
  email: string,
  newPassword: string,
  confirmPassword: string,
  userType: UserType
) => {
  if (newPassword !== confirmPassword) {
    throw new Error("Les mots de passe ne correspondent pas");
  }
  if (newPassword.length < 6) {
    throw new Error("Le mot de passe doit contenir au moins 6 caractères");
  }

  const user = await findUserByEmail(email, userType);
  if (!user) throw new Error("Aucun compte trouvé");

  const resetEntry = await prisma.passwordResetCode.findFirst({
    where: {
      email,
      userType: userType as any,
      verified: true,
      used: false,
      expiresAt: { gt: new Date() },
    },
  });

  if (!resetEntry) throw new Error("Aucune vérification valide trouvée, recommencez");

  await prisma.passwordResetCode.update({
    where: { id: resetEntry.id },
    data: { used: true },
  });

  const hashed = await bcrypt.hash(newPassword, 10);
  await updatePasswordByType(user.id, hashed, userType);

  return { message: "Mot de passe modifié avec succès" };
};