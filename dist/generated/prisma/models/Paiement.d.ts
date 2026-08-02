import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PaiementModel = runtime.Types.Result.DefaultSelection<Prisma.$PaiementPayload>;
export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null;
    _avg: PaiementAvgAggregateOutputType | null;
    _sum: PaiementSumAggregateOutputType | null;
    _min: PaiementMinAggregateOutputType | null;
    _max: PaiementMaxAggregateOutputType | null;
};
export type PaiementAvgAggregateOutputType = {
    montant: number | null;
    fraisLivraison: number | null;
};
export type PaiementSumAggregateOutputType = {
    montant: number | null;
    fraisLivraison: number | null;
};
export type PaiementMinAggregateOutputType = {
    id: string | null;
    montant: number | null;
    methode: $Enums.MethodePaiement | null;
    statut: $Enums.StatutPaiement | null;
    reference: string | null;
    datePaiement: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    commandeId: string | null;
    fraisLivraison: number | null;
};
export type PaiementMaxAggregateOutputType = {
    id: string | null;
    montant: number | null;
    methode: $Enums.MethodePaiement | null;
    statut: $Enums.StatutPaiement | null;
    reference: string | null;
    datePaiement: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    commandeId: string | null;
    fraisLivraison: number | null;
};
export type PaiementCountAggregateOutputType = {
    id: number;
    montant: number;
    methode: number;
    statut: number;
    reference: number;
    datePaiement: number;
    createdAt: number;
    updatedAt: number;
    commandeId: number;
    fraisLivraison: number;
    _all: number;
};
export type PaiementAvgAggregateInputType = {
    montant?: true;
    fraisLivraison?: true;
};
export type PaiementSumAggregateInputType = {
    montant?: true;
    fraisLivraison?: true;
};
export type PaiementMinAggregateInputType = {
    id?: true;
    montant?: true;
    methode?: true;
    statut?: true;
    reference?: true;
    datePaiement?: true;
    createdAt?: true;
    updatedAt?: true;
    commandeId?: true;
    fraisLivraison?: true;
};
export type PaiementMaxAggregateInputType = {
    id?: true;
    montant?: true;
    methode?: true;
    statut?: true;
    reference?: true;
    datePaiement?: true;
    createdAt?: true;
    updatedAt?: true;
    commandeId?: true;
    fraisLivraison?: true;
};
export type PaiementCountAggregateInputType = {
    id?: true;
    montant?: true;
    methode?: true;
    statut?: true;
    reference?: true;
    datePaiement?: true;
    createdAt?: true;
    updatedAt?: true;
    commandeId?: true;
    fraisLivraison?: true;
    _all?: true;
};
export type PaiementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaiementCountAggregateInputType;
    _avg?: PaiementAvgAggregateInputType;
    _sum?: PaiementSumAggregateInputType;
    _min?: PaiementMinAggregateInputType;
    _max?: PaiementMaxAggregateInputType;
};
export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
    [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaiement[P]> : Prisma.GetScalarType<T[P], AggregatePaiement[P]>;
};
export type PaiementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithAggregationInput | Prisma.PaiementOrderByWithAggregationInput[];
    by: Prisma.PaiementScalarFieldEnum[] | Prisma.PaiementScalarFieldEnum;
    having?: Prisma.PaiementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaiementCountAggregateInputType | true;
    _avg?: PaiementAvgAggregateInputType;
    _sum?: PaiementSumAggregateInputType;
    _min?: PaiementMinAggregateInputType;
    _max?: PaiementMaxAggregateInputType;
};
export type PaiementGroupByOutputType = {
    id: string;
    montant: number;
    methode: $Enums.MethodePaiement;
    statut: $Enums.StatutPaiement;
    reference: string | null;
    datePaiement: Date;
    createdAt: Date;
    updatedAt: Date;
    commandeId: string;
    fraisLivraison: number;
    _count: PaiementCountAggregateOutputType | null;
    _avg: PaiementAvgAggregateOutputType | null;
    _sum: PaiementSumAggregateOutputType | null;
    _min: PaiementMinAggregateOutputType | null;
    _max: PaiementMaxAggregateOutputType | null;
};
export type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaiementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaiementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaiementGroupByOutputType[P]>;
}>>;
export type PaiementWhereInput = {
    AND?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    OR?: Prisma.PaiementWhereInput[];
    NOT?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    id?: Prisma.StringFilter<"Paiement"> | string;
    montant?: Prisma.FloatFilter<"Paiement"> | number;
    methode?: Prisma.EnumMethodePaiementFilter<"Paiement"> | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement;
    reference?: Prisma.StringNullableFilter<"Paiement"> | string | null;
    datePaiement?: Prisma.DateTimeFilter<"Paiement"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Paiement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Paiement"> | Date | string;
    commandeId?: Prisma.StringFilter<"Paiement"> | string;
    fraisLivraison?: Prisma.FloatFilter<"Paiement"> | number;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
};
export type PaiementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    commande?: Prisma.CommandeOrderByWithRelationInput;
};
export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reference?: string;
    commandeId?: string;
    AND?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    OR?: Prisma.PaiementWhereInput[];
    NOT?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    montant?: Prisma.FloatFilter<"Paiement"> | number;
    methode?: Prisma.EnumMethodePaiementFilter<"Paiement"> | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement;
    datePaiement?: Prisma.DateTimeFilter<"Paiement"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Paiement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Paiement"> | Date | string;
    fraisLivraison?: Prisma.FloatFilter<"Paiement"> | number;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
}, "id" | "reference" | "commandeId">;
export type PaiementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    _count?: Prisma.PaiementCountOrderByAggregateInput;
    _avg?: Prisma.PaiementAvgOrderByAggregateInput;
    _max?: Prisma.PaiementMaxOrderByAggregateInput;
    _min?: Prisma.PaiementMinOrderByAggregateInput;
    _sum?: Prisma.PaiementSumOrderByAggregateInput;
};
export type PaiementScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaiementScalarWhereWithAggregatesInput | Prisma.PaiementScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaiementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaiementScalarWhereWithAggregatesInput | Prisma.PaiementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Paiement"> | string;
    montant?: Prisma.FloatWithAggregatesFilter<"Paiement"> | number;
    methode?: Prisma.EnumMethodePaiementWithAggregatesFilter<"Paiement"> | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementWithAggregatesFilter<"Paiement"> | $Enums.StatutPaiement;
    reference?: Prisma.StringNullableWithAggregatesFilter<"Paiement"> | string | null;
    datePaiement?: Prisma.DateTimeWithAggregatesFilter<"Paiement"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Paiement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Paiement"> | Date | string;
    commandeId?: Prisma.StringWithAggregatesFilter<"Paiement"> | string;
    fraisLivraison?: Prisma.FloatWithAggregatesFilter<"Paiement"> | number;
};
export type PaiementCreateInput = {
    id?: string;
    montant: number;
    methode: $Enums.MethodePaiement;
    statut?: $Enums.StatutPaiement;
    reference?: string | null;
    datePaiement?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    commande: Prisma.CommandeCreateNestedOneWithoutPaiementInput;
};
export type PaiementUncheckedCreateInput = {
    id?: string;
    montant: number;
    methode: $Enums.MethodePaiement;
    statut?: $Enums.StatutPaiement;
    reference?: string | null;
    datePaiement?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandeId: string;
    fraisLivraison?: number;
};
export type PaiementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    methode?: Prisma.EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    datePaiement?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    commande?: Prisma.CommandeUpdateOneRequiredWithoutPaiementNestedInput;
};
export type PaiementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    methode?: Prisma.EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    datePaiement?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PaiementCreateManyInput = {
    id?: string;
    montant: number;
    methode: $Enums.MethodePaiement;
    statut?: $Enums.StatutPaiement;
    reference?: string | null;
    datePaiement?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandeId: string;
    fraisLivraison?: number;
};
export type PaiementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    methode?: Prisma.EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    datePaiement?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PaiementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    methode?: Prisma.EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    datePaiement?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PaiementNullableScalarRelationFilter = {
    is?: Prisma.PaiementWhereInput | null;
    isNot?: Prisma.PaiementWhereInput | null;
};
export type PaiementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type PaiementAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type PaiementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type PaiementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type PaiementSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type PaiementCreateNestedOneWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCommandeInput, Prisma.PaiementUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCommandeInput;
    connect?: Prisma.PaiementWhereUniqueInput;
};
export type PaiementUncheckedCreateNestedOneWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCommandeInput, Prisma.PaiementUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCommandeInput;
    connect?: Prisma.PaiementWhereUniqueInput;
};
export type PaiementUpdateOneWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCommandeInput, Prisma.PaiementUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCommandeInput;
    upsert?: Prisma.PaiementUpsertWithoutCommandeInput;
    disconnect?: Prisma.PaiementWhereInput | boolean;
    delete?: Prisma.PaiementWhereInput | boolean;
    connect?: Prisma.PaiementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaiementUpdateToOneWithWhereWithoutCommandeInput, Prisma.PaiementUpdateWithoutCommandeInput>, Prisma.PaiementUncheckedUpdateWithoutCommandeInput>;
};
export type PaiementUncheckedUpdateOneWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCommandeInput, Prisma.PaiementUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCommandeInput;
    upsert?: Prisma.PaiementUpsertWithoutCommandeInput;
    disconnect?: Prisma.PaiementWhereInput | boolean;
    delete?: Prisma.PaiementWhereInput | boolean;
    connect?: Prisma.PaiementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaiementUpdateToOneWithWhereWithoutCommandeInput, Prisma.PaiementUpdateWithoutCommandeInput>, Prisma.PaiementUncheckedUpdateWithoutCommandeInput>;
};
export type EnumMethodePaiementFieldUpdateOperationsInput = {
    set?: $Enums.MethodePaiement;
};
export type EnumStatutPaiementFieldUpdateOperationsInput = {
    set?: $Enums.StatutPaiement;
};
export type PaiementCreateWithoutCommandeInput = {
    id?: string;
    montant: number;
    methode: $Enums.MethodePaiement;
    statut?: $Enums.StatutPaiement;
    reference?: string | null;
    datePaiement?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
};
export type PaiementUncheckedCreateWithoutCommandeInput = {
    id?: string;
    montant: number;
    methode: $Enums.MethodePaiement;
    statut?: $Enums.StatutPaiement;
    reference?: string | null;
    datePaiement?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
};
export type PaiementCreateOrConnectWithoutCommandeInput = {
    where: Prisma.PaiementWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaiementCreateWithoutCommandeInput, Prisma.PaiementUncheckedCreateWithoutCommandeInput>;
};
export type PaiementUpsertWithoutCommandeInput = {
    update: Prisma.XOR<Prisma.PaiementUpdateWithoutCommandeInput, Prisma.PaiementUncheckedUpdateWithoutCommandeInput>;
    create: Prisma.XOR<Prisma.PaiementCreateWithoutCommandeInput, Prisma.PaiementUncheckedCreateWithoutCommandeInput>;
    where?: Prisma.PaiementWhereInput;
};
export type PaiementUpdateToOneWithWhereWithoutCommandeInput = {
    where?: Prisma.PaiementWhereInput;
    data: Prisma.XOR<Prisma.PaiementUpdateWithoutCommandeInput, Prisma.PaiementUncheckedUpdateWithoutCommandeInput>;
};
export type PaiementUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    methode?: Prisma.EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    datePaiement?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PaiementUncheckedUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    methode?: Prisma.EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement;
    statut?: Prisma.EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    datePaiement?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PaiementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    montant?: boolean;
    methode?: boolean;
    statut?: boolean;
    reference?: boolean;
    datePaiement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandeId?: boolean;
    fraisLivraison?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paiement"]>;
