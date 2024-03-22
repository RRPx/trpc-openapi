import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserRankOrThrowArgs } from "./args/FindUniqueUserRankOrThrowArgs";
import { UserRank } from "../../../models/UserRank";
export declare class FindUniqueUserRankOrThrowResolver {
    getUserRank(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserRankOrThrowArgs): Promise<UserRank | null>;
}
