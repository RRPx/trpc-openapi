import { CastCountOrderByAggregateInput } from "../inputs/CastCountOrderByAggregateInput";
import { CastMaxOrderByAggregateInput } from "../inputs/CastMaxOrderByAggregateInput";
import { CastMinOrderByAggregateInput } from "../inputs/CastMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CastOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nick_name?: "asc" | "desc" | undefined;
    telephone_number?: SortOrderInput | undefined;
    birthday?: SortOrderInput | undefined;
    locate?: SortOrderInput | undefined;
    language_type?: "asc" | "desc" | undefined;
    language_other?: SortOrderInput | undefined;
    cosplay_guide?: "asc" | "desc" | undefined;
    cosplay_content?: "asc" | "desc" | undefined;
    cosplay_other?: SortOrderInput | undefined;
    cup_number?: SortOrderInput | undefined;
    memo?: SortOrderInput | undefined;
    user_rank_id?: "asc" | "desc" | undefined;
    is_display?: "asc" | "desc" | undefined;
    homepage_recommended_priority?: SortOrderInput | undefined;
    profile_approval_by_admin?: "asc" | "desc" | undefined;
    twitter_user_name?: SortOrderInput | undefined;
    instagram_user_name?: SortOrderInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: CastCountOrderByAggregateInput | undefined;
    _max?: CastMaxOrderByAggregateInput | undefined;
    _min?: CastMinOrderByAggregateInput | undefined;
}
