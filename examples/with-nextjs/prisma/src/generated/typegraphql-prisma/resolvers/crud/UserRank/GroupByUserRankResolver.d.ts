import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserRankArgs } from "./args/GroupByUserRankArgs";
import { UserRankGroupBy } from "../../outputs/UserRankGroupBy";
export declare class GroupByUserRankResolver {
    groupByUserRank(ctx: any, info: GraphQLResolveInfo, args: GroupByUserRankArgs): Promise<UserRankGroupBy[]>;
}
