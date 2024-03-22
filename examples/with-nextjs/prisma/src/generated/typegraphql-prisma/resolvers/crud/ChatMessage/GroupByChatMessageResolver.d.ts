import type { GraphQLResolveInfo } from "graphql";
import { GroupByChatMessageArgs } from "./args/GroupByChatMessageArgs";
import { ChatMessageGroupBy } from "../../outputs/ChatMessageGroupBy";
export declare class GroupByChatMessageResolver {
    groupByChatMessage(ctx: any, info: GraphQLResolveInfo, args: GroupByChatMessageArgs): Promise<ChatMessageGroupBy[]>;
}
