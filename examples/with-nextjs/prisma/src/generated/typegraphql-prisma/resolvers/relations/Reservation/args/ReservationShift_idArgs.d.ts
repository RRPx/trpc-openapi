import { ShiftManagementOrderByWithRelationInput } from "../../../inputs/ShiftManagementOrderByWithRelationInput";
import { ShiftManagementWhereInput } from "../../../inputs/ShiftManagementWhereInput";
import { ShiftManagementWhereUniqueInput } from "../../../inputs/ShiftManagementWhereUniqueInput";
export declare class ReservationShift_idArgs {
    where?: ShiftManagementWhereInput | undefined;
    orderBy?: ShiftManagementOrderByWithRelationInput[] | undefined;
    cursor?: ShiftManagementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "cast_id" | "client_id" | "shift_date" | "start_time" | "end_time" | "memo" | "is_display" | "cast_side_reservation_status" | "client_side_slot_status" | "created_at" | "updated_at" | "reservationId"> | undefined;
}
