import { ChatMessageOrderByWithAggregationInput } from "../../../inputs/ChatMessageOrderByWithAggregationInput";
import { ChatMessageScalarWhereWithAggregatesInput } from "../../../inputs/ChatMessageScalarWhereWithAggregatesInput";
import { ChatMessageWhereInput } from "../../../inputs/ChatMessageWhereInput";
export declare class GroupByChatMessageArgs {
    where?: ChatMessageWhereInput | undefined;
    orderBy?: ChatMessageOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "chat_room_id" | "message" | "is_seen" | "is_admin_seen" | "user_type" | "created_at" | "updated_at">;
    having?: ChatMessageScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
