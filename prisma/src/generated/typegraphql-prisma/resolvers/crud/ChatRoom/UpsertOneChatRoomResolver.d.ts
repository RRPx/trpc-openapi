import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneChatRoomArgs } from "./args/UpsertOneChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class UpsertOneChatRoomResolver {
    upsertOneChatRoom(ctx: any, info: GraphQLResolveInfo, args: UpsertOneChatRoomArgs): Promise<ChatRoom>;
}
