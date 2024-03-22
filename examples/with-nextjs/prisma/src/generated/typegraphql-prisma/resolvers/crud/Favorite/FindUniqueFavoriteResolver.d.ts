import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFavoriteArgs } from "./args/FindUniqueFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class FindUniqueFavoriteResolver {
    favorite(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFavoriteArgs): Promise<Favorite | null>;
}
