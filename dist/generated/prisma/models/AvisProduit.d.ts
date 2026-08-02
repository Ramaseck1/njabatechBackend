import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AvisProduitModel = runtime.Types.Result.DefaultSelection<Prisma.$AvisProduitPayload>;
export type AggregateAvisProduit = {
    _count: AvisProduitCountAggregateOutputType | null;
    _avg: AvisProduitAvgAggregateOutputType | null;
    _sum: AvisProduitSumAggregateOutputType | null;
    _min: AvisProduitMinAggregateOutputType | null;
    _max: AvisProduitMaxAggregateOutputType | null;
};
export type AvisProduitAvgAggregateOutputType = {
    rating: number | null;
};
export type AvisProduitSumAggregateOutputType = {
    rating: number | null;
};
export type AvisProduitMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    produitId: string | null;
    rating: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AvisProduitMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    produitId: string | null;
    rating: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AvisProduitCountAggregateOutputType = {
    id: number;
    clientId: number;
    produitId: number;
    rating: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AvisProduitAvgAggregateInputType = {
    rating?: true;
};
export type AvisProduitSumAggregateInputType = {
    rating?: true;
};
export type AvisProduitMinAggregateInputType = {
    id?: true;
    clientId?: true;
    produitId?: true;
    rating?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AvisProduitMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    produitId?: true;
    rating?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AvisProduitCountAggregateInputType = {
    id?: true;
    clientId?: true;
    produitId?: true;
    rating?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AvisProduitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisProduitWhereInput;
    orderBy?: Prisma.AvisProduitOrderByWithRelationInput | Prisma.AvisProduitOrderByWithRelationInput[];
    cursor?: Prisma.AvisProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AvisProduitCountAggregateInputType;
    _avg?: AvisProduitAvgAggregateInputType;
    _sum?: AvisProduitSumAggregateInputType;
    _min?: AvisProduitMinAggregateInputType;
    _max?: AvisProduitMaxAggregateInputType;
};
export type GetAvisProduitAggregateType<T extends AvisProduitAggregateArgs> = {
    [P in keyof T & keyof AggregateAvisProduit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvisProduit[P]> : Prisma.GetScalarType<T[P], AggregateAvisProduit[P]>;
};
export type AvisProduitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisProduitWhereInput;
    orderBy?: Prisma.AvisProduitOrderByWithAggregationInput | Prisma.AvisProduitOrderByWithAggregationInput[];
    by: Prisma.AvisProduitScalarFieldEnum[] | Prisma.AvisProduitScalarFieldEnum;
    having?: Prisma.AvisProduitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvisProduitCountAggregateInputType | true;
    _avg?: AvisProduitAvgAggregateInputType;
    _sum?: AvisProduitSumAggregateInputType;
    _min?: AvisProduitMinAggregateInputType;
    _max?: AvisProduitMaxAggregateInputType;
};
export type AvisProduitGroupByOutputType = {
    id: string;
    clientId: string;
    produitId: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    _count: AvisProduitCountAggregateOutputType | null;
    _avg: AvisProduitAvgAggregateOutputType | null;
    _sum: AvisProduitSumAggregateOutputType | null;
    _min: AvisProduitMinAggregateOutputType | null;
    _max: AvisProduitMaxAggregateOutputType | null;
};
export type GetAvisProduitGroupByPayload<T extends AvisProduitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvisProduitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvisProduitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvisProduitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvisProduitGroupByOutputType[P]>;
}>>;
export type AvisProduitWhereInput = {
    AND?: Prisma.AvisProduitWhereInput | Prisma.AvisProduitWhereInput[];
    OR?: Prisma.AvisProduitWhereInput[];
    NOT?: Prisma.AvisProduitWhereInput | Prisma.AvisProduitWhereInput[];
    id?: Prisma.StringFilter<"AvisProduit"> | string;
    clientId?: Prisma.StringFilter<"AvisProduit"> | string;
    produitId?: Prisma.StringFilter<"AvisProduit"> | string;
    rating?: Prisma.IntFilter<"AvisProduit"> | number;
    createdAt?: Prisma.DateTimeFilter<"AvisProduit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AvisProduit"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    produit?: Prisma.XOR<Prisma.ProduitScalarRelationFilter, Prisma.ProduitWhereInput>;
};
export type AvisProduitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
    produit?: Prisma.ProduitOrderByWithRelationInput;
};
export type AvisProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvisProduitWhereInput | Prisma.AvisProduitWhereInput[];
    OR?: Prisma.AvisProduitWhereInput[];
    NOT?: Prisma.AvisProduitWhereInput | Prisma.AvisProduitWhereInput[];
    clientId?: Prisma.StringFilter<"AvisProduit"> | string;
    produitId?: Prisma.StringFilter<"AvisProduit"> | string;
    rating?: Prisma.IntFilter<"AvisProduit"> | number;
    createdAt?: Prisma.DateTimeFilter<"AvisProduit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AvisProduit"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    produit?: Prisma.XOR<Prisma.ProduitScalarRelationFilter, Prisma.ProduitWhereInput>;
}, "id">;
export type AvisProduitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AvisProduitCountOrderByAggregateInput;
    _avg?: Prisma.AvisProduitAvgOrderByAggregateInput;
    _max?: Prisma.AvisProduitMaxOrderByAggregateInput;
    _min?: Prisma.AvisProduitMinOrderByAggregateInput;
    _sum?: Prisma.AvisProduitSumOrderByAggregateInput;
};
export type AvisProduitScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvisProduitScalarWhereWithAggregatesInput | Prisma.AvisProduitScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvisProduitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvisProduitScalarWhereWithAggregatesInput | Prisma.AvisProduitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AvisProduit"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"AvisProduit"> | string;
    produitId?: Prisma.StringWithAggregatesFilter<"AvisProduit"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"AvisProduit"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AvisProduit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AvisProduit"> | Date | string;
};
export type AvisProduitCreateInput = {
    id?: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutAvisProduitInput;
    produit: Prisma.ProduitCreateNestedOneWithoutAvisProduitInput;
};
export type AvisProduitUncheckedCreateInput = {
    id?: string;
    clientId: string;
    produitId: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisProduitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutAvisProduitNestedInput;
    produit?: Prisma.ProduitUpdateOneRequiredWithoutAvisProduitNestedInput;
};
export type AvisProduitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitCreateManyInput = {
    id?: string;
    clientId: string;
    produitId: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisProduitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvisProduitAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type AvisProduitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvisProduitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvisProduitSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type AvisProduitListRelationFilter = {
    every?: Prisma.AvisProduitWhereInput;
    some?: Prisma.AvisProduitWhereInput;
    none?: Prisma.AvisProduitWhereInput;
};
export type AvisProduitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AvisProduitCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutClientInput, Prisma.AvisProduitUncheckedCreateWithoutClientInput> | Prisma.AvisProduitCreateWithoutClientInput[] | Prisma.AvisProduitUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutClientInput | Prisma.AvisProduitCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AvisProduitCreateManyClientInputEnvelope;
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
};
export type AvisProduitUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutClientInput, Prisma.AvisProduitUncheckedCreateWithoutClientInput> | Prisma.AvisProduitCreateWithoutClientInput[] | Prisma.AvisProduitUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutClientInput | Prisma.AvisProduitCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AvisProduitCreateManyClientInputEnvelope;
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
};
export type AvisProduitUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutClientInput, Prisma.AvisProduitUncheckedCreateWithoutClientInput> | Prisma.AvisProduitCreateWithoutClientInput[] | Prisma.AvisProduitUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutClientInput | Prisma.AvisProduitCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AvisProduitUpsertWithWhereUniqueWithoutClientInput | Prisma.AvisProduitUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AvisProduitCreateManyClientInputEnvelope;
    set?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    disconnect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    delete?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    update?: Prisma.AvisProduitUpdateWithWhereUniqueWithoutClientInput | Prisma.AvisProduitUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AvisProduitUpdateManyWithWhereWithoutClientInput | Prisma.AvisProduitUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AvisProduitScalarWhereInput | Prisma.AvisProduitScalarWhereInput[];
};
export type AvisProduitUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutClientInput, Prisma.AvisProduitUncheckedCreateWithoutClientInput> | Prisma.AvisProduitCreateWithoutClientInput[] | Prisma.AvisProduitUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutClientInput | Prisma.AvisProduitCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AvisProduitUpsertWithWhereUniqueWithoutClientInput | Prisma.AvisProduitUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AvisProduitCreateManyClientInputEnvelope;
    set?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    disconnect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    delete?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    update?: Prisma.AvisProduitUpdateWithWhereUniqueWithoutClientInput | Prisma.AvisProduitUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AvisProduitUpdateManyWithWhereWithoutClientInput | Prisma.AvisProduitUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AvisProduitScalarWhereInput | Prisma.AvisProduitScalarWhereInput[];
};
export type AvisProduitCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutProduitInput, Prisma.AvisProduitUncheckedCreateWithoutProduitInput> | Prisma.AvisProduitCreateWithoutProduitInput[] | Prisma.AvisProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutProduitInput | Prisma.AvisProduitCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.AvisProduitCreateManyProduitInputEnvelope;
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
};
export type AvisProduitUncheckedCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutProduitInput, Prisma.AvisProduitUncheckedCreateWithoutProduitInput> | Prisma.AvisProduitCreateWithoutProduitInput[] | Prisma.AvisProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutProduitInput | Prisma.AvisProduitCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.AvisProduitCreateManyProduitInputEnvelope;
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
};
export type AvisProduitUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutProduitInput, Prisma.AvisProduitUncheckedCreateWithoutProduitInput> | Prisma.AvisProduitCreateWithoutProduitInput[] | Prisma.AvisProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutProduitInput | Prisma.AvisProduitCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.AvisProduitUpsertWithWhereUniqueWithoutProduitInput | Prisma.AvisProduitUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.AvisProduitCreateManyProduitInputEnvelope;
    set?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    disconnect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    delete?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    update?: Prisma.AvisProduitUpdateWithWhereUniqueWithoutProduitInput | Prisma.AvisProduitUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.AvisProduitUpdateManyWithWhereWithoutProduitInput | Prisma.AvisProduitUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.AvisProduitScalarWhereInput | Prisma.AvisProduitScalarWhereInput[];
};
export type AvisProduitUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.AvisProduitCreateWithoutProduitInput, Prisma.AvisProduitUncheckedCreateWithoutProduitInput> | Prisma.AvisProduitCreateWithoutProduitInput[] | Prisma.AvisProduitUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.AvisProduitCreateOrConnectWithoutProduitInput | Prisma.AvisProduitCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.AvisProduitUpsertWithWhereUniqueWithoutProduitInput | Prisma.AvisProduitUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.AvisProduitCreateManyProduitInputEnvelope;
    set?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    disconnect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    delete?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    connect?: Prisma.AvisProduitWhereUniqueInput | Prisma.AvisProduitWhereUniqueInput[];
    update?: Prisma.AvisProduitUpdateWithWhereUniqueWithoutProduitInput | Prisma.AvisProduitUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.AvisProduitUpdateManyWithWhereWithoutProduitInput | Prisma.AvisProduitUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.AvisProduitScalarWhereInput | Prisma.AvisProduitScalarWhereInput[];
};
export type AvisProduitCreateWithoutClientInput = {
    id?: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.ProduitCreateNestedOneWithoutAvisProduitInput;
};
export type AvisProduitUncheckedCreateWithoutClientInput = {
    id?: string;
    produitId: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisProduitCreateOrConnectWithoutClientInput = {
    where: Prisma.AvisProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvisProduitCreateWithoutClientInput, Prisma.AvisProduitUncheckedCreateWithoutClientInput>;
};
export type AvisProduitCreateManyClientInputEnvelope = {
    data: Prisma.AvisProduitCreateManyClientInput | Prisma.AvisProduitCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type AvisProduitUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.AvisProduitWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvisProduitUpdateWithoutClientInput, Prisma.AvisProduitUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.AvisProduitCreateWithoutClientInput, Prisma.AvisProduitUncheckedCreateWithoutClientInput>;
};
export type AvisProduitUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.AvisProduitWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvisProduitUpdateWithoutClientInput, Prisma.AvisProduitUncheckedUpdateWithoutClientInput>;
};
export type AvisProduitUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.AvisProduitScalarWhereInput;
    data: Prisma.XOR<Prisma.AvisProduitUpdateManyMutationInput, Prisma.AvisProduitUncheckedUpdateManyWithoutClientInput>;
};
export type AvisProduitScalarWhereInput = {
    AND?: Prisma.AvisProduitScalarWhereInput | Prisma.AvisProduitScalarWhereInput[];
    OR?: Prisma.AvisProduitScalarWhereInput[];
    NOT?: Prisma.AvisProduitScalarWhereInput | Prisma.AvisProduitScalarWhereInput[];
    id?: Prisma.StringFilter<"AvisProduit"> | string;
    clientId?: Prisma.StringFilter<"AvisProduit"> | string;
    produitId?: Prisma.StringFilter<"AvisProduit"> | string;
    rating?: Prisma.IntFilter<"AvisProduit"> | number;
    createdAt?: Prisma.DateTimeFilter<"AvisProduit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AvisProduit"> | Date | string;
};
export type AvisProduitCreateWithoutProduitInput = {
    id?: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutAvisProduitInput;
};
export type AvisProduitUncheckedCreateWithoutProduitInput = {
    id?: string;
    clientId: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisProduitCreateOrConnectWithoutProduitInput = {
    where: Prisma.AvisProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvisProduitCreateWithoutProduitInput, Prisma.AvisProduitUncheckedCreateWithoutProduitInput>;
};
export type AvisProduitCreateManyProduitInputEnvelope = {
    data: Prisma.AvisProduitCreateManyProduitInput | Prisma.AvisProduitCreateManyProduitInput[];
    skipDuplicates?: boolean;
};
export type AvisProduitUpsertWithWhereUniqueWithoutProduitInput = {
    where: Prisma.AvisProduitWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvisProduitUpdateWithoutProduitInput, Prisma.AvisProduitUncheckedUpdateWithoutProduitInput>;
    create: Prisma.XOR<Prisma.AvisProduitCreateWithoutProduitInput, Prisma.AvisProduitUncheckedCreateWithoutProduitInput>;
};
export type AvisProduitUpdateWithWhereUniqueWithoutProduitInput = {
    where: Prisma.AvisProduitWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvisProduitUpdateWithoutProduitInput, Prisma.AvisProduitUncheckedUpdateWithoutProduitInput>;
};
export type AvisProduitUpdateManyWithWhereWithoutProduitInput = {
    where: Prisma.AvisProduitScalarWhereInput;
    data: Prisma.XOR<Prisma.AvisProduitUpdateManyMutationInput, Prisma.AvisProduitUncheckedUpdateManyWithoutProduitInput>;
};
export type AvisProduitCreateManyClientInput = {
    id?: string;
    produitId: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisProduitUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.ProduitUpdateOneRequiredWithoutAvisProduitNestedInput;
};
export type AvisProduitUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitCreateManyProduitInput = {
    id?: string;
    clientId: string;
    rating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvisProduitUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutAvisProduitNestedInput;
};
export type AvisProduitUncheckedUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitUncheckedUpdateManyWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvisProduitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    produitId?: boolean;
    rating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avisProduit"]>;
export type AvisProduitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    produitId?: boolean;
    rating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avisProduit"]>;
export type AvisProduitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    produitId?: boolean;
    rating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avisProduit"]>;
export type AvisProduitSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    produitId?: boolean;
    rating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AvisProduitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "produitId" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["avisProduit"]>;
export type AvisProduitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
};
export type AvisProduitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
};
export type AvisProduitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.ProduitDefaultArgs<ExtArgs>;
};
export type $AvisProduitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvisProduit";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
        produit: Prisma.$ProduitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        produitId: string;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["avisProduit"]>;
    composites: {};
};
export type AvisProduitGetPayload<S extends boolean | null | undefined | AvisProduitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload, S>;
export type AvisProduitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvisProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvisProduitCountAggregateInputType | true;
};
export interface AvisProduitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvisProduit'];
        meta: {
            name: 'AvisProduit';
        };
    };
    findUnique<T extends AvisProduitFindUniqueArgs>(args: Prisma.SelectSubset<T, AvisProduitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AvisProduitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvisProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AvisProduitFindFirstArgs>(args?: Prisma.SelectSubset<T, AvisProduitFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AvisProduitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvisProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AvisProduitFindManyArgs>(args?: Prisma.SelectSubset<T, AvisProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AvisProduitCreateArgs>(args: Prisma.SelectSubset<T, AvisProduitCreateArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AvisProduitCreateManyArgs>(args?: Prisma.SelectSubset<T, AvisProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AvisProduitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvisProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AvisProduitDeleteArgs>(args: Prisma.SelectSubset<T, AvisProduitDeleteArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AvisProduitUpdateArgs>(args: Prisma.SelectSubset<T, AvisProduitUpdateArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AvisProduitDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvisProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AvisProduitUpdateManyArgs>(args: Prisma.SelectSubset<T, AvisProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AvisProduitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvisProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AvisProduitUpsertArgs>(args: Prisma.SelectSubset<T, AvisProduitUpsertArgs<ExtArgs>>): Prisma.Prisma__AvisProduitClient<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AvisProduitCountArgs>(args?: Prisma.Subset<T, AvisProduitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvisProduitCountAggregateOutputType> : number>;
    aggregate<T extends AvisProduitAggregateArgs>(args: Prisma.Subset<T, AvisProduitAggregateArgs>): Prisma.PrismaPromise<GetAvisProduitAggregateType<T>>;
    groupBy<T extends AvisProduitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvisProduitGroupByArgs['orderBy'];
    } : {
        orderBy?: AvisProduitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvisProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AvisProduitFieldRefs;
}
export interface Prisma__AvisProduitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    produit<T extends Prisma.ProduitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProduitDefaultArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AvisProduitFieldRefs {
    readonly id: Prisma.FieldRef<"AvisProduit", 'String'>;
    readonly clientId: Prisma.FieldRef<"AvisProduit", 'String'>;
    readonly produitId: Prisma.FieldRef<"AvisProduit", 'String'>;
    readonly rating: Prisma.FieldRef<"AvisProduit", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"AvisProduit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AvisProduit", 'DateTime'>;
}
export type AvisProduitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    where: Prisma.AvisProduitWhereUniqueInput;
};
export type AvisProduitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    where: Prisma.AvisProduitWhereUniqueInput;
};
export type AvisProduitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AvisProduitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AvisProduitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AvisProduitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvisProduitCreateInput, Prisma.AvisProduitUncheckedCreateInput>;
};
export type AvisProduitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AvisProduitCreateManyInput | Prisma.AvisProduitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AvisProduitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    data: Prisma.AvisProduitCreateManyInput | Prisma.AvisProduitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AvisProduitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AvisProduitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvisProduitUpdateInput, Prisma.AvisProduitUncheckedUpdateInput>;
    where: Prisma.AvisProduitWhereUniqueInput;
};
export type AvisProduitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AvisProduitUpdateManyMutationInput, Prisma.AvisProduitUncheckedUpdateManyInput>;
    where?: Prisma.AvisProduitWhereInput;
    limit?: number;
};
export type AvisProduitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvisProduitUpdateManyMutationInput, Prisma.AvisProduitUncheckedUpdateManyInput>;
    where?: Prisma.AvisProduitWhereInput;
    limit?: number;
    include?: Prisma.AvisProduitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AvisProduitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    where: Prisma.AvisProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvisProduitCreateInput, Prisma.AvisProduitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AvisProduitUpdateInput, Prisma.AvisProduitUncheckedUpdateInput>;
};
export type AvisProduitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
    where: Prisma.AvisProduitWhereUniqueInput;
};
export type AvisProduitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisProduitWhereInput;
    limit?: number;
};
export type AvisProduitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvisProduitSelect<ExtArgs> | null;
    omit?: Prisma.AvisProduitOmit<ExtArgs> | null;
    include?: Prisma.AvisProduitInclude<ExtArgs> | null;
};
//# sourceMappingURL=AvisProduit.d.ts.map