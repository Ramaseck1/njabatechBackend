type UserType = "ADMIN" | "CLIENT" | "GIE";
export declare const requestPasswordResetService: (email: string, userType: UserType) => Promise<{
    message: string;
}>;
export declare const verifyResetCodeService: (email: string, code: string, userType: UserType) => Promise<{
    message: string;
}>;
export declare const resetPasswordService: (email: string, newPassword: string, confirmPassword: string, userType: UserType) => Promise<{
    message: string;
}>;
export {};
//# sourceMappingURL=passwordResetService.d.ts.map