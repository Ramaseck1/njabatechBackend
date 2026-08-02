import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CategorieModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriePayload>;
export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null;
    _min: CategorieMinAggregateOutputType | null;
    _max: CategorieMaxAggregateOutputType | null;
};
export type CategorieMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    description: string | null;
    conservation: string | null;
    couleur: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    image: string | null;
};
export type CategorieMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    description: string | null;
    conservation: string | null;
    couleur: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    image: string | null;
};
export type CategorieCountAggregateOutputType = {
    id: number;
    nom: number;
    description: number;
    conservation: number;
    couleur: number;
    createdAt: number;
    updatedAt: number;
    image: number;
    _all: number;
};
export type CategorieMinAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    conservation?: true;
    couleur?: true;
    createdAt?: true;
    updatedAt?: true;
    image?: true;
};
export type CategorieMaxAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    conservation?: true;
    couleur?: true;
    createdAt?: true;
    updatedAt?: true;
    image?: true;
};
export type CategorieCountAggregateInputType = {
    id?: true;
    nom?: true;
    description?: true;
    conservation?: true;
    couleur?: true;
    createdAt?: true;
    updatedAt?: true;
    image?: true;
    _all?: true;
};
export type CategorieAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategorieWhereInput;
    orderBy?: Prisma.CategorieOrderByWithRelationInput | Prisma.CategorieOrderByWithRelationInput[];
    cursor?: Prisma.CategorieWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategorieCountAggregateInputType;
    _min?: CategorieMinAggregateInputType;
    _max?: CategorieMaxAggregateInputType;
};
export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
    [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategorie[P]> : Prisma.GetScalarType<T[P], AggregateCategorie[P]>;
};
export type CategorieGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategorieWhereInput;
    orderBy?: Prisma.CategorieOrderByWithAggregationInput | Prisma.CategorieOrderByWithAggregationInput[];
    by: Prisma.CategorieScalarFieldEnum[] | Prisma.CategorieScalarFieldEnum;
    having?: Prisma.CategorieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategorieCountAggregateInputType | true;
    _min?: CategorieMinAggregateInputType;
    _max?: CategorieMaxAggregateInputType;
};
export type CategorieGroupByOutputType = {
    id: string;
    nom: string;
    description: string | null;
    conservation: string | null;
    couleur: string | null;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
    _count: CategorieCountAggregateOutputType | null;
    _min: CategorieMinAggregateOutputType | null;
    _max: CategorieMaxAggregateOutputType | null;
};
export type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategorieGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategorieGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategorieGroupByOutputType[P]>;
}>>;
export type CategorieWhereInput = {
    AND?: Prisma.CategorieWhereInput | Prisma.CategorieWhereInput[];
    OR?: Prisma.CategorieWhereInput[];
    NOT?: Prisma.CategorieWhereInput | Prisma.CategorieWhereInput[];
    id?: Prisma.StringFilter<"Categorie"> | string;
    nom?: Prisma.StringFilter<"Categorie"> | string;
    description?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    conservation?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    couleur?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Categorie"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Categorie"> | Date | string;
    image?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    produits?: Prisma.ProduitListRelationFilter;
};
export type CategorieOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    conservation?: Prisma.SortOrderInput | Prisma.SortOrder;
    couleur?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    produits?: Prisma.ProduitOrderByRelationAggregateInput;
};
export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    AND?: Prisma.CategorieWhereInput | Prisma.CategorieWhereInput[];
    OR?: Prisma.CategorieWhereInput[];
    NOT?: Prisma.CategorieWhereInput | Prisma.CategorieWhereInput[];
    description?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    conservation?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    couleur?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Categorie"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Categorie"> | Date | string;
    image?: Prisma.StringNullableFilter<"Categorie"> | string | null;
    produits?: Prisma.ProduitListRelationFilter;
}, "id" | "nom">;
export type CategorieOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    conservation?: Prisma.SortOrderInput | Prisma.SortOrder;
    couleur?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CategorieCountOrderByAggregateInput;
    _max?: Prisma.CategorieMaxOrderByAggregateInput;
    _min?: Prisma.CategorieMinOrderByAggregateInput;
};
export type CategorieScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategorieScalarWhereWithAggregatesInput | Prisma.CategorieScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategorieScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategorieScalarWhereWithAggregatesInput | Prisma.CategorieScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Categorie"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Categorie"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Categorie"> | string | null;
    conservation?: Prisma.StringNullableWithAggregatesFilter<"Categorie"> | string | null;
    couleur?: Prisma.StringNullableWithAggregatesFilter<"Categorie"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Categorie"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Categorie"> | Date | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"Categorie"> | string | null;
};
export type CategorieCreateInput = {
    id?: string;
    nom: string;
    description?: string | null;
    conservation?: string | null;
    couleur?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    produits?: Prisma.ProduitCreateNestedManyWithoutCategorieInput;
};
export type CategorieUncheckedCreateInput = {
    id?: string;
    nom: string;
    description?: string | null;
    conservation?: string | null;
    couleur?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    produits?: Prisma.ProduitUncheckedCreateNestedManyWithoutCategorieInput;
};
export type CategorieUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conservation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    couleur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    produits?: Prisma.ProduitUpdateManyWithoutCategorieNestedInput;
};
export type CategorieUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conservation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    couleur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    produits?: Prisma.ProduitUncheckedUpdateManyWithoutCategorieNestedInput;
};
export type CategorieCreateManyInput = {
    id?: string;
    nom: string;
    description?: string | null;
    conservation?: string | null;
    couleur?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
};
export type CategorieUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conservation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    couleur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategorieUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conservation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    couleur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategorieCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    conservation?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type CategorieMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    conservation?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type CategorieMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    conservation?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type CategorieNullableScalarRelationFilter = {
    is?: Prisma.CategorieWhereInput | null;
    isNot?: Prisma.CategorieWhereInput | null;
};
export type CategorieCreateNestedOneWithoutProduitsInput = {
    create?: Prisma.XOR<Prisma.CategorieCreateWithoutProduitsInput, Prisma.CategorieUncheckedCreateWithoutProduitsInput>;
    connectOrCreate?: Prisma.CategorieCreateOrConnectWithoutProduitsInput;
    connect?: Prisma.CategorieWhereUniqueInput;
};
export type CategorieUpdateOneWithoutProduitsNestedInput = {
    create?: Prisma.XOR<Prisma.CategorieCreateWithoutProduitsInput, Prisma.CategorieUncheckedCreateWithoutProduitsInput>;
    connectOrCreate?: Prisma.CategorieCreateOrConnectWithoutProduitsInput;
    upsert?: Prisma.CategorieUpsertWithoutProduitsInput;
    disconnect?: Prisma.CategorieWhereInput | boolean;
    delete?: Prisma.CategorieWhereInput | boolean;
    connect?: Prisma.CategorieWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategorieUpdateToOneWithWhereWithoutProduitsInput, Prisma.CategorieUpdateWithoutProduitsInput>, Prisma.CategorieUncheckedUpdateWithoutProduitsInput>;
};
export type CategorieCreateWithoutProduitsInput = {
    id?: string;
    nom: string;
    description?: string | null;
    conservation?: string | null;
    couleur?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
};
export type CategorieUncheckedCreateWithoutProduitsInput = {
    id?: string;
    nom: string;
    description?: string | null;
    conservation?: string | null;
    couleur?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
};
export type CategorieCreateOrConnectWithoutProduitsInput = {
    where: Prisma.CategorieWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategorieCreateWithoutProduitsInput, Prisma.CategorieUncheckedCreateWithoutProduitsInput>;
};
export type CategorieUpsertWithoutProduitsInput = {
    update: Prisma.XOR<Prisma.CategorieUpdateWithoutProduitsInput, Prisma.CategorieUncheckedUpdateWithoutProduitsInput>;
    create: Prisma.XOR<Prisma.CategorieCreateWithoutProduitsInput, Prisma.CategorieUncheckedCreateWithoutProduitsInput>;
    where?: Prisma.CategorieWhereInput;
};
export type CategorieUpdateToOneWithWhereWithoutProduitsInput = {
    where?: Prisma.CategorieWhereInput;
    data: Prisma.XOR<Prisma.CategorieUpdateWithoutProduitsInput, Prisma.CategorieUncheckedUpdateWithoutProduitsInput>;
};
export type CategorieUpdateWithoutProduitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conservation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    couleur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategorieUncheckedUpdateWithoutProduitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conservation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    couleur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategorieCountOutputType = {
    produits: number;
};
export type CategorieCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produits?: boolean | CategorieCountOutputTypeCountProduitsArgs;
};
export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieCountOutputTypeSelect<ExtArgs> | null;
};
export type CategorieCountOutputTypeCountProduitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProduitWhereInput;
};
export type CategorieSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    conservation?: boolean;
    couleur?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
    produits?: boolean | Prisma.Categorie$produitsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategorieCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categorie"]>;
