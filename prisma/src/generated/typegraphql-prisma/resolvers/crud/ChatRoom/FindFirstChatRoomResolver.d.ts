import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatRoomArgs } from "./args/FindFirstChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class FindFirstChatRoomResolver {
    findFirstChatRoom(ctx: any, info: GraphQLResolveInfo, args: FindFirstChatRoomArgs): Promise<ChatRoom | null>;
}
