import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatRoomOrThrowArgs } from "./args/FindFirstChatRoomOrThrowArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class FindFirstChatRoomOrThrowResolver {
    findFirstChatRoomOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstChatRoomOrThrowArgs): Promise<ChatRoom | null>;
}
