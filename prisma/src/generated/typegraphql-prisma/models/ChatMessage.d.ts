import { ChatRoom } from "../models/ChatRoom";
export declare class ChatMessage {
    id: string;
    chat_room?: ChatRoom;
    chat_room_id: string;
    message?: string | null;
    is_seen: boolean;
    is_admin_seen: boolean;
    user_type: "CAST" | "CLIENT";
    created_at: Date;
    updated_at: Date;
}
