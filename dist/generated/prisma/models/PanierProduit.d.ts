import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PanierProduitModel = runtime.Types.Result.DefaultSelection<Prisma.$PanierProduitPayload>;
export type AggregatePanierProduit = {
    _count: PanierProduitCountAggregateOutputType | null;
    _avg: PanierProduitAvgAggregateOutputType | null;
    _sum: PanierProduitSumAggregateOutputType | null;
    _min: PanierProduitMinAggregateOutputType | null;
    _max: PanierProduitMaxAggregateOutputType | null;
};
export type PanierProduitAvgAggregateOutputType = {
    quantite: number | null;
    prixUnitaire: number | null;
};
export type PanierProduitSumAggregateOutputType = {
    quantite: number | null;
    prixUnitaire: number | null;
};
export type PanierProduitMinAggregateOutputType = {
    id: string | null;
    quantite: number | null;
    prixUnitaire: number | null;
    createdAt: Date | null;
    commandeId: string | null;
    produitId: string | null;
    statutGIE: $Enums.StatutGIEProduit | null;
    dateConfirmation: Date | null;
    updatedAt: Date | null;
};
export type PanierProduitMaxAggregateOutputType = {
    id: string | null;
    quantite: number | null;
    prixUnitaire: number | null;
    createdAt: Date | null;
    commandeId: string | null;
    produitId: string | null;
    statutGIE: $Enums.StatutGIEProduit | null;
    dateConfirmation: Date | null;
    updatedAt: Date | null;
};
export type PanierProduitCountAggregateOutputType = {
    id: number;
    quantite: number;
    prixUnitaire: number;
    createdAt: number;
    commandeId: number;
    produitId: number;
    statutGIE: number;
    dateConfirmation: number;
    updatedAt: number;
    _all: number;
};
export type PanierProduitAvgAggregateInputType = {
    quantite?: true;
    prixUnitaire?: true;
};
export type PanierProduitSumAggregateInputType = {
    quantite?: true;
    prixUnitaire?: true;
};
export type PanierProduitMinAggregateInputType = {
    id?: true;
    quantite?: true;
    prixUnitaire?: true;
    createdAt?: true;
    commandeId?: true;
    produitId?: true;
    statutGIE?: true;
    dateConfirmation?: true;
    updatedAt?: true;
};
export type PanierProduitMaxAggregateInputType = {
    id?: true;
    quantite?: true;
    prixUnitaire?: true;
    createdAt?: true;
    commandeId?: true;
    produitId?: true;
    statutGIE?: true;
    dateConfirmation?: true;
    updatedAt?: true;
};
export type PanierProduitCountAggregateInputType = {
    id?: true;
    quantite?: true;
    prixUnitaire?: true;
    createdAt?: true;
    commandeId?: true;
    produitId?: true;
    statutGIE?: true;
    dateConfirmation?: true;
    updatedAt?: true;
    _all?: true;
};
export type PanierProduitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PanierProduitWhereInput;
    orderBy?: Prisma.PanierProduitOrderByWithRelationInput | Prisma.PanierProduitOrderByWithRelationInput[];
    cursor?: Prisma.PanierProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PanierProduitCountAggregateInputType;
    _avg?: PanierProduitAvgAggregateInputType;
    _sum?: PanierProduitSumAggregateInputType;
    _min?: PanierProduitMinAggregateInputType;
    _max?: PanierProduitMaxAggregateInputType;
};
export type GetPanierProduitAggregateType<T extends PanierProduitAggregateArgs> = {
    [P in keyof T & keyof AggregatePanierProduit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePanierProduit[P]> : Prisma.GetScalarType<T[P], AggregatePanierProduit[P]>;
};
export type PanierProduitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PanierProduitWhereInput;
    orderBy?: Prisma.PanierProduitOrderByWithAggregationInput | Prisma.PanierProduitOrderByWithAggregationInput[];
    by: Prisma.PanierProduitScalarFieldEnum[] | Prisma.PanierProduitScalarFieldEnum;
    having?: Prisma.PanierProduitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PanierProduitCountAggregateInputType | true;
    _avg?: PanierProduitAvgAggregateInputType;
    _sum?: PanierProduitSumAggregateInputType;
    _min?: PanierProduitMinAggregateInputType;
    _max?: PanierProduitMaxAggregateInputType;
};
export type PanierProduitGroupByOutputType = {
    id: string;
    quantite: number;
    prixUnitaire: number;
    createdAt: Date;
    commandeId: string;
    produitId: string;
    statutGIE: $Enums.StatutGIEProduit;
    dateConfirmation: Date | null;
    updatedAt: Date;
    _count: PanierProduitCountAggregateOutputType | null;
    _avg: PanierProduitAvgAggregateOutputType | null;
    _sum: PanierProduitSumAggregateOutputType | null;
    _min: PanierProduitMinAggregateOutputType | null;
    _max: PanierProduitMaxAggregateOutputType | null;
};
export type GetPanierProduitGroupByPayload<T extends PanierProduitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PanierProduitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PanierProduitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PanierProduitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PanierProduitGroupByOutputType[P]>;
}>>;
export type PanierProduitWhereInput = {
    AND?: Prisma.PanierProduitWhereInput | Prisma.PanierProduitWhereInput[];
    OR?: Prisma.PanierProduitWhereInput[];
    NOT?: Prisma.PanierProduitWhereInput | Prisma.PanierProduitWhereInput[];
    id?: Prisma.StringFilter<"PanierProduit"> | string;
    quantite?: Prisma.IntFilter<"PanierProduit"> | number;
    prixUnitaire?: Prisma.FloatFilter<"PanierProduit"> | number;
    createdAt?: Prisma.DateTimeFilter<"PanierProduit"> | Date | string;
    commandeId?: Prisma.StringFilter<"PanierProduit"> | string;
    produitId?: Prisma.StringFilter<"PanierProduit"> | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFilter<"PanierProduit"> | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.DateTimeNullableFilter<"PanierProduit"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"PanierProduit"> | Date | string;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
    produit?: Prisma.XOR<Prisma.ProduitScalarRelationFilter, Prisma.ProduitWhereInput>;
};
export type PanierProduitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    statutGIE?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commande?: Prisma.CommandeOrderByWithRelationInput;
    produit?: Prisma.ProduitOrderByWithRelationInput;
};
export type PanierProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    commandeId_produitId?: Prisma.PanierProduitCommandeIdProduitIdCompoundUniqueInput;
    AND?: Prisma.PanierProduitWhereInput | Prisma.PanierProduitWhereInput[];
    OR?: Prisma.PanierProduitWhereInput[];
    NOT?: Prisma.PanierProduitWhereInput | Prisma.PanierProduitWhereInput[];
    quantite?: Prisma.IntFilter<"PanierProduit"> | number;
    prixUnitaire?: Prisma.FloatFilter<"PanierProduit"> | number;
    createdAt?: Prisma.DateTimeFilter<"PanierProduit"> | Date | string;
    commandeId?: Prisma.StringFilter<"PanierProduit"> | string;
    produitId?: Prisma.StringFilter<"PanierProduit"> | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFilter<"PanierProduit"> | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.DateTimeNullableFilter<"PanierProduit"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"PanierProduit"> | Date | string;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
    produit?: Prisma.XOR<Prisma.ProduitScalarRelationFilter, Prisma.ProduitWhereInput>;
}, "id" | "commandeId_produitId">;
export type PanierProduitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    statutGIE?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PanierProduitCountOrderByAggregateInput;
    _avg?: Prisma.PanierProduitAvgOrderByAggregateInput;
    _max?: Prisma.PanierProduitMaxOrderByAggregateInput;
    _min?: Prisma.PanierProduitMinOrderByAggregateInput;
    _sum?: Prisma.PanierProduitSumOrderByAggregateInput;
};
export type PanierProduitScalarWhereWithAggregatesInput = {
    AND?: Prisma.PanierProduitScalarWhereWithAggregatesInput | Prisma.PanierProduitScalarWhereWithAggregatesInput[];
    OR?: Prisma.PanierProduitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PanierProduitScalarWhereWithAggregatesInput | Prisma.PanierProduitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PanierProduit"> | string;
    quantite?: Prisma.IntWithAggregatesFilter<"PanierProduit"> | number;
    prixUnitaire?: Prisma.FloatWithAggregatesFilter<"PanierProduit"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PanierProduit"> | Date | string;
    commandeId?: Prisma.StringWithAggregatesFilter<"PanierProduit"> | string;
    produitId?: Prisma.StringWithAggregatesFilter<"PanierProduit"> | string;
    statutGIE?: Prisma.EnumStatutGIEProduitWithAggregatesFilter<"PanierProduit"> | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.DateTimeNullableWithAggregatesFilter<"PanierProduit"> | Date | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PanierProduit"> | Date | string;
};
export type PanierProduitCreateInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
    commande: Prisma.CommandeCreateNestedOneWithoutPanierProduitsInput;
    produit: Prisma.ProduitCreateNestedOneWithoutPanierProduitsInput;
};
export type PanierProduitUncheckedCreateInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    commandeId: string;
    produitId: string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
};
export type PanierProduitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commande?: Prisma.CommandeUpdateOneRequiredWithoutPanierProduitsNestedInput;
    produit?: Prisma.ProduitUpdateOneRequiredWithoutPanierProduitsNestedInput;
};
export type PanierProduitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitCreateManyInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    commandeId: string;
    produitId: string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
};
export type PanierProduitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitListRelationFilter = {
    every?: Prisma.PanierProduitWhereInput;
    some?: Prisma.PanierProduitWhereInput;
    none?: Prisma.PanierProduitWhereInput;
};
export type PanierProduitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PanierProduitCommandeIdProduitIdCompoundUniqueInput = {
    commandeId: string;
    produitId: string;
};
export type PanierProduitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    statutGIE?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PanierProduitAvgOrderByAggregateInput = {
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
};
export type PanierProduitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    statutGIE?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PanierProduitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    statutGIE?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PanierProduitSumOrderByAggregateInput = {
    quantite?: Prisma.SortOrder;
    prixUnitaire?: Prisma.SortOrder;
};
export type PanierProduitCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutProduitInput, Prisma.PanierProduitUncheckedCreateWithoutProduitInput> | Prisma.PanierProduitCreateWithoutProduitInput[] | Prisma.PanierProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutProduitInput | Prisma.PanierProduitCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.PanierProduitCreateManyProduitInputEnvelope;
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
};
export type PanierProduitUncheckedCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutProduitInput, Prisma.PanierProduitUncheckedCreateWithoutProduitInput> | Prisma.PanierProduitCreateWithoutProduitInput[] | Prisma.PanierProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutProduitInput | Prisma.PanierProduitCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.PanierProduitCreateManyProduitInputEnvelope;
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
};
export type PanierProduitUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutProduitInput, Prisma.PanierProduitUncheckedCreateWithoutProduitInput> | Prisma.PanierProduitCreateWithoutProduitInput[] | Prisma.PanierProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutProduitInput | Prisma.PanierProduitCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.PanierProduitUpsertWithWhereUniqueWithoutProduitInput | Prisma.PanierProduitUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.PanierProduitCreateManyProduitInputEnvelope;
    set?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    disconnect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    delete?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    update?: Prisma.PanierProduitUpdateWithWhereUniqueWithoutProduitInput | Prisma.PanierProduitUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.PanierProduitUpdateManyWithWhereWithoutProduitInput | Prisma.PanierProduitUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.PanierProduitScalarWhereInput | Prisma.PanierProduitScalarWhereInput[];
};
export type PanierProduitUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutProduitInput, Prisma.PanierProduitUncheckedCreateWithoutProduitInput> | Prisma.PanierProduitCreateWithoutProduitInput[] | Prisma.PanierProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutProduitInput | Prisma.PanierProduitCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.PanierProduitUpsertWithWhereUniqueWithoutProduitInput | Prisma.PanierProduitUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.PanierProduitCreateManyProduitInputEnvelope;
    set?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    disconnect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    delete?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    update?: Prisma.PanierProduitUpdateWithWhereUniqueWithoutProduitInput | Prisma.PanierProduitUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.PanierProduitUpdateManyWithWhereWithoutProduitInput | Prisma.PanierProduitUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.PanierProduitScalarWhereInput | Prisma.PanierProduitScalarWhereInput[];
};
export type PanierProduitCreateNestedManyWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutCommandeInput, Prisma.PanierProduitUncheckedCreateWithoutCommandeInput> | Prisma.PanierProduitCreateWithoutCommandeInput[] | Prisma.PanierProduitUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutCommandeInput | Prisma.PanierProduitCreateOrConnectWithoutCommandeInput[];
    createMany?: Prisma.PanierProduitCreateManyCommandeInputEnvelope;
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
};
export type PanierProduitUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutCommandeInput, Prisma.PanierProduitUncheckedCreateWithoutCommandeInput> | Prisma.PanierProduitCreateWithoutCommandeInput[] | Prisma.PanierProduitUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutCommandeInput | Prisma.PanierProduitCreateOrConnectWithoutCommandeInput[];
    createMany?: Prisma.PanierProduitCreateManyCommandeInputEnvelope;
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
};
export type PanierProduitUpdateManyWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutCommandeInput, Prisma.PanierProduitUncheckedCreateWithoutCommandeInput> | Prisma.PanierProduitCreateWithoutCommandeInput[] | Prisma.PanierProduitUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutCommandeInput | Prisma.PanierProduitCreateOrConnectWithoutCommandeInput[];
    upsert?: Prisma.PanierProduitUpsertWithWhereUniqueWithoutCommandeInput | Prisma.PanierProduitUpsertWithWhereUniqueWithoutCommandeInput[];
    createMany?: Prisma.PanierProduitCreateManyCommandeInputEnvelope;
    set?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    disconnect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    delete?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    update?: Prisma.PanierProduitUpdateWithWhereUniqueWithoutCommandeInput | Prisma.PanierProduitUpdateWithWhereUniqueWithoutCommandeInput[];
    updateMany?: Prisma.PanierProduitUpdateManyWithWhereWithoutCommandeInput | Prisma.PanierProduitUpdateManyWithWhereWithoutCommandeInput[];
    deleteMany?: Prisma.PanierProduitScalarWhereInput | Prisma.PanierProduitScalarWhereInput[];
};
export type PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.PanierProduitCreateWithoutCommandeInput, Prisma.PanierProduitUncheckedCreateWithoutCommandeInput> | Prisma.PanierProduitCreateWithoutCommandeInput[] | Prisma.PanierProduitUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.PanierProduitCreateOrConnectWithoutCommandeInput | Prisma.PanierProduitCreateOrConnectWithoutCommandeInput[];
    upsert?: Prisma.PanierProduitUpsertWithWhereUniqueWithoutCommandeInput | Prisma.PanierProduitUpsertWithWhereUniqueWithoutCommandeInput[];
    createMany?: Prisma.PanierProduitCreateManyCommandeInputEnvelope;
    set?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    disconnect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    delete?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    connect?: Prisma.PanierProduitWhereUniqueInput | Prisma.PanierProduitWhereUniqueInput[];
    update?: Prisma.PanierProduitUpdateWithWhereUniqueWithoutCommandeInput | Prisma.PanierProduitUpdateWithWhereUniqueWithoutCommandeInput[];
    updateMany?: Prisma.PanierProduitUpdateManyWithWhereWithoutCommandeInput | Prisma.PanierProduitUpdateManyWithWhereWithoutCommandeInput[];
    deleteMany?: Prisma.PanierProduitScalarWhereInput | Prisma.PanierProduitScalarWhereInput[];
};
export type EnumStatutGIEProduitFieldUpdateOperationsInput = {
    set?: $Enums.StatutGIEProduit;
};
export type PanierProduitCreateWithoutProduitInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
    commande: Prisma.CommandeCreateNestedOneWithoutPanierProduitsInput;
};
export type PanierProduitUncheckedCreateWithoutProduitInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    commandeId: string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
};
export type PanierProduitCreateOrConnectWithoutProduitInput = {
    where: Prisma.PanierProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.PanierProduitCreateWithoutProduitInput, Prisma.PanierProduitUncheckedCreateWithoutProduitInput>;
};
export type PanierProduitCreateManyProduitInputEnvelope = {
    data: Prisma.PanierProduitCreateManyProduitInput | Prisma.PanierProduitCreateManyProduitInput[];
    skipDuplicates?: boolean;
};
export type PanierProduitUpsertWithWhereUniqueWithoutProduitInput = {
    where: Prisma.PanierProduitWhereUniqueInput;
    update: Prisma.XOR<Prisma.PanierProduitUpdateWithoutProduitInput, Prisma.PanierProduitUncheckedUpdateWithoutProduitInput>;
    create: Prisma.XOR<Prisma.PanierProduitCreateWithoutProduitInput, Prisma.PanierProduitUncheckedCreateWithoutProduitInput>;
};
export type PanierProduitUpdateWithWhereUniqueWithoutProduitInput = {
    where: Prisma.PanierProduitWhereUniqueInput;
    data: Prisma.XOR<Prisma.PanierProduitUpdateWithoutProduitInput, Prisma.PanierProduitUncheckedUpdateWithoutProduitInput>;
};
export type PanierProduitUpdateManyWithWhereWithoutProduitInput = {
    where: Prisma.PanierProduitScalarWhereInput;
    data: Prisma.XOR<Prisma.PanierProduitUpdateManyMutationInput, Prisma.PanierProduitUncheckedUpdateManyWithoutProduitInput>;
};
export type PanierProduitScalarWhereInput = {
    AND?: Prisma.PanierProduitScalarWhereInput | Prisma.PanierProduitScalarWhereInput[];
    OR?: Prisma.PanierProduitScalarWhereInput[];
    NOT?: Prisma.PanierProduitScalarWhereInput | Prisma.PanierProduitScalarWhereInput[];
    id?: Prisma.StringFilter<"PanierProduit"> | string;
    quantite?: Prisma.IntFilter<"PanierProduit"> | number;
    prixUnitaire?: Prisma.FloatFilter<"PanierProduit"> | number;
    createdAt?: Prisma.DateTimeFilter<"PanierProduit"> | Date | string;
    commandeId?: Prisma.StringFilter<"PanierProduit"> | string;
    produitId?: Prisma.StringFilter<"PanierProduit"> | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFilter<"PanierProduit"> | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.DateTimeNullableFilter<"PanierProduit"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"PanierProduit"> | Date | string;
};
export type PanierProduitCreateWithoutCommandeInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
    produit: Prisma.ProduitCreateNestedOneWithoutPanierProduitsInput;
};
export type PanierProduitUncheckedCreateWithoutCommandeInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    produitId: string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
};
export type PanierProduitCreateOrConnectWithoutCommandeInput = {
    where: Prisma.PanierProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.PanierProduitCreateWithoutCommandeInput, Prisma.PanierProduitUncheckedCreateWithoutCommandeInput>;
};
export type PanierProduitCreateManyCommandeInputEnvelope = {
    data: Prisma.PanierProduitCreateManyCommandeInput | Prisma.PanierProduitCreateManyCommandeInput[];
    skipDuplicates?: boolean;
};
export type PanierProduitUpsertWithWhereUniqueWithoutCommandeInput = {
    where: Prisma.PanierProduitWhereUniqueInput;
    update: Prisma.XOR<Prisma.PanierProduitUpdateWithoutCommandeInput, Prisma.PanierProduitUncheckedUpdateWithoutCommandeInput>;
    create: Prisma.XOR<Prisma.PanierProduitCreateWithoutCommandeInput, Prisma.PanierProduitUncheckedCreateWithoutCommandeInput>;
};
export type PanierProduitUpdateWithWhereUniqueWithoutCommandeInput = {
    where: Prisma.PanierProduitWhereUniqueInput;
    data: Prisma.XOR<Prisma.PanierProduitUpdateWithoutCommandeInput, Prisma.PanierProduitUncheckedUpdateWithoutCommandeInput>;
};
export type PanierProduitUpdateManyWithWhereWithoutCommandeInput = {
    where: Prisma.PanierProduitScalarWhereInput;
    data: Prisma.XOR<Prisma.PanierProduitUpdateManyMutationInput, Prisma.PanierProduitUncheckedUpdateManyWithoutCommandeInput>;
};
export type PanierProduitCreateManyProduitInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    commandeId: string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
};
export type PanierProduitUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commande?: Prisma.CommandeUpdateOneRequiredWithoutPanierProduitsNestedInput;
};
export type PanierProduitUncheckedUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitUncheckedUpdateManyWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitCreateManyCommandeInput = {
    id?: string;
    quantite: number;
    prixUnitaire: number;
    createdAt?: Date | string;
    produitId: string;
    statutGIE?: $Enums.StatutGIEProduit;
    dateConfirmation?: Date | string | null;
    updatedAt?: Date | string;
};
export type PanierProduitUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.ProduitUpdateOneRequiredWithoutPanierProduitsNestedInput;
};
export type PanierProduitUncheckedUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitUncheckedUpdateManyWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    prixUnitaire?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutGIE?: Prisma.EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PanierProduitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantite?: boolean;
    prixUnitaire?: boolean;
    createdAt?: boolean;
    commandeId?: boolean;
    produitId?: boolean;
    statutGIE?: boolean;
    dateConfirmation?: boolean;
    updatedAt?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["panierProduit"]>;
