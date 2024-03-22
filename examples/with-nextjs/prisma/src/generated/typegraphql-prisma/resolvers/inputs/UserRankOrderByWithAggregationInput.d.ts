import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserRankAvgOrderByAggregateInput } from "../inputs/UserRankAvgOrderByAggregateInput";
import { UserRankCountOrderByAggregateInput } from "../inputs/UserRankCountOrderByAggregateInput";
import { UserRankMaxOrderByAggregateInput } from "../inputs/UserRankMaxOrderByAggregateInput";
import { UserRankMinOrderByAggregateInput } from "../inputs/UserRankMinOrderByAggregateInput";
import { UserRankSumOrderByAggregateInput } from "../inputs/UserRankSumOrderByAggregateInput";
export declare class UserRankOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    basic_fee?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: UserRankCountOrderByAggregateInput | undefined;
    _avg?: UserRankAvgOrderByAggregateInput | undefined;
    _max?: UserRankMaxOrderByAggregateInput | undefined;
    _min?: UserRankMinOrderByAggregateInput | undefined;
    _sum?: UserRankSumOrderByAggregateInput | undefined;
}
