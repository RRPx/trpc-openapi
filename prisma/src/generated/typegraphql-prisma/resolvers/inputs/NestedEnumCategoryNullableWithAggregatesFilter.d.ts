import { NestedEnumCategoryNullableFilter } from "../inputs/NestedEnumCategoryNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumCategoryNullableWithAggregatesFilter {
    equals?: "NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED" | undefined;
    in?: Array<"NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED"> | undefined;
    notIn?: Array<"NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED"> | undefined;
    not?: NestedEnumCategoryNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumCategoryNullableFilter | undefined;
    _max?: NestedEnumCategoryNullableFilter | undefined;
}
