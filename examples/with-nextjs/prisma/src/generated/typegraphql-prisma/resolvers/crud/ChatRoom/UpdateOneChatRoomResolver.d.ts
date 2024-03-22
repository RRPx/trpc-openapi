import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneChatRoomArgs } from "./args/UpdateOneChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class UpdateOneChatRoomResolver {
    updateOneChatRoom(ctx: any, info: GraphQLResolveInfo, args: UpdateOneChatRoomArgs): Promise<ChatRoom | null>;
}
