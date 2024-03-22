import { NestedEnumUserTypeFilter } from "../inputs/NestedEnumUserTypeFilter";
export declare class EnumUserTypeFilter {
    equals?: "CAST" | "CLIENT" | undefined;
    in?: Array<"CAST" | "CLIENT"> | undefined;
    notIn?: Array<"CAST" | "CLIENT"> | undefined;
    not?: NestedEnumUserTypeFilter | undefined;
}
