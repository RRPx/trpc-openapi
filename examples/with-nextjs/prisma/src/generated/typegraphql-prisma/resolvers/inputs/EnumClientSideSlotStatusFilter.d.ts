import { NestedEnumClientSideSlotStatusFilter } from "../inputs/NestedEnumClientSideSlotStatusFilter";
export declare class EnumClientSideSlotStatusFilter {
    equals?: "HOLD" | "UNBOOKED" | "BOOKED" | undefined;
    in?: Array<"HOLD" | "UNBOOKED" | "BOOKED"> | undefined;
    notIn?: Array<"HOLD" | "UNBOOKED" | "BOOKED"> | undefined;
    not?: NestedEnumClientSideSlotStatusFilter | undefined;
}
