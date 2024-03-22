import { ReservationAvgOrderByAggregateInput } from "../inputs/ReservationAvgOrderByAggregateInput";
import { ReservationCountOrderByAggregateInput } from "../inputs/ReservationCountOrderByAggregateInput";
import { ReservationMaxOrderByAggregateInput } from "../inputs/ReservationMaxOrderByAggregateInput";
import { ReservationMinOrderByAggregateInput } from "../inputs/ReservationMinOrderByAggregateInput";
import { ReservationSumOrderByAggregateInput } from "../inputs/ReservationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ReservationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    cast_id?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    start_time?: "asc" | "desc" | undefined;
    end_time?: "asc" | "desc" | undefined;
    guide_flg?: "asc" | "desc" | undefined;
    approval?: "asc" | "desc" | undefined;
    admin_approval?: "asc" | "desc" | undefined;
    payment_amount?: "asc" | "desc" | undefined;
    payment_select?: SortOrderInput | undefined;
    payment_id?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    reservation_date?: "asc" | "desc" | undefined;
    address_id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: ReservationCountOrderByAggregateInput | undefined;
    _avg?: ReservationAvgOrderByAggregateInput | undefined;
    _max?: ReservationMaxOrderByAggregateInput | undefined;
    _min?: ReservationMinOrderByAggregateInput | undefined;
    _sum?: ReservationSumOrderByAggregateInput | undefined;
}
