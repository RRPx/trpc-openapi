import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserRankArgs } from "./args/FindUniqueUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class FindUniqueUserRankResolver {
    userRank(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserRankArgs): Promise<UserRank | null>;
}
