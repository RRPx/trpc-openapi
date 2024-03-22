import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserRankArgs } from "./args/CreateOneUserRankArgs";
import { UserRank } from "../../../models/UserRank";
export declare class CreateOneUserRankResolver {
    createOneUserRank(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserRankArgs): Promise<UserRank>;
}
