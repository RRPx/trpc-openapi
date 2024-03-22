import type { GraphQLResolveInfo } from "graphql";
import { AggregateCastArgs } from "./args/AggregateCastArgs";
import { AggregateCast } from "../../outputs/AggregateCast";
export declare class AggregateCastResolver {
    aggregateCast(ctx: any, info: GraphQLResolveInfo, args: AggregateCastArgs): Promise<AggregateCast>;
}
