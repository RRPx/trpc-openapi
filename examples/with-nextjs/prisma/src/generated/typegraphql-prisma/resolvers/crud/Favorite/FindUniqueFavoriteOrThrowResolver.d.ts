import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFavoriteOrThrowArgs } from "./args/FindUniqueFavoriteOrThrowArgs";
import { Favorite } from "../../../models/Favorite";
export declare class FindUniqueFavoriteOrThrowResolver {
    getFavorite(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFavoriteOrThrowArgs): Promise<Favorite | null>;
}
