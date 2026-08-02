import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type CommandeModel = runtime.Types.Result.DefaultSelection<Prisma.$CommandePayload>;
export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null;
    _avg: CommandeAvgAggregateOutputType | null;
    _sum: CommandeSumAggregateOutputType | null;
    _min: CommandeMinAggregateOutputType | null;
    _max: CommandeMaxAggregateOutputType | null;
};
export type CommandeAvgAggregateOutputType = {
    montant: number | null;
    fraisLivraison: number | null;
};
export type CommandeSumAggregateOutputType = {
    montant: number | null;
    fraisLivraison: number | null;
};
export type CommandeMinAggregateOutputType = {
    id: string | null;
    numero: string | null;
    montant: number | null;
    statut: $Enums.StatutCommande | null;
    dateCommande: Date | null;
    dateLivraison: Date | null;
    adresseLivraison: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    clientId: string | null;
    fraisLivraison: number | null;
    regionLivraisonId: string | null;
    livreurId: string | null;
};
export type CommandeMaxAggregateOutputType = {
    id: string | null;
    numero: string | null;
    montant: number | null;
    statut: $Enums.StatutCommande | null;
    dateCommande: Date | null;
    dateLivraison: Date | null;
    adresseLivraison: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    clientId: string | null;
    fraisLivraison: number | null;
    regionLivraisonId: string | null;
    livreurId: string | null;
};
export type CommandeCountAggregateOutputType = {
    id: number;
    numero: number;
    montant: number;
    statut: number;
    dateCommande: number;
    dateLivraison: number;
    adresseLivraison: number;
    createdAt: number;
    updatedAt: number;
    clientId: number;
    fraisLivraison: number;
    regionLivraisonId: number;
    livreurId: number;
    _all: number;
};
export type CommandeAvgAggregateInputType = {
    montant?: true;
    fraisLivraison?: true;
};
export type CommandeSumAggregateInputType = {
    montant?: true;
    fraisLivraison?: true;
};
export type CommandeMinAggregateInputType = {
    id?: true;
    numero?: true;
    montant?: true;
    statut?: true;
    dateCommande?: true;
    dateLivraison?: true;
    adresseLivraison?: true;
    createdAt?: true;
    updatedAt?: true;
    clientId?: true;
    fraisLivraison?: true;
    regionLivraisonId?: true;
    livreurId?: true;
};
export type CommandeMaxAggregateInputType = {
    id?: true;
    numero?: true;
    montant?: true;
    statut?: true;
    dateCommande?: true;
    dateLivraison?: true;
    adresseLivraison?: true;
    createdAt?: true;
    updatedAt?: true;
    clientId?: true;
    fraisLivraison?: true;
    regionLivraisonId?: true;
    livreurId?: true;
};
export type CommandeCountAggregateInputType = {
    id?: true;
    numero?: true;
    montant?: true;
    statut?: true;
    dateCommande?: true;
    dateLivraison?: true;
    adresseLivraison?: true;
    createdAt?: true;
    updatedAt?: true;
    clientId?: true;
    fraisLivraison?: true;
    regionLivraisonId?: true;
    livreurId?: true;
    _all?: true;
};
export type CommandeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    cursor?: Prisma.CommandeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommandeCountAggregateInputType;
    _avg?: CommandeAvgAggregateInputType;
    _sum?: CommandeSumAggregateInputType;
    _min?: CommandeMinAggregateInputType;
    _max?: CommandeMaxAggregateInputType;
};
export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
    [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommande[P]> : Prisma.GetScalarType<T[P], AggregateCommande[P]>;
};
export type CommandeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
    orderBy?: Prisma.CommandeOrderByWithAggregationInput | Prisma.CommandeOrderByWithAggregationInput[];
    by: Prisma.CommandeScalarFieldEnum[] | Prisma.CommandeScalarFieldEnum;
    having?: Prisma.CommandeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommandeCountAggregateInputType | true;
    _avg?: CommandeAvgAggregateInputType;
    _sum?: CommandeSumAggregateInputType;
    _min?: CommandeMinAggregateInputType;
    _max?: CommandeMaxAggregateInputType;
};
export type CommandeGroupByOutputType = {
    id: string;
    numero: string;
    montant: number;
    statut: $Enums.StatutCommande;
    dateCommande: Date;
    dateLivraison: Date | null;
    adresseLivraison: string | null;
    createdAt: Date;
    updatedAt: Date;
    clientId: string;
    fraisLivraison: number;
    regionLivraisonId: string | null;
    livreurId: string | null;
    _count: CommandeCountAggregateOutputType | null;
    _avg: CommandeAvgAggregateOutputType | null;
    _sum: CommandeSumAggregateOutputType | null;
    _min: CommandeMinAggregateOutputType | null;
    _max: CommandeMaxAggregateOutputType | null;
};
export type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommandeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommandeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommandeGroupByOutputType[P]>;
}>>;
export type CommandeWhereInput = {
    AND?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    OR?: Prisma.CommandeWhereInput[];
    NOT?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    id?: Prisma.StringFilter<"Commande"> | string;
    numero?: Prisma.StringFilter<"Commande"> | string;
    montant?: Prisma.FloatFilter<"Commande"> | number;
    statut?: Prisma.EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    dateLivraison?: Prisma.DateTimeNullableFilter<"Commande"> | Date | string | null;
    adresseLivraison?: Prisma.StringNullableFilter<"Commande"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    clientId?: Prisma.StringFilter<"Commande"> | string;
    fraisLivraison?: Prisma.FloatFilter<"Commande"> | number;
    regionLivraisonId?: Prisma.StringNullableFilter<"Commande"> | string | null;
    livreurId?: Prisma.StringNullableFilter<"Commande"> | string | null;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    livreurs?: Prisma.XOR<Prisma.LivreursNullableScalarRelationFilter, Prisma.livreursWhereInput> | null;
    regions?: Prisma.XOR<Prisma.RegionsNullableScalarRelationFilter, Prisma.regionsWhereInput> | null;
    paiement?: Prisma.XOR<Prisma.PaiementNullableScalarRelationFilter, Prisma.PaiementWhereInput> | null;
    panierProduits?: Prisma.PanierProduitListRelationFilter;
};
export type CommandeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCommande?: Prisma.SortOrder;
    dateLivraison?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresseLivraison?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    regionLivraisonId?: Prisma.SortOrderInput | Prisma.SortOrder;
    livreurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
    livreurs?: Prisma.livreursOrderByWithRelationInput;
    regions?: Prisma.regionsOrderByWithRelationInput;
    paiement?: Prisma.PaiementOrderByWithRelationInput;
    panierProduits?: Prisma.PanierProduitOrderByRelationAggregateInput;
};
export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    numero?: string;
    AND?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    OR?: Prisma.CommandeWhereInput[];
    NOT?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    montant?: Prisma.FloatFilter<"Commande"> | number;
    statut?: Prisma.EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    dateLivraison?: Prisma.DateTimeNullableFilter<"Commande"> | Date | string | null;
    adresseLivraison?: Prisma.StringNullableFilter<"Commande"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    clientId?: Prisma.StringFilter<"Commande"> | string;
    fraisLivraison?: Prisma.FloatFilter<"Commande"> | number;
    regionLivraisonId?: Prisma.StringNullableFilter<"Commande"> | string | null;
    livreurId?: Prisma.StringNullableFilter<"Commande"> | string | null;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    livreurs?: Prisma.XOR<Prisma.LivreursNullableScalarRelationFilter, Prisma.livreursWhereInput> | null;
    regions?: Prisma.XOR<Prisma.RegionsNullableScalarRelationFilter, Prisma.regionsWhereInput> | null;
    paiement?: Prisma.XOR<Prisma.PaiementNullableScalarRelationFilter, Prisma.PaiementWhereInput> | null;
    panierProduits?: Prisma.PanierProduitListRelationFilter;
}, "id" | "numero">;
export type CommandeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCommande?: Prisma.SortOrder;
    dateLivraison?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresseLivraison?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    regionLivraisonId?: Prisma.SortOrderInput | Prisma.SortOrder;
    livreurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CommandeCountOrderByAggregateInput;
    _avg?: Prisma.CommandeAvgOrderByAggregateInput;
    _max?: Prisma.CommandeMaxOrderByAggregateInput;
    _min?: Prisma.CommandeMinOrderByAggregateInput;
    _sum?: Prisma.CommandeSumOrderByAggregateInput;
};
export type CommandeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommandeScalarWhereWithAggregatesInput | Prisma.CommandeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommandeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommandeScalarWhereWithAggregatesInput | Prisma.CommandeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    montant?: Prisma.FloatWithAggregatesFilter<"Commande"> | number;
    statut?: Prisma.EnumStatutCommandeWithAggregatesFilter<"Commande"> | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeWithAggregatesFilter<"Commande"> | Date | string;
    dateLivraison?: Prisma.DateTimeNullableWithAggregatesFilter<"Commande"> | Date | string | null;
    adresseLivraison?: Prisma.StringNullableWithAggregatesFilter<"Commande"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Commande"> | Date | string;
    clientId?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    fraisLivraison?: Prisma.FloatWithAggregatesFilter<"Commande"> | number;
    regionLivraisonId?: Prisma.StringNullableWithAggregatesFilter<"Commande"> | string | null;
    livreurId?: Prisma.StringNullableWithAggregatesFilter<"Commande"> | string | null;
};
export type CommandeCreateInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    livreurs?: Prisma.livreursCreateNestedOneWithoutCommandesInput;
    regions?: Prisma.regionsCreateNestedOneWithoutCommandesInput;
    paiement?: Prisma.PaiementCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutCommandeInput;
};
export type CommandeUncheckedCreateInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    livreurId?: string | null;
    paiement?: Prisma.PaiementUncheckedCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutCommandeInput;
};
export type CommandeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    livreurs?: Prisma.livreursUpdateOneWithoutCommandesNestedInput;
    regions?: Prisma.regionsUpdateOneWithoutCommandesNestedInput;
    paiement?: Prisma.PaiementUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paiement?: Prisma.PaiementUncheckedUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput;
};
export type CommandeCreateManyInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    livreurId?: string | null;
};
export type CommandeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type CommandeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeListRelationFilter = {
    every?: Prisma.CommandeWhereInput;
    some?: Prisma.CommandeWhereInput;
    none?: Prisma.CommandeWhereInput;
};
export type CommandeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommandeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCommande?: Prisma.SortOrder;
    dateLivraison?: Prisma.SortOrder;
    adresseLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    regionLivraisonId?: Prisma.SortOrder;
    livreurId?: Prisma.SortOrder;
};
export type CommandeAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type CommandeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCommande?: Prisma.SortOrder;
    dateLivraison?: Prisma.SortOrder;
    adresseLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    regionLivraisonId?: Prisma.SortOrder;
    livreurId?: Prisma.SortOrder;
};
export type CommandeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCommande?: Prisma.SortOrder;
    dateLivraison?: Prisma.SortOrder;
    adresseLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    regionLivraisonId?: Prisma.SortOrder;
    livreurId?: Prisma.SortOrder;
};
export type CommandeSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
};
export type CommandeScalarRelationFilter = {
    is?: Prisma.CommandeWhereInput;
    isNot?: Prisma.CommandeWhereInput;
};
export type CommandeCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput | Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput | Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutClientInput | Prisma.CommandeUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput | Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput | Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutClientInput | Prisma.CommandeUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type EnumStatutCommandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutCommande;
};
export type CommandeCreateNestedOneWithoutPaiementInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutPaiementInput, Prisma.CommandeUncheckedCreateWithoutPaiementInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutPaiementInput;
    connect?: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateOneRequiredWithoutPaiementNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutPaiementInput, Prisma.CommandeUncheckedCreateWithoutPaiementInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutPaiementInput;
    upsert?: Prisma.CommandeUpsertWithoutPaiementInput;
    connect?: Prisma.CommandeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeUpdateToOneWithWhereWithoutPaiementInput, Prisma.CommandeUpdateWithoutPaiementInput>, Prisma.CommandeUncheckedUpdateWithoutPaiementInput>;
};
export type CommandeCreateNestedOneWithoutPanierProduitsInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutPanierProduitsInput, Prisma.CommandeUncheckedCreateWithoutPanierProduitsInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutPanierProduitsInput;
    connect?: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateOneRequiredWithoutPanierProduitsNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutPanierProduitsInput, Prisma.CommandeUncheckedCreateWithoutPanierProduitsInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutPanierProduitsInput;
    upsert?: Prisma.CommandeUpsertWithoutPanierProduitsInput;
    connect?: Prisma.CommandeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeUpdateToOneWithWhereWithoutPanierProduitsInput, Prisma.CommandeUpdateWithoutPanierProduitsInput>, Prisma.CommandeUncheckedUpdateWithoutPanierProduitsInput>;
};
export type CommandeCreateNestedManyWithoutLivreursInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutLivreursInput, Prisma.CommandeUncheckedCreateWithoutLivreursInput> | Prisma.CommandeCreateWithoutLivreursInput[] | Prisma.CommandeUncheckedCreateWithoutLivreursInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutLivreursInput | Prisma.CommandeCreateOrConnectWithoutLivreursInput[];
    createMany?: Prisma.CommandeCreateManyLivreursInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUncheckedCreateNestedManyWithoutLivreursInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutLivreursInput, Prisma.CommandeUncheckedCreateWithoutLivreursInput> | Prisma.CommandeCreateWithoutLivreursInput[] | Prisma.CommandeUncheckedCreateWithoutLivreursInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutLivreursInput | Prisma.CommandeCreateOrConnectWithoutLivreursInput[];
    createMany?: Prisma.CommandeCreateManyLivreursInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUpdateManyWithoutLivreursNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutLivreursInput, Prisma.CommandeUncheckedCreateWithoutLivreursInput> | Prisma.CommandeCreateWithoutLivreursInput[] | Prisma.CommandeUncheckedCreateWithoutLivreursInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutLivreursInput | Prisma.CommandeCreateOrConnectWithoutLivreursInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutLivreursInput | Prisma.CommandeUpsertWithWhereUniqueWithoutLivreursInput[];
    createMany?: Prisma.CommandeCreateManyLivreursInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutLivreursInput | Prisma.CommandeUpdateWithWhereUniqueWithoutLivreursInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutLivreursInput | Prisma.CommandeUpdateManyWithWhereWithoutLivreursInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeUncheckedUpdateManyWithoutLivreursNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutLivreursInput, Prisma.CommandeUncheckedCreateWithoutLivreursInput> | Prisma.CommandeCreateWithoutLivreursInput[] | Prisma.CommandeUncheckedCreateWithoutLivreursInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutLivreursInput | Prisma.CommandeCreateOrConnectWithoutLivreursInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutLivreursInput | Prisma.CommandeUpsertWithWhereUniqueWithoutLivreursInput[];
    createMany?: Prisma.CommandeCreateManyLivreursInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutLivreursInput | Prisma.CommandeUpdateWithWhereUniqueWithoutLivreursInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutLivreursInput | Prisma.CommandeUpdateManyWithWhereWithoutLivreursInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutRegionsInput, Prisma.CommandeUncheckedCreateWithoutRegionsInput> | Prisma.CommandeCreateWithoutRegionsInput[] | Prisma.CommandeUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutRegionsInput | Prisma.CommandeCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.CommandeCreateManyRegionsInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutRegionsInput, Prisma.CommandeUncheckedCreateWithoutRegionsInput> | Prisma.CommandeCreateWithoutRegionsInput[] | Prisma.CommandeUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutRegionsInput | Prisma.CommandeCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.CommandeCreateManyRegionsInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutRegionsInput, Prisma.CommandeUncheckedCreateWithoutRegionsInput> | Prisma.CommandeCreateWithoutRegionsInput[] | Prisma.CommandeUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutRegionsInput | Prisma.CommandeCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutRegionsInput | Prisma.CommandeUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.CommandeCreateManyRegionsInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutRegionsInput | Prisma.CommandeUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutRegionsInput | Prisma.CommandeUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutRegionsInput, Prisma.CommandeUncheckedCreateWithoutRegionsInput> | Prisma.CommandeCreateWithoutRegionsInput[] | Prisma.CommandeUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutRegionsInput | Prisma.CommandeCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutRegionsInput | Prisma.CommandeUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.CommandeCreateManyRegionsInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutRegionsInput | Prisma.CommandeUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutRegionsInput | Prisma.CommandeUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeCreateWithoutClientInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    livreurs?: Prisma.livreursCreateNestedOneWithoutCommandesInput;
    regions?: Prisma.regionsCreateNestedOneWithoutCommandesInput;
    paiement?: Prisma.PaiementCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutClientInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    livreurId?: string | null;
    paiement?: Prisma.PaiementUncheckedCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutClientInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput>;
};
export type CommandeCreateManyClientInputEnvelope = {
    data: Prisma.CommandeCreateManyClientInput | Prisma.CommandeCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.CommandeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutClientInput, Prisma.CommandeUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput>;
};
export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.CommandeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutClientInput, Prisma.CommandeUncheckedUpdateWithoutClientInput>;
};
export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.CommandeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyWithoutClientInput>;
};
export type CommandeScalarWhereInput = {
    AND?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
    OR?: Prisma.CommandeScalarWhereInput[];
    NOT?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
    id?: Prisma.StringFilter<"Commande"> | string;
    numero?: Prisma.StringFilter<"Commande"> | string;
    montant?: Prisma.FloatFilter<"Commande"> | number;
    statut?: Prisma.EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    dateLivraison?: Prisma.DateTimeNullableFilter<"Commande"> | Date | string | null;
    adresseLivraison?: Prisma.StringNullableFilter<"Commande"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    clientId?: Prisma.StringFilter<"Commande"> | string;
    fraisLivraison?: Prisma.FloatFilter<"Commande"> | number;
    regionLivraisonId?: Prisma.StringNullableFilter<"Commande"> | string | null;
    livreurId?: Prisma.StringNullableFilter<"Commande"> | string | null;
};
export type CommandeCreateWithoutPaiementInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    livreurs?: Prisma.livreursCreateNestedOneWithoutCommandesInput;
    regions?: Prisma.regionsCreateNestedOneWithoutCommandesInput;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutPaiementInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    livreurId?: string | null;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutPaiementInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutPaiementInput, Prisma.CommandeUncheckedCreateWithoutPaiementInput>;
};
export type CommandeUpsertWithoutPaiementInput = {
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutPaiementInput, Prisma.CommandeUncheckedUpdateWithoutPaiementInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutPaiementInput, Prisma.CommandeUncheckedCreateWithoutPaiementInput>;
    where?: Prisma.CommandeWhereInput;
};
export type CommandeUpdateToOneWithWhereWithoutPaiementInput = {
    where?: Prisma.CommandeWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutPaiementInput, Prisma.CommandeUncheckedUpdateWithoutPaiementInput>;
};
export type CommandeUpdateWithoutPaiementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    livreurs?: Prisma.livreursUpdateOneWithoutCommandesNestedInput;
    regions?: Prisma.regionsUpdateOneWithoutCommandesNestedInput;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutPaiementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput;
};
export type CommandeCreateWithoutPanierProduitsInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    livreurs?: Prisma.livreursCreateNestedOneWithoutCommandesInput;
    regions?: Prisma.regionsCreateNestedOneWithoutCommandesInput;
    paiement?: Prisma.PaiementCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutPanierProduitsInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    livreurId?: string | null;
    paiement?: Prisma.PaiementUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutPanierProduitsInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutPanierProduitsInput, Prisma.CommandeUncheckedCreateWithoutPanierProduitsInput>;
};
export type CommandeUpsertWithoutPanierProduitsInput = {
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutPanierProduitsInput, Prisma.CommandeUncheckedUpdateWithoutPanierProduitsInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutPanierProduitsInput, Prisma.CommandeUncheckedCreateWithoutPanierProduitsInput>;
    where?: Prisma.CommandeWhereInput;
};
export type CommandeUpdateToOneWithWhereWithoutPanierProduitsInput = {
    where?: Prisma.CommandeWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutPanierProduitsInput, Prisma.CommandeUncheckedUpdateWithoutPanierProduitsInput>;
};
export type CommandeUpdateWithoutPanierProduitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    livreurs?: Prisma.livreursUpdateOneWithoutCommandesNestedInput;
    regions?: Prisma.regionsUpdateOneWithoutCommandesNestedInput;
    paiement?: Prisma.PaiementUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutPanierProduitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paiement?: Prisma.PaiementUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeCreateWithoutLivreursInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    regions?: Prisma.regionsCreateNestedOneWithoutCommandesInput;
    paiement?: Prisma.PaiementCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutLivreursInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    paiement?: Prisma.PaiementUncheckedCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutLivreursInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutLivreursInput, Prisma.CommandeUncheckedCreateWithoutLivreursInput>;
};
export type CommandeCreateManyLivreursInputEnvelope = {
    data: Prisma.CommandeCreateManyLivreursInput | Prisma.CommandeCreateManyLivreursInput[];
    skipDuplicates?: boolean;
};
export type CommandeUpsertWithWhereUniqueWithoutLivreursInput = {
    where: Prisma.CommandeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutLivreursInput, Prisma.CommandeUncheckedUpdateWithoutLivreursInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutLivreursInput, Prisma.CommandeUncheckedCreateWithoutLivreursInput>;
};
export type CommandeUpdateWithWhereUniqueWithoutLivreursInput = {
    where: Prisma.CommandeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutLivreursInput, Prisma.CommandeUncheckedUpdateWithoutLivreursInput>;
};
export type CommandeUpdateManyWithWhereWithoutLivreursInput = {
    where: Prisma.CommandeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyWithoutLivreursInput>;
};
export type CommandeCreateWithoutRegionsInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    livreurs?: Prisma.livreursCreateNestedOneWithoutCommandesInput;
    paiement?: Prisma.PaiementCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutRegionsInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    livreurId?: string | null;
    paiement?: Prisma.PaiementUncheckedCreateNestedOneWithoutCommandeInput;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutRegionsInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutRegionsInput, Prisma.CommandeUncheckedCreateWithoutRegionsInput>;
};
export type CommandeCreateManyRegionsInputEnvelope = {
    data: Prisma.CommandeCreateManyRegionsInput | Prisma.CommandeCreateManyRegionsInput[];
    skipDuplicates?: boolean;
};
export type CommandeUpsertWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.CommandeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutRegionsInput, Prisma.CommandeUncheckedUpdateWithoutRegionsInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutRegionsInput, Prisma.CommandeUncheckedCreateWithoutRegionsInput>;
};
export type CommandeUpdateWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.CommandeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutRegionsInput, Prisma.CommandeUncheckedUpdateWithoutRegionsInput>;
};
export type CommandeUpdateManyWithWhereWithoutRegionsInput = {
    where: Prisma.CommandeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyWithoutRegionsInput>;
};
export type CommandeCreateManyClientInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
    livreurId?: string | null;
};
export type CommandeUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    livreurs?: Prisma.livreursUpdateOneWithoutCommandesNestedInput;
    regions?: Prisma.regionsUpdateOneWithoutCommandesNestedInput;
    paiement?: Prisma.PaiementUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paiement?: Prisma.PaiementUncheckedUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeCreateManyLivreursInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    regionLivraisonId?: string | null;
};
export type CommandeUpdateWithoutLivreursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    regions?: Prisma.regionsUpdateOneWithoutCommandesNestedInput;
    paiement?: Prisma.PaiementUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutLivreursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paiement?: Prisma.PaiementUncheckedUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateManyWithoutLivreursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    regionLivraisonId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeCreateManyRegionsInput = {
    id?: string;
    numero: string;
    montant: number;
    statut?: $Enums.StatutCommande;
    dateCommande?: Date | string;
    dateLivraison?: Date | string | null;
    adresseLivraison?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientId: string;
    fraisLivraison?: number;
    livreurId?: string | null;
};
export type CommandeUpdateWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    livreurs?: Prisma.livreursUpdateOneWithoutCommandesNestedInput;
    paiement?: Prisma.PaiementUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paiement?: Prisma.PaiementUncheckedUpdateOneWithoutCommandeNestedInput;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateManyWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande;
    dateCommande?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateLivraison?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    adresseLivraison?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    livreurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeCountOutputType = {
    panierProduits: number;
};
export type CommandeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    panierProduits?: boolean | CommandeCountOutputTypeCountPanierProduitsArgs;
};
export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeCountOutputTypeSelect<ExtArgs> | null;
};
export type CommandeCountOutputTypeCountPanierProduitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PanierProduitWhereInput;
};
export type CommandeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateCommande?: boolean;
    dateLivraison?: boolean;
    adresseLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clientId?: boolean;
    fraisLivraison?: boolean;
    regionLivraisonId?: boolean;
    livreurId?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    livreurs?: boolean | Prisma.Commande$livreursArgs<ExtArgs>;
    regions?: boolean | Prisma.Commande$regionsArgs<ExtArgs>;
    paiement?: boolean | Prisma.Commande$paiementArgs<ExtArgs>;
    panierProduits?: boolean | Prisma.Commande$panierProduitsArgs<ExtArgs>;
    _count?: boolean | Prisma.CommandeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commande"]>;
