import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type AdministrateurModel = runtime.Types.Result.DefaultSelection<Prisma.$AdministrateurPayload>;
export type AggregateAdministrateur = {
    _count: AdministrateurCountAggregateOutputType | null;
    _min: AdministrateurMinAggregateOutputType | null;
    _max: AdministrateurMaxAggregateOutputType | null;
};
export type AdministrateurMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdministrateurMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdministrateurCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    nom: number;
    prenom: number;
    telephone: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AdministrateurMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdministrateurMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdministrateurCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AdministrateurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdministrateurCountAggregateInputType;
    _min?: AdministrateurMinAggregateInputType;
    _max?: AdministrateurMaxAggregateInputType;
};
export type GetAdministrateurAggregateType<T extends AdministrateurAggregateArgs> = {
    [P in keyof T & keyof AggregateAdministrateur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdministrateur[P]> : Prisma.GetScalarType<T[P], AggregateAdministrateur[P]>;
};
export type AdministrateurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithAggregationInput | Prisma.AdministrateurOrderByWithAggregationInput[];
    by: Prisma.AdministrateurScalarFieldEnum[] | Prisma.AdministrateurScalarFieldEnum;
    having?: Prisma.AdministrateurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdministrateurCountAggregateInputType | true;
    _min?: AdministrateurMinAggregateInputType;
    _max?: AdministrateurMaxAggregateInputType;
};
export type AdministrateurGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: AdministrateurCountAggregateOutputType | null;
    _min: AdministrateurMinAggregateOutputType | null;
    _max: AdministrateurMaxAggregateOutputType | null;
};
export type GetAdministrateurGroupByPayload<T extends AdministrateurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdministrateurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdministrateurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdministrateurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdministrateurGroupByOutputType[P]>;
}>>;
export type AdministrateurWhereInput = {
    AND?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    OR?: Prisma.AdministrateurWhereInput[];
    NOT?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    id?: Prisma.StringFilter<"Administrateur"> | string;
    email?: Prisma.StringFilter<"Administrateur"> | string;
    password?: Prisma.StringFilter<"Administrateur"> | string;
    nom?: Prisma.StringFilter<"Administrateur"> | string;
    prenom?: Prisma.StringFilter<"Administrateur"> | string;
    telephone?: Prisma.StringNullableFilter<"Administrateur"> | string | null;
    role?: Prisma.EnumRoleFilter<"Administrateur"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"Administrateur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Administrateur"> | Date | string;
    clients?: Prisma.ClientListRelationFilter;
    gies?: Prisma.GIEListRelationFilter;
};
export type AdministrateurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clients?: Prisma.ClientOrderByRelationAggregateInput;
    gies?: Prisma.GIEOrderByRelationAggregateInput;
};
export type AdministrateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    OR?: Prisma.AdministrateurWhereInput[];
    NOT?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    password?: Prisma.StringFilter<"Administrateur"> | string;
    nom?: Prisma.StringFilter<"Administrateur"> | string;
    prenom?: Prisma.StringFilter<"Administrateur"> | string;
    telephone?: Prisma.StringNullableFilter<"Administrateur"> | string | null;
    role?: Prisma.EnumRoleFilter<"Administrateur"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"Administrateur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Administrateur"> | Date | string;
    clients?: Prisma.ClientListRelationFilter;
    gies?: Prisma.GIEListRelationFilter;
}, "id" | "email">;
export type AdministrateurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdministrateurCountOrderByAggregateInput;
    _max?: Prisma.AdministrateurMaxOrderByAggregateInput;
    _min?: Prisma.AdministrateurMinOrderByAggregateInput;
};
export type AdministrateurScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdministrateurScalarWhereWithAggregatesInput | Prisma.AdministrateurScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdministrateurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdministrateurScalarWhereWithAggregatesInput | Prisma.AdministrateurScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Administrateur"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Administrateur"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Administrateur"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Administrateur"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Administrateur"> | string;
    telephone?: Prisma.StringNullableWithAggregatesFilter<"Administrateur"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"Administrateur"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Administrateur"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Administrateur"> | Date | string;
};
export type AdministrateurCreateInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientCreateNestedManyWithoutAdministrateurInput;
    gies?: Prisma.GIECreateNestedManyWithoutAdministrateurInput;
};
export type AdministrateurUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutAdministrateurInput;
    gies?: Prisma.GIEUncheckedCreateNestedManyWithoutAdministrateurInput;
};
export type AdministrateurUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUpdateManyWithoutAdministrateurNestedInput;
    gies?: Prisma.GIEUpdateManyWithoutAdministrateurNestedInput;
};
export type AdministrateurUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutAdministrateurNestedInput;
    gies?: Prisma.GIEUncheckedUpdateManyWithoutAdministrateurNestedInput;
};
export type AdministrateurCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdministrateurUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdministrateurUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdministrateurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdministrateurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdministrateurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdministrateurScalarRelationFilter = {
    is?: Prisma.AdministrateurWhereInput;
    isNot?: Prisma.AdministrateurWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type AdministrateurCreateNestedOneWithoutGiesInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutGiesInput, Prisma.AdministrateurUncheckedCreateWithoutGiesInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutGiesInput;
    connect?: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurUpdateOneRequiredWithoutGiesNestedInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutGiesInput, Prisma.AdministrateurUncheckedCreateWithoutGiesInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutGiesInput;
    upsert?: Prisma.AdministrateurUpsertWithoutGiesInput;
    connect?: Prisma.AdministrateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdministrateurUpdateToOneWithWhereWithoutGiesInput, Prisma.AdministrateurUpdateWithoutGiesInput>, Prisma.AdministrateurUncheckedUpdateWithoutGiesInput>;
};
export type AdministrateurCreateNestedOneWithoutClientsInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutClientsInput, Prisma.AdministrateurUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutClientsInput;
    connect?: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurUpdateOneRequiredWithoutClientsNestedInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutClientsInput, Prisma.AdministrateurUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutClientsInput;
    upsert?: Prisma.AdministrateurUpsertWithoutClientsInput;
    connect?: Prisma.AdministrateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdministrateurUpdateToOneWithWhereWithoutClientsInput, Prisma.AdministrateurUpdateWithoutClientsInput>, Prisma.AdministrateurUncheckedUpdateWithoutClientsInput>;
};
export type AdministrateurCreateWithoutGiesInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientCreateNestedManyWithoutAdministrateurInput;
};
export type AdministrateurUncheckedCreateWithoutGiesInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutAdministrateurInput;
};
export type AdministrateurCreateOrConnectWithoutGiesInput = {
    where: Prisma.AdministrateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdministrateurCreateWithoutGiesInput, Prisma.AdministrateurUncheckedCreateWithoutGiesInput>;
};
export type AdministrateurUpsertWithoutGiesInput = {
    update: Prisma.XOR<Prisma.AdministrateurUpdateWithoutGiesInput, Prisma.AdministrateurUncheckedUpdateWithoutGiesInput>;
    create: Prisma.XOR<Prisma.AdministrateurCreateWithoutGiesInput, Prisma.AdministrateurUncheckedCreateWithoutGiesInput>;
    where?: Prisma.AdministrateurWhereInput;
};
export type AdministrateurUpdateToOneWithWhereWithoutGiesInput = {
    where?: Prisma.AdministrateurWhereInput;
    data: Prisma.XOR<Prisma.AdministrateurUpdateWithoutGiesInput, Prisma.AdministrateurUncheckedUpdateWithoutGiesInput>;
};
export type AdministrateurUpdateWithoutGiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUpdateManyWithoutAdministrateurNestedInput;
};
export type AdministrateurUncheckedUpdateWithoutGiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutAdministrateurNestedInput;
};
export type AdministrateurCreateWithoutClientsInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gies?: Prisma.GIECreateNestedManyWithoutAdministrateurInput;
};
export type AdministrateurUncheckedCreateWithoutClientsInput = {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gies?: Prisma.GIEUncheckedCreateNestedManyWithoutAdministrateurInput;
};
export type AdministrateurCreateOrConnectWithoutClientsInput = {
    where: Prisma.AdministrateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdministrateurCreateWithoutClientsInput, Prisma.AdministrateurUncheckedCreateWithoutClientsInput>;
};
export type AdministrateurUpsertWithoutClientsInput = {
    update: Prisma.XOR<Prisma.AdministrateurUpdateWithoutClientsInput, Prisma.AdministrateurUncheckedUpdateWithoutClientsInput>;
    create: Prisma.XOR<Prisma.AdministrateurCreateWithoutClientsInput, Prisma.AdministrateurUncheckedCreateWithoutClientsInput>;
    where?: Prisma.AdministrateurWhereInput;
};
export type AdministrateurUpdateToOneWithWhereWithoutClientsInput = {
    where?: Prisma.AdministrateurWhereInput;
    data: Prisma.XOR<Prisma.AdministrateurUpdateWithoutClientsInput, Prisma.AdministrateurUncheckedUpdateWithoutClientsInput>;
};
export type AdministrateurUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gies?: Prisma.GIEUpdateManyWithoutAdministrateurNestedInput;
};
export type AdministrateurUncheckedUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gies?: Prisma.GIEUncheckedUpdateManyWithoutAdministrateurNestedInput;
};
export type AdministrateurCountOutputType = {
    clients: number;
    gies: number;
};
export type AdministrateurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clients?: boolean | AdministrateurCountOutputTypeCountClientsArgs;
    gies?: boolean | AdministrateurCountOutputTypeCountGiesArgs;
};
export type AdministrateurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurCountOutputTypeSelect<ExtArgs> | null;
};
export type AdministrateurCountOutputTypeCountClientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
};
export type AdministrateurCountOutputTypeCountGiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GIEWhereInput;
};
export type AdministrateurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clients?: boolean | Prisma.Administrateur$clientsArgs<ExtArgs>;
    gies?: boolean | Prisma.Administrateur$giesArgs<ExtArgs>;
    _count?: boolean | Prisma.AdministrateurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["administrateur"]>;
