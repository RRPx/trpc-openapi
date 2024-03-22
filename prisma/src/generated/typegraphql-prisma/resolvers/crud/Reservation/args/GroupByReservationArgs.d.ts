import { ReservationOrderByWithAggregationInput } from "../../../inputs/ReservationOrderByWithAggregationInput";
import { ReservationScalarWhereWithAggregatesInput } from "../../../inputs/ReservationScalarWhereWithAggregatesInput";
import { ReservationWhereInput } from "../../../inputs/ReservationWhereInput";
export declare class GroupByReservationArgs {
    where?: ReservationWhereInput | undefined;
    orderBy?: ReservationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "cast_id" | "client_id" | "start_time" | "end_time" | "guide_flg" | "approval" | "admin_approval" | "payment_amount" | "payment_select" | "payment_id" | "is_display" | "reservation_date" | "address_id" | "created_at" | "updated_at">;
    having?: ReservationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
