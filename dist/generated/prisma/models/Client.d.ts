import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ClientModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientPayload>;
export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type ClientMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    adresse: string | null;
    statut: $Enums.StatutClient | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    administrateurId: string | null;
};
export type ClientMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    adresse: string | null;
    statut: $Enums.StatutClient | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    administrateurId: string | null;
};
export type ClientCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    nom: number;
    prenom: number;
    telephone: number;
    adresse: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    administrateurId: number;
    _all: number;
};
export type ClientMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    adresse?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    administrateurId?: true;
};
export type ClientMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    adresse?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    administrateurId?: true;
};
export type ClientCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    adresse?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    administrateurId?: true;
    _all?: true;
};
export type ClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientCountAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClient[P]> : Prisma.GetScalarType<T[P], AggregateClient[P]>;
};
export type ClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithAggregationInput | Prisma.ClientOrderByWithAggregationInput[];
    by: Prisma.ClientScalarFieldEnum[] | Prisma.ClientScalarFieldEnum;
    having?: Prisma.ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type ClientGroupByOutputType = {
    id: string;
    email: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string | null;
    statut: $Enums.StatutClient;
    createdAt: Date;
    updatedAt: Date;
    administrateurId: string;
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]>;
}>>;
export type ClientWhereInput = {
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    id?: Prisma.StringFilter<"Client"> | string;
    email?: Prisma.StringNullableFilter<"Client"> | string | null;
    password?: Prisma.StringFilter<"Client"> | string;
    nom?: Prisma.StringFilter<"Client"> | string;
    prenom?: Prisma.StringFilter<"Client"> | string;
    telephone?: Prisma.StringFilter<"Client"> | string;
    adresse?: Prisma.StringNullableFilter<"Client"> | string | null;
    statut?: Prisma.EnumStatutClientFilter<"Client"> | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    administrateurId?: Prisma.StringFilter<"Client"> | string;
    administrateur?: Prisma.XOR<Prisma.AdministrateurScalarRelationFilter, Prisma.AdministrateurWhereInput>;
    commandes?: Prisma.CommandeListRelationFilter;
    avis?: Prisma.AvisListRelationFilter;
    avisProduit?: Prisma.AvisProduitListRelationFilter;
};
export type ClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    administrateurId?: Prisma.SortOrder;
    administrateur?: Prisma.AdministrateurOrderByWithRelationInput;
    commandes?: Prisma.CommandeOrderByRelationAggregateInput;
    avis?: Prisma.AvisOrderByRelationAggregateInput;
    avisProduit?: Prisma.AvisProduitOrderByRelationAggregateInput;
};
export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    password?: Prisma.StringFilter<"Client"> | string;
    nom?: Prisma.StringFilter<"Client"> | string;
    prenom?: Prisma.StringFilter<"Client"> | string;
    telephone?: Prisma.StringFilter<"Client"> | string;
    adresse?: Prisma.StringNullableFilter<"Client"> | string | null;
    statut?: Prisma.EnumStatutClientFilter<"Client"> | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    administrateurId?: Prisma.StringFilter<"Client"> | string;
    administrateur?: Prisma.XOR<Prisma.AdministrateurScalarRelationFilter, Prisma.AdministrateurWhereInput>;
    commandes?: Prisma.CommandeListRelationFilter;
    avis?: Prisma.AvisListRelationFilter;
    avisProduit?: Prisma.AvisProduitListRelationFilter;
}, "id" | "email">;
export type ClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    administrateurId?: Prisma.SortOrder;
    _count?: Prisma.ClientCountOrderByAggregateInput;
    _max?: Prisma.ClientMaxOrderByAggregateInput;
    _min?: Prisma.ClientMinOrderByAggregateInput;
};
export type ClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    telephone?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    adresse?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    statut?: Prisma.EnumStatutClientWithAggregatesFilter<"Client"> | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
    administrateurId?: Prisma.StringWithAggregatesFilter<"Client"> | string;
};
export type ClientCreateInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateur: Prisma.AdministrateurCreateNestedOneWithoutClientsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    avis?: Prisma.AvisCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateurId: string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    avis?: Prisma.AvisUncheckedCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateur?: Prisma.AdministrateurUpdateOneRequiredWithoutClientsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    avis?: Prisma.AvisUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    avis?: Prisma.AvisUncheckedUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateManyInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateurId: string;
};
export type ClientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClientListRelationFilter = {
    every?: Prisma.ClientWhereInput;
    some?: Prisma.ClientWhereInput;
    none?: Prisma.ClientWhereInput;
};
export type ClientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClientScalarRelationFilter = {
    is?: Prisma.ClientWhereInput;
    isNot?: Prisma.ClientWhereInput;
};
export type ClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    administrateurId?: Prisma.SortOrder;
};
export type ClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    administrateurId?: Prisma.SortOrder;
};
export type ClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    administrateurId?: Prisma.SortOrder;
};
export type ClientCreateNestedManyWithoutAdministrateurInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAdministrateurInput, Prisma.ClientUncheckedCreateWithoutAdministrateurInput> | Prisma.ClientCreateWithoutAdministrateurInput[] | Prisma.ClientUncheckedCreateWithoutAdministrateurInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAdministrateurInput | Prisma.ClientCreateOrConnectWithoutAdministrateurInput[];
    createMany?: Prisma.ClientCreateManyAdministrateurInputEnvelope;
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
};
export type ClientUncheckedCreateNestedManyWithoutAdministrateurInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAdministrateurInput, Prisma.ClientUncheckedCreateWithoutAdministrateurInput> | Prisma.ClientCreateWithoutAdministrateurInput[] | Prisma.ClientUncheckedCreateWithoutAdministrateurInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAdministrateurInput | Prisma.ClientCreateOrConnectWithoutAdministrateurInput[];
    createMany?: Prisma.ClientCreateManyAdministrateurInputEnvelope;
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
};
export type ClientUpdateManyWithoutAdministrateurNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAdministrateurInput, Prisma.ClientUncheckedCreateWithoutAdministrateurInput> | Prisma.ClientCreateWithoutAdministrateurInput[] | Prisma.ClientUncheckedCreateWithoutAdministrateurInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAdministrateurInput | Prisma.ClientCreateOrConnectWithoutAdministrateurInput[];
    upsert?: Prisma.ClientUpsertWithWhereUniqueWithoutAdministrateurInput | Prisma.ClientUpsertWithWhereUniqueWithoutAdministrateurInput[];
    createMany?: Prisma.ClientCreateManyAdministrateurInputEnvelope;
    set?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    disconnect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    delete?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    update?: Prisma.ClientUpdateWithWhereUniqueWithoutAdministrateurInput | Prisma.ClientUpdateWithWhereUniqueWithoutAdministrateurInput[];
    updateMany?: Prisma.ClientUpdateManyWithWhereWithoutAdministrateurInput | Prisma.ClientUpdateManyWithWhereWithoutAdministrateurInput[];
    deleteMany?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
};
export type ClientUncheckedUpdateManyWithoutAdministrateurNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAdministrateurInput, Prisma.ClientUncheckedCreateWithoutAdministrateurInput> | Prisma.ClientCreateWithoutAdministrateurInput[] | Prisma.ClientUncheckedCreateWithoutAdministrateurInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAdministrateurInput | Prisma.ClientCreateOrConnectWithoutAdministrateurInput[];
    upsert?: Prisma.ClientUpsertWithWhereUniqueWithoutAdministrateurInput | Prisma.ClientUpsertWithWhereUniqueWithoutAdministrateurInput[];
    createMany?: Prisma.ClientCreateManyAdministrateurInputEnvelope;
    set?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    disconnect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    delete?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    update?: Prisma.ClientUpdateWithWhereUniqueWithoutAdministrateurInput | Prisma.ClientUpdateWithWhereUniqueWithoutAdministrateurInput[];
    updateMany?: Prisma.ClientUpdateManyWithWhereWithoutAdministrateurInput | Prisma.ClientUpdateManyWithWhereWithoutAdministrateurInput[];
    deleteMany?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
};
export type ClientCreateNestedOneWithoutAvisInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAvisInput, Prisma.ClientUncheckedCreateWithoutAvisInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAvisInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutAvisNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAvisInput, Prisma.ClientUncheckedCreateWithoutAvisInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAvisInput;
    upsert?: Prisma.ClientUpsertWithoutAvisInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutAvisInput, Prisma.ClientUpdateWithoutAvisInput>, Prisma.ClientUncheckedUpdateWithoutAvisInput>;
};
export type ClientCreateNestedOneWithoutAvisProduitInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAvisProduitInput, Prisma.ClientUncheckedCreateWithoutAvisProduitInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAvisProduitInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutAvisProduitNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAvisProduitInput, Prisma.ClientUncheckedCreateWithoutAvisProduitInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAvisProduitInput;
    upsert?: Prisma.ClientUpsertWithoutAvisProduitInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutAvisProduitInput, Prisma.ClientUpdateWithoutAvisProduitInput>, Prisma.ClientUncheckedUpdateWithoutAvisProduitInput>;
};
export type EnumStatutClientFieldUpdateOperationsInput = {
    set?: $Enums.StatutClient;
};
export type ClientCreateNestedOneWithoutCommandesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommandesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommandesInput;
    upsert?: Prisma.ClientUpsertWithoutCommandesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutCommandesInput, Prisma.ClientUpdateWithoutCommandesInput>, Prisma.ClientUncheckedUpdateWithoutCommandesInput>;
};
export type ClientCreateWithoutAdministrateurInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    avis?: Prisma.AvisCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutAdministrateurInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    avis?: Prisma.AvisUncheckedCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutAdministrateurInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAdministrateurInput, Prisma.ClientUncheckedCreateWithoutAdministrateurInput>;
};
export type ClientCreateManyAdministrateurInputEnvelope = {
    data: Prisma.ClientCreateManyAdministrateurInput | Prisma.ClientCreateManyAdministrateurInput[];
    skipDuplicates?: boolean;
};
export type ClientUpsertWithWhereUniqueWithoutAdministrateurInput = {
    where: Prisma.ClientWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientUpdateWithoutAdministrateurInput, Prisma.ClientUncheckedUpdateWithoutAdministrateurInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAdministrateurInput, Prisma.ClientUncheckedCreateWithoutAdministrateurInput>;
};
export type ClientUpdateWithWhereUniqueWithoutAdministrateurInput = {
    where: Prisma.ClientWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutAdministrateurInput, Prisma.ClientUncheckedUpdateWithoutAdministrateurInput>;
};
export type ClientUpdateManyWithWhereWithoutAdministrateurInput = {
    where: Prisma.ClientScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyWithoutAdministrateurInput>;
};
export type ClientScalarWhereInput = {
    AND?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
    OR?: Prisma.ClientScalarWhereInput[];
    NOT?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
    id?: Prisma.StringFilter<"Client"> | string;
    email?: Prisma.StringNullableFilter<"Client"> | string | null;
    password?: Prisma.StringFilter<"Client"> | string;
    nom?: Prisma.StringFilter<"Client"> | string;
    prenom?: Prisma.StringFilter<"Client"> | string;
    telephone?: Prisma.StringFilter<"Client"> | string;
    adresse?: Prisma.StringNullableFilter<"Client"> | string | null;
    statut?: Prisma.EnumStatutClientFilter<"Client"> | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    administrateurId?: Prisma.StringFilter<"Client"> | string;
};
export type ClientCreateWithoutAvisInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateur: Prisma.AdministrateurCreateNestedOneWithoutClientsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutAvisInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateurId: string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutAvisInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAvisInput, Prisma.ClientUncheckedCreateWithoutAvisInput>;
};
export type ClientUpsertWithoutAvisInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutAvisInput, Prisma.ClientUncheckedUpdateWithoutAvisInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAvisInput, Prisma.ClientUncheckedCreateWithoutAvisInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutAvisInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutAvisInput, Prisma.ClientUncheckedUpdateWithoutAvisInput>;
};
export type ClientUpdateWithoutAvisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateur?: Prisma.AdministrateurUpdateOneRequiredWithoutClientsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutAvisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutAvisProduitInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateur: Prisma.AdministrateurCreateNestedOneWithoutClientsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    avis?: Prisma.AvisCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutAvisProduitInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateurId: string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    avis?: Prisma.AvisUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutAvisProduitInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAvisProduitInput, Prisma.ClientUncheckedCreateWithoutAvisProduitInput>;
};
export type ClientUpsertWithoutAvisProduitInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutAvisProduitInput, Prisma.ClientUncheckedUpdateWithoutAvisProduitInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAvisProduitInput, Prisma.ClientUncheckedCreateWithoutAvisProduitInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutAvisProduitInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutAvisProduitInput, Prisma.ClientUncheckedUpdateWithoutAvisProduitInput>;
};
export type ClientUpdateWithoutAvisProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateur?: Prisma.AdministrateurUpdateOneRequiredWithoutClientsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    avis?: Prisma.AvisUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutAvisProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    avis?: Prisma.AvisUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutCommandesInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateur: Prisma.AdministrateurCreateNestedOneWithoutClientsInput;
    avis?: Prisma.AvisCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutCommandesInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    administrateurId: string;
    avis?: Prisma.AvisUncheckedCreateNestedManyWithoutClientInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutCommandesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
};
export type ClientUpsertWithoutCommandesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutCommandesInput, Prisma.ClientUncheckedUpdateWithoutCommandesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutCommandesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutCommandesInput, Prisma.ClientUncheckedUpdateWithoutCommandesInput>;
};
export type ClientUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateur?: Prisma.AdministrateurUpdateOneRequiredWithoutClientsNestedInput;
    avis?: Prisma.AvisUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    administrateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    avis?: Prisma.AvisUncheckedUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateManyAdministrateurInput = {
    id?: string;
    email?: string | null;
    password: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse?: string | null;
    statut?: $Enums.StatutClient;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientUpdateWithoutAdministrateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    avis?: Prisma.AvisUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutAdministrateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    avis?: Prisma.AvisUncheckedUpdateManyWithoutClientNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateManyWithoutAdministrateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCountOutputType = {
    commandes: number;
    avis: number;
    avisProduit: number;
};
export type ClientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commandes?: boolean | ClientCountOutputTypeCountCommandesArgs;
    avis?: boolean | ClientCountOutputTypeCountAvisArgs;
    avisProduit?: boolean | ClientCountOutputTypeCountAvisProduitArgs;
};
export type ClientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientCountOutputTypeCountCommandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
};
export type ClientCountOutputTypeCountAvisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisWhereInput;
};
export type ClientCountOutputTypeCountAvisProduitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisProduitWhereInput;
};
export type ClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    adresse?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    administrateurId?: boolean;
    administrateur?: boolean | Prisma.AdministrateurDefaultArgs<ExtArgs>;
    commandes?: boolean | Prisma.Client$commandesArgs<ExtArgs>;
    avis?: boolean | Prisma.Client$avisArgs<ExtArgs>;
    avisProduit?: boolean | Prisma.Client$avisProduitArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    adresse?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    administrateurId?: boolean;
    administrateur?: boolean | Prisma.AdministrateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    adresse?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    administrateurId?: boolean;
    administrateur?: boolean | Prisma.AdministrateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    adresse?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    administrateurId?: boolean;
};
export type ClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "nom" | "prenom" | "telephone" | "adresse" | "statut" | "createdAt" | "updatedAt" | "administrateurId", ExtArgs["result"]["client"]>;
export type ClientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    administrateur?: boolean | Prisma.AdministrateurDefaultArgs<ExtArgs>;
    commandes?: boolean | Prisma.Client$commandesArgs<ExtArgs>;
    avis?: boolean | Prisma.Client$avisArgs<ExtArgs>;
    avisProduit?: boolean | Prisma.Client$avisProduitArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    administrateur?: boolean | Prisma.AdministrateurDefaultArgs<ExtArgs>;
};
export type ClientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    administrateur?: boolean | Prisma.AdministrateurDefaultArgs<ExtArgs>;
};
export type $ClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Client";
    objects: {
        administrateur: Prisma.$AdministrateurPayload<ExtArgs>;
        commandes: Prisma.$CommandePayload<ExtArgs>[];
        avis: Prisma.$AvisPayload<ExtArgs>[];
        avisProduit: Prisma.$AvisProduitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        password: string;
        nom: string;
        prenom: string;
        telephone: string;
        adresse: string | null;
        statut: $Enums.StatutClient;
        createdAt: Date;
        updatedAt: Date;
        administrateurId: string;
    }, ExtArgs["result"]["client"]>;
    composites: {};
};
export type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientPayload, S>;
export type ClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
};
export interface ClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Client'];
        meta: {
            name: 'Client';
        };
    };
    findUnique<T extends ClientFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientFindManyArgs>(args?: Prisma.SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientCreateArgs>(args: Prisma.SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientDeleteArgs>(args: Prisma.SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientUpdateArgs>(args: Prisma.SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientUpsertArgs>(args: Prisma.SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientCountArgs>(args?: Prisma.Subset<T, ClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientCountAggregateOutputType> : number>;
    aggregate<T extends ClientAggregateArgs>(args: Prisma.Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>;
    groupBy<T extends ClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientFieldRefs;
}
export interface Prisma__ClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    administrateur<T extends Prisma.AdministrateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdministrateurDefaultArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    commandes<T extends Prisma.Client$commandesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    avis<T extends Prisma.Client$avisArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$avisArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    avisProduit<T extends Prisma.Client$avisProduitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$avisProduitArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientFieldRefs {
    readonly id: Prisma.FieldRef<"Client", 'String'>;
    readonly email: Prisma.FieldRef<"Client", 'String'>;
    readonly password: Prisma.FieldRef<"Client", 'String'>;
    readonly nom: Prisma.FieldRef<"Client", 'String'>;
    readonly prenom: Prisma.FieldRef<"Client", 'String'>;
    readonly telephone: Prisma.FieldRef<"Client", 'String'>;
    readonly adresse: Prisma.FieldRef<"Client", 'String'>;
    readonly statut: Prisma.FieldRef<"Client", 'StatutClient'>;
    readonly createdAt: Prisma.FieldRef<"Client", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Client", 'DateTime'>;
    readonly administrateurId: Prisma.FieldRef<"Client", 'String'>;
}
export type ClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
};
export type ClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type ClientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
    include?: Prisma.ClientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
};
export type ClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type Client$commandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Client$avisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    where?: Prisma.AvisWhereInput;
    orderBy?: Prisma.AvisOrderByWithRelationInput | Prisma.AvisOrderByWithRelationInput[];
    cursor?: Prisma.AvisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvisScalarFieldEnum | Prisma.AvisScalarFieldEnum[];
};
export type Client$avisProduitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    where?: Prisma.AvisProduitWhereInput;
    orderBy?: Prisma.AvisProduitOrderByWithRelationInput | Prisma.AvisProduitOrderByWithRelationInput[];
    cursor?: Prisma.AvisProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvisProduitScalarFieldEnum | Prisma.AvisProduitScalarFieldEnum[];
};
export type ClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
};
//# sourceMappingURL=Client.d.ts.map