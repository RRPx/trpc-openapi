import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserRankArgs } from "./args/FindFirstUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class FindFirstUserRankResolver {
    findFirstUserRank(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserRankArgs): Promise<UserRank | null>;
}
