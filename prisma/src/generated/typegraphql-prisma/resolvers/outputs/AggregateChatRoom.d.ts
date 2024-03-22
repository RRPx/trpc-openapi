import { ChatRoomCountAggregate } from "../outputs/ChatRoomCountAggregate";
import { ChatRoomMaxAggregate } from "../outputs/ChatRoomMaxAggregate";
import { ChatRoomMinAggregate } from "../outputs/ChatRoomMinAggregate";
export declare class AggregateChatRoom {
    _count: ChatRoomCountAggregate | null;
    _min: ChatRoomMinAggregate | null;
    _max: ChatRoomMaxAggregate | null;
}
