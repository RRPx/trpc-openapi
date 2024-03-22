import type { GraphQLResolveInfo } from "graphql";
import { FindManyChatRoomArgs } from "./args/FindManyChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class FindManyChatRoomResolver {
    chatRooms(ctx: any, info: GraphQLResolveInfo, args: FindManyChatRoomArgs): Promise<ChatRoom[]>;
}
