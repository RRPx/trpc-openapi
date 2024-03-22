import type { GraphQLResolveInfo } from "graphql";
import { AggregateFavoriteArgs } from "./args/AggregateFavoriteArgs";
import { AggregateFavorite } from "../../outputs/AggregateFavorite";
export declare class AggregateFavoriteResolver {
    aggregateFavorite(ctx: any, info: GraphQLResolveInfo, args: AggregateFavoriteArgs): Promise<AggregateFavorite>;
}
