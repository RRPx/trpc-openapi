import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatRoomArgs } from "./args/AggregateChatRoomArgs";
import { AggregateChatRoom } from "../../outputs/AggregateChatRoom";
export declare class AggregateChatRoomResolver {
    aggregateChatRoom(ctx: any, info: GraphQLResolveInfo, args: AggregateChatRoomArgs): Promise<AggregateChatRoom>;
}
