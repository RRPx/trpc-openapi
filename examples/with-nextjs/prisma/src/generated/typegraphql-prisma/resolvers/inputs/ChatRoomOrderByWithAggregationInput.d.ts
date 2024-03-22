import { ChatRoomCountOrderByAggregateInput } from "../inputs/ChatRoomCountOrderByAggregateInput";
import { ChatRoomMaxOrderByAggregateInput } from "../inputs/ChatRoomMaxOrderByAggregateInput";
import { ChatRoomMinOrderByAggregateInput } from "../inputs/ChatRoomMinOrderByAggregateInput";
export declare class ChatRoomOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    reservation_id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: ChatRoomCountOrderByAggregateInput | undefined;
    _max?: ChatRoomMaxOrderByAggregateInput | undefined;
    _min?: ChatRoomMinOrderByAggregateInput | undefined;
}
