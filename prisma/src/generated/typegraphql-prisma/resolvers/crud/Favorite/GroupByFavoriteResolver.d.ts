import type { GraphQLResolveInfo } from "graphql";
import { GroupByFavoriteArgs } from "./args/GroupByFavoriteArgs";
import { FavoriteGroupBy } from "../../outputs/FavoriteGroupBy";
export declare class GroupByFavoriteResolver {
    groupByFavorite(ctx: any, info: GraphQLResolveInfo, args: GroupByFavoriteArgs): Promise<FavoriteGroupBy[]>;
}
