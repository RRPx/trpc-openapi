import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserRankArgs } from "./args/UpdateOneUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class UpdateOneUserRankResolver {
    updateOneUserRank(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserRankArgs): Promise<UserRank | null>;
}
