import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type regionsModel = runtime.Types.Result.DefaultSelection<Prisma.$regionsPayload>;
export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null;
    _avg: RegionsAvgAggregateOutputType | null;
    _sum: RegionsSumAggregateOutputType | null;
    _min: RegionsMinAggregateOutputType | null;
    _max: RegionsMaxAggregateOutputType | null;
};
export type RegionsAvgAggregateOutputType = {
    fraisLivraisonInterne: number | null;
    fraisLivraisonExterne: number | null;
};
export type RegionsSumAggregateOutputType = {
    fraisLivraisonInterne: number | null;
    fraisLivraisonExterne: number | null;
};
export type RegionsMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    description: string | null;
    fraisLivraisonInterne: number | null;
    fraisLivraisonExterne: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RegionsMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    description: string | null;
    fraisLivraisonInterne: number | null;
    fraisLivraisonExterne: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RegionsCountAggregateOutputType = {
    id: number;
    nom: number;
    description: number;
    fraisLivraisonInterne: number;
    fraisLivraisonExterne: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RegionsAvgAggregateInputType = {
    fraisLivraisonInterne?: true;
    fraisLivraisonExterne?: true;
};
export type RegionsSumAggregateInputType = {
    fraisLivraisonInterne?: true;
    fraisLivraisonExterne?: true;
};
export type RegionsMinAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    fraisLivraisonInterne?: true;
    fraisLivraisonExterne?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RegionsMaxAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    fraisLivraisonInterne?: true;
    fraisLivraisonExterne?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RegionsCountAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    fraisLivraisonInterne?: true;
    fraisLivraisonExterne?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RegionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithRelationInput | Prisma.regionsOrderByWithRelationInput[];
    cursor?: Prisma.regionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegionsCountAggregateInputType;
    _avg?: RegionsAvgAggregateInputType;
    _sum?: RegionsSumAggregateInputType;
    _min?: RegionsMinAggregateInputType;
    _max?: RegionsMaxAggregateInputType;
};
export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
    [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegions[P]> : Prisma.GetScalarType<T[P], AggregateRegions[P]>;
};
export type regionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithAggregationInput | Prisma.regionsOrderByWithAggregationInput[];
    by: Prisma.RegionsScalarFieldEnum[] | Prisma.RegionsScalarFieldEnum;
    having?: Prisma.regionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegionsCountAggregateInputType | true;
    _avg?: RegionsAvgAggregateInputType;
    _sum?: RegionsSumAggregateInputType;
    _min?: RegionsMinAggregateInputType;
    _max?: RegionsMaxAggregateInputType;
};
export type RegionsGroupByOutputType = {
    id: string;
    nom: string;
    description: string | null;
    fraisLivraisonInterne: number;
    fraisLivraisonExterne: number;
    createdAt: Date;
    updatedAt: Date;
    _count: RegionsCountAggregateOutputType | null;
    _avg: RegionsAvgAggregateOutputType | null;
    _sum: RegionsSumAggregateOutputType | null;
    _min: RegionsMinAggregateOutputType | null;
    _max: RegionsMaxAggregateOutputType | null;
};
export type GetRegionsGroupByPayload<T extends regionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegionsGroupByOutputType[P]>;
}>>;
export type regionsWhereInput = {
    AND?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    OR?: Prisma.regionsWhereInput[];
    NOT?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    id?: Prisma.StringFilter<"regions"> | string;
    nom?: Prisma.StringFilter<"regions"> | string;
    description?: Prisma.StringNullableFilter<"regions"> | string | null;
    fraisLivraisonInterne?: Prisma.FloatFilter<"regions"> | number;
    fraisLivraisonExterne?: Prisma.FloatFilter<"regions"> | number;
    createdAt?: Prisma.DateTimeFilter<"regions"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"regions"> | Date | string;
    adresses?: Prisma.AdressesListRelationFilter;
    commandes?: Prisma.CommandeListRelationFilter;
    gies?: Prisma.GIEListRelationFilter;
    livreurs?: Prisma.LivreursListRelationFilter;
};
export type regionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    adresses?: Prisma.adressesOrderByRelationAggregateInput;
    commandes?: Prisma.CommandeOrderByRelationAggregateInput;
    gies?: Prisma.GIEOrderByRelationAggregateInput;
    livreurs?: Prisma.livreursOrderByRelationAggregateInput;
};
export type regionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    AND?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    OR?: Prisma.regionsWhereInput[];
    NOT?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    description?: Prisma.StringNullableFilter<"regions"> | string | null;
    fraisLivraisonInterne?: Prisma.FloatFilter<"regions"> | number;
    fraisLivraisonExterne?: Prisma.FloatFilter<"regions"> | number;
    createdAt?: Prisma.DateTimeFilter<"regions"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"regions"> | Date | string;
    adresses?: Prisma.AdressesListRelationFilter;
    commandes?: Prisma.CommandeListRelationFilter;
    gies?: Prisma.GIEListRelationFilter;
    livreurs?: Prisma.LivreursListRelationFilter;
}, "id" | "nom">;
export type regionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.regionsCountOrderByAggregateInput;
    _avg?: Prisma.regionsAvgOrderByAggregateInput;
    _max?: Prisma.regionsMaxOrderByAggregateInput;
    _min?: Prisma.regionsMinOrderByAggregateInput;
    _sum?: Prisma.regionsSumOrderByAggregateInput;
};
export type regionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.regionsScalarWhereWithAggregatesInput | Prisma.regionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.regionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.regionsScalarWhereWithAggregatesInput | Prisma.regionsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"regions"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"regions"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"regions"> | string | null;
    fraisLivraisonInterne?: Prisma.FloatWithAggregatesFilter<"regions"> | number;
    fraisLivraisonExterne?: Prisma.FloatWithAggregatesFilter<"regions"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"regions"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"regions"> | Date | string;
};
export type regionsCreateInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesCreateNestedManyWithoutRegionsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIECreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursCreateNestedManyWithoutRegionsInput;
};
export type regionsUncheckedCreateInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesUncheckedCreateNestedManyWithoutRegionsInput;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIEUncheckedCreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUpdateManyWithoutRegionsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUncheckedUpdateManyWithoutRegionsNestedInput;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUncheckedUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type regionsCreateManyInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type regionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type regionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegionsNullableScalarRelationFilter = {
    is?: Prisma.regionsWhereInput | null;
    isNot?: Prisma.regionsWhereInput | null;
};
export type RegionsScalarRelationFilter = {
    is?: Prisma.regionsWhereInput;
    isNot?: Prisma.regionsWhereInput;
};
export type regionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type regionsAvgOrderByAggregateInput = {
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
};
export type regionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type regionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type regionsSumOrderByAggregateInput = {
    fraisLivraisonInterne?: Prisma.SortOrder;
    fraisLivraisonExterne?: Prisma.SortOrder;
};
export type regionsCreateNestedOneWithoutGiesInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutGiesInput, Prisma.regionsUncheckedCreateWithoutGiesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutGiesInput;
    connect?: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateOneWithoutGiesNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutGiesInput, Prisma.regionsUncheckedCreateWithoutGiesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutGiesInput;
    upsert?: Prisma.regionsUpsertWithoutGiesInput;
    disconnect?: Prisma.regionsWhereInput | boolean;
    delete?: Prisma.regionsWhereInput | boolean;
    connect?: Prisma.regionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.regionsUpdateToOneWithWhereWithoutGiesInput, Prisma.regionsUpdateWithoutGiesInput>, Prisma.regionsUncheckedUpdateWithoutGiesInput>;
};
export type regionsCreateNestedOneWithoutCommandesInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCommandesInput, Prisma.regionsUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCommandesInput;
    connect?: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateOneWithoutCommandesNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCommandesInput, Prisma.regionsUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCommandesInput;
    upsert?: Prisma.regionsUpsertWithoutCommandesInput;
    disconnect?: Prisma.regionsWhereInput | boolean;
    delete?: Prisma.regionsWhereInput | boolean;
    connect?: Prisma.regionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.regionsUpdateToOneWithWhereWithoutCommandesInput, Prisma.regionsUpdateWithoutCommandesInput>, Prisma.regionsUncheckedUpdateWithoutCommandesInput>;
};
export type regionsCreateNestedOneWithoutAdressesInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutAdressesInput, Prisma.regionsUncheckedCreateWithoutAdressesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutAdressesInput;
    connect?: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateOneRequiredWithoutAdressesNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutAdressesInput, Prisma.regionsUncheckedCreateWithoutAdressesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutAdressesInput;
    upsert?: Prisma.regionsUpsertWithoutAdressesInput;
    connect?: Prisma.regionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.regionsUpdateToOneWithWhereWithoutAdressesInput, Prisma.regionsUpdateWithoutAdressesInput>, Prisma.regionsUncheckedUpdateWithoutAdressesInput>;
};
export type regionsCreateNestedOneWithoutLivreursInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutLivreursInput, Prisma.regionsUncheckedCreateWithoutLivreursInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutLivreursInput;
    connect?: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateOneWithoutLivreursNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutLivreursInput, Prisma.regionsUncheckedCreateWithoutLivreursInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutLivreursInput;
    upsert?: Prisma.regionsUpsertWithoutLivreursInput;
    disconnect?: Prisma.regionsWhereInput | boolean;
    delete?: Prisma.regionsWhereInput | boolean;
    connect?: Prisma.regionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.regionsUpdateToOneWithWhereWithoutLivreursInput, Prisma.regionsUpdateWithoutLivreursInput>, Prisma.regionsUncheckedUpdateWithoutLivreursInput>;
};
export type regionsCreateWithoutGiesInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesCreateNestedManyWithoutRegionsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursCreateNestedManyWithoutRegionsInput;
};
export type regionsUncheckedCreateWithoutGiesInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesUncheckedCreateNestedManyWithoutRegionsInput;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsCreateOrConnectWithoutGiesInput = {
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateWithoutGiesInput, Prisma.regionsUncheckedCreateWithoutGiesInput>;
};
export type regionsUpsertWithoutGiesInput = {
    update: Prisma.XOR<Prisma.regionsUpdateWithoutGiesInput, Prisma.regionsUncheckedUpdateWithoutGiesInput>;
    create: Prisma.XOR<Prisma.regionsCreateWithoutGiesInput, Prisma.regionsUncheckedCreateWithoutGiesInput>;
    where?: Prisma.regionsWhereInput;
};
export type regionsUpdateToOneWithWhereWithoutGiesInput = {
    where?: Prisma.regionsWhereInput;
    data: Prisma.XOR<Prisma.regionsUpdateWithoutGiesInput, Prisma.regionsUncheckedUpdateWithoutGiesInput>;
};
export type regionsUpdateWithoutGiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUpdateManyWithoutRegionsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateWithoutGiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUncheckedUpdateManyWithoutRegionsNestedInput;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type regionsCreateWithoutCommandesInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIECreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursCreateNestedManyWithoutRegionsInput;
};
export type regionsUncheckedCreateWithoutCommandesInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesUncheckedCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIEUncheckedCreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsCreateOrConnectWithoutCommandesInput = {
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateWithoutCommandesInput, Prisma.regionsUncheckedCreateWithoutCommandesInput>;
};
export type regionsUpsertWithoutCommandesInput = {
    update: Prisma.XOR<Prisma.regionsUpdateWithoutCommandesInput, Prisma.regionsUncheckedUpdateWithoutCommandesInput>;
    create: Prisma.XOR<Prisma.regionsCreateWithoutCommandesInput, Prisma.regionsUncheckedCreateWithoutCommandesInput>;
    where?: Prisma.regionsWhereInput;
};
export type regionsUpdateToOneWithWhereWithoutCommandesInput = {
    where?: Prisma.regionsWhereInput;
    data: Prisma.XOR<Prisma.regionsUpdateWithoutCommandesInput, Prisma.regionsUncheckedUpdateWithoutCommandesInput>;
};
export type regionsUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUncheckedUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUncheckedUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type regionsCreateWithoutAdressesInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandes?: Prisma.CommandeCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIECreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursCreateNestedManyWithoutRegionsInput;
};
export type regionsUncheckedCreateWithoutAdressesInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIEUncheckedCreateNestedManyWithoutRegionsInput;
    livreurs?: Prisma.livreursUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsCreateOrConnectWithoutAdressesInput = {
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateWithoutAdressesInput, Prisma.regionsUncheckedCreateWithoutAdressesInput>;
};
export type regionsUpsertWithoutAdressesInput = {
    update: Prisma.XOR<Prisma.regionsUpdateWithoutAdressesInput, Prisma.regionsUncheckedUpdateWithoutAdressesInput>;
    create: Prisma.XOR<Prisma.regionsCreateWithoutAdressesInput, Prisma.regionsUncheckedCreateWithoutAdressesInput>;
    where?: Prisma.regionsWhereInput;
};
export type regionsUpdateToOneWithWhereWithoutAdressesInput = {
    where?: Prisma.regionsWhereInput;
    data: Prisma.XOR<Prisma.regionsUpdateWithoutAdressesInput, Prisma.regionsUncheckedUpdateWithoutAdressesInput>;
};
export type regionsUpdateWithoutAdressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateWithoutAdressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUncheckedUpdateManyWithoutRegionsNestedInput;
    livreurs?: Prisma.livreursUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type regionsCreateWithoutLivreursInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesCreateNestedManyWithoutRegionsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIECreateNestedManyWithoutRegionsInput;
};
export type regionsUncheckedCreateWithoutLivreursInput = {
    id: string;
    nom: string;
    description?: string | null;
    fraisLivraisonInterne?: number;
    fraisLivraisonExterne?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    adresses?: Prisma.adressesUncheckedCreateNestedManyWithoutRegionsInput;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutRegionsInput;
    gies?: Prisma.GIEUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsCreateOrConnectWithoutLivreursInput = {
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateWithoutLivreursInput, Prisma.regionsUncheckedCreateWithoutLivreursInput>;
};
export type regionsUpsertWithoutLivreursInput = {
    update: Prisma.XOR<Prisma.regionsUpdateWithoutLivreursInput, Prisma.regionsUncheckedUpdateWithoutLivreursInput>;
    create: Prisma.XOR<Prisma.regionsCreateWithoutLivreursInput, Prisma.regionsUncheckedCreateWithoutLivreursInput>;
    where?: Prisma.regionsWhereInput;
};
export type regionsUpdateToOneWithWhereWithoutLivreursInput = {
    where?: Prisma.regionsWhereInput;
    data: Prisma.XOR<Prisma.regionsUpdateWithoutLivreursInput, Prisma.regionsUncheckedUpdateWithoutLivreursInput>;
};
export type regionsUpdateWithoutLivreursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUpdateManyWithoutRegionsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateWithoutLivreursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraisonInterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLivraisonExterne?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adresses?: Prisma.adressesUncheckedUpdateManyWithoutRegionsNestedInput;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutRegionsNestedInput;
    gies?: Prisma.GIEUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type RegionsCountOutputType = {
    adresses: number;
    commandes: number;
    gies: number;
    livreurs: number;
};
export type RegionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adresses?: boolean | RegionsCountOutputTypeCountAdressesArgs;
    commandes?: boolean | RegionsCountOutputTypeCountCommandesArgs;
    gies?: boolean | RegionsCountOutputTypeCountGiesArgs;
    livreurs?: boolean | RegionsCountOutputTypeCountLivreursArgs;
};
export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegionsCountOutputTypeSelect<ExtArgs> | null;
};
export type RegionsCountOutputTypeCountAdressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adressesWhereInput;
};
export type RegionsCountOutputTypeCountCommandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
};
export type RegionsCountOutputTypeCountGiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GIEWhereInput;
};
export type RegionsCountOutputTypeCountLivreursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.livreursWhereInput;
};
export type regionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    fraisLivraisonInterne?: boolean;
    fraisLivraisonExterne?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    adresses?: boolean | Prisma.regions$adressesArgs<ExtArgs>;
    commandes?: boolean | Prisma.regions$commandesArgs<ExtArgs>;
    gies?: boolean | Prisma.regions$giesArgs<ExtArgs>;
    livreurs?: boolean | Prisma.regions$livreursArgs<ExtArgs>;
    _count?: boolean | Prisma.RegionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regions"]>;
