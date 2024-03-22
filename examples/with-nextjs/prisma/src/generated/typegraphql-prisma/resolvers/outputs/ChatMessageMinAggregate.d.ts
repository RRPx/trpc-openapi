export declare class ChatMessageMinAggregate {
    id: string | null;
    chat_room_id: string | null;
    message: string | null;
    is_seen: boolean | null;
    is_admin_seen: boolean | null;
    user_type: "CAST" | "CLIENT" | null;
    created_at: Date | null;
    updated_at: Date | null;
}
