import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type livreursModel = runtime.Types.Result.DefaultSelection<Prisma.$livreursPayload>;
export type AggregateLivreurs = {
    _count: LivreursCountAggregateOutputType | null;
    _min: LivreursMinAggregateOutputType | null;
    _max: LivreursMaxAggregateOutputType | null;
};
export type LivreursMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    prenom: string | null;
    email: string | null;
    telephone: string | null;
    password: string | null;
    statut: $Enums.StatutLivreur | null;
    regionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LivreursMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    prenom: string | null;
    email: string | null;
    telephone: string | null;
    password: string | null;
    statut: $Enums.StatutLivreur | null;
    regionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LivreursCountAggregateOutputType = {
    id: number;
    nom: number;
    prenom: number;
    email: number;
    telephone: number;
    password: number;
    statut: number;
    regionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LivreursMinAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    email?: true;
    telephone?: true;
    password?: true;
    statut?: true;
    regionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LivreursMaxAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    email?: true;
    telephone?: true;
    password?: true;
    statut?: true;
    regionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LivreursCountAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    email?: true;
    telephone?: true;
    password?: true;
    statut?: true;
    regionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LivreursAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.livreursWhereInput;
    orderBy?: Prisma.livreursOrderByWithRelationInput | Prisma.livreursOrderByWithRelationInput[];
    cursor?: Prisma.livreursWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LivreursCountAggregateInputType;
    _min?: LivreursMinAggregateInputType;
    _max?: LivreursMaxAggregateInputType;
};
export type GetLivreursAggregateType<T extends LivreursAggregateArgs> = {
    [P in keyof T & keyof AggregateLivreurs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLivreurs[P]> : Prisma.GetScalarType<T[P], AggregateLivreurs[P]>;
};
export type livreursGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.livreursWhereInput;
    orderBy?: Prisma.livreursOrderByWithAggregationInput | Prisma.livreursOrderByWithAggregationInput[];
    by: Prisma.LivreursScalarFieldEnum[] | Prisma.LivreursScalarFieldEnum;
    having?: Prisma.livreursScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LivreursCountAggregateInputType | true;
    _min?: LivreursMinAggregateInputType;
    _max?: LivreursMaxAggregateInputType;
};
export type LivreursGroupByOutputType = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut: $Enums.StatutLivreur;
    regionId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LivreursCountAggregateOutputType | null;
    _min: LivreursMinAggregateOutputType | null;
    _max: LivreursMaxAggregateOutputType | null;
};
export type GetLivreursGroupByPayload<T extends livreursGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LivreursGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LivreursGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LivreursGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LivreursGroupByOutputType[P]>;
}>>;
export type livreursWhereInput = {
    AND?: Prisma.livreursWhereInput | Prisma.livreursWhereInput[];
    OR?: Prisma.livreursWhereInput[];
    NOT?: Prisma.livreursWhereInput | Prisma.livreursWhereInput[];
    id?: Prisma.StringFilter<"livreurs"> | string;
    nom?: Prisma.StringFilter<"livreurs"> | string;
    prenom?: Prisma.StringFilter<"livreurs"> | string;
    email?: Prisma.StringFilter<"livreurs"> | string;
    telephone?: Prisma.StringFilter<"livreurs"> | string;
    password?: Prisma.StringFilter<"livreurs"> | string;
    statut?: Prisma.EnumStatutLivreurFilter<"livreurs"> | $Enums.StatutLivreur;
    regionId?: Prisma.StringNullableFilter<"livreurs"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"livreurs"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"livreurs"> | Date | string;
    commandes?: Prisma.CommandeListRelationFilter;
    regions?: Prisma.XOR<Prisma.RegionsNullableScalarRelationFilter, Prisma.regionsWhereInput> | null;
};
export type livreursOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    regionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandes?: Prisma.CommandeOrderByRelationAggregateInput;
    regions?: Prisma.regionsOrderByWithRelationInput;
};
export type livreursWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.livreursWhereInput | Prisma.livreursWhereInput[];
    OR?: Prisma.livreursWhereInput[];
    NOT?: Prisma.livreursWhereInput | Prisma.livreursWhereInput[];
    nom?: Prisma.StringFilter<"livreurs"> | string;
    prenom?: Prisma.StringFilter<"livreurs"> | string;
    telephone?: Prisma.StringFilter<"livreurs"> | string;
    password?: Prisma.StringFilter<"livreurs"> | string;
    statut?: Prisma.EnumStatutLivreurFilter<"livreurs"> | $Enums.StatutLivreur;
    regionId?: Prisma.StringNullableFilter<"livreurs"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"livreurs"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"livreurs"> | Date | string;
    commandes?: Prisma.CommandeListRelationFilter;
    regions?: Prisma.XOR<Prisma.RegionsNullableScalarRelationFilter, Prisma.regionsWhereInput> | null;
}, "id" | "email">;
export type livreursOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    regionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.livreursCountOrderByAggregateInput;
    _max?: Prisma.livreursMaxOrderByAggregateInput;
    _min?: Prisma.livreursMinOrderByAggregateInput;
};
export type livreursScalarWhereWithAggregatesInput = {
    AND?: Prisma.livreursScalarWhereWithAggregatesInput | Prisma.livreursScalarWhereWithAggregatesInput[];
    OR?: Prisma.livreursScalarWhereWithAggregatesInput[];
    NOT?: Prisma.livreursScalarWhereWithAggregatesInput | Prisma.livreursScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"livreurs"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"livreurs"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"livreurs"> | string;
    email?: Prisma.StringWithAggregatesFilter<"livreurs"> | string;
    telephone?: Prisma.StringWithAggregatesFilter<"livreurs"> | string;
    password?: Prisma.StringWithAggregatesFilter<"livreurs"> | string;
    statut?: Prisma.EnumStatutLivreurWithAggregatesFilter<"livreurs"> | $Enums.StatutLivreur;
    regionId?: Prisma.StringNullableWithAggregatesFilter<"livreurs"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"livreurs"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"livreurs"> | Date | string;
};
export type livreursCreateInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandes?: Prisma.CommandeCreateNestedManyWithoutLivreursInput;
    regions?: Prisma.regionsCreateNestedOneWithoutLivreursInput;
};
export type livreursUncheckedCreateInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    regionId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutLivreursInput;
};
export type livreursUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUpdateManyWithoutLivreursNestedInput;
    regions?: Prisma.regionsUpdateOneWithoutLivreursNestedInput;
};
export type livreursUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutLivreursNestedInput;
};
export type livreursCreateManyInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    regionId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type livreursUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type livreursUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LivreursNullableScalarRelationFilter = {
    is?: Prisma.livreursWhereInput | null;
    isNot?: Prisma.livreursWhereInput | null;
};
export type livreursCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type livreursMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type livreursMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LivreursListRelationFilter = {
    every?: Prisma.livreursWhereInput;
    some?: Prisma.livreursWhereInput;
    none?: Prisma.livreursWhereInput;
};
export type livreursOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type livreursCreateNestedOneWithoutCommandesInput = {
    create?: Prisma.XOR<Prisma.livreursCreateWithoutCommandesInput, Prisma.livreursUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.livreursCreateOrConnectWithoutCommandesInput;
    connect?: Prisma.livreursWhereUniqueInput;
};
export type livreursUpdateOneWithoutCommandesNestedInput = {
    create?: Prisma.XOR<Prisma.livreursCreateWithoutCommandesInput, Prisma.livreursUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.livreursCreateOrConnectWithoutCommandesInput;
    upsert?: Prisma.livreursUpsertWithoutCommandesInput;
    disconnect?: Prisma.livreursWhereInput | boolean;
    delete?: Prisma.livreursWhereInput | boolean;
    connect?: Prisma.livreursWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.livreursUpdateToOneWithWhereWithoutCommandesInput, Prisma.livreursUpdateWithoutCommandesInput>, Prisma.livreursUncheckedUpdateWithoutCommandesInput>;
};
export type EnumStatutLivreurFieldUpdateOperationsInput = {
    set?: $Enums.StatutLivreur;
};
export type livreursCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.livreursCreateWithoutRegionsInput, Prisma.livreursUncheckedCreateWithoutRegionsInput> | Prisma.livreursCreateWithoutRegionsInput[] | Prisma.livreursUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.livreursCreateOrConnectWithoutRegionsInput | Prisma.livreursCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.livreursCreateManyRegionsInputEnvelope;
    connect?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
};
export type livreursUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.livreursCreateWithoutRegionsInput, Prisma.livreursUncheckedCreateWithoutRegionsInput> | Prisma.livreursCreateWithoutRegionsInput[] | Prisma.livreursUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.livreursCreateOrConnectWithoutRegionsInput | Prisma.livreursCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.livreursCreateManyRegionsInputEnvelope;
    connect?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
};
export type livreursUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.livreursCreateWithoutRegionsInput, Prisma.livreursUncheckedCreateWithoutRegionsInput> | Prisma.livreursCreateWithoutRegionsInput[] | Prisma.livreursUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.livreursCreateOrConnectWithoutRegionsInput | Prisma.livreursCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.livreursUpsertWithWhereUniqueWithoutRegionsInput | Prisma.livreursUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.livreursCreateManyRegionsInputEnvelope;
    set?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    disconnect?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    delete?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    connect?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    update?: Prisma.livreursUpdateWithWhereUniqueWithoutRegionsInput | Prisma.livreursUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.livreursUpdateManyWithWhereWithoutRegionsInput | Prisma.livreursUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.livreursScalarWhereInput | Prisma.livreursScalarWhereInput[];
};
export type livreursUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.livreursCreateWithoutRegionsInput, Prisma.livreursUncheckedCreateWithoutRegionsInput> | Prisma.livreursCreateWithoutRegionsInput[] | Prisma.livreursUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.livreursCreateOrConnectWithoutRegionsInput | Prisma.livreursCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.livreursUpsertWithWhereUniqueWithoutRegionsInput | Prisma.livreursUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.livreursCreateManyRegionsInputEnvelope;
    set?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    disconnect?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    delete?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    connect?: Prisma.livreursWhereUniqueInput | Prisma.livreursWhereUniqueInput[];
    update?: Prisma.livreursUpdateWithWhereUniqueWithoutRegionsInput | Prisma.livreursUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.livreursUpdateManyWithWhereWithoutRegionsInput | Prisma.livreursUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.livreursScalarWhereInput | Prisma.livreursScalarWhereInput[];
};
export type livreursCreateWithoutCommandesInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    createdAt?: Date | string;
    updatedAt: Date | string;
    regions?: Prisma.regionsCreateNestedOneWithoutLivreursInput;
};
export type livreursUncheckedCreateWithoutCommandesInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    regionId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type livreursCreateOrConnectWithoutCommandesInput = {
    where: Prisma.livreursWhereUniqueInput;
    create: Prisma.XOR<Prisma.livreursCreateWithoutCommandesInput, Prisma.livreursUncheckedCreateWithoutCommandesInput>;
};
export type livreursUpsertWithoutCommandesInput = {
    update: Prisma.XOR<Prisma.livreursUpdateWithoutCommandesInput, Prisma.livreursUncheckedUpdateWithoutCommandesInput>;
    create: Prisma.XOR<Prisma.livreursCreateWithoutCommandesInput, Prisma.livreursUncheckedCreateWithoutCommandesInput>;
    where?: Prisma.livreursWhereInput;
};
export type livreursUpdateToOneWithWhereWithoutCommandesInput = {
    where?: Prisma.livreursWhereInput;
    data: Prisma.XOR<Prisma.livreursUpdateWithoutCommandesInput, Prisma.livreursUncheckedUpdateWithoutCommandesInput>;
};
export type livreursUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regions?: Prisma.regionsUpdateOneWithoutLivreursNestedInput;
};
export type livreursUncheckedUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type livreursCreateWithoutRegionsInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandes?: Prisma.CommandeCreateNestedManyWithoutLivreursInput;
};
export type livreursUncheckedCreateWithoutRegionsInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutLivreursInput;
};
export type livreursCreateOrConnectWithoutRegionsInput = {
    where: Prisma.livreursWhereUniqueInput;
    create: Prisma.XOR<Prisma.livreursCreateWithoutRegionsInput, Prisma.livreursUncheckedCreateWithoutRegionsInput>;
};
export type livreursCreateManyRegionsInputEnvelope = {
    data: Prisma.livreursCreateManyRegionsInput | Prisma.livreursCreateManyRegionsInput[];
    skipDuplicates?: boolean;
};
export type livreursUpsertWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.livreursWhereUniqueInput;
    update: Prisma.XOR<Prisma.livreursUpdateWithoutRegionsInput, Prisma.livreursUncheckedUpdateWithoutRegionsInput>;
    create: Prisma.XOR<Prisma.livreursCreateWithoutRegionsInput, Prisma.livreursUncheckedCreateWithoutRegionsInput>;
};
export type livreursUpdateWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.livreursWhereUniqueInput;
    data: Prisma.XOR<Prisma.livreursUpdateWithoutRegionsInput, Prisma.livreursUncheckedUpdateWithoutRegionsInput>;
};
export type livreursUpdateManyWithWhereWithoutRegionsInput = {
    where: Prisma.livreursScalarWhereInput;
    data: Prisma.XOR<Prisma.livreursUpdateManyMutationInput, Prisma.livreursUncheckedUpdateManyWithoutRegionsInput>;
};
export type livreursScalarWhereInput = {
    AND?: Prisma.livreursScalarWhereInput | Prisma.livreursScalarWhereInput[];
    OR?: Prisma.livreursScalarWhereInput[];
    NOT?: Prisma.livreursScalarWhereInput | Prisma.livreursScalarWhereInput[];
    id?: Prisma.StringFilter<"livreurs"> | string;
    nom?: Prisma.StringFilter<"livreurs"> | string;
    prenom?: Prisma.StringFilter<"livreurs"> | string;
    email?: Prisma.StringFilter<"livreurs"> | string;
    telephone?: Prisma.StringFilter<"livreurs"> | string;
    password?: Prisma.StringFilter<"livreurs"> | string;
    statut?: Prisma.EnumStatutLivreurFilter<"livreurs"> | $Enums.StatutLivreur;
    regionId?: Prisma.StringNullableFilter<"livreurs"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"livreurs"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"livreurs"> | Date | string;
};
export type livreursCreateManyRegionsInput = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    statut?: $Enums.StatutLivreur;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type livreursUpdateWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUpdateManyWithoutLivreursNestedInput;
};
export type livreursUncheckedUpdateWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutLivreursNestedInput;
};
export type livreursUncheckedUpdateManyWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LivreursCountOutputType = {
    commandes: number;
};
export type LivreursCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commandes?: boolean | LivreursCountOutputTypeCountCommandesArgs;
};
export type LivreursCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LivreursCountOutputTypeSelect<ExtArgs> | null;
};
export type LivreursCountOutputTypeCountCommandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
};
export type livreursSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    telephone?: boolean;
    password?: boolean;
    statut?: boolean;
    regionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandes?: boolean | Prisma.livreurs$commandesArgs<ExtArgs>;
    regions?: boolean | Prisma.livreurs$regionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LivreursCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["livreurs"]>;
