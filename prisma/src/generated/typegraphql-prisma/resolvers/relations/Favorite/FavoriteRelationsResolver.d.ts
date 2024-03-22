import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { Client } from "../../../models/Client";
import { Favorite } from "../../../models/Favorite";
import { FavoriteCastArgs } from "./args/FavoriteCastArgs";
import { FavoriteClientArgs } from "./args/FavoriteClientArgs";
export declare class FavoriteRelationsResolver {
    client(favorite: Favorite, ctx: any, info: GraphQLResolveInfo, args: FavoriteClientArgs): Promise<Client | null>;
    cast(favorite: Favorite, ctx: any, info: GraphQLResolveInfo, args: FavoriteCastArgs): Promise<Cast | null>;
}
