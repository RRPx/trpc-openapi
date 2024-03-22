import { NestedEnumAdminRoleFilter } from "../inputs/NestedEnumAdminRoleFilter";
import { NestedEnumAdminRoleWithAggregatesFilter } from "../inputs/NestedEnumAdminRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumAdminRoleWithAggregatesFilter {
    equals?: "Administorator" | "EDITOR" | "READER" | undefined;
    in?: Array<"Administorator" | "EDITOR" | "READER"> | undefined;
    notIn?: Array<"Administorator" | "EDITOR" | "READER"> | undefined;
    not?: NestedEnumAdminRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumAdminRoleFilter | undefined;
    _max?: NestedEnumAdminRoleFilter | undefined;
}
