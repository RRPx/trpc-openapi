import { ChatRoomOrderByWithRelationInput } from "../../../inputs/ChatRoomOrderByWithRelationInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";
export declare class FindFirstChatRoomArgs {
    where?: ChatRoomWhereInput | undefined;
    orderBy?: ChatRoomOrderByWithRelationInput[] | undefined;
    cursor?: ChatRoomWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "reservation_id" | "created_at" | "updated_at"> | undefined;
}
