"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCodeStore = void 0;
const database_1 = require("../config/database");
const CODE_TTL_MS = 10 * 60 * 1000;
exports.ResetCodeStore = {
    async create(gieId, email) {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const cleanEmail = email.toLowerCase();
        await database_1.prisma.passwordResetCode.updateMany({
            where: { email: cleanEmail, used: false },
            data: { used: true },
        });
        await database_1.prisma.passwordResetCode.create({
            data: {
                email: cleanEmail,
                gieId,
                code,
                expiresAt: new Date(Date.now() + CODE_TTL_MS),
            },
        });
        return code;
    },
    async verify(email, code) {
        const cleanEmail = email.toLowerCase();
        const entry = await database_1.prisma.passwordResetCode.findFirst({
            where: {
                email: cleanEmail,
                code,
                used: false,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: 'desc' },
        });
        if (!entry)
            return null;
        await database_1.prisma.passwordResetCode.update({
            where: { id: entry.id },
            data: { verified: true },
        });
        return { gieId: entry.gieId, email: entry.email };
    },
    async canReset(email) {
        const cleanEmail = email.toLowerCase();
        const entry = await database_1.prisma.passwordResetCode.findFirst({
            where: {
                email: cleanEmail,
                verified: true,
                used: false,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: 'desc' },
        });
        if (!entry)
            return null;
        return { gieId: entry.gieId, email: entry.email };
    },
    async delete(email) {
        await database_1.prisma.passwordResetCode.updateMany({
            where: { email: email.toLowerCase(), used: false },
            data: { used: true },
        });
    },
};
//# sourceMappingURL=resetCodeStore.js.map