import { AddressCountOrderByAggregateInput } from "../inputs/AddressCountOrderByAggregateInput";
import { AddressMaxOrderByAggregateInput } from "../inputs/AddressMaxOrderByAggregateInput";
import { AddressMinOrderByAggregateInput } from "../inputs/AddressMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AddressOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    long?: "asc" | "desc" | undefined;
    note?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    is_display?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _count?: AddressCountOrderByAggregateInput | undefined;
    _max?: AddressMaxOrderByAggregateInput | undefined;
    _min?: AddressMinOrderByAggregateInput | undefined;
}