export type livreursSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    telephone?: boolean;
    password?: boolean;
    statut?: boolean;
    regionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    regions?: boolean | Prisma.livreurs$regionsArgs<ExtArgs>;
}, ExtArgs["result"]["livreurs"]>;
export type livreursSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    telephone?: boolean;
    password?: boolean;
    statut?: boolean;
    regionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    regions?: boolean | Prisma.livreurs$regionsArgs<ExtArgs>;
}, ExtArgs["result"]["livreurs"]>;
export type livreursSelectScalar = {
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    telephone?: boolean;
    password?: boolean;
    statut?: boolean;
    regionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type livreursOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "password" | "statut" | "regionId" | "createdAt" | "updatedAt", ExtArgs["result"]["livreurs"]>;
export type livreursInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commandes?: boolean | Prisma.livreurs$commandesArgs<ExtArgs>;
    regions?: boolean | Prisma.livreurs$regionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LivreursCountOutputTypeDefaultArgs<ExtArgs>;
};
export type livreursIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.livreurs$regionsArgs<ExtArgs>;
};
export type livreursIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.livreurs$regionsArgs<ExtArgs>;
};
export type $livreursPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "livreurs";
    objects: {
        commandes: Prisma.$CommandePayload<ExtArgs>[];
        regions: Prisma.$regionsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        prenom: string;
        email: string;
        telephone: string;
        password: string;
        statut: $Enums.StatutLivreur;
        regionId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["livreurs"]>;
    composites: {};
};
export type livreursGetPayload<S extends boolean | null | undefined | livreursDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$livreursPayload, S>;
export type livreursCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<livreursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LivreursCountAggregateInputType | true;
};
export interface livreursDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['livreurs'];
        meta: {
            name: 'livreurs';
        };
    };
    findUnique<T extends livreursFindUniqueArgs>(args: Prisma.SelectSubset<T, livreursFindUniqueArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends livreursFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, livreursFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends livreursFindFirstArgs>(args?: Prisma.SelectSubset<T, livreursFindFirstArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends livreursFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, livreursFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends livreursFindManyArgs>(args?: Prisma.SelectSubset<T, livreursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends livreursCreateArgs>(args: Prisma.SelectSubset<T, livreursCreateArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends livreursCreateManyArgs>(args?: Prisma.SelectSubset<T, livreursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends livreursCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, livreursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends livreursDeleteArgs>(args: Prisma.SelectSubset<T, livreursDeleteArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends livreursUpdateArgs>(args: Prisma.SelectSubset<T, livreursUpdateArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends livreursDeleteManyArgs>(args?: Prisma.SelectSubset<T, livreursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends livreursUpdateManyArgs>(args: Prisma.SelectSubset<T, livreursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends livreursUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, livreursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends livreursUpsertArgs>(args: Prisma.SelectSubset<T, livreursUpsertArgs<ExtArgs>>): Prisma.Prisma__livreursClient<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends livreursCountArgs>(args?: Prisma.Subset<T, livreursCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LivreursCountAggregateOutputType> : number>;
    aggregate<T extends LivreursAggregateArgs>(args: Prisma.Subset<T, LivreursAggregateArgs>): Prisma.PrismaPromise<GetLivreursAggregateType<T>>;
    groupBy<T extends livreursGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: livreursGroupByArgs['orderBy'];
    } : {
        orderBy?: livreursGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, livreursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivreursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: livreursFieldRefs;
}
export interface Prisma__livreursClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commandes<T extends Prisma.livreurs$commandesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.livreurs$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    regions<T extends Prisma.livreurs$regionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.livreurs$regionsArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface livreursFieldRefs {
    readonly id: Prisma.FieldRef<"livreurs", 'String'>;
    readonly nom: Prisma.FieldRef<"livreurs", 'String'>;
    readonly prenom: Prisma.FieldRef<"livreurs", 'String'>;
    readonly email: Prisma.FieldRef<"livreurs", 'String'>;
    readonly telephone: Prisma.FieldRef<"livreurs", 'String'>;
    readonly password: Prisma.FieldRef<"livreurs", 'String'>;
    readonly statut: Prisma.FieldRef<"livreurs", 'StatutLivreur'>;
    readonly regionId: Prisma.FieldRef<"livreurs", 'String'>;
    readonly createdAt: Prisma.FieldRef<"livreurs", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"livreurs", 'DateTime'>;
}
export type livreursFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where: Prisma.livreursWhereUniqueInput;
};
export type livreursFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where: Prisma.livreursWhereUniqueInput;
};
export type livreursFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where?: Prisma.livreursWhereInput;
    orderBy?: Prisma.livreursOrderByWithRelationInput | Prisma.livreursOrderByWithRelationInput[];
    cursor?: Prisma.livreursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LivreursScalarFieldEnum | Prisma.LivreursScalarFieldEnum[];
};
export type livreursFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where?: Prisma.livreursWhereInput;
    orderBy?: Prisma.livreursOrderByWithRelationInput | Prisma.livreursOrderByWithRelationInput[];
    cursor?: Prisma.livreursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LivreursScalarFieldEnum | Prisma.LivreursScalarFieldEnum[];
};
export type livreursFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where?: Prisma.livreursWhereInput;
    orderBy?: Prisma.livreursOrderByWithRelationInput | Prisma.livreursOrderByWithRelationInput[];
    cursor?: Prisma.livreursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LivreursScalarFieldEnum | Prisma.LivreursScalarFieldEnum[];
};
export type livreursCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.livreursCreateInput, Prisma.livreursUncheckedCreateInput>;
};
export type livreursCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.livreursCreateManyInput | Prisma.livreursCreateManyInput[];
    skipDuplicates?: boolean;
};
export type livreursCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    data: Prisma.livreursCreateManyInput | Prisma.livreursCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.livreursIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type livreursUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.livreursUpdateInput, Prisma.livreursUncheckedUpdateInput>;
    where: Prisma.livreursWhereUniqueInput;
};
export type livreursUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.livreursUpdateManyMutationInput, Prisma.livreursUncheckedUpdateManyInput>;
    where?: Prisma.livreursWhereInput;
    limit?: number;
};
export type livreursUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.livreursUpdateManyMutationInput, Prisma.livreursUncheckedUpdateManyInput>;
    where?: Prisma.livreursWhereInput;
    limit?: number;
    include?: Prisma.livreursIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type livreursUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where: Prisma.livreursWhereUniqueInput;
    create: Prisma.XOR<Prisma.livreursCreateInput, Prisma.livreursUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.livreursUpdateInput, Prisma.livreursUncheckedUpdateInput>;
};
export type livreursDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
    where: Prisma.livreursWhereUniqueInput;
};
export type livreursDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.livreursWhereInput;
    limit?: number;
};
export type livreurs$commandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type livreurs$regionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where?: Prisma.regionsWhereInput;
};
export type livreursDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.livreursSelect<ExtArgs> | null;
    omit?: Prisma.livreursOmit<ExtArgs> | null;
    include?: Prisma.livreursInclude<ExtArgs> | null;
};
//# sourceMappingURL=livreurs.d.ts.map