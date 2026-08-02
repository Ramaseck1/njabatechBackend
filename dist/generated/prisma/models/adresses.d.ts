import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type adressesModel = runtime.Types.Result.DefaultSelection<Prisma.$adressesPayload>;
export type AggregateAdresses = {
    _count: AdressesCountAggregateOutputType | null;
    _avg: AdressesAvgAggregateOutputType | null;
    _sum: AdressesSumAggregateOutputType | null;
    _min: AdressesMinAggregateOutputType | null;
    _max: AdressesMaxAggregateOutputType | null;
};
export type AdressesAvgAggregateOutputType = {
    fraisLivraison: number | null;
};
export type AdressesSumAggregateOutputType = {
    fraisLivraison: number | null;
};
export type AdressesMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    description: string | null;
    codePostal: string | null;
    fraisLivraison: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    regionId: string | null;
};
export type AdressesMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    description: string | null;
    codePostal: string | null;
    fraisLivraison: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    regionId: string | null;
};
export type AdressesCountAggregateOutputType = {
    id: number;
    nom: number;
    description: number;
    codePostal: number;
    fraisLivraison: number;
    createdAt: number;
    updatedAt: number;
    regionId: number;
    _all: number;
};
export type AdressesAvgAggregateInputType = {
    fraisLivraison?: true;
};
export type AdressesSumAggregateInputType = {
    fraisLivraison?: true;
};
export type AdressesMinAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    codePostal?: true;
    fraisLivraison?: true;
    createdAt?: true;
    updatedAt?: true;
    regionId?: true;
};
export type AdressesMaxAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    codePostal?: true;
    fraisLivraison?: true;
    createdAt?: true;
    updatedAt?: true;
    regionId?: true;
};
export type AdressesCountAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    codePostal?: true;
    fraisLivraison?: true;
    createdAt?: true;
    updatedAt?: true;
    regionId?: true;
    _all?: true;
};
export type AdressesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adressesWhereInput;
    orderBy?: Prisma.adressesOrderByWithRelationInput | Prisma.adressesOrderByWithRelationInput[];
    cursor?: Prisma.adressesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdressesCountAggregateInputType;
    _avg?: AdressesAvgAggregateInputType;
    _sum?: AdressesSumAggregateInputType;
    _min?: AdressesMinAggregateInputType;
    _max?: AdressesMaxAggregateInputType;
};
export type GetAdressesAggregateType<T extends AdressesAggregateArgs> = {
    [P in keyof T & keyof AggregateAdresses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdresses[P]> : Prisma.GetScalarType<T[P], AggregateAdresses[P]>;
};
export type adressesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adressesWhereInput;
    orderBy?: Prisma.adressesOrderByWithAggregationInput | Prisma.adressesOrderByWithAggregationInput[];
    by: Prisma.AdressesScalarFieldEnum[] | Prisma.AdressesScalarFieldEnum;
    having?: Prisma.adressesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdressesCountAggregateInputType | true;
    _avg?: AdressesAvgAggregateInputType;
    _sum?: AdressesSumAggregateInputType;
    _min?: AdressesMinAggregateInputType;
    _max?: AdressesMaxAggregateInputType;
};
export type AdressesGroupByOutputType = {
    id: string;
    nom: string;
    description: string | null;
    codePostal: string | null;
    fraisLivraison: number;
    createdAt: Date;
    updatedAt: Date;
    regionId: string;
    _count: AdressesCountAggregateOutputType | null;
    _avg: AdressesAvgAggregateOutputType | null;
    _sum: AdressesSumAggregateOutputType | null;
    _min: AdressesMinAggregateOutputType | null;
    _max: AdressesMaxAggregateOutputType | null;
};
export type GetAdressesGroupByPayload<T extends adressesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdressesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdressesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdressesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdressesGroupByOutputType[P]>;
}>>;
export type adressesWhereInput = {
    AND?: Prisma.adressesWhereInput | Prisma.adressesWhereInput[];
    OR?: Prisma.adressesWhereInput[];
    NOT?: Prisma.adressesWhereInput | Prisma.adressesWhereInput[];
    id?: Prisma.StringFilter<"adresses"> | string;
    nom?: Prisma.StringFilter<"adresses"> | string;
    description?: Prisma.StringNullableFilter<"adresses"> | string | null;
    codePostal?: Prisma.StringNullableFilter<"adresses"> | string | null;
    fraisLivraison?: Prisma.FloatFilter<"adresses"> | number;
    createdAt?: Prisma.DateTimeFilter<"adresses"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"adresses"> | Date | string;
    regionId?: Prisma.StringFilter<"adresses"> | string;
    regions?: Prisma.XOR<Prisma.RegionsScalarRelationFilter, Prisma.regionsWhereInput>;
};
export type adressesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    codePostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    regions?: Prisma.regionsOrderByWithRelationInput;
};
export type adressesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.adressesWhereInput | Prisma.adressesWhereInput[];
    OR?: Prisma.adressesWhereInput[];
    NOT?: Prisma.adressesWhereInput | Prisma.adressesWhereInput[];
    nom?: Prisma.StringFilter<"adresses"> | string;
    description?: Prisma.StringNullableFilter<"adresses"> | string | null;
    codePostal?: Prisma.StringNullableFilter<"adresses"> | string | null;
    fraisLivraison?: Prisma.FloatFilter<"adresses"> | number;
    createdAt?: Prisma.DateTimeFilter<"adresses"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"adresses"> | Date | string;
    regionId?: Prisma.StringFilter<"adresses"> | string;
    regions?: Prisma.XOR<Prisma.RegionsScalarRelationFilter, Prisma.regionsWhereInput>;
}, "id">;
export type adressesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    codePostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    _count?: Prisma.adressesCountOrderByAggregateInput;
    _avg?: Prisma.adressesAvgOrderByAggregateInput;
    _max?: Prisma.adressesMaxOrderByAggregateInput;
    _min?: Prisma.adressesMinOrderByAggregateInput;
    _sum?: Prisma.adressesSumOrderByAggregateInput;
};
export type adressesScalarWhereWithAggregatesInput = {
    AND?: Prisma.adressesScalarWhereWithAggregatesInput | Prisma.adressesScalarWhereWithAggregatesInput[];
    OR?: Prisma.adressesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.adressesScalarWhereWithAggregatesInput | Prisma.adressesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"adresses"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"adresses"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"adresses"> | string | null;
    codePostal?: Prisma.StringNullableWithAggregatesFilter<"adresses"> | string | null;
    fraisLivraison?: Prisma.FloatWithAggregatesFilter<"adresses"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"adresses"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"adresses"> | Date | string;
    regionId?: Prisma.StringWithAggregatesFilter<"adresses"> | string;
};
export type adressesCreateInput = {
    id: string;
    nom: string;
    description?: string | null;
    codePostal?: string | null;
    fraisLivraison?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    regions: Prisma.regionsCreateNestedOneWithoutAdressesInput;
};
export type adressesUncheckedCreateInput = {
    id: string;
    nom: string;
    description?: string | null;
    codePostal?: string | null;
    fraisLivraison?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    regionId: string;
};
export type adressesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regions?: Prisma.regionsUpdateOneRequiredWithoutAdressesNestedInput;
};
export type adressesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type adressesCreateManyInput = {
    id: string;
    nom: string;
    description?: string | null;
    codePostal?: string | null;
    fraisLivraison?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    regionId: string;
};
export type adressesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type adressesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type adressesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
};
export type adressesAvgOrderByAggregateInput = {
    fraisLivraison?: Prisma.SortOrder;
};
export type adressesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
};
export type adressesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrder;
    fraisLivraison?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
};
export type adressesSumOrderByAggregateInput = {
    fraisLivraison?: Prisma.SortOrder;
};
export type AdressesListRelationFilter = {
    every?: Prisma.adressesWhereInput;
    some?: Prisma.adressesWhereInput;
    none?: Prisma.adressesWhereInput;
};
export type adressesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type adressesCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.adressesCreateWithoutRegionsInput, Prisma.adressesUncheckedCreateWithoutRegionsInput> | Prisma.adressesCreateWithoutRegionsInput[] | Prisma.adressesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.adressesCreateOrConnectWithoutRegionsInput | Prisma.adressesCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.adressesCreateManyRegionsInputEnvelope;
    connect?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
};
export type adressesUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.adressesCreateWithoutRegionsInput, Prisma.adressesUncheckedCreateWithoutRegionsInput> | Prisma.adressesCreateWithoutRegionsInput[] | Prisma.adressesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.adressesCreateOrConnectWithoutRegionsInput | Prisma.adressesCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.adressesCreateManyRegionsInputEnvelope;
    connect?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
};
export type adressesUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.adressesCreateWithoutRegionsInput, Prisma.adressesUncheckedCreateWithoutRegionsInput> | Prisma.adressesCreateWithoutRegionsInput[] | Prisma.adressesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.adressesCreateOrConnectWithoutRegionsInput | Prisma.adressesCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.adressesUpsertWithWhereUniqueWithoutRegionsInput | Prisma.adressesUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.adressesCreateManyRegionsInputEnvelope;
    set?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    disconnect?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    delete?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    connect?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    update?: Prisma.adressesUpdateWithWhereUniqueWithoutRegionsInput | Prisma.adressesUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.adressesUpdateManyWithWhereWithoutRegionsInput | Prisma.adressesUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.adressesScalarWhereInput | Prisma.adressesScalarWhereInput[];
};
export type adressesUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.adressesCreateWithoutRegionsInput, Prisma.adressesUncheckedCreateWithoutRegionsInput> | Prisma.adressesCreateWithoutRegionsInput[] | Prisma.adressesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.adressesCreateOrConnectWithoutRegionsInput | Prisma.adressesCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.adressesUpsertWithWhereUniqueWithoutRegionsInput | Prisma.adressesUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.adressesCreateManyRegionsInputEnvelope;
    set?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    disconnect?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    delete?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    connect?: Prisma.adressesWhereUniqueInput | Prisma.adressesWhereUniqueInput[];
    update?: Prisma.adressesUpdateWithWhereUniqueWithoutRegionsInput | Prisma.adressesUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.adressesUpdateManyWithWhereWithoutRegionsInput | Prisma.adressesUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.adressesScalarWhereInput | Prisma.adressesScalarWhereInput[];
};
export type adressesCreateWithoutRegionsInput = {
    id: string;
    nom: string;
    description?: string | null;
    codePostal?: string | null;
    fraisLivraison?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type adressesUncheckedCreateWithoutRegionsInput = {
    id: string;
    nom: string;
    description?: string | null;
    codePostal?: string | null;
    fraisLivraison?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type adressesCreateOrConnectWithoutRegionsInput = {
    where: Prisma.adressesWhereUniqueInput;
    create: Prisma.XOR<Prisma.adressesCreateWithoutRegionsInput, Prisma.adressesUncheckedCreateWithoutRegionsInput>;
};
export type adressesCreateManyRegionsInputEnvelope = {
    data: Prisma.adressesCreateManyRegionsInput | Prisma.adressesCreateManyRegionsInput[];
    skipDuplicates?: boolean;
};
export type adressesUpsertWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.adressesWhereUniqueInput;
    update: Prisma.XOR<Prisma.adressesUpdateWithoutRegionsInput, Prisma.adressesUncheckedUpdateWithoutRegionsInput>;
    create: Prisma.XOR<Prisma.adressesCreateWithoutRegionsInput, Prisma.adressesUncheckedCreateWithoutRegionsInput>;
};
export type adressesUpdateWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.adressesWhereUniqueInput;
    data: Prisma.XOR<Prisma.adressesUpdateWithoutRegionsInput, Prisma.adressesUncheckedUpdateWithoutRegionsInput>;
};
export type adressesUpdateManyWithWhereWithoutRegionsInput = {
    where: Prisma.adressesScalarWhereInput;
    data: Prisma.XOR<Prisma.adressesUpdateManyMutationInput, Prisma.adressesUncheckedUpdateManyWithoutRegionsInput>;
};
export type adressesScalarWhereInput = {
    AND?: Prisma.adressesScalarWhereInput | Prisma.adressesScalarWhereInput[];
    OR?: Prisma.adressesScalarWhereInput[];
    NOT?: Prisma.adressesScalarWhereInput | Prisma.adressesScalarWhereInput[];
    id?: Prisma.StringFilter<"adresses"> | string;
    nom?: Prisma.StringFilter<"adresses"> | string;
    description?: Prisma.StringNullableFilter<"adresses"> | string | null;
    codePostal?: Prisma.StringNullableFilter<"adresses"> | string | null;
    fraisLivraison?: Prisma.FloatFilter<"adresses"> | number;
    createdAt?: Prisma.DateTimeFilter<"adresses"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"adresses"> | Date | string;
    regionId?: Prisma.StringFilter<"adresses"> | string;
};
export type adressesCreateManyRegionsInput = {
    id: string;
    nom: string;
    description?: string | null;
    codePostal?: string | null;
    fraisLivraison?: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type adressesUpdateWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type adressesUncheckedUpdateWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type adressesUncheckedUpdateManyWithoutRegionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fraisLivraison?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type adressesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    codePostal?: boolean;
    fraisLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    regionId?: boolean;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adresses"]>;
export type adressesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    codePostal?: boolean;
    fraisLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    regionId?: boolean;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adresses"]>;
export type adressesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    codePostal?: boolean;
    fraisLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    regionId?: boolean;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adresses"]>;
export type adressesSelectScalar = {
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    codePostal?: boolean;
    fraisLivraison?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    regionId?: boolean;
};
export type adressesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "description" | "codePostal" | "fraisLivraison" | "createdAt" | "updatedAt" | "regionId", ExtArgs["result"]["adresses"]>;
export type adressesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
};
export type adressesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
};
export type adressesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
};
export type $adressesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "adresses";
    objects: {
        regions: Prisma.$regionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        description: string | null;
        codePostal: string | null;
        fraisLivraison: number;
        createdAt: Date;
        updatedAt: Date;
        regionId: string;
    }, ExtArgs["result"]["adresses"]>;
    composites: {};
};
export type adressesGetPayload<S extends boolean | null | undefined | adressesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$adressesPayload, S>;
export type adressesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<adressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdressesCountAggregateInputType | true;
};
export interface adressesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['adresses'];
        meta: {
            name: 'adresses';
        };
    };
    findUnique<T extends adressesFindUniqueArgs>(args: Prisma.SelectSubset<T, adressesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends adressesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, adressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends adressesFindFirstArgs>(args?: Prisma.SelectSubset<T, adressesFindFirstArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends adressesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, adressesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends adressesFindManyArgs>(args?: Prisma.SelectSubset<T, adressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends adressesCreateArgs>(args: Prisma.SelectSubset<T, adressesCreateArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends adressesCreateManyArgs>(args?: Prisma.SelectSubset<T, adressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends adressesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, adressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends adressesDeleteArgs>(args: Prisma.SelectSubset<T, adressesDeleteArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends adressesUpdateArgs>(args: Prisma.SelectSubset<T, adressesUpdateArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends adressesDeleteManyArgs>(args?: Prisma.SelectSubset<T, adressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends adressesUpdateManyArgs>(args: Prisma.SelectSubset<T, adressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends adressesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, adressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends adressesUpsertArgs>(args: Prisma.SelectSubset<T, adressesUpsertArgs<ExtArgs>>): Prisma.Prisma__adressesClient<runtime.Types.Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends adressesCountArgs>(args?: Prisma.Subset<T, adressesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdressesCountAggregateOutputType> : number>;
    aggregate<T extends AdressesAggregateArgs>(args: Prisma.Subset<T, AdressesAggregateArgs>): Prisma.PrismaPromise<GetAdressesAggregateType<T>>;
    groupBy<T extends adressesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: adressesGroupByArgs['orderBy'];
    } : {
        orderBy?: adressesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, adressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: adressesFieldRefs;
}
export interface Prisma__adressesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regions<T extends Prisma.regionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regionsDefaultArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface adressesFieldRefs {
    readonly id: Prisma.FieldRef<"adresses", 'String'>;
    readonly nom: Prisma.FieldRef<"adresses", 'String'>;
    readonly description: Prisma.FieldRef<"adresses", 'String'>;
    readonly codePostal: Prisma.FieldRef<"adresses", 'String'>;
    readonly fraisLivraison: Prisma.FieldRef<"adresses", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"adresses", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"adresses", 'DateTime'>;
    readonly regionId: Prisma.FieldRef<"adresses", 'String'>;
}
export type adressesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    where: Prisma.adressesWhereUniqueInput;
};
export type adressesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    where: Prisma.adressesWhereUniqueInput;
};
export type adressesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type adressesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type adressesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type adressesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adressesCreateInput, Prisma.adressesUncheckedCreateInput>;
};
export type adressesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.adressesCreateManyInput | Prisma.adressesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type adressesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    data: Prisma.adressesCreateManyInput | Prisma.adressesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.adressesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type adressesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adressesUpdateInput, Prisma.adressesUncheckedUpdateInput>;
    where: Prisma.adressesWhereUniqueInput;
};
export type adressesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.adressesUpdateManyMutationInput, Prisma.adressesUncheckedUpdateManyInput>;
    where?: Prisma.adressesWhereInput;
    limit?: number;
};
export type adressesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adressesUpdateManyMutationInput, Prisma.adressesUncheckedUpdateManyInput>;
    where?: Prisma.adressesWhereInput;
    limit?: number;
    include?: Prisma.adressesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type adressesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    where: Prisma.adressesWhereUniqueInput;
    create: Prisma.XOR<Prisma.adressesCreateInput, Prisma.adressesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.adressesUpdateInput, Prisma.adressesUncheckedUpdateInput>;
};
export type adressesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
    where: Prisma.adressesWhereUniqueInput;
};
export type adressesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adressesWhereInput;
    limit?: number;
};
export type adressesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adressesSelect<ExtArgs> | null;
    omit?: Prisma.adressesOmit<ExtArgs> | null;
    include?: Prisma.adressesInclude<ExtArgs> | null;
};
//# sourceMappingURL=adresses.d.ts.map