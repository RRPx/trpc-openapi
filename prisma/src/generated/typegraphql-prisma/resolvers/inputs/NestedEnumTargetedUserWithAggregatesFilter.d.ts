import { NestedEnumTargetedUserFilter } from "../inputs/NestedEnumTargetedUserFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumTargetedUserWithAggregatesFilter {
    equals?: "CAST" | "CLIENT" | "BOTH" | "NONE" | undefined;
    in?: Array<"CAST" | "CLIENT" | "BOTH" | "NONE"> | undefined;
    notIn?: Array<"CAST" | "CLIENT" | "BOTH" | "NONE"> | undefined;
    not?: NestedEnumTargetedUserWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTargetedUserFilter | undefined;
    _max?: NestedEnumTargetedUserFilter | undefined;
}
