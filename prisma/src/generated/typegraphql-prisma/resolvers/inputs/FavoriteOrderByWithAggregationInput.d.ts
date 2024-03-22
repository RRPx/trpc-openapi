import { FavoriteCountOrderByAggregateInput } from "../inputs/FavoriteCountOrderByAggregateInput";
import { FavoriteMaxOrderByAggregateInput } from "../inputs/FavoriteMaxOrderByAggregateInput";
import { FavoriteMinOrderByAggregateInput } from "../inputs/FavoriteMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FavoriteOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    client_id?: SortOrderInput | undefined;
    cast_id?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: FavoriteCountOrderByAggregateInput | undefined;
    _max?: FavoriteMaxOrderByAggregateInput | undefined;
    _min?: FavoriteMinOrderByAggregateInput | undefined;
}
