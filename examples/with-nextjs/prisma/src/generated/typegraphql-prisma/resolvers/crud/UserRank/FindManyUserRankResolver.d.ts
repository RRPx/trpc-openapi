import type { GraphQLResolveInfo } from "graphql";
import { FindManyUserRankArgs } from "./args/FindManyUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class FindManyUserRankResolver {
    userRanks(ctx: any, info: GraphQLResolveInfo, args: FindManyUserRankArgs): Promise<UserRank[]>;
}
