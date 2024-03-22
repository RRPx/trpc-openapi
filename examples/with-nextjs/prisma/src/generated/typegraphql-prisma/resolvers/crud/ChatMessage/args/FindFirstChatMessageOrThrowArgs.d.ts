import { ChatMessageOrderByWithRelationInput } from "../../../inputs/ChatMessageOrderByWithRelationInput";
import { ChatMessageWhereInput } from "../../../inputs/ChatMessageWhereInput";
import { ChatMessageWhereUniqueInput } from "../../../inputs/ChatMessageWhereUniqueInput";
export declare class FindFirstChatMessageOrThrowArgs {
    where?: ChatMessageWhereInput | undefined;
    orderBy?: ChatMessageOrderByWithRelationInput[] | undefined;
    cursor?: ChatMessageWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "chat_room_id" | "message" | "is_seen" | "is_admin_seen" | "user_type" | "created_at" | "updated_at"> | undefined;
}
