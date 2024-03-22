import { NestedEnumGenderNullableFilter } from "../inputs/NestedEnumGenderNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumGenderNullableWithAggregatesFilter {
    equals?: "male" | "female" | undefined;
    in?: Array<"male" | "female"> | undefined;
    notIn?: Array<"male" | "female"> | undefined;
    not?: NestedEnumGenderNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumGenderNullableFilter | undefined;
    _max?: NestedEnumGenderNullableFilter | undefined;
}
