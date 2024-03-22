import type { GraphQLResolveInfo } from "graphql";
import { GroupByChatRoomArgs } from "./args/GroupByChatRoomArgs";
import { ChatRoomGroupBy } from "../../outputs/ChatRoomGroupBy";
export declare class GroupByChatRoomResolver {
    groupByChatRoom(ctx: any, info: GraphQLResolveInfo, args: GroupByChatRoomArgs): Promise<ChatRoomGroupBy[]>;
}
