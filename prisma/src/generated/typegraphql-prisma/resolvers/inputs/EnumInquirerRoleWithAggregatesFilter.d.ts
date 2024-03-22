import { NestedEnumInquirerRoleFilter } from "../inputs/NestedEnumInquirerRoleFilter";
import { NestedEnumInquirerRoleWithAggregatesFilter } from "../inputs/NestedEnumInquirerRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumInquirerRoleWithAggregatesFilter {
    equals?: "CAST" | "CLIENT" | "UNREGISTER" | undefined;
    in?: Array<"CAST" | "CLIENT" | "UNREGISTER"> | undefined;
    notIn?: Array<"CAST" | "CLIENT" | "UNREGISTER"> | undefined;
    not?: NestedEnumInquirerRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumInquirerRoleFilter | undefined;
    _max?: NestedEnumInquirerRoleFilter | undefined;
}
