import { ChatMessageCountAggregate } from "../outputs/ChatMessageCountAggregate";
import { ChatMessageMaxAggregate } from "../outputs/ChatMessageMaxAggregate";
import { ChatMessageMinAggregate } from "../outputs/ChatMessageMinAggregate";
export declare class ChatMessageGroupBy {
    id: string;
    chat_room_id: string;
    message: string | null;
    is_seen: boolean;
    is_admin_seen: boolean;
    user_type: "CAST" | "CLIENT";
    created_at: Date;
    updated_at: Date;
    _count: ChatMessageCountAggregate | null;
    _min: ChatMessageMinAggregate | null;
    _max: ChatMessageMaxAggregate | null;
}
