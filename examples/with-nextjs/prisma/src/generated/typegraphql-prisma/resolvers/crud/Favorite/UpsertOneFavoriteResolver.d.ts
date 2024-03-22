import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneFavoriteArgs } from "./args/UpsertOneFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
export declare class UpsertOneFavoriteResolver {
    upsertOneFavorite(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFavoriteArgs): Promise<Favorite>;
}