export type PaiementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    montant?: boolean;
    methode?: boolean;
    statut?: boolean;
    reference?: boolean;
    datePaiement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandeId?: boolean;
    fraisLivraison?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paiement"]>;
export type PaiementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    montant?: boolean;
    methode?: boolean;
    statut?: boolean;
    reference?: boolean;
    datePaiement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandeId?: boolean;
    fraisLivraison?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paiement"]>;
export type PaiementSelectScalar = {
    id?: boolean;
    montant?: boolean;
    methode?: boolean;
    statut?: boolean;
    reference?: boolean;
    datePaiement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandeId?: boolean;
    fraisLivraison?: boolean;
};
export type PaiementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "montant" | "methode" | "statut" | "reference" | "datePaiement" | "createdAt" | "updatedAt" | "commandeId" | "fraisLivraison", ExtArgs["result"]["paiement"]>;
export type PaiementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
};
export type PaiementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
};
export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
};
export type $PaiementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Paiement";
    objects: {
        commande: Prisma.$CommandePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        montant: number;
        methode: $Enums.MethodePaiement;
        statut: $Enums.StatutPaiement;
        reference: string | null;
        datePaiement: Date;
        createdAt: Date;
        updatedAt: Date;
        commandeId: string;
        fraisLivraison: number;
    }, ExtArgs["result"]["paiement"]>;
    composites: {};
};
export type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaiementPayload, S>;
export type PaiementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaiementCountAggregateInputType | true;
};
export interface PaiementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Paiement'];
        meta: {
            name: 'Paiement';
        };
    };
    findUnique<T extends PaiementFindUniqueArgs>(args: Prisma.SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaiementFindFirstArgs>(args?: Prisma.SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaiementFindManyArgs>(args?: Prisma.SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaiementCreateArgs>(args: Prisma.SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaiementCreateManyArgs>(args?: Prisma.SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaiementDeleteArgs>(args: Prisma.SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaiementUpdateArgs>(args: Prisma.SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaiementDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaiementUpdateManyArgs>(args: Prisma.SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaiementUpsertArgs>(args: Prisma.SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaiementCountArgs>(args?: Prisma.Subset<T, PaiementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaiementCountAggregateOutputType> : number>;
    aggregate<T extends PaiementAggregateArgs>(args: Prisma.Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>;
    groupBy<T extends PaiementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaiementGroupByArgs['orderBy'];
    } : {
        orderBy?: PaiementGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaiementFieldRefs;
}
export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commande<T extends Prisma.CommandeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommandeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaiementFieldRefs {
    readonly id: Prisma.FieldRef<"Paiement", 'String'>;
    readonly montant: Prisma.FieldRef<"Paiement", 'Float'>;
    readonly methode: Prisma.FieldRef<"Paiement", 'MethodePaiement'>;
    readonly statut: Prisma.FieldRef<"Paiement", 'StatutPaiement'>;
    readonly reference: Prisma.FieldRef<"Paiement", 'String'>;
    readonly datePaiement: Prisma.FieldRef<"Paiement", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Paiement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Paiement", 'DateTime'>;
    readonly commandeId: Prisma.FieldRef<"Paiement", 'String'>;
    readonly fraisLivraison: Prisma.FieldRef<"Paiement", 'Float'>;
}
export type PaiementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaiementScalarFieldEnum | Prisma.PaiementScalarFieldEnum[];
};
export type PaiementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaiementScalarFieldEnum | Prisma.PaiementScalarFieldEnum[];
};
export type PaiementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaiementScalarFieldEnum | Prisma.PaiementScalarFieldEnum[];
};
export type PaiementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaiementCreateInput, Prisma.PaiementUncheckedCreateInput>;
};
export type PaiementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaiementCreateManyInput | Prisma.PaiementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaiementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    data: Prisma.PaiementCreateManyInput | Prisma.PaiementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaiementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaiementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaiementUpdateInput, Prisma.PaiementUncheckedUpdateInput>;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaiementUpdateManyMutationInput, Prisma.PaiementUncheckedUpdateManyInput>;
    where?: Prisma.PaiementWhereInput;
    limit?: number;
};
export type PaiementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaiementUpdateManyMutationInput, Prisma.PaiementUncheckedUpdateManyInput>;
    where?: Prisma.PaiementWhereInput;
    limit?: number;
    include?: Prisma.PaiementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaiementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaiementCreateInput, Prisma.PaiementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaiementUpdateInput, Prisma.PaiementUncheckedUpdateInput>;
};
export type PaiementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaiementWhereInput;
    limit?: number;
};
export type PaiementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
};
//# sourceMappingURL=Paiement.d.ts.map