import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyUserRankArgs } from "./args/DeleteManyUserRankArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUserRankResolver {
    deleteManyUserRank(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserRankArgs): Promise<AffectedRowsOutput>;
}
