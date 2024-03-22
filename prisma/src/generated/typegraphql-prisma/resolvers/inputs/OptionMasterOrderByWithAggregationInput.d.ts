import { OptionMasterAvgOrderByAggregateInput } from "../inputs/OptionMasterAvgOrderByAggregateInput";
import { OptionMasterCountOrderByAggregateInput } from "../inputs/OptionMasterCountOrderByAggregateInput";
import { OptionMasterMaxOrderByAggregateInput } from "../inputs/OptionMasterMaxOrderByAggregateInput";
import { OptionMasterMinOrderByAggregateInput } from "../inputs/OptionMasterMinOrderByAggregateInput";
import { OptionMasterSumOrderByAggregateInput } from "../inputs/OptionMasterSumOrderByAggregateInput";
export declare class OptionMasterOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    option_menu?: "asc" | "desc" | undefined;
    fee?: "asc" | "desc" | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: OptionMasterCountOrderByAggregateInput | undefined;
    _avg?: OptionMasterAvgOrderByAggregateInput | undefined;
    _max?: OptionMasterMaxOrderByAggregateInput | undefined;
    _min?: OptionMasterMinOrderByAggregateInput | undefined;
    _sum?: OptionMasterSumOrderByAggregateInput | undefined;
}
