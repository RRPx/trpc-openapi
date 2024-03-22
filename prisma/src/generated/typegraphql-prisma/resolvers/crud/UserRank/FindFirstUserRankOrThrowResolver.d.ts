import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserRankOrThrowArgs } from "./args/FindFirstUserRankOrThrowArgs";
import { UserRank } from "../../../models/UserRank";
export declare class FindFirstUserRankOrThrowResolver {
    findFirstUserRankOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserRankOrThrowArgs): Promise<UserRank | null>;
}
