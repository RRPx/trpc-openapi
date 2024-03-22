import { ReviewCountOrderByAggregateInput } from "../inputs/ReviewCountOrderByAggregateInput";
import { ReviewMaxOrderByAggregateInput } from "../inputs/ReviewMaxOrderByAggregateInput";
import { ReviewMinOrderByAggregateInput } from "../inputs/ReviewMinOrderByAggregateInput";
export declare class ReviewOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    cast_id?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    nick_name?: "asc" | "desc" | undefined;
    score?: "asc" | "desc" | undefined;
    reviews?: "asc" | "desc" | undefined;
    approval?: "asc" | "desc" | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _count?: ReviewCountOrderByAggregateInput | undefined;
    _max?: ReviewMaxOrderByAggregateInput | undefined;
    _min?: ReviewMinOrderByAggregateInput | undefined;
}
