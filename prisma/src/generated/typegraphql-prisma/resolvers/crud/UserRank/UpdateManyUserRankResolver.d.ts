import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyUserRankArgs } from "./args/UpdateManyUserRankArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUserRankResolver {
    updateManyUserRank(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserRankArgs): Promise<AffectedRowsOutput>;
}