export type CommandeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateCommande?: boolean;
    dateLivraison?: boolean;
    adresseLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clientId?: boolean;
    fraisLivraison?: boolean;
    regionLivraisonId?: boolean;
    livreurId?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    livreurs?: boolean | Prisma.Commande$livreursArgs<ExtArgs>;
    regions?: boolean | Prisma.Commande$regionsArgs<ExtArgs>;
}, ExtArgs["result"]["commande"]>;
export type CommandeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateCommande?: boolean;
    dateLivraison?: boolean;
    adresseLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clientId?: boolean;
    fraisLivraison?: boolean;
    regionLivraisonId?: boolean;
    livreurId?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    livreurs?: boolean | Prisma.Commande$livreursArgs<ExtArgs>;
    regions?: boolean | Prisma.Commande$regionsArgs<ExtArgs>;
}, ExtArgs["result"]["commande"]>;
export type CommandeSelectScalar = {
    id?: boolean;
    numero?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateCommande?: boolean;
    dateLivraison?: boolean;
    adresseLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clientId?: boolean;
    fraisLivraison?: boolean;
    regionLivraisonId?: boolean;
    livreurId?: boolean;
};
export type CommandeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numero" | "montant" | "statut" | "dateCommande" | "dateLivraison" | "adresseLivraison" | "createdAt" | "updatedAt" | "clientId" | "fraisLivraison" | "regionLivraisonId" | "livreurId", ExtArgs["result"]["commande"]>;
export type CommandeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    livreurs?: boolean | Prisma.Commande$livreursArgs<ExtArgs>;
    regions?: boolean | Prisma.Commande$regionsArgs<ExtArgs>;
    paiement?: boolean | Prisma.Commande$paiementArgs<ExtArgs>;
    panierProduits?: boolean | Prisma.Commande$panierProduitsArgs<ExtArgs>;
    _count?: boolean | Prisma.CommandeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CommandeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    livreurs?: boolean | Prisma.Commande$livreursArgs<ExtArgs>;
    regions?: boolean | Prisma.Commande$regionsArgs<ExtArgs>;
};
export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    livreurs?: boolean | Prisma.Commande$livreursArgs<ExtArgs>;
    regions?: boolean | Prisma.Commande$regionsArgs<ExtArgs>;
};
export type $CommandePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Commande";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
        livreurs: Prisma.$livreursPayload<ExtArgs> | null;
        regions: Prisma.$regionsPayload<ExtArgs> | null;
        paiement: Prisma.$PaiementPayload<ExtArgs> | null;
        panierProduits: Prisma.$PanierProduitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        numero: string;
        montant: number;
        statut: $Enums.StatutCommande;
        dateCommande: Date;
        dateLivraison: Date | null;
        adresseLivraison: string | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        fraisLivraison: number;
        regionLivraisonId: string | null;
        livreurId: string | null;
    }, ExtArgs["result"]["commande"]>;
    composites: {};
};
export type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommandePayload, S>;
export type CommandeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommandeCountAggregateInputType | true;
};
export interface CommandeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Commande'];
        meta: {
            name: 'Commande';
        };
    };
    findUnique<T extends CommandeFindUniqueArgs>(args: Prisma.SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommandeFindFirstArgs>(args?: Prisma.SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommandeFindManyArgs>(args?: Prisma.SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommandeCreateArgs>(args: Prisma.SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommandeCreateManyArgs>(args?: Prisma.SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommandeDeleteArgs>(args: Prisma.SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommandeUpdateArgs>(args: Prisma.SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommandeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommandeUpdateManyArgs>(args: Prisma.SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommandeUpsertArgs>(args: Prisma.SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommandeCountArgs>(args?: Prisma.Subset<T, CommandeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommandeCountAggregateOutputType> : number>;
    aggregate<T extends CommandeAggregateArgs>(args: Prisma.Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>;
    groupBy<T extends CommandeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommandeGroupByArgs['orderBy'];
    } : {
        orderBy?: CommandeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommandeFieldRefs;
}
export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    livreurs<T extends Prisma.Commande$livreursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$livreursArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    regions<T extends Prisma.Commande$regionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$regionsArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    paiement<T extends Prisma.Commande$paiementArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$paiementArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    panierProduits<T extends Prisma.Commande$panierProduitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$panierProduitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommandeFieldRefs {
    readonly id: Prisma.FieldRef<"Commande", 'String'>;
    readonly numero: Prisma.FieldRef<"Commande", 'String'>;
    readonly montant: Prisma.FieldRef<"Commande", 'Float'>;
    readonly statut: Prisma.FieldRef<"Commande", 'StatutCommande'>;
    readonly dateCommande: Prisma.FieldRef<"Commande", 'DateTime'>;
    readonly dateLivraison: Prisma.FieldRef<"Commande", 'DateTime'>;
    readonly adresseLivraison: Prisma.FieldRef<"Commande", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Commande", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Commande", 'DateTime'>;
    readonly clientId: Prisma.FieldRef<"Commande", 'String'>;
    readonly fraisLivraison: Prisma.FieldRef<"Commande", 'Float'>;
    readonly regionLivraisonId: Prisma.FieldRef<"Commande", 'String'>;
    readonly livreurId: Prisma.FieldRef<"Commande", 'String'>;
}
export type CommandeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where: Prisma.CommandeWhereUniqueInput;
};
export type CommandeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where: Prisma.CommandeWhereUniqueInput;
};
export type CommandeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where?: Prisma.CommandeWhereInput;
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    cursor?: Prisma.CommandeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
export type CommandeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where?: Prisma.CommandeWhereInput;
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    cursor?: Prisma.CommandeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
export type CommandeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where?: Prisma.CommandeWhereInput;
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    cursor?: Prisma.CommandeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
export type CommandeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommandeCreateInput, Prisma.CommandeUncheckedCreateInput>;
};
export type CommandeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommandeCreateManyInput | Prisma.CommandeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommandeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    data: Prisma.CommandeCreateManyInput | Prisma.CommandeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CommandeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CommandeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommandeUpdateInput, Prisma.CommandeUncheckedUpdateInput>;
    where: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyInput>;
    where?: Prisma.CommandeWhereInput;
    limit?: number;
};
export type CommandeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyInput>;
    where?: Prisma.CommandeWhereInput;
    limit?: number;
    include?: Prisma.CommandeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CommandeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateInput, Prisma.CommandeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommandeUpdateInput, Prisma.CommandeUncheckedUpdateInput>;
};
export type CommandeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where: Prisma.CommandeWhereUniqueInput;
};
export type CommandeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
    limit?: number;
};
export type Commande$livreursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where?: Prisma.livreursWhereInput;
};
export type Commande$regionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where?: Prisma.regionsWhereInput;
};
export type Commande$paiementArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
};
export type Commande$panierProduitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CommandeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    include?: Prisma.CommandeInclude<ExtArgs> | null;
};
//# sourceMappingURL=Commande.d.ts.map