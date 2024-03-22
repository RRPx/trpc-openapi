import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { UserRank } from "../../../models/UserRank";
import { UserRankCastArgs } from "./args/UserRankCastArgs";
export declare class UserRankRelationsResolver {
    cast(userRank: UserRank, ctx: any, info: GraphQLResolveInfo, args: UserRankCastArgs): Promise<Cast[]>;
}
