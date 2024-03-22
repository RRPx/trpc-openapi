import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyFavoriteArgs } from "./args/DeleteManyFavoriteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFavoriteResolver {
    deleteManyFavorite(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFavoriteArgs): Promise<AffectedRowsOutput>;
}
