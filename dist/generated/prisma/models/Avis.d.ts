import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AvisModel = runtime.Types.Result.DefaultSelection<Prisma.$AvisPayload>;
export type AggregateAvis = {
    _count: AvisCountAggregateOutputType | null;
    _avg: AvisAvgAggregateOutputType | null;
    _sum: AvisSumAggregateOutputType | null;
    _min: AvisMinAggregateOutputType | null;
    _max: AvisMaxAggregateOutputType | null;
};
export type AvisAvgAggregateOutputType = {
    rating: number | null;
};
export type AvisSumAggregateOutputType = {
    rating: number | null;
};
export type AvisMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    nom: string | null;
    rating: number | null;
    comment: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AvisMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    nom: string | null;
    rating: number | null;
    comment: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AvisCountAggregateOutputType = {
    id: number;
    clientId: number;
    nom: number;
    rating: number;
    comment: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AvisAvgAggregateInputType = {
    rating?: true;
};
export type AvisSumAggregateInputType = {
    rating?: true;
};
export type AvisMinAggregateInputType = {
    id?: true;
    clientId?: true;
    nom?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AvisMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    nom?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AvisCountAggregateInputType = {
    id?: true;
    clientId?: true;
    nom?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AvisAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisWhereInput;
    orderBy?: Prisma.AvisOrderByWithRelationInput | Prisma.AvisOrderByWithRelationInput[];
    cursor?: Prisma.AvisWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AvisCountAggregateInputType;
    _avg?: AvisAvgAggregateInputType;
    _sum?: AvisSumAggregateInputType;
    _min?: AvisMinAggregateInputType;
    _max?: AvisMaxAggregateInputType;
};
export type GetAvisAggregateType<T extends AvisAggregateArgs> = {
    [P in keyof T & keyof AggregateAvis]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvis[P]> : Prisma.GetScalarType<T[P], AggregateAvis[P]>;
};
export type AvisGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisWhereInput;
    orderBy?: Prisma.AvisOrderByWithAggregationInput | Prisma.AvisOrderByWithAggregationInput[];
    by: Prisma.AvisScalarFieldEnum[] | Prisma.AvisScalarFieldEnum;
    having?: Prisma.AvisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvisCountAggregateInputType | true;
    _avg?: AvisAvgAggregateInputType;
    _sum?: AvisSumAggregateInputType;
    _min?: AvisMinAggregateInputType;
    _max?: AvisMaxAggregateInputType;
};
export type AvisGroupByOutputType = {
    id: string;
    clientId: string;
    nom: string | null;
    rating: number;
    comment: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AvisCountAggregateOutputType | null;
    _avg: AvisAvgAggregateOutputType | null;
    _sum: AvisSumAggregateOutputType | null;
    _min: AvisMinAggregateOutputType | null;
    _max: AvisMaxAggregateOutputType | null;
};
export type GetAvisGroupByPayload<T extends AvisGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvisGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvisGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvisGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvisGroupByOutputType[P]>;
}>>;
export type AvisWhereInput = {
    AND?: Prisma.AvisWhereInput | Prisma.AvisWhereInput[];
    OR?: Prisma.AvisWhereInput[];
    NOT?: Prisma.AvisWhereInput | Prisma.AvisWhereInput[];
    id?: Prisma.StringFilter<"Avis"> | string;
    clientId?: Prisma.StringFilter<"Avis"> | string;
    nom?: Prisma.StringNullableFilter<"Avis"> | string | null;
    rating?: Prisma.IntFilter<"Avis"> | number;
    comment?: Prisma.StringNullableFilter<"Avis"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Avis"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Avis"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type AvisOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type AvisWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvisWhereInput | Prisma.AvisWhereInput[];
    OR?: Prisma.AvisWhereInput[];
    NOT?: Prisma.AvisWhereInput | Prisma.AvisWhereInput[];
    clientId?: Prisma.StringFilter<"Avis"> | string;
    nom?: Prisma.StringNullableFilter<"Avis"> | string | null;
    rating?: Prisma.IntFilter<"Avis"> | number;
    comment?: Prisma.StringNullableFilter<"Avis"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Avis"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Avis"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id">;
export type AvisOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AvisCountOrderByAggregateInput;
    _avg?: Prisma.AvisAvgOrderByAggregateInput;
    _max?: Prisma.AvisMaxOrderByAggregateInput;
    _min?: Prisma.AvisMinOrderByAggregateInput;
    _sum?: Prisma.AvisSumOrderByAggregateInput;
};
export type AvisScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvisScalarWhereWithAggregatesInput | Prisma.AvisScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvisScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvisScalarWhereWithAggregatesInput | Prisma.AvisScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Avis"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"Avis"> | string;
    nom?: Prisma.StringNullableWithAggregatesFilter<"Avis"> | string | null;
    rating?: Prisma.IntWithAggregatesFilter<"Avis"> | number;
    comment?: Prisma.StringNullableWithAggregatesFilter<"Avis"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Avis"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Avis"> | Date | string;
};
export type AvisCreateInput = {
    id?: string;
    nom?: string | null;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutAvisInput;
};
export type AvisUncheckedCreateInput = {
    id?: string;
    clientId: string;
    nom?: string | null;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutAvisNestedInput;
};
export type AvisUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisCreateManyInput = {
    id?: string;
    clientId: string;
    nom?: string | null;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvisAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type AvisMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvisMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvisSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type AvisListRelationFilter = {
    every?: Prisma.AvisWhereInput;
    some?: Prisma.AvisWhereInput;
    none?: Prisma.AvisWhereInput;
};
export type AvisOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AvisCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AvisCreateWithoutClientInput, Prisma.AvisUncheckedCreateWithoutClientInput> | Prisma.AvisCreateWithoutClientInput[] | Prisma.AvisUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisCreateOrConnectWithoutClientInput | Prisma.AvisCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AvisCreateManyClientInputEnvelope;
    connect?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
};
export type AvisUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AvisCreateWithoutClientInput, Prisma.AvisUncheckedCreateWithoutClientInput> | Prisma.AvisCreateWithoutClientInput[] | Prisma.AvisUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisCreateOrConnectWithoutClientInput | Prisma.AvisCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AvisCreateManyClientInputEnvelope;
    connect?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
};
export type AvisUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AvisCreateWithoutClientInput, Prisma.AvisUncheckedCreateWithoutClientInput> | Prisma.AvisCreateWithoutClientInput[] | Prisma.AvisUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisCreateOrConnectWithoutClientInput | Prisma.AvisCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AvisUpsertWithWhereUniqueWithoutClientInput | Prisma.AvisUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AvisCreateManyClientInputEnvelope;
    set?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    disconnect?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    delete?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    connect?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    update?: Prisma.AvisUpdateWithWhereUniqueWithoutClientInput | Prisma.AvisUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AvisUpdateManyWithWhereWithoutClientInput | Prisma.AvisUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AvisScalarWhereInput | Prisma.AvisScalarWhereInput[];
};
export type AvisUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AvisCreateWithoutClientInput, Prisma.AvisUncheckedCreateWithoutClientInput> | Prisma.AvisCreateWithoutClientInput[] | Prisma.AvisUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisCreateOrConnectWithoutClientInput | Prisma.AvisCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AvisUpsertWithWhereUniqueWithoutClientInput | Prisma.AvisUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AvisCreateManyClientInputEnvelope;
    set?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    disconnect?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    delete?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    connect?: Prisma.AvisWhereUniqueInput | Prisma.AvisWhereUniqueInput[];
    update?: Prisma.AvisUpdateWithWhereUniqueWithoutClientInput | Prisma.AvisUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AvisUpdateManyWithWhereWithoutClientInput | Prisma.AvisUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AvisScalarWhereInput | Prisma.AvisScalarWhereInput[];
};
export type AvisCreateWithoutClientInput = {
    id?: string;
    nom?: string | null;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisUncheckedCreateWithoutClientInput = {
    id?: string;
    nom?: string | null;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisCreateOrConnectWithoutClientInput = {
    where: Prisma.AvisWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvisCreateWithoutClientInput, Prisma.AvisUncheckedCreateWithoutClientInput>;
};
export type AvisCreateManyClientInputEnvelope = {
    data: Prisma.AvisCreateManyClientInput | Prisma.AvisCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type AvisUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.AvisWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvisUpdateWithoutClientInput, Prisma.AvisUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.AvisCreateWithoutClientInput, Prisma.AvisUncheckedCreateWithoutClientInput>;
};
export type AvisUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.AvisWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvisUpdateWithoutClientInput, Prisma.AvisUncheckedUpdateWithoutClientInput>;
};
export type AvisUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.AvisScalarWhereInput;
    data: Prisma.XOR<Prisma.AvisUpdateManyMutationInput, Prisma.AvisUncheckedUpdateManyWithoutClientInput>;
};
export type AvisScalarWhereInput = {
    AND?: Prisma.AvisScalarWhereInput | Prisma.AvisScalarWhereInput[];
    OR?: Prisma.AvisScalarWhereInput[];
    NOT?: Prisma.AvisScalarWhereInput | Prisma.AvisScalarWhereInput[];
    id?: Prisma.StringFilter<"Avis"> | string;
    clientId?: Prisma.StringFilter<"Avis"> | string;
    nom?: Prisma.StringNullableFilter<"Avis"> | string | null;
    rating?: Prisma.IntFilter<"Avis"> | number;
    comment?: Prisma.StringNullableFilter<"Avis"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Avis"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Avis"> | Date | string;
};
export type AvisCreateManyClientInput = {
    id?: string;
    nom?: string | null;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    nom?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avis"]>;
export type AvisSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    nom?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avis"]>;
export type AvisSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    nom?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avis"]>;
export type AvisSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    nom?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AvisOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "nom" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["avis"]>;
export type AvisInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type AvisIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type AvisIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $AvisPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Avis";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        nom: string | null;
        rating: number;
        comment: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["avis"]>;
    composites: {};
};
export type AvisGetPayload<S extends boolean | null | undefined | AvisDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvisPayload, S>;
export type AvisCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvisCountAggregateInputType | true;
};
export interface AvisDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Avis'];
        meta: {
            name: 'Avis';
        };
    };
    findUnique<T extends AvisFindUniqueArgs>(args: Prisma.SelectSubset<T, AvisFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AvisFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvisFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AvisFindFirstArgs>(args?: Prisma.SelectSubset<T, AvisFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AvisFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvisFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AvisFindManyArgs>(args?: Prisma.SelectSubset<T, AvisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AvisCreateArgs>(args: Prisma.SelectSubset<T, AvisCreateArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AvisCreateManyArgs>(args?: Prisma.SelectSubset<T, AvisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AvisCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AvisDeleteArgs>(args: Prisma.SelectSubset<T, AvisDeleteArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AvisUpdateArgs>(args: Prisma.SelectSubset<T, AvisUpdateArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AvisDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AvisUpdateManyArgs>(args: Prisma.SelectSubset<T, AvisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AvisUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AvisUpsertArgs>(args: Prisma.SelectSubset<T, AvisUpsertArgs<ExtArgs>>): Prisma.Prisma__AvisClient<runtime.Types.Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AvisCountArgs>(args?: Prisma.Subset<T, AvisCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvisCountAggregateOutputType> : number>;
    aggregate<T extends AvisAggregateArgs>(args: Prisma.Subset<T, AvisAggregateArgs>): Prisma.PrismaPromise<GetAvisAggregateType<T>>;
    groupBy<T extends AvisGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvisGroupByArgs['orderBy'];
    } : {
        orderBy?: AvisGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AvisFieldRefs;
}
export interface Prisma__AvisClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AvisFieldRefs {
    readonly id: Prisma.FieldRef<"Avis", 'String'>;
    readonly clientId: Prisma.FieldRef<"Avis", 'String'>;
    readonly nom: Prisma.FieldRef<"Avis", 'String'>;
    readonly rating: Prisma.FieldRef<"Avis", 'Int'>;
    readonly comment: Prisma.FieldRef<"Avis", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Avis", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Avis", 'DateTime'>;
}
export type AvisFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    where: Prisma.AvisWhereUniqueInput;
};
export type AvisFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    where: Prisma.AvisWhereUniqueInput;
};
export type AvisFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AvisFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AvisFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AvisCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvisCreateInput, Prisma.AvisUncheckedCreateInput>;
};
export type AvisCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AvisCreateManyInput | Prisma.AvisCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AvisCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    data: Prisma.AvisCreateManyInput | Prisma.AvisCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AvisIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AvisUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvisUpdateInput, Prisma.AvisUncheckedUpdateInput>;
    where: Prisma.AvisWhereUniqueInput;
};
export type AvisUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AvisUpdateManyMutationInput, Prisma.AvisUncheckedUpdateManyInput>;
    where?: Prisma.AvisWhereInput;
    limit?: number;
};
export type AvisUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvisUpdateManyMutationInput, Prisma.AvisUncheckedUpdateManyInput>;
    where?: Prisma.AvisWhereInput;
    limit?: number;
    include?: Prisma.AvisIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AvisUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    where: Prisma.AvisWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvisCreateInput, Prisma.AvisUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AvisUpdateInput, Prisma.AvisUncheckedUpdateInput>;
};
export type AvisDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
    where: Prisma.AvisWhereUniqueInput;
};
export type AvisDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisWhereInput;
    limit?: number;
};
export type AvisDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisSelect<ExtArgs> | null;
    omit?: Prisma.AvisOmit<ExtArgs> | null;
    include?: Prisma.AvisInclude<ExtArgs> | null;
};
//# sourceMappingURL=Avis.d.ts.map