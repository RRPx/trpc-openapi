import { NotificationCountOrderByAggregateInput } from "../inputs/NotificationCountOrderByAggregateInput";
import { NotificationMaxOrderByAggregateInput } from "../inputs/NotificationMaxOrderByAggregateInput";
import { NotificationMinOrderByAggregateInput } from "../inputs/NotificationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class NotificationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    category?: SortOrderInput | undefined;
    notification_date?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    cast_id?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    is_seen?: "asc" | "desc" | undefined;
    language?: SortOrderInput | undefined;
    targeted_user?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: NotificationCountOrderByAggregateInput | undefined;
    _max?: NotificationMaxOrderByAggregateInput | undefined;
    _min?: NotificationMinOrderByAggregateInput | undefined;
}
