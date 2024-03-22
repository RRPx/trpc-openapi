import { Cast } from "../models/Cast";
import { Reservation } from "../models/Reservation";
export declare class ShiftManagement {
    id: string;
    cast?: Cast;
    cast_id: string;
    client_id?: string | null;
    shift_date?: Date | null;
    start_time?: Date | null;
    end_time?: Date | null;
    memo?: string | null;
    is_display: boolean;
    cast_side_reservation_status: "TRANSPORTATION" | "AWAITING" | "BOOKED";
    client_side_slot_status: "HOLD" | "UNBOOKED" | "BOOKED";
    created_at: Date;
    updated_at: Date;
    Reservation?: Reservation | null;
    reservationId?: string | null;
}
