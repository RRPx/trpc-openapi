import { NestedEnumInquirerRoleFilter } from "../inputs/NestedEnumInquirerRoleFilter";
export declare class EnumInquirerRoleFilter {
    equals?: "CAST" | "CLIENT" | "UNREGISTER" | undefined;
    in?: Array<"CAST" | "CLIENT" | "UNREGISTER"> | undefined;
    notIn?: Array<"CAST" | "CLIENT" | "UNREGISTER"> | undefined;
    not?: NestedEnumInquirerRoleFilter | undefined;
}
