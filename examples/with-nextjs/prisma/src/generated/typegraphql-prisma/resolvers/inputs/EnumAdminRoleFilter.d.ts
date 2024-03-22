import { NestedEnumAdminRoleFilter } from "../inputs/NestedEnumAdminRoleFilter";
export declare class EnumAdminRoleFilter {
    equals?: "Administorator" | "EDITOR" | "READER" | undefined;
    in?: Array<"Administorator" | "EDITOR" | "READER"> | undefined;
    notIn?: Array<"Administorator" | "EDITOR" | "READER"> | undefined;
    not?: NestedEnumAdminRoleFilter | undefined;
}
