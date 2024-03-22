import { ChatRoomCountAggregate } from "../outputs/ChatRoomCountAggregate";
import { ChatRoomMaxAggregate } from "../outputs/ChatRoomMaxAggregate";
import { ChatRoomMinAggregate } from "../outputs/ChatRoomMinAggregate";
export declare class ChatRoomGroupBy {
    id: string;
    reservation_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ChatRoomCountAggregate | null;
    _min: ChatRoomMinAggregate | null;
    _max: ChatRoomMaxAggregate | null;
}
