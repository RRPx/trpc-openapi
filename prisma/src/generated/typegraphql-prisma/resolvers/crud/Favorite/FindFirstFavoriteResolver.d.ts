import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFavoriteArgs } from "./args/FindFirstFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class FindFirstFavoriteResolver {
    findFirstFavorite(ctx: any, info: GraphQLResolveInfo, args: FindFirstFavoriteArgs): Promise<Favorite | null>;
}
