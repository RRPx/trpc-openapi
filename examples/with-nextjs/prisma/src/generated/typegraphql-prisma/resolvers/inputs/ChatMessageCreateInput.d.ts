import { ChatRoomCreateNestedOneWithoutMessagesInput } from "../inputs/ChatRoomCreateNestedOneWithoutMessagesInput";
export declare class ChatMessageCreateInput {
    id?: string | undefined;
    message?: string | undefined;
    is_seen?: boolean | undefined;
    is_admin_seen?: boolean | undefined;
    user_type: "CAST" | "CLIENT";
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    chat_room: ChatRoomCreateNestedOneWithoutMessagesInput;
}
