export declare class ChatMessageCreateManyInput {
    id?: string | undefined;
    chat_room_id: string;
    message?: string | undefined;
    is_seen?: boolean | undefined;
    is_admin_seen?: boolean | undefined;
    user_type: "CAST" | "CLIENT";
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
