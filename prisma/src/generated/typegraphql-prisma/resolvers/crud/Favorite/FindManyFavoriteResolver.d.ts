import type { GraphQLResolveInfo } from "graphql";
import { FindManyFavoriteArgs } from "./args/FindManyFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class FindManyFavoriteResolver {
    favorites(ctx: any, info: GraphQLResolveInfo, args: FindManyFavoriteArgs): Promise<Favorite[]>;
}
