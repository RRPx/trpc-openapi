import { ChatRoomOrderByWithRelationInput } from "../../../inputs/ChatRoomOrderByWithRelationInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";
export declare class AggregateChatRoomArgs {
    where?: ChatRoomWhereInput | undefined;
    orderBy?: ChatRoomOrderByWithRelationInput[] | undefined;
    cursor?: ChatRoomWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
