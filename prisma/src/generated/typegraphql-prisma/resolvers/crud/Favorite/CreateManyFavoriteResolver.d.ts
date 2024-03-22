import type { GraphQLResolveInfo } from "graphql";
import { CreateManyFavoriteArgs } from "./args/CreateManyFavoriteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFavoriteResolver {
    createManyFavorite(ctx: any, info: GraphQLResolveInfo, args: CreateManyFavoriteArgs): Promise<AffectedRowsOutput>;
}
