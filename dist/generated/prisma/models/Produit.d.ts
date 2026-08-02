import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ProduitModel = runtime.Types.Result.DefaultSelection<Prisma.$ProduitPayload>;
export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null;
    _avg: ProduitAvgAggregateOutputType | null;
    _sum: ProduitSumAggregateOutputType | null;
    _min: ProduitMinAggregateOutputType | null;
    _max: ProduitMaxAggregateOutputType | null;
};
export type ProduitAvgAggregateOutputType = {
    prix: number | null;
    stock: number | null;
    vues: number | null;
};
export type ProduitSumAggregateOutputType = {
    prix: number | null;
    stock: number | null;
    vues: number | null;
};
export type ProduitMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    quantite: string | null;
    description: string | null;
    prix: number | null;
    stock: number | null;
    image: string | null;
    vues: number | null;
    statut: $Enums.StatutProduit | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    gieId: string | null;
    categorieId: string | null;
};
export type ProduitMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    quantite: string | null;
    description: string | null;
    prix: number | null;
    stock: number | null;
    image: string | null;
    vues: number | null;
    statut: $Enums.StatutProduit | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    gieId: string | null;
    categorieId: string | null;
};
export type ProduitCountAggregateOutputType = {
    id: number;
    nom: number;
    quantite: number;
    description: number;
    prix: number;
    stock: number;
    image: number;
    vues: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    gieId: number;
    categorieId: number;
    _all: number;
};
export type ProduitAvgAggregateInputType = {
    prix?: true;
    stock?: true;
    vues?: true;
};
export type ProduitSumAggregateInputType = {
    prix?: true;
    stock?: true;
    vues?: true;
};
export type ProduitMinAggregateInputType = {
    id?: true;
    nom?: true;
    quantite?: true;
    description?: true;
    prix?: true;
    stock?: true;
    image?: true;
    vues?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    gieId?: true;
    categorieId?: true;
};
export type ProduitMaxAggregateInputType = {
    id?: true;
    nom?: true;
    quantite?: true;
    description?: true;
    prix?: true;
    stock?: true;
    image?: true;
    vues?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    gieId?: true;
    categorieId?: true;
};
export type ProduitCountAggregateInputType = {
    id?: true;
    nom?: true;
    quantite?: true;
    description?: true;
    prix?: true;
    stock?: true;
    image?: true;
    vues?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    gieId?: true;
    categorieId?: true;
    _all?: true;
};
export type ProduitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProduitWhereInput;
    orderBy?: Prisma.ProduitOrderByWithRelationInput | Prisma.ProduitOrderByWithRelationInput[];
    cursor?: Prisma.ProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProduitCountAggregateInputType;
    _avg?: ProduitAvgAggregateInputType;
    _sum?: ProduitSumAggregateInputType;
    _min?: ProduitMinAggregateInputType;
    _max?: ProduitMaxAggregateInputType;
};
export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
    [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduit[P]> : Prisma.GetScalarType<T[P], AggregateProduit[P]>;
};
export type ProduitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProduitWhereInput;
    orderBy?: Prisma.ProduitOrderByWithAggregationInput | Prisma.ProduitOrderByWithAggregationInput[];
    by: Prisma.ProduitScalarFieldEnum[] | Prisma.ProduitScalarFieldEnum;
    having?: Prisma.ProduitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProduitCountAggregateInputType | true;
    _avg?: ProduitAvgAggregateInputType;
    _sum?: ProduitSumAggregateInputType;
    _min?: ProduitMinAggregateInputType;
    _max?: ProduitMaxAggregateInputType;
};
export type ProduitGroupByOutputType = {
    id: string;
    nom: string;
    quantite: string;
    description: string | null;
    prix: number;
    stock: number;
    image: string | null;
    vues: number;
    statut: $Enums.StatutProduit;
    createdAt: Date;
    updatedAt: Date;
    gieId: string;
    categorieId: string | null;
    _count: ProduitCountAggregateOutputType | null;
    _avg: ProduitAvgAggregateOutputType | null;
    _sum: ProduitSumAggregateOutputType | null;
    _min: ProduitMinAggregateOutputType | null;
    _max: ProduitMaxAggregateOutputType | null;
};
export type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProduitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProduitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProduitGroupByOutputType[P]>;
}>>;
export type ProduitWhereInput = {
    AND?: Prisma.ProduitWhereInput | Prisma.ProduitWhereInput[];
    OR?: Prisma.ProduitWhereInput[];
    NOT?: Prisma.ProduitWhereInput | Prisma.ProduitWhereInput[];
    id?: Prisma.StringFilter<"Produit"> | string;
    nom?: Prisma.StringFilter<"Produit"> | string;
    quantite?: Prisma.StringFilter<"Produit"> | string;
    description?: Prisma.StringNullableFilter<"Produit"> | string | null;
    prix?: Prisma.FloatFilter<"Produit"> | number;
    stock?: Prisma.IntFilter<"Produit"> | number;
    image?: Prisma.StringNullableFilter<"Produit"> | string | null;
    vues?: Prisma.IntFilter<"Produit"> | number;
    statut?: Prisma.EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFilter<"Produit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Produit"> | Date | string;
    gieId?: Prisma.StringFilter<"Produit"> | string;
    categorieId?: Prisma.StringNullableFilter<"Produit"> | string | null;
    panierProduits?: Prisma.PanierProduitListRelationFilter;
    categorie?: Prisma.XOR<Prisma.CategorieNullableScalarRelationFilter, Prisma.CategorieWhereInput> | null;
    gie?: Prisma.XOR<Prisma.GIEScalarRelationFilter, Prisma.GIEWhereInput>;
    avisProduit?: Prisma.AvisProduitListRelationFilter;
};
export type ProduitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    vues?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    gieId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrderInput | Prisma.SortOrder;
    panierProduits?: Prisma.PanierProduitOrderByRelationAggregateInput;
    categorie?: Prisma.CategorieOrderByWithRelationInput;
    gie?: Prisma.GIEOrderByWithRelationInput;
    avisProduit?: Prisma.AvisProduitOrderByRelationAggregateInput;
};
export type ProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProduitWhereInput | Prisma.ProduitWhereInput[];
    OR?: Prisma.ProduitWhereInput[];
    NOT?: Prisma.ProduitWhereInput | Prisma.ProduitWhereInput[];
    nom?: Prisma.StringFilter<"Produit"> | string;
    quantite?: Prisma.StringFilter<"Produit"> | string;
    description?: Prisma.StringNullableFilter<"Produit"> | string | null;
    prix?: Prisma.FloatFilter<"Produit"> | number;
    stock?: Prisma.IntFilter<"Produit"> | number;
    image?: Prisma.StringNullableFilter<"Produit"> | string | null;
    vues?: Prisma.IntFilter<"Produit"> | number;
    statut?: Prisma.EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFilter<"Produit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Produit"> | Date | string;
    gieId?: Prisma.StringFilter<"Produit"> | string;
    categorieId?: Prisma.StringNullableFilter<"Produit"> | string | null;
    panierProduits?: Prisma.PanierProduitListRelationFilter;
    categorie?: Prisma.XOR<Prisma.CategorieNullableScalarRelationFilter, Prisma.CategorieWhereInput> | null;
    gie?: Prisma.XOR<Prisma.GIEScalarRelationFilter, Prisma.GIEWhereInput>;
    avisProduit?: Prisma.AvisProduitListRelationFilter;
}, "id">;
export type ProduitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    vues?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    gieId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProduitCountOrderByAggregateInput;
    _avg?: Prisma.ProduitAvgOrderByAggregateInput;
    _max?: Prisma.ProduitMaxOrderByAggregateInput;
    _min?: Prisma.ProduitMinOrderByAggregateInput;
    _sum?: Prisma.ProduitSumOrderByAggregateInput;
};
export type ProduitScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProduitScalarWhereWithAggregatesInput | Prisma.ProduitScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProduitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProduitScalarWhereWithAggregatesInput | Prisma.ProduitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Produit"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Produit"> | string;
    quantite?: Prisma.StringWithAggregatesFilter<"Produit"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Produit"> | string | null;
    prix?: Prisma.FloatWithAggregatesFilter<"Produit"> | number;
    stock?: Prisma.IntWithAggregatesFilter<"Produit"> | number;
    image?: Prisma.StringNullableWithAggregatesFilter<"Produit"> | string | null;
    vues?: Prisma.IntWithAggregatesFilter<"Produit"> | number;
    statut?: Prisma.EnumStatutProduitWithAggregatesFilter<"Produit"> | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Produit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Produit"> | Date | string;
    gieId?: Prisma.StringWithAggregatesFilter<"Produit"> | string;
    categorieId?: Prisma.StringNullableWithAggregatesFilter<"Produit"> | string | null;
};
export type ProduitCreateInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutProduitInput;
    categorie?: Prisma.CategorieCreateNestedOneWithoutProduitsInput;
    gie: Prisma.GIECreateNestedOneWithoutProduitsInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutProduitInput;
};
export type ProduitUncheckedCreateInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gieId: string;
    categorieId?: string | null;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutProduitInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutProduitInput;
};
export type ProduitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutProduitNestedInput;
    categorie?: Prisma.CategorieUpdateOneWithoutProduitsNestedInput;
    gie?: Prisma.GIEUpdateOneRequiredWithoutProduitsNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutProduitNestedInput;
};
export type ProduitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gieId?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutProduitNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutProduitNestedInput;
};
export type ProduitCreateManyInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gieId: string;
    categorieId?: string | null;
};
export type ProduitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProduitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gieId?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProduitScalarRelationFilter = {
    is?: Prisma.ProduitWhereInput;
    isNot?: Prisma.ProduitWhereInput;
};
export type ProduitListRelationFilter = {
    every?: Prisma.ProduitWhereInput;
    some?: Prisma.ProduitWhereInput;
    none?: Prisma.ProduitWhereInput;
};
export type ProduitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProduitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    vues?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    gieId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type ProduitAvgOrderByAggregateInput = {
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    vues?: Prisma.SortOrder;
};
export type ProduitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    vues?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    gieId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type ProduitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    vues?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    gieId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type ProduitSumOrderByAggregateInput = {
    prix?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    vues?: Prisma.SortOrder;
};
export type ProduitCreateNestedOneWithoutAvisProduitInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutAvisProduitInput, Prisma.ProduitUncheckedCreateWithoutAvisProduitInput>;
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutAvisProduitInput;
    connect?: Prisma.ProduitWhereUniqueInput;
};
export type ProduitUpdateOneRequiredWithoutAvisProduitNestedInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutAvisProduitInput, Prisma.ProduitUncheckedCreateWithoutAvisProduitInput>;
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutAvisProduitInput;
    upsert?: Prisma.ProduitUpsertWithoutAvisProduitInput;
    connect?: Prisma.ProduitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProduitUpdateToOneWithWhereWithoutAvisProduitInput, Prisma.ProduitUpdateWithoutAvisProduitInput>, Prisma.ProduitUncheckedUpdateWithoutAvisProduitInput>;
};
export type ProduitCreateNestedManyWithoutGieInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutGieInput, Prisma.ProduitUncheckedCreateWithoutGieInput> | Prisma.ProduitCreateWithoutGieInput[] | Prisma.ProduitUncheckedCreateWithoutGieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutGieInput | Prisma.ProduitCreateOrConnectWithoutGieInput[];
    createMany?: Prisma.ProduitCreateManyGieInputEnvelope;
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
};
export type ProduitUncheckedCreateNestedManyWithoutGieInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutGieInput, Prisma.ProduitUncheckedCreateWithoutGieInput> | Prisma.ProduitCreateWithoutGieInput[] | Prisma.ProduitUncheckedCreateWithoutGieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutGieInput | Prisma.ProduitCreateOrConnectWithoutGieInput[];
    createMany?: Prisma.ProduitCreateManyGieInputEnvelope;
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
};
export type ProduitUpdateManyWithoutGieNestedInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutGieInput, Prisma.ProduitUncheckedCreateWithoutGieInput> | Prisma.ProduitCreateWithoutGieInput[] | Prisma.ProduitUncheckedCreateWithoutGieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutGieInput | Prisma.ProduitCreateOrConnectWithoutGieInput[];
    upsert?: Prisma.ProduitUpsertWithWhereUniqueWithoutGieInput | Prisma.ProduitUpsertWithWhereUniqueWithoutGieInput[];
    createMany?: Prisma.ProduitCreateManyGieInputEnvelope;
    set?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    disconnect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    delete?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    update?: Prisma.ProduitUpdateWithWhereUniqueWithoutGieInput | Prisma.ProduitUpdateWithWhereUniqueWithoutGieInput[];
    updateMany?: Prisma.ProduitUpdateManyWithWhereWithoutGieInput | Prisma.ProduitUpdateManyWithWhereWithoutGieInput[];
    deleteMany?: Prisma.ProduitScalarWhereInput | Prisma.ProduitScalarWhereInput[];
};
export type ProduitUncheckedUpdateManyWithoutGieNestedInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutGieInput, Prisma.ProduitUncheckedCreateWithoutGieInput> | Prisma.ProduitCreateWithoutGieInput[] | Prisma.ProduitUncheckedCreateWithoutGieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutGieInput | Prisma.ProduitCreateOrConnectWithoutGieInput[];
    upsert?: Prisma.ProduitUpsertWithWhereUniqueWithoutGieInput | Prisma.ProduitUpsertWithWhereUniqueWithoutGieInput[];
    createMany?: Prisma.ProduitCreateManyGieInputEnvelope;
    set?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    disconnect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    delete?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    update?: Prisma.ProduitUpdateWithWhereUniqueWithoutGieInput | Prisma.ProduitUpdateWithWhereUniqueWithoutGieInput[];
    updateMany?: Prisma.ProduitUpdateManyWithWhereWithoutGieInput | Prisma.ProduitUpdateManyWithWhereWithoutGieInput[];
    deleteMany?: Prisma.ProduitScalarWhereInput | Prisma.ProduitScalarWhereInput[];
};
export type ProduitCreateNestedManyWithoutCategorieInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutCategorieInput, Prisma.ProduitUncheckedCreateWithoutCategorieInput> | Prisma.ProduitCreateWithoutCategorieInput[] | Prisma.ProduitUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutCategorieInput | Prisma.ProduitCreateOrConnectWithoutCategorieInput[];
    createMany?: Prisma.ProduitCreateManyCategorieInputEnvelope;
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
};
export type ProduitUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutCategorieInput, Prisma.ProduitUncheckedCreateWithoutCategorieInput> | Prisma.ProduitCreateWithoutCategorieInput[] | Prisma.ProduitUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutCategorieInput | Prisma.ProduitCreateOrConnectWithoutCategorieInput[];
    createMany?: Prisma.ProduitCreateManyCategorieInputEnvelope;
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
};
export type ProduitUpdateManyWithoutCategorieNestedInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutCategorieInput, Prisma.ProduitUncheckedCreateWithoutCategorieInput> | Prisma.ProduitCreateWithoutCategorieInput[] | Prisma.ProduitUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutCategorieInput | Prisma.ProduitCreateOrConnectWithoutCategorieInput[];
    upsert?: Prisma.ProduitUpsertWithWhereUniqueWithoutCategorieInput | Prisma.ProduitUpsertWithWhereUniqueWithoutCategorieInput[];
    createMany?: Prisma.ProduitCreateManyCategorieInputEnvelope;
    set?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    disconnect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    delete?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    update?: Prisma.ProduitUpdateWithWhereUniqueWithoutCategorieInput | Prisma.ProduitUpdateWithWhereUniqueWithoutCategorieInput[];
    updateMany?: Prisma.ProduitUpdateManyWithWhereWithoutCategorieInput | Prisma.ProduitUpdateManyWithWhereWithoutCategorieInput[];
    deleteMany?: Prisma.ProduitScalarWhereInput | Prisma.ProduitScalarWhereInput[];
};
export type ProduitUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutCategorieInput, Prisma.ProduitUncheckedCreateWithoutCategorieInput> | Prisma.ProduitCreateWithoutCategorieInput[] | Prisma.ProduitUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutCategorieInput | Prisma.ProduitCreateOrConnectWithoutCategorieInput[];
    upsert?: Prisma.ProduitUpsertWithWhereUniqueWithoutCategorieInput | Prisma.ProduitUpsertWithWhereUniqueWithoutCategorieInput[];
    createMany?: Prisma.ProduitCreateManyCategorieInputEnvelope;
    set?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    disconnect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    delete?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    connect?: Prisma.ProduitWhereUniqueInput | Prisma.ProduitWhereUniqueInput[];
    update?: Prisma.ProduitUpdateWithWhereUniqueWithoutCategorieInput | Prisma.ProduitUpdateWithWhereUniqueWithoutCategorieInput[];
    updateMany?: Prisma.ProduitUpdateManyWithWhereWithoutCategorieInput | Prisma.ProduitUpdateManyWithWhereWithoutCategorieInput[];
    deleteMany?: Prisma.ProduitScalarWhereInput | Prisma.ProduitScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumStatutProduitFieldUpdateOperationsInput = {
    set?: $Enums.StatutProduit;
};
export type ProduitCreateNestedOneWithoutPanierProduitsInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutPanierProduitsInput, Prisma.ProduitUncheckedCreateWithoutPanierProduitsInput>;
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutPanierProduitsInput;
    connect?: Prisma.ProduitWhereUniqueInput;
};
export type ProduitUpdateOneRequiredWithoutPanierProduitsNestedInput = {
    create?: Prisma.XOR<Prisma.ProduitCreateWithoutPanierProduitsInput, Prisma.ProduitUncheckedCreateWithoutPanierProduitsInput>;
    connectOrCreate?: Prisma.ProduitCreateOrConnectWithoutPanierProduitsInput;
    upsert?: Prisma.ProduitUpsertWithoutPanierProduitsInput;
    connect?: Prisma.ProduitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProduitUpdateToOneWithWhereWithoutPanierProduitsInput, Prisma.ProduitUpdateWithoutPanierProduitsInput>, Prisma.ProduitUncheckedUpdateWithoutPanierProduitsInput>;
};
export type ProduitCreateWithoutAvisProduitInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutProduitInput;
    categorie?: Prisma.CategorieCreateNestedOneWithoutProduitsInput;
    gie: Prisma.GIECreateNestedOneWithoutProduitsInput;
};
export type ProduitUncheckedCreateWithoutAvisProduitInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gieId: string;
    categorieId?: string | null;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutProduitInput;
};
export type ProduitCreateOrConnectWithoutAvisProduitInput = {
    where: Prisma.ProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutAvisProduitInput, Prisma.ProduitUncheckedCreateWithoutAvisProduitInput>;
};
export type ProduitUpsertWithoutAvisProduitInput = {
    update: Prisma.XOR<Prisma.ProduitUpdateWithoutAvisProduitInput, Prisma.ProduitUncheckedUpdateWithoutAvisProduitInput>;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutAvisProduitInput, Prisma.ProduitUncheckedCreateWithoutAvisProduitInput>;
    where?: Prisma.ProduitWhereInput;
};
export type ProduitUpdateToOneWithWhereWithoutAvisProduitInput = {
    where?: Prisma.ProduitWhereInput;
    data: Prisma.XOR<Prisma.ProduitUpdateWithoutAvisProduitInput, Prisma.ProduitUncheckedUpdateWithoutAvisProduitInput>;
};
export type ProduitUpdateWithoutAvisProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutProduitNestedInput;
    categorie?: Prisma.CategorieUpdateOneWithoutProduitsNestedInput;
    gie?: Prisma.GIEUpdateOneRequiredWithoutProduitsNestedInput;
};
export type ProduitUncheckedUpdateWithoutAvisProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gieId?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutProduitNestedInput;
};
export type ProduitCreateWithoutGieInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutProduitInput;
    categorie?: Prisma.CategorieCreateNestedOneWithoutProduitsInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutProduitInput;
};
export type ProduitUncheckedCreateWithoutGieInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categorieId?: string | null;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutProduitInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutProduitInput;
};
export type ProduitCreateOrConnectWithoutGieInput = {
    where: Prisma.ProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutGieInput, Prisma.ProduitUncheckedCreateWithoutGieInput>;
};
export type ProduitCreateManyGieInputEnvelope = {
    data: Prisma.ProduitCreateManyGieInput | Prisma.ProduitCreateManyGieInput[];
    skipDuplicates?: boolean;
};
export type ProduitUpsertWithWhereUniqueWithoutGieInput = {
    where: Prisma.ProduitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProduitUpdateWithoutGieInput, Prisma.ProduitUncheckedUpdateWithoutGieInput>;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutGieInput, Prisma.ProduitUncheckedCreateWithoutGieInput>;
};
export type ProduitUpdateWithWhereUniqueWithoutGieInput = {
    where: Prisma.ProduitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProduitUpdateWithoutGieInput, Prisma.ProduitUncheckedUpdateWithoutGieInput>;
};
export type ProduitUpdateManyWithWhereWithoutGieInput = {
    where: Prisma.ProduitScalarWhereInput;
    data: Prisma.XOR<Prisma.ProduitUpdateManyMutationInput, Prisma.ProduitUncheckedUpdateManyWithoutGieInput>;
};
export type ProduitScalarWhereInput = {
    AND?: Prisma.ProduitScalarWhereInput | Prisma.ProduitScalarWhereInput[];
    OR?: Prisma.ProduitScalarWhereInput[];
    NOT?: Prisma.ProduitScalarWhereInput | Prisma.ProduitScalarWhereInput[];
    id?: Prisma.StringFilter<"Produit"> | string;
    nom?: Prisma.StringFilter<"Produit"> | string;
    quantite?: Prisma.StringFilter<"Produit"> | string;
    description?: Prisma.StringNullableFilter<"Produit"> | string | null;
    prix?: Prisma.FloatFilter<"Produit"> | number;
    stock?: Prisma.IntFilter<"Produit"> | number;
    image?: Prisma.StringNullableFilter<"Produit"> | string | null;
    vues?: Prisma.IntFilter<"Produit"> | number;
    statut?: Prisma.EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFilter<"Produit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Produit"> | Date | string;
    gieId?: Prisma.StringFilter<"Produit"> | string;
    categorieId?: Prisma.StringNullableFilter<"Produit"> | string | null;
};
export type ProduitCreateWithoutCategorieInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    panierProduits?: Prisma.PanierProduitCreateNestedManyWithoutProduitInput;
    gie: Prisma.GIECreateNestedOneWithoutProduitsInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutProduitInput;
};
export type ProduitUncheckedCreateWithoutCategorieInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gieId: string;
    panierProduits?: Prisma.PanierProduitUncheckedCreateNestedManyWithoutProduitInput;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutProduitInput;
};
export type ProduitCreateOrConnectWithoutCategorieInput = {
    where: Prisma.ProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutCategorieInput, Prisma.ProduitUncheckedCreateWithoutCategorieInput>;
};
export type ProduitCreateManyCategorieInputEnvelope = {
    data: Prisma.ProduitCreateManyCategorieInput | Prisma.ProduitCreateManyCategorieInput[];
    skipDuplicates?: boolean;
};
export type ProduitUpsertWithWhereUniqueWithoutCategorieInput = {
    where: Prisma.ProduitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProduitUpdateWithoutCategorieInput, Prisma.ProduitUncheckedUpdateWithoutCategorieInput>;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutCategorieInput, Prisma.ProduitUncheckedCreateWithoutCategorieInput>;
};
export type ProduitUpdateWithWhereUniqueWithoutCategorieInput = {
    where: Prisma.ProduitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProduitUpdateWithoutCategorieInput, Prisma.ProduitUncheckedUpdateWithoutCategorieInput>;
};
export type ProduitUpdateManyWithWhereWithoutCategorieInput = {
    where: Prisma.ProduitScalarWhereInput;
    data: Prisma.XOR<Prisma.ProduitUpdateManyMutationInput, Prisma.ProduitUncheckedUpdateManyWithoutCategorieInput>;
};
export type ProduitCreateWithoutPanierProduitsInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categorie?: Prisma.CategorieCreateNestedOneWithoutProduitsInput;
    gie: Prisma.GIECreateNestedOneWithoutProduitsInput;
    avisProduit?: Prisma.AvisProduitCreateNestedManyWithoutProduitInput;
};
export type ProduitUncheckedCreateWithoutPanierProduitsInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gieId: string;
    categorieId?: string | null;
    avisProduit?: Prisma.AvisProduitUncheckedCreateNestedManyWithoutProduitInput;
};
export type ProduitCreateOrConnectWithoutPanierProduitsInput = {
    where: Prisma.ProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutPanierProduitsInput, Prisma.ProduitUncheckedCreateWithoutPanierProduitsInput>;
};
export type ProduitUpsertWithoutPanierProduitsInput = {
    update: Prisma.XOR<Prisma.ProduitUpdateWithoutPanierProduitsInput, Prisma.ProduitUncheckedUpdateWithoutPanierProduitsInput>;
    create: Prisma.XOR<Prisma.ProduitCreateWithoutPanierProduitsInput, Prisma.ProduitUncheckedCreateWithoutPanierProduitsInput>;
    where?: Prisma.ProduitWhereInput;
};
export type ProduitUpdateToOneWithWhereWithoutPanierProduitsInput = {
    where?: Prisma.ProduitWhereInput;
    data: Prisma.XOR<Prisma.ProduitUpdateWithoutPanierProduitsInput, Prisma.ProduitUncheckedUpdateWithoutPanierProduitsInput>;
};
export type ProduitUpdateWithoutPanierProduitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categorie?: Prisma.CategorieUpdateOneWithoutProduitsNestedInput;
    gie?: Prisma.GIEUpdateOneRequiredWithoutProduitsNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutProduitNestedInput;
};
export type ProduitUncheckedUpdateWithoutPanierProduitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gieId?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutProduitNestedInput;
};
export type ProduitCreateManyGieInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categorieId?: string | null;
};
export type ProduitUpdateWithoutGieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutProduitNestedInput;
    categorie?: Prisma.CategorieUpdateOneWithoutProduitsNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutProduitNestedInput;
};
export type ProduitUncheckedUpdateWithoutGieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categorieId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutProduitNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutProduitNestedInput;
};
export type ProduitUncheckedUpdateManyWithoutGieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categorieId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProduitCreateManyCategorieInput = {
    id?: string;
    nom: string;
    quantite?: string;
    description?: string | null;
    prix: number;
    stock?: number;
    image?: string | null;
    vues?: number;
    statut?: $Enums.StatutProduit;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gieId: string;
};
export type ProduitUpdateWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panierProduits?: Prisma.PanierProduitUpdateManyWithoutProduitNestedInput;
    gie?: Prisma.GIEUpdateOneRequiredWithoutProduitsNestedInput;
    avisProduit?: Prisma.AvisProduitUpdateManyWithoutProduitNestedInput;
};
export type ProduitUncheckedUpdateWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gieId?: Prisma.StringFieldUpdateOperationsInput | string;
    panierProduits?: Prisma.PanierProduitUncheckedUpdateManyWithoutProduitNestedInput;
    avisProduit?: Prisma.AvisProduitUncheckedUpdateManyWithoutProduitNestedInput;
};
export type ProduitUncheckedUpdateManyWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prix?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vues?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gieId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProduitCountOutputType = {
    panierProduits: number;
    avisProduit: number;
};
export type ProduitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    panierProduits?: boolean | ProduitCountOutputTypeCountPanierProduitsArgs;
    avisProduit?: boolean | ProduitCountOutputTypeCountAvisProduitArgs;
};
export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitCountOutputTypeSelect<ExtArgs> | null;
};
export type ProduitCountOutputTypeCountPanierProduitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PanierProduitWhereInput;
};
export type ProduitCountOutputTypeCountAvisProduitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvisProduitWhereInput;
};
export type ProduitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    quantite?: boolean;
    description?: boolean;
    prix?: boolean;
    stock?: boolean;
    image?: boolean;
    vues?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    gieId?: boolean;
    categorieId?: boolean;
    panierProduits?: boolean | Prisma.Produit$panierProduitsArgs<ExtArgs>;
    categorie?: boolean | Prisma.Produit$categorieArgs<ExtArgs>;
    gie?: boolean | Prisma.GIEDefaultArgs<ExtArgs>;
    avisProduit?: boolean | Prisma.Produit$avisProduitArgs<ExtArgs>;
    _count?: boolean | Prisma.ProduitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produit"]>;
