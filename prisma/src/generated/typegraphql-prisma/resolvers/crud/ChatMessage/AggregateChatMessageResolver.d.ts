import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatMessageArgs } from "./args/AggregateChatMessageArgs";
import { AggregateChatMessage } from "../../outputs/AggregateChatMessage";
export declare class AggregateChatMessageResolver {
    aggregateChatMessage(ctx: any, info: GraphQLResolveInfo, args: AggregateChatMessageArgs): Promise<AggregateChatMessage>;
}
