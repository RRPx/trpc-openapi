import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFavoriteOrThrowArgs } from "./args/FindFirstFavoriteOrThrowArgs";
import { Favorite } from "../../../models/Favorite";
export declare class FindFirstFavoriteOrThrowResolver {
    findFirstFavoriteOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstFavoriteOrThrowArgs): Promise<Favorite | null>;
}
