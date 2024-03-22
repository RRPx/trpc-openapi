import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCastArgs } from "./args/FindFirstCastArgs";
import { Cast } from "../../../models/Cast";
export declare class FindFirstCastResolver {
    findFirstCast(ctx: any, info: GraphQLResolveInfo, args: FindFirstCastArgs): Promise<Cast | null>;
}
