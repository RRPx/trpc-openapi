import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCastArgs } from "./args/FindUniqueCastArgs";
import { Cast } from "../../../models/Cast";
export declare class FindUniqueCastResolver {
    cast(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCastArgs): Promise<Cast | null>;
}
