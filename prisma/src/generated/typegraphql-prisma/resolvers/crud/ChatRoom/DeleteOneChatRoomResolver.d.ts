import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneChatRoomArgs } from "./args/DeleteOneChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class DeleteOneChatRoomResolver {
    deleteOneChatRoom(ctx: any, info: GraphQLResolveInfo, args: DeleteOneChatRoomArgs): Promise<ChatRoom | null>;
}
