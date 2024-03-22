import { ChatMessageCountAggregate } from "../outputs/ChatMessageCountAggregate";
import { ChatMessageMaxAggregate } from "../outputs/ChatMessageMaxAggregate";
import { ChatMessageMinAggregate } from "../outputs/ChatMessageMinAggregate";
export declare class AggregateChatMessage {
    _count: ChatMessageCountAggregate | null;
    _min: ChatMessageMinAggregate | null;
    _max: ChatMessageMaxAggregate | null;
}