export type ProduitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    quantite?: boolean;
    description?: boolean;
    prix?: boolean;
    stock?: boolean;
    image?: boolean;
    vues?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    gieId?: boolean;
    categorieId?: boolean;
    categorie?: boolean | Prisma.Produit$categorieArgs<ExtArgs>;
    gie?: boolean | Prisma.GIEDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produit"]>;
export type ProduitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    quantite?: boolean;
    description?: boolean;
    prix?: boolean;
    stock?: boolean;
    image?: boolean;
    vues?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    gieId?: boolean;
    categorieId?: boolean;
    categorie?: boolean | Prisma.Produit$categorieArgs<ExtArgs>;
    gie?: boolean | Prisma.GIEDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produit"]>;
export type ProduitSelectScalar = {
    id?: boolean;
    nom?: boolean;
    quantite?: boolean;
    description?: boolean;
    prix?: boolean;
    stock?: boolean;
    image?: boolean;
    vues?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    gieId?: boolean;
    categorieId?: boolean;
};
export type ProduitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "quantite" | "description" | "prix" | "stock" | "image" | "vues" | "statut" | "createdAt" | "updatedAt" | "gieId" | "categorieId", ExtArgs["result"]["produit"]>;
export type ProduitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    panierProduits?: boolean | Prisma.Produit$panierProduitsArgs<ExtArgs>;
    categorie?: boolean | Prisma.Produit$categorieArgs<ExtArgs>;
    gie?: boolean | Prisma.GIEDefaultArgs<ExtArgs>;
    avisProduit?: boolean | Prisma.Produit$avisProduitArgs<ExtArgs>;
    _count?: boolean | Prisma.ProduitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProduitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.Produit$categorieArgs<ExtArgs>;
    gie?: boolean | Prisma.GIEDefaultArgs<ExtArgs>;
};
export type ProduitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.Produit$categorieArgs<ExtArgs>;
    gie?: boolean | Prisma.GIEDefaultArgs<ExtArgs>;
};
export type $ProduitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Produit";
    objects: {
        panierProduits: Prisma.$PanierProduitPayload<ExtArgs>[];
        categorie: Prisma.$CategoriePayload<ExtArgs> | null;
        gie: Prisma.$GIEPayload<ExtArgs>;
        avisProduit: Prisma.$AvisProduitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        quantite: string;
        description: string | null;
        prix: number;
        stock: number;
        image: string | null;
        vues: number;
        statut: $Enums.StatutProduit;
        createdAt: Date;
        updatedAt: Date;
        gieId: string;
        categorieId: string | null;
    }, ExtArgs["result"]["produit"]>;
    composites: {};
};
export type ProduitGetPayload<S extends boolean | null | undefined | ProduitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProduitPayload, S>;
export type ProduitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProduitCountAggregateInputType | true;
};
export interface ProduitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Produit'];
        meta: {
            name: 'Produit';
        };
    };
    findUnique<T extends ProduitFindUniqueArgs>(args: Prisma.SelectSubset<T, ProduitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProduitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProduitFindFirstArgs>(args?: Prisma.SelectSubset<T, ProduitFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProduitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProduitFindManyArgs>(args?: Prisma.SelectSubset<T, ProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProduitCreateArgs>(args: Prisma.SelectSubset<T, ProduitCreateArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProduitCreateManyArgs>(args?: Prisma.SelectSubset<T, ProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProduitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProduitDeleteArgs>(args: Prisma.SelectSubset<T, ProduitDeleteArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProduitUpdateArgs>(args: Prisma.SelectSubset<T, ProduitUpdateArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProduitDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProduitUpdateManyArgs>(args: Prisma.SelectSubset<T, ProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProduitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProduitUpsertArgs>(args: Prisma.SelectSubset<T, ProduitUpsertArgs<ExtArgs>>): Prisma.Prisma__ProduitClient<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProduitCountArgs>(args?: Prisma.Subset<T, ProduitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProduitCountAggregateOutputType> : number>;
    aggregate<T extends ProduitAggregateArgs>(args: Prisma.Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>;
    groupBy<T extends ProduitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProduitGroupByArgs['orderBy'];
    } : {
        orderBy?: ProduitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProduitFieldRefs;
}
export interface Prisma__ProduitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    panierProduits<T extends Prisma.Produit$panierProduitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produit$panierProduitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    categorie<T extends Prisma.Produit$categorieArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produit$categorieArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    gie<T extends Prisma.GIEDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GIEDefaultArgs<ExtArgs>>): Prisma.Prisma__GIEClient<runtime.Types.Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    avisProduit<T extends Prisma.Produit$avisProduitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produit$avisProduitArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProduitFieldRefs {
    readonly id: Prisma.FieldRef<"Produit", 'String'>;
    readonly nom: Prisma.FieldRef<"Produit", 'String'>;
    readonly quantite: Prisma.FieldRef<"Produit", 'String'>;
    readonly description: Prisma.FieldRef<"Produit", 'String'>;
    readonly prix: Prisma.FieldRef<"Produit", 'Float'>;
    readonly stock: Prisma.FieldRef<"Produit", 'Int'>;
    readonly image: Prisma.FieldRef<"Produit", 'String'>;
    readonly vues: Prisma.FieldRef<"Produit", 'Int'>;
    readonly statut: Prisma.FieldRef<"Produit", 'StatutProduit'>;
    readonly createdAt: Prisma.FieldRef<"Produit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Produit", 'DateTime'>;
    readonly gieId: Prisma.FieldRef<"Produit", 'String'>;
    readonly categorieId: Prisma.FieldRef<"Produit", 'String'>;
}
export type ProduitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where: Prisma.ProduitWhereUniqueInput;
};
export type ProduitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where: Prisma.ProduitWhereUniqueInput;
};
export type ProduitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where?: Prisma.ProduitWhereInput;
    orderBy?: Prisma.ProduitOrderByWithRelationInput | Prisma.ProduitOrderByWithRelationInput[];
    cursor?: Prisma.ProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProduitScalarFieldEnum | Prisma.ProduitScalarFieldEnum[];
};
export type ProduitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where?: Prisma.ProduitWhereInput;
    orderBy?: Prisma.ProduitOrderByWithRelationInput | Prisma.ProduitOrderByWithRelationInput[];
    cursor?: Prisma.ProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProduitScalarFieldEnum | Prisma.ProduitScalarFieldEnum[];
};
export type ProduitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where?: Prisma.ProduitWhereInput;
    orderBy?: Prisma.ProduitOrderByWithRelationInput | Prisma.ProduitOrderByWithRelationInput[];
    cursor?: Prisma.ProduitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProduitScalarFieldEnum | Prisma.ProduitScalarFieldEnum[];
};
export type ProduitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProduitCreateInput, Prisma.ProduitUncheckedCreateInput>;
};
export type ProduitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProduitCreateManyInput | Prisma.ProduitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProduitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    data: Prisma.ProduitCreateManyInput | Prisma.ProduitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProduitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProduitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProduitUpdateInput, Prisma.ProduitUncheckedUpdateInput>;
    where: Prisma.ProduitWhereUniqueInput;
};
export type ProduitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProduitUpdateManyMutationInput, Prisma.ProduitUncheckedUpdateManyInput>;
    where?: Prisma.ProduitWhereInput;
    limit?: number;
};
export type ProduitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProduitUpdateManyMutationInput, Prisma.ProduitUncheckedUpdateManyInput>;
    where?: Prisma.ProduitWhereInput;
    limit?: number;
    include?: Prisma.ProduitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProduitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where: Prisma.ProduitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProduitCreateInput, Prisma.ProduitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProduitUpdateInput, Prisma.ProduitUncheckedUpdateInput>;
};
export type ProduitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
    where: Prisma.ProduitWhereUniqueInput;
};
export type ProduitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProduitWhereInput;
    limit?: number;
};
export type Produit$panierProduitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Produit$categorieArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where?: Prisma.CategorieWhereInput;
};
export type Produit$avisProduitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProduitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProduitSelect<ExtArgs> | null;
    omit?: Prisma.ProduitOmit<ExtArgs> | null;
    include?: Prisma.ProduitInclude<ExtArgs> | null;
};
//# sourceMappingURL=Produit.d.ts.map