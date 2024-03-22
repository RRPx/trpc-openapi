import { NestedEnumCategoryNullableFilter } from "../inputs/NestedEnumCategoryNullableFilter";
export declare class EnumCategoryNullableFilter {
    equals?: "NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED" | undefined;
    in?: Array<"NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED"> | undefined;
    notIn?: Array<"NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED"> | undefined;
    not?: NestedEnumCategoryNullableFilter | undefined;
}
