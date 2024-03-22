import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserRankArgs } from "./args/AggregateUserRankArgs";
import { AggregateUserRank } from "../../outputs/AggregateUserRank";
export declare class AggregateUserRankResolver {
    aggregateUserRank(ctx: any, info: GraphQLResolveInfo, args: AggregateUserRankArgs): Promise<AggregateUserRank>;
}
