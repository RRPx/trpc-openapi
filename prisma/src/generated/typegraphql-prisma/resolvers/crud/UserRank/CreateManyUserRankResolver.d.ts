import type { GraphQLResolveInfo } from "graphql";
import { CreateManyUserRankArgs } from "./args/CreateManyUserRankArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUserRankResolver {
    createManyUserRank(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserRankArgs): Promise<AffectedRowsOutput>;
}
