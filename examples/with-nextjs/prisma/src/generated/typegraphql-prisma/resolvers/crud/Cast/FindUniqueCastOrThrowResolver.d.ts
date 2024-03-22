import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCastOrThrowArgs } from "./args/FindUniqueCastOrThrowArgs";
import { Cast } from "../../../models/Cast";
export declare class FindUniqueCastOrThrowResolver {
    getCast(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCastOrThrowArgs): Promise<Cast | null>;
}
