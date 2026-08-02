interface ResetEntry {
    gieId: string;
    email: string;
}
export declare const ResetCodeStore: {
    create(gieId: string, email: string): Promise<string>;
    verify(email: string, code: string): Promise<ResetEntry | null>;
    canReset(email: string): Promise<ResetEntry | null>;
    delete(email: string): Promise<void>;
};
export {};
//# sourceMappingURL=resetCodeStore.d.ts.map