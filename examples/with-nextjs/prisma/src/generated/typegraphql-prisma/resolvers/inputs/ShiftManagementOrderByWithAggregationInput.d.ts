import { ShiftManagementCountOrderByAggregateInput } from "../inputs/ShiftManagementCountOrderByAggregateInput";
import { ShiftManagementMaxOrderByAggregateInput } from "../inputs/ShiftManagementMaxOrderByAggregateInput";
import { ShiftManagementMinOrderByAggregateInput } from "../inputs/ShiftManagementMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ShiftManagementOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    cast_id?: "asc" | "desc" | undefined;
    client_id?: SortOrderInput | undefined;
    shift_date?: SortOrderInput | undefined;
    start_time?: SortOrderInput | undefined;
    end_time?: SortOrderInput | undefined;
    memo?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    cast_side_reservation_status?: "asc" | "desc" | undefined;
    client_side_slot_status?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    reservationId?: SortOrderInput | undefined;
    _count?: ShiftManagementCountOrderByAggregateInput | undefined;
    _max?: ShiftManagementMaxOrderByAggregateInput | undefined;
    _min?: ShiftManagementMinOrderByAggregateInput | undefined;
}
