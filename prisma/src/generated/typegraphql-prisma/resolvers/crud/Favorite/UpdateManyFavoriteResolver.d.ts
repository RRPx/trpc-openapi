import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyFavoriteArgs } from "./args/UpdateManyFavoriteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFavoriteResolver {
    updateManyFavorite(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFavoriteArgs): Promise<AffectedRowsOutput>;
}
