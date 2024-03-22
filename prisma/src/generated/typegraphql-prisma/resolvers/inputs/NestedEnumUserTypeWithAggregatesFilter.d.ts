import { NestedEnumUserTypeFilter } from "../inputs/NestedEnumUserTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumUserTypeWithAggregatesFilter {
    equals?: "CAST" | "CLIENT" | undefined;
    in?: Array<"CAST" | "CLIENT"> | undefined;
    notIn?: Array<"CAST" | "CLIENT"> | undefined;
    not?: NestedEnumUserTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumUserTypeFilter | undefined;
    _max?: NestedEnumUserTypeFilter | undefined;
}
