import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedEnumRoleWithAggregatesFilter } from "../inputs/NestedEnumRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumRoleWithAggregatesFilter {
    equals?: "CLIENT" | "CAST" | "ADMIN" | undefined;
    in?: Array<"CLIENT" | "CAST" | "ADMIN"> | undefined;
    notIn?: Array<"CLIENT" | "CAST" | "ADMIN"> | undefined;
    not?: NestedEnumRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRoleFilter | undefined;
    _max?: NestedEnumRoleFilter | undefined;
}
