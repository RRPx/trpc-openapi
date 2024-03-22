import type { GraphQLResolveInfo } from "graphql";
import { CreateOneChatRoomArgs } from "./args/CreateOneChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class CreateOneChatRoomResolver {
    createOneChatRoom(ctx: any, info: GraphQLResolveInfo, args: CreateOneChatRoomArgs): Promise<ChatRoom>;
}
