import { ReservationOrderByWithRelationInput } from "../../../inputs/ReservationOrderByWithRelationInput";
import { ReservationWhereInput } from "../../../inputs/ReservationWhereInput";
import { ReservationWhereUniqueInput } from "../../../inputs/ReservationWhereUniqueInput";
export declare class FindFirstReservationOrThrowArgs {
    where?: ReservationWhereInput | undefined;
    orderBy?: ReservationOrderByWithRelationInput[] | undefined;
    cursor?: ReservationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "cast_id" | "client_id" | "start_time" | "end_time" | "guide_flg" | "approval" | "admin_approval" | "payment_amount" | "payment_select" | "payment_id" | "is_display" | "reservation_date" | "address_id" | "created_at" | "updated_at"> | undefined;
}
