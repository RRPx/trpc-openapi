import { CastOrderByRelationAggregateInput } from "../inputs/CastOrderByRelationAggregateInput";
import { ReservationOrderByRelationAggregateInput } from "../inputs/ReservationOrderByRelationAggregateInput";
export declare class OptionMasterOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    option_menu?: "asc" | "desc" | undefined;
    fee?: "asc" | "desc" | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    cast?: CastOrderByRelationAggregateInput | undefined;
    reservation?: ReservationOrderByRelationAggregateInput | undefined;
}
