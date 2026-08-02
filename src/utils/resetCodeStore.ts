import { prisma } from '../config/database';

const CODE_TTL_MS = 10 * 60 * 1000; // 10 minutes

interface ResetEntry {
  gieId: string;
  email: string;
}

export const ResetCodeStore = {
  /** Génère et stocke un code à 6 chiffres */
  async create(gieId: string, email: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const cleanEmail = email.toLowerCase();

    // Invalider les anciens codes non utilisés pour cet email
    await prisma.passwordResetCode.updateMany({
      where: { email: cleanEmail, used: false },
      data: { used: true },
    });

    await prisma.passwordResetCode.create({
      data: {
        email: cleanEmail,
        gieId,
        code,
        expiresAt: new Date(Date.now() + CODE_TTL_MS),
      },
    });

    return code;
  },

  /** Vérifie le code. Retourne l'entrée si valide, null sinon */
  async verify(email: string, code: string): Promise<ResetEntry | null> {
    const cleanEmail = email.toLowerCase();

    const entry = await prisma.passwordResetCode.findFirst({
      where: {
        email: cleanEmail,
        code,
        used: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!entry) return null;

    await prisma.passwordResetCode.update({
      where: { id: entry.id },
      data: { verified: true },
    });

    return { gieId: entry.gieId, email: entry.email };
  },

  /** Vérifie qu'un token de reset est autorisé avant d'appliquer le nouveau mdp */
  async canReset(email: string): Promise<ResetEntry | null> {
    const cleanEmail = email.toLowerCase();

    const entry = await prisma.passwordResetCode.findFirst({
      where: {
        email: cleanEmail,
        verified: true,
        used: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!entry) return null;
    return { gieId: entry.gieId, email: entry.email };
  },

  /** Supprime (marque comme utilisée) l'entrée après usage */
  async delete(email: string): Promise<void> {
    await prisma.passwordResetCode.updateMany({
      where: { email: email.toLowerCase(), used: false },
      data: { used: true },
    });
  },
};