import { CastOrderByRelationAggregateInput } from "../inputs/CastOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UserRankOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    basic_fee?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    cast?: CastOrderByRelationAggregateInput | undefined;
}
