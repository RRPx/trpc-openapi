import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserRankArgs } from "./args/DeleteOneUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class DeleteOneUserRankResolver {
    deleteOneUserRank(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserRankArgs): Promise<UserRank | null>;
}
