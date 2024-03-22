import { ClientCountOrderByAggregateInput } from "../inputs/ClientCountOrderByAggregateInput";
import { ClientMaxOrderByAggregateInput } from "../inputs/ClientMaxOrderByAggregateInput";
import { ClientMinOrderByAggregateInput } from "../inputs/ClientMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ClientOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    telephone_number?: SortOrderInput | undefined;
    birthday?: SortOrderInput | undefined;
    age?: SortOrderInput | undefined;
    nick_name?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    gender?: SortOrderInput | undefined;
    image2?: SortOrderInput | undefined;
    image3?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _count?: ClientCountOrderByAggregateInput | undefined;
    _max?: ClientMaxOrderByAggregateInput | undefined;
    _min?: ClientMinOrderByAggregateInput | undefined;
}
