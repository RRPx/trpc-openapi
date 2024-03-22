import { ChatMessageOrderByWithRelationInput } from "../../../inputs/ChatMessageOrderByWithRelationInput";
import { ChatMessageWhereInput } from "../../../inputs/ChatMessageWhereInput";
import { ChatMessageWhereUniqueInput } from "../../../inputs/ChatMessageWhereUniqueInput";
export declare class AggregateChatMessageArgs {
    where?: ChatMessageWhereInput | undefined;
    orderBy?: ChatMessageOrderByWithRelationInput[] | undefined;
    cursor?: ChatMessageWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
