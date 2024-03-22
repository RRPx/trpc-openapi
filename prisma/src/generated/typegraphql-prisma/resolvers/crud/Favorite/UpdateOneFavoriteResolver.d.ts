import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneFavoriteArgs } from "./args/UpdateOneFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class UpdateOneFavoriteResolver {
    updateOneFavorite(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFavoriteArgs): Promise<Favorite | null>;
}
