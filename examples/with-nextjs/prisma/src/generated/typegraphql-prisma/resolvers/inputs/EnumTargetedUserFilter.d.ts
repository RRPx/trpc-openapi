import { NestedEnumTargetedUserFilter } from "../inputs/NestedEnumTargetedUserFilter";
export declare class EnumTargetedUserFilter {
    equals?: "CAST" | "CLIENT" | "BOTH" | "NONE" | undefined;
    in?: Array<"CAST" | "CLIENT" | "BOTH" | "NONE"> | undefined;
    notIn?: Array<"CAST" | "CLIENT" | "BOTH" | "NONE"> | undefined;
    not?: NestedEnumTargetedUserFilter | undefined;
}
