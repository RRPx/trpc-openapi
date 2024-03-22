import { NestedEnumClientSideSlotStatusFilter } from "../inputs/NestedEnumClientSideSlotStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumClientSideSlotStatusWithAggregatesFilter {
    equals?: "HOLD" | "UNBOOKED" | "BOOKED" | undefined;
    in?: Array<"HOLD" | "UNBOOKED" | "BOOKED"> | undefined;
    notIn?: Array<"HOLD" | "UNBOOKED" | "BOOKED"> | undefined;
    not?: NestedEnumClientSideSlotStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumClientSideSlotStatusFilter | undefined;
    _max?: NestedEnumClientSideSlotStatusFilter | undefined;
}
