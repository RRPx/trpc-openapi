import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCastOrThrowArgs } from "./args/FindFirstCastOrThrowArgs";
import { Cast } from "../../../models/Cast";
export declare class FindFirstCastOrThrowResolver {
    findFirstCastOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCastOrThrowArgs): Promise<Cast | null>;
}
