import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFavoriteArgs } from "./args/CreateOneFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class CreateOneFavoriteResolver {
    createOneFavorite(ctx: any, info: GraphQLResolveInfo, args: CreateOneFavoriteArgs): Promise<Favorite>;
}
