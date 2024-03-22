import { ChatRoomOrderByWithAggregationInput } from "../../../inputs/ChatRoomOrderByWithAggregationInput";
import { ChatRoomScalarWhereWithAggregatesInput } from "../../../inputs/ChatRoomScalarWhereWithAggregatesInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";
export declare class GroupByChatRoomArgs {
    where?: ChatRoomWhereInput | undefined;
    orderBy?: ChatRoomOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "reservation_id" | "created_at" | "updated_at">;
    having?: ChatRoomScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
