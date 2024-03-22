export declare class ShiftManagementMaxAggregate {
    id: string | null;
    cast_id: string | null;
    client_id: string | null;
    shift_date: Date | null;
    start_time: Date | null;
    end_time: Date | null;
    memo: string | null;
    is_display: boolean | null;
    cast_side_reservation_status: "TRANSPORTATION" | "AWAITING" | "BOOKED" | null;
    client_side_slot_status: "HOLD" | "UNBOOKED" | "BOOKED" | null;
    created_at: Date | null;
    updated_at: Date | null;
    reservationId: string | null;
}
