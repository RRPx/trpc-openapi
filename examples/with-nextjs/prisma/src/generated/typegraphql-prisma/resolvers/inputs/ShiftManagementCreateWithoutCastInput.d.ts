import { ReservationCreateNestedOneWithoutShift_idInput } from "../inputs/ReservationCreateNestedOneWithoutShift_idInput";
export declare class ShiftManagementCreateWithoutCastInput {
    id?: string | undefined;
    client_id?: string | undefined;
    shift_date?: Date | undefined;
    start_time?: Date | undefined;
    end_time?: Date | undefined;
    memo?: string | undefined;
    is_display?: boolean | undefined;
    cast_side_reservation_status?: "TRANSPORTATION" | "AWAITING" | "BOOKED" | undefined;
    client_side_slot_status?: "HOLD" | "UNBOOKED" | "BOOKED" | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    Reservation?: ReservationCreateNestedOneWithoutShift_idInput | undefined;
}
