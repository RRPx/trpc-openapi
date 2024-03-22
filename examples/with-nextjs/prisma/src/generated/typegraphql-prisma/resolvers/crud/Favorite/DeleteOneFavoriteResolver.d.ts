import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneFavoriteArgs } from "./args/DeleteOneFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class DeleteOneFavoriteResolver {
    deleteOneFavorite(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFavoriteArgs): Promise<Favorite | null>;
}
