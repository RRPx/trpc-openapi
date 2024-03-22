export declare class ReservationMaxAggregate {
    id: string | null;
    cast_id: string | null;
    client_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    guide_flg: boolean | null;
    approval: "APPROVAL" | "DENIAL" | "HOLD" | null;
    admin_approval: "APPROVAL" | "DENIAL" | "HOLD" | null;
    payment_amount: number | null;
    payment_select: string | null;
    payment_id: string | null;
    is_display: boolean | null;
    reservation_date: Date | null;
    address_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
}