export type CategorieSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    conservation?: boolean;
    couleur?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
}, ExtArgs["result"]["categorie"]>;
export type CategorieSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    conservation?: boolean;
    couleur?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
}, ExtArgs["result"]["categorie"]>;
export type CategorieSelectScalar = {
    id?: boolean;
    nom?: boolean;
    description?: boolean;
    conservation?: boolean;
    couleur?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
};
export type CategorieOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "description" | "conservation" | "couleur" | "createdAt" | "updatedAt" | "image", ExtArgs["result"]["categorie"]>;
export type CategorieInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produits?: boolean | Prisma.Categorie$produitsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategorieCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategorieIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategoriePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Categorie";
    objects: {
        produits: Prisma.$ProduitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        description: string | null;
        conservation: string | null;
        couleur: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }, ExtArgs["result"]["categorie"]>;
    composites: {};
};
export type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriePayload, S>;
export type CategorieCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategorieCountAggregateInputType | true;
};
export interface CategorieDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Categorie'];
        meta: {
            name: 'Categorie';
        };
    };
    findUnique<T extends CategorieFindUniqueArgs>(args: Prisma.SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategorieFindFirstArgs>(args?: Prisma.SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategorieFindManyArgs>(args?: Prisma.SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategorieCreateArgs>(args: Prisma.SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategorieCreateManyArgs>(args?: Prisma.SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CategorieDeleteArgs>(args: Prisma.SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategorieUpdateArgs>(args: Prisma.SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategorieDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategorieUpdateManyArgs>(args: Prisma.SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CategorieUpsertArgs>(args: Prisma.SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma.Prisma__CategorieClient<runtime.Types.Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategorieCountArgs>(args?: Prisma.Subset<T, CategorieCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategorieCountAggregateOutputType> : number>;
    aggregate<T extends CategorieAggregateArgs>(args: Prisma.Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>;
    groupBy<T extends CategorieGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategorieGroupByArgs['orderBy'];
    } : {
        orderBy?: CategorieGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategorieFieldRefs;
}
export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    produits<T extends Prisma.Categorie$produitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categorie$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategorieFieldRefs {
    readonly id: Prisma.FieldRef<"Categorie", 'String'>;
    readonly nom: Prisma.FieldRef<"Categorie", 'String'>;
    readonly description: Prisma.FieldRef<"Categorie", 'String'>;
    readonly conservation: Prisma.FieldRef<"Categorie", 'String'>;
    readonly couleur: Prisma.FieldRef<"Categorie", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Categorie", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Categorie", 'DateTime'>;
    readonly image: Prisma.FieldRef<"Categorie", 'String'>;
}
export type CategorieFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where: Prisma.CategorieWhereUniqueInput;
};
export type CategorieFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where: Prisma.CategorieWhereUniqueInput;
};
export type CategorieFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where?: Prisma.CategorieWhereInput;
    orderBy?: Prisma.CategorieOrderByWithRelationInput | Prisma.CategorieOrderByWithRelationInput[];
    cursor?: Prisma.CategorieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategorieScalarFieldEnum | Prisma.CategorieScalarFieldEnum[];
};
export type CategorieFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where?: Prisma.CategorieWhereInput;
    orderBy?: Prisma.CategorieOrderByWithRelationInput | Prisma.CategorieOrderByWithRelationInput[];
    cursor?: Prisma.CategorieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategorieScalarFieldEnum | Prisma.CategorieScalarFieldEnum[];
};
export type CategorieFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where?: Prisma.CategorieWhereInput;
    orderBy?: Prisma.CategorieOrderByWithRelationInput | Prisma.CategorieOrderByWithRelationInput[];
    cursor?: Prisma.CategorieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategorieScalarFieldEnum | Prisma.CategorieScalarFieldEnum[];
};
export type CategorieCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategorieCreateInput, Prisma.CategorieUncheckedCreateInput>;
};
export type CategorieCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategorieCreateManyInput | Prisma.CategorieCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategorieCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    data: Prisma.CategorieCreateManyInput | Prisma.CategorieCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategorieUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategorieUpdateInput, Prisma.CategorieUncheckedUpdateInput>;
    where: Prisma.CategorieWhereUniqueInput;
};
export type CategorieUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategorieUpdateManyMutationInput, Prisma.CategorieUncheckedUpdateManyInput>;
    where?: Prisma.CategorieWhereInput;
    limit?: number;
};
export type CategorieUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategorieUpdateManyMutationInput, Prisma.CategorieUncheckedUpdateManyInput>;
    where?: Prisma.CategorieWhereInput;
    limit?: number;
};
export type CategorieUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where: Prisma.CategorieWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategorieCreateInput, Prisma.CategorieUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategorieUpdateInput, Prisma.CategorieUncheckedUpdateInput>;
};
export type CategorieDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
    where: Prisma.CategorieWhereUniqueInput;
};
export type CategorieDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategorieWhereInput;
    limit?: number;
};
export type Categorie$produitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CategorieDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorieSelect<ExtArgs> | null;
    omit?: Prisma.CategorieOmit<ExtArgs> | null;
    include?: Prisma.CategorieInclude<ExtArgs> | null;
};
//# sourceMappingURL=Categorie.d.ts.map