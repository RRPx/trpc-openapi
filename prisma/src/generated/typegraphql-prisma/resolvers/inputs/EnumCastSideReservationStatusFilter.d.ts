import { NestedEnumCastSideReservationStatusFilter } from "../inputs/NestedEnumCastSideReservationStatusFilter";
export declare class EnumCastSideReservationStatusFilter {
    equals?: "TRANSPORTATION" | "AWAITING" | "BOOKED" | undefined;
    in?: Array<"TRANSPORTATION" | "AWAITING" | "BOOKED"> | undefined;
    notIn?: Array<"TRANSPORTATION" | "AWAITING" | "BOOKED"> | undefined;
    not?: NestedEnumCastSideReservationStatusFilter | undefined;
}
