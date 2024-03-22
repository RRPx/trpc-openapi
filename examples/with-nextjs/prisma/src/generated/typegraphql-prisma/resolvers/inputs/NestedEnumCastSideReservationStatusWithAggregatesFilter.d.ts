import { NestedEnumCastSideReservationStatusFilter } from "../inputs/NestedEnumCastSideReservationStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumCastSideReservationStatusWithAggregatesFilter {
    equals?: "TRANSPORTATION" | "AWAITING" | "BOOKED" | undefined;
    in?: Array<"TRANSPORTATION" | "AWAITING" | "BOOKED"> | undefined;
    notIn?: Array<"TRANSPORTATION" | "AWAITING" | "BOOKED"> | undefined;
    not?: NestedEnumCastSideReservationStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumCastSideReservationStatusFilter | undefined;
    _max?: NestedEnumCastSideReservationStatusFilter | undefined;
}