export type PanierProduitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantite?: boolean;
    prixUnitaire?: boolean;
    createdAt?: boolean;
    commandeId?: boolean;
    produitId?: boolean;
    statutGIE?: boolean;
    dateConfirmation?: boolean;
    updatedAt?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["panierProduit"]>;
export type PanierProduitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantite?: boolean;
    prixUnitaire?: boolean;
    createdAt?: boolean;
    commandeId?: boolean;
    produitId?: boolean;
    statutGIE?: boolean;
    dateConfirmation?: boolean;
    updatedAt?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["panierProduit"]>;
export type PanierProduitSelectScalar = {
    id?: boolean;
    quantite?: boolean;
    prixUnitaire?: boolean;
    createdAt?: boolean;
    commandeId?: boolean;
    produitId?: boolean;
    statutGIE?: boolean;
    dateConfirmation?: boolean;
    updatedAt?: boolean;
};
export type PanierProduitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "quantite" | "prixUnitaire" | "createdAt" | "commandeId" | "produitId" | "statutGIE" | "dateConfirmation" | "updatedAt", ExtArgs["result"]["panierProduit"]>;
export type PanierProduitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
};
export type PanierProduitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
};
export type PanierProduitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
};
export type $PanierProduitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PanierProduit";
    objects: {
        commande: Prisma.$CommandePayload<ExtArgs>;
        produit: Prisma.$ProduitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        quantite: number;
        prixUnitaire: number;
        createdAt: Date;
        commandeId: string;
        produitId: string;
        statutGIE: $Enums.StatutGIEProduit;
        dateConfirmation: Date | null;
        updatedAt: Date;
    }, ExtArgs["result"]["panierProduit"]>;
    composites: {};
};
export type PanierProduitGetPayload<S extends boolean | null | undefined | PanierProduitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload, S>;
export type PanierProduitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PanierProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PanierProduitCountAggregateInputType | true;
};
export interface PanierProduitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PanierProduit'];
        meta: {
            name: 'PanierProduit';
        };
    };
    findUnique<T extends PanierProduitFindUniqueArgs>(args: Prisma.SelectSubset<T, PanierProduitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PanierProduitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PanierProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PanierProduitFindFirstArgs>(args?: Prisma.SelectSubset<T, PanierProduitFindFirstArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PanierProduitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PanierProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PanierProduitFindManyArgs>(args?: Prisma.SelectSubset<T, PanierProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PanierProduitCreateArgs>(args: Prisma.SelectSubset<T, PanierProduitCreateArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PanierProduitCreateManyArgs>(args?: Prisma.SelectSubset<T, PanierProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PanierProduitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PanierProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PanierProduitDeleteArgs>(args: Prisma.SelectSubset<T, PanierProduitDeleteArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PanierProduitUpdateArgs>(args: Prisma.SelectSubset<T, PanierProduitUpdateArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PanierProduitDeleteManyArgs>(args?: Prisma.SelectSubset<T, PanierProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PanierProduitUpdateManyArgs>(args: Prisma.SelectSubset<T, PanierProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PanierProduitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PanierProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PanierProduitUpsertArgs>(args: Prisma.SelectSubset<T, PanierProduitUpsertArgs<ExtArgs>>): Prisma.Prisma__PanierProduitClient<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PanierProduitCountArgs>(args?: Prisma.Subset<T, PanierProduitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PanierProduitCountAggregateOutputType> : number>;
    aggregate<T extends PanierProduitAggregateArgs>(args: Prisma.Subset<T, PanierProduitAggregateArgs>): Prisma.PrismaPromise<GetPanierProduitAggregateType<T>>;
    groupBy<T extends PanierProduitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PanierProduitGroupByArgs['orderBy'];
    } : {
        orderBy?: PanierProduitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PanierProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanierProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PanierProduitFieldRefs;
}
export interface Prisma__PanierProduitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commande<T extends Prisma.CommandeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommandeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    produit<T extends Prisma.ProduitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProduitDefaultArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PanierProduitFieldRefs {
    readonly id: Prisma.FieldRef<"PanierProduit", 'String'>;
    readonly quantite: Prisma.FieldRef<"PanierProduit", 'Int'>;
    readonly prixUnitaire: Prisma.FieldRef<"PanierProduit", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"PanierProduit", 'DateTime'>;
    readonly commandeId: Prisma.FieldRef<"PanierProduit", 'String'>;
    readonly produitId: Prisma.FieldRef<"PanierProduit", 'String'>;
    readonly statutGIE: Prisma.FieldRef<"PanierProduit", 'StatutGIEProduit'>;
    readonly dateConfirmation: Prisma.FieldRef<"PanierProduit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PanierProduit", 'DateTime'>;
}
export type PanierProduitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where: Prisma.PanierProduitWhereUniqueInput;
};
export type PanierProduitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where: Prisma.PanierProduitWhereUniqueInput;
};
export type PanierProduitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where?: Prisma.PanierProduitWhereInput;
    orderBy?: Prisma.PanierProduitOrderByWithRelationInput | Prisma.PanierProduitOrderByWithRelationInput[];
    cursor?: Prisma.PanierProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PanierProduitScalarFieldEnum | Prisma.PanierProduitScalarFieldEnum[];
};
export type PanierProduitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where?: Prisma.PanierProduitWhereInput;
    orderBy?: Prisma.PanierProduitOrderByWithRelationInput | Prisma.PanierProduitOrderByWithRelationInput[];
    cursor?: Prisma.PanierProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PanierProduitScalarFieldEnum | Prisma.PanierProduitScalarFieldEnum[];
};
export type PanierProduitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where?: Prisma.PanierProduitWhereInput;
    orderBy?: Prisma.PanierProduitOrderByWithRelationInput | Prisma.PanierProduitOrderByWithRelationInput[];
    cursor?: Prisma.PanierProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PanierProduitScalarFieldEnum | Prisma.PanierProduitScalarFieldEnum[];
};
export type PanierProduitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PanierProduitCreateInput, Prisma.PanierProduitUncheckedCreateInput>;
};
export type PanierProduitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PanierProduitCreateManyInput | Prisma.PanierProduitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PanierProduitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    data: Prisma.PanierProduitCreateManyInput | Prisma.PanierProduitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PanierProduitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PanierProduitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PanierProduitUpdateInput, Prisma.PanierProduitUncheckedUpdateInput>;
    where: Prisma.PanierProduitWhereUniqueInput;
};
export type PanierProduitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PanierProduitUpdateManyMutationInput, Prisma.PanierProduitUncheckedUpdateManyInput>;
    where?: Prisma.PanierProduitWhereInput;
    limit?: number;
};
export type PanierProduitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PanierProduitUpdateManyMutationInput, Prisma.PanierProduitUncheckedUpdateManyInput>;
    where?: Prisma.PanierProduitWhereInput;
    limit?: number;
    include?: Prisma.PanierProduitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PanierProduitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where: Prisma.PanierProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.PanierProduitCreateInput, Prisma.PanierProduitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PanierProduitUpdateInput, Prisma.PanierProduitUncheckedUpdateInput>;
};
export type PanierProduitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
    where: Prisma.PanierProduitWhereUniqueInput;
};
export type PanierProduitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PanierProduitWhereInput;
    limit?: number;
};
export type PanierProduitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PanierProduitSelect<ExtArgs> | null;
    omit?: Prisma.PanierProduitOmit<ExtArgs> | null;
    include?: Prisma.PanierProduitInclude<ExtArgs> | null;
};
//# sourceMappingURL=PanierProduit.d.ts.map