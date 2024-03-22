import type { GraphQLResolveInfo } from "graphql";
import { FindManyCastArgs } from "./args/FindManyCastArgs";
import { Cast } from "../../../models/Cast";
export declare class FindManyCastResolver {
    casts(ctx: any, info: GraphQLResolveInfo, args: FindManyCastArgs): Promise<Cast[]>;
}