export type regionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    fraisLivraisonInterne?: boolean;
    fraisLivraisonExterne?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["regions"]>;
export type regionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    fraisLivraisonInterne?: boolean;
    fraisLivraisonExterne?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["regions"]>;
export type regionsSelectScalar = {
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    fraisLivraisonInterne?: boolean;
    fraisLivraisonExterne?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type regionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "description" | "fraisLivraisonInterne" | "fraisLivraisonExterne" | "createdAt" | "updatedAt", ExtArgs["result"]["regions"]>;
export type regionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adresses?: boolean | Prisma.regions$adressesArgs<ExtArgs>;
    commandes?: boolean | Prisma.regions$commandesArgs<ExtArgs>;
    gies?: boolean | Prisma.regions$giesArgs<ExtArgs>;
    livreurs?: boolean | Prisma.regions$livreursArgs<ExtArgs>;
    _count?: boolean | Prisma.RegionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type regionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type regionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $regionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "regions";
    objects: {
        adresses: Prisma.$adressesPayload<ExtArgs>[];
        commandes: Prisma.$CommandePayload<ExtArgs>[];
        gies: Prisma.$GIEPayload<ExtArgs>[];
        livreurs: Prisma.$livreursPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        description: string | null;
        fraisLivraisonInterne: number;
        fraisLivraisonExterne: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["regions"]>;
    composites: {};
};
export type regionsGetPayload<S extends boolean | null | undefined | regionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$regionsPayload, S>;
export type regionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<regionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegionsCountAggregateInputType | true;
};
export interface regionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['regions'];
        meta: {
            name: 'regions';
        };
    };
    findUnique<T extends regionsFindUniqueArgs>(args: Prisma.SelectSubset<T, regionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends regionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, regionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends regionsFindFirstArgs>(args?: Prisma.SelectSubset<T, regionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends regionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, regionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends regionsFindManyArgs>(args?: Prisma.SelectSubset<T, regionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends regionsCreateArgs>(args: Prisma.SelectSubset<T, regionsCreateArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends regionsCreateManyArgs>(args?: Prisma.SelectSubset<T, regionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends regionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, regionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends regionsDeleteArgs>(args: Prisma.SelectSubset<T, regionsDeleteArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends regionsUpdateArgs>(args: Prisma.SelectSubset<T, regionsUpdateArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends regionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, regionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends regionsUpdateManyArgs>(args: Prisma.SelectSubset<T, regionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends regionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, regionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends regionsUpsertArgs>(args: Prisma.SelectSubset<T, regionsUpsertArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends regionsCountArgs>(args?: Prisma.Subset<T, regionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegionsCountAggregateOutputType> : number>;
    aggregate<T extends RegionsAggregateArgs>(args: Prisma.Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>;
    groupBy<T extends regionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: regionsGroupByArgs['orderBy'];
    } : {
        orderBy?: regionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, regionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: regionsFieldRefs;
}
export interface Prisma__regionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    adresses<T extends Prisma.regions$adressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regions$adressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    commandes<T extends Prisma.regions$commandesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regions$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gies<T extends Prisma.regions$giesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regions$giesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    livreurs<T extends Prisma.regions$livreursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regions$livreursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface regionsFieldRefs {
    readonly id: Prisma.FieldRef<"regions", 'String'>;
    readonly nom: Prisma.FieldRef<"regions", 'String'>;
    readonly description: Prisma.FieldRef<"regions", 'String'>;
    readonly fraisLivraisonInterne: Prisma.FieldRef<"regions", 'Float'>;
    readonly fraisLivraisonExterne: Prisma.FieldRef<"regions", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"regions", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"regions", 'DateTime'>;
}
export type regionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithRelationInput | Prisma.regionsOrderByWithRelationInput[];
    cursor?: Prisma.regionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
export type regionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithRelationInput | Prisma.regionsOrderByWithRelationInput[];
    cursor?: Prisma.regionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
export type regionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithRelationInput | Prisma.regionsOrderByWithRelationInput[];
    cursor?: Prisma.regionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
export type regionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.regionsCreateInput, Prisma.regionsUncheckedCreateInput>;
};
export type regionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.regionsCreateManyInput | Prisma.regionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type regionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    data: Prisma.regionsCreateManyInput | Prisma.regionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type regionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.regionsUpdateInput, Prisma.regionsUncheckedUpdateInput>;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.regionsUpdateManyMutationInput, Prisma.regionsUncheckedUpdateManyInput>;
    where?: Prisma.regionsWhereInput;
    limit?: number;
};
export type regionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.regionsUpdateManyMutationInput, Prisma.regionsUncheckedUpdateManyInput>;
    where?: Prisma.regionsWhereInput;
    limit?: number;
};
export type regionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateInput, Prisma.regionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.regionsUpdateInput, Prisma.regionsUncheckedUpdateInput>;
};
export type regionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
    limit?: number;
};
export type regions$adressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    where?: Prisma.adressesWhereInput;
    orderBy?: Prisma.adressesOrderByWithRelationInput | Prisma.adressesOrderByWithRelationInput[];
    cursor?: Prisma.adressesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdressesScalarFieldEnum | Prisma.AdressesScalarFieldEnum[];
};
export type regions$commandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type regions$giesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GIESelect<ExtArgs> | null;
    omit?: Prisma.GIEOmit<ExtArgs> | null;
    include?: Prisma.GIEInclude<ExtArgs> | null;
    where?: Prisma.GIEWhereInput;
    orderBy?: Prisma.GIEOrderByWithRelationInput | Prisma.GIEOrderByWithRelationInput[];
    cursor?: Prisma.GIEWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GIEScalarFieldEnum | Prisma.GIEScalarFieldEnum[];
};
export type regions$livreursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type regionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
};
//# sourceMappingURL=regions.d.ts.map