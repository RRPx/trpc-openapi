import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueChatRoomOrThrowArgs } from "./args/FindUniqueChatRoomOrThrowArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class FindUniqueChatRoomOrThrowResolver {
    getChatRoom(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChatRoomOrThrowArgs): Promise<ChatRoom | null>;
}