export type AdministrateurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["administrateur"]>;
export type AdministrateurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["administrateur"]>;
export type AdministrateurSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AdministrateurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "nom" | "prenom" | "telephone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["administrateur"]>;
export type AdministrateurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clients?: boolean | Prisma.Administrateur$clientsArgs<ExtArgs>;
    gies?: boolean | Prisma.Administrateur$giesArgs<ExtArgs>;
    _count?: boolean | Prisma.AdministrateurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdministrateurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AdministrateurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AdministrateurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Administrateur";
    objects: {
        clients: Prisma.$ClientPayload<ExtArgs>[];
        gies: Prisma.$GIEPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        nom: string;
        prenom: string;
        telephone: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["administrateur"]>;
    composites: {};
};
export type AdministrateurGetPayload<S extends boolean | null | undefined | AdministrateurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload, S>;
export type AdministrateurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdministrateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdministrateurCountAggregateInputType | true;
};
export interface AdministrateurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Administrateur'];
        meta: {
            name: 'Administrateur';
        };
    };
    findUnique<T extends AdministrateurFindUniqueArgs>(args: Prisma.SelectSubset<T, AdministrateurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdministrateurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdministrateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdministrateurFindFirstArgs>(args?: Prisma.SelectSubset<T, AdministrateurFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdministrateurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdministrateurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdministrateurFindManyArgs>(args?: Prisma.SelectSubset<T, AdministrateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdministrateurCreateArgs>(args: Prisma.SelectSubset<T, AdministrateurCreateArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdministrateurCreateManyArgs>(args?: Prisma.SelectSubset<T, AdministrateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdministrateurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdministrateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdministrateurDeleteArgs>(args: Prisma.SelectSubset<T, AdministrateurDeleteArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdministrateurUpdateArgs>(args: Prisma.SelectSubset<T, AdministrateurUpdateArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdministrateurDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdministrateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdministrateurUpdateManyArgs>(args: Prisma.SelectSubset<T, AdministrateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdministrateurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdministrateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdministrateurUpsertArgs>(args: Prisma.SelectSubset<T, AdministrateurUpsertArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdministrateurCountArgs>(args?: Prisma.Subset<T, AdministrateurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdministrateurCountAggregateOutputType> : number>;
    aggregate<T extends AdministrateurAggregateArgs>(args: Prisma.Subset<T, AdministrateurAggregateArgs>): Prisma.PrismaPromise<GetAdministrateurAggregateType<T>>;
    groupBy<T extends AdministrateurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdministrateurGroupByArgs['orderBy'];
    } : {
        orderBy?: AdministrateurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdministrateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdministrateurFieldRefs;
}
export interface Prisma__AdministrateurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clients<T extends Prisma.Administrateur$clientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Administrateur$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gies<T extends Prisma.Administrateur$giesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Administrateur$giesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdministrateurFieldRefs {
    readonly id: Prisma.FieldRef<"Administrateur", 'String'>;
    readonly email: Prisma.FieldRef<"Administrateur", 'String'>;
    readonly password: Prisma.FieldRef<"Administrateur", 'String'>;
    readonly nom: Prisma.FieldRef<"Administrateur", 'String'>;
    readonly prenom: Prisma.FieldRef<"Administrateur", 'String'>;
    readonly telephone: Prisma.FieldRef<"Administrateur", 'String'>;
    readonly role: Prisma.FieldRef<"Administrateur", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"Administrateur", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Administrateur", 'DateTime'>;
}
export type AdministrateurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrateurScalarFieldEnum | Prisma.AdministrateurScalarFieldEnum[];
};
export type AdministrateurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrateurScalarFieldEnum | Prisma.AdministrateurScalarFieldEnum[];
};
export type AdministrateurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrateurScalarFieldEnum | Prisma.AdministrateurScalarFieldEnum[];
};
export type AdministrateurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrateurCreateInput, Prisma.AdministrateurUncheckedCreateInput>;
};
export type AdministrateurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdministrateurCreateManyInput | Prisma.AdministrateurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdministrateurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    data: Prisma.AdministrateurCreateManyInput | Prisma.AdministrateurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdministrateurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrateurUpdateInput, Prisma.AdministrateurUncheckedUpdateInput>;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdministrateurUpdateManyMutationInput, Prisma.AdministrateurUncheckedUpdateManyInput>;
    where?: Prisma.AdministrateurWhereInput;
    limit?: number;
};
export type AdministrateurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrateurUpdateManyMutationInput, Prisma.AdministrateurUncheckedUpdateManyInput>;
    where?: Prisma.AdministrateurWhereInput;
    limit?: number;
};
export type AdministrateurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdministrateurCreateInput, Prisma.AdministrateurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdministrateurUpdateInput, Prisma.AdministrateurUncheckedUpdateInput>;
};
export type AdministrateurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrateurWhereInput;
    limit?: number;
};
export type Administrateur$clientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Administrateur$giesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdministrateurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
};
//# sourceMappingURL=Administrateur.d.ts.map