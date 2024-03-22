import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCastArgs } from "./args/UpsertOneCastArgs";
import { Cast } from "../../../models/Cast";
export declare class UpsertOneCastResolver {
    upsertOneCast(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCastArgs): Promise<Cast>;
}
