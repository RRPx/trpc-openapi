export declare class NestedEnumApprovalFilter {
    equals?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    in?: Array<"APPROVAL" | "DENIAL" | "HOLD"> | undefined;
    notIn?: Array<"APPROVAL" | "DENIAL" | "HOLD"> | undefined;
    not?: NestedEnumApprovalFilter | undefined;
}
