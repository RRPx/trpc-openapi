import { NestedEnumCastSideReservationStatusFilter } from "../inputs/NestedEnumCastSideReservationStatusFilter";
import { NestedEnumCastSideReservationStatusWithAggregatesFilter } from "../inputs/NestedEnumCastSideReservationStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumCastSideReservationStatusWithAggregatesFilter {
    equals?: "TRANSPORTATION" | "AWAITING" | "BOOKED" | undefined;
    in?: Array<"TRANSPORTATION" | "AWAITING" | "BOOKED"> | undefined;
    notIn?: Array<"TRANSPORTATION" | "AWAITING" | "BOOKED"> | undefined;
    not?: NestedEnumCastSideReservationStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumCastSideReservationStatusFilter | undefined;
    _max?: NestedEnumCastSideReservationStatusFilter | undefined;
}
