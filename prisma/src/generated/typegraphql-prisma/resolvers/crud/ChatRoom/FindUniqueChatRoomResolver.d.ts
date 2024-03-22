import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueChatRoomArgs } from "./args/FindUniqueChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class FindUniqueChatRoomResolver {
    chatRoom(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChatRoomArgs): Promise<ChatRoom | null>;
}
