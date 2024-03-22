import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
export declare class EnumRoleFilter {
    equals?: "CLIENT" | "CAST" | "ADMIN" | undefined;
    in?: Array<"CLIENT" | "CAST" | "ADMIN"> | undefined;
    notIn?: Array<"CLIENT" | "CAST" | "ADMIN"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
