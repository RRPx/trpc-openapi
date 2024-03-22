import { ShiftManagementOrderByWithAggregationInput } from "../../../inputs/ShiftManagementOrderByWithAggregationInput";
import { ShiftManagementScalarWhereWithAggregatesInput } from "../../../inputs/ShiftManagementScalarWhereWithAggregatesInput";
import { ShiftManagementWhereInput } from "../../../inputs/ShiftManagementWhereInput";
export declare class GroupByShiftManagementArgs {
    where?: ShiftManagementWhereInput | undefined;
    orderBy?: ShiftManagementOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "cast_id" | "client_id" | "shift_date" | "start_time" | "end_time" | "memo" | "is_display" | "cast_side_reservation_status" | "client_side_slot_status" | "created_at" | "updated_at" | "reservationId">;
    having?: ShiftManagementScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
