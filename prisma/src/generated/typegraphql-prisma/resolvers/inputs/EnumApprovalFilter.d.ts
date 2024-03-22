import { NestedEnumApprovalFilter } from "../inputs/NestedEnumApprovalFilter";
export declare class EnumApprovalFilter {
    equals?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    in?: Array<"APPROVAL" | "DENIAL" | "HOLD"> | undefined;
    notIn?: Array<"APPROVAL" | "DENIAL" | "HOLD"> | undefined;
    not?: NestedEnumApprovalFilter | undefined;
}
