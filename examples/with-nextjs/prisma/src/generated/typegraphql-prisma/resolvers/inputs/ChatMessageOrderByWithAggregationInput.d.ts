import { ChatMessageCountOrderByAggregateInput } from "../inputs/ChatMessageCountOrderByAggregateInput";
import { ChatMessageMaxOrderByAggregateInput } from "../inputs/ChatMessageMaxOrderByAggregateInput";
import { ChatMessageMinOrderByAggregateInput } from "../inputs/ChatMessageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ChatMessageOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    chat_room_id?: "asc" | "desc" | undefined;
    message?: SortOrderInput | undefined;
    is_seen?: "asc" | "desc" | undefined;
    is_admin_seen?: "asc" | "desc" | undefined;
    user_type?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: ChatMessageCountOrderByAggregateInput | undefined;
    _max?: ChatMessageMaxOrderByAggregateInput | undefined;
    _min?: ChatMessageMinOrderByAggregateInput | undefined;
}
