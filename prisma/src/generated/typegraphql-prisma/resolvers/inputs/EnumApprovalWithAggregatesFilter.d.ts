import { NestedEnumApprovalFilter } from "../inputs/NestedEnumApprovalFilter";
import { NestedEnumApprovalWithAggregatesFilter } from "../inputs/NestedEnumApprovalWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumApprovalWithAggregatesFilter {
    equals?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    in?: Array<"APPROVAL" | "DENIAL" | "HOLD"> | undefined;
    notIn?: Array<"APPROVAL" | "DENIAL" | "HOLD"> | undefined;
    not?: NestedEnumApprovalWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumApprovalFilter | undefined;
    _max?: NestedEnumApprovalFilter | undefined;
}
