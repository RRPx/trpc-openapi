import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserRankArgs } from "./args/UpsertOneUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class UpsertOneUserRankResolver {
    upsertOneUserRank(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserRankArgs): Promise<UserRank>;
}
