import { NestedEnumGenderNullableFilter } from "../inputs/NestedEnumGenderNullableFilter";
export declare class EnumGenderNullableFilter {
    equals?: "male" | "female" | undefined;
    in?: Array<"male" | "female"> | undefined;
    notIn?: Array<"male" | "female"> | undefined;
    not?: NestedEnumGenderNullableFilter | undefined;
}
