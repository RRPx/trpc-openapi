import { ChatRoomOrderByWithRelationInput } from "../inputs/ChatRoomOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ChatMessageOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    chat_room_id?: "asc" | "desc" | undefined;
    message?: SortOrderInput | undefined;
    is_seen?: "asc" | "desc" | undefined;
    is_admin_seen?: "asc" | "desc" | undefined;
    user_type?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    chat_room?: ChatRoomOrderByWithRelationInput | undefined;
}
