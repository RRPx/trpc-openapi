export declare class ReservationCreateManyInput {
    id?: string | undefined;
    cast_id: string;
    client_id: string;
    start_time: Date;
    end_time: Date;
    guide_flg?: boolean | undefined;
    approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    admin_approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    payment_amount: number;
    payment_select?: string | undefined;
    payment_id?: string | undefined;
    is_display?: boolean | undefined;
    reservation_date: Date;
    address_id: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
