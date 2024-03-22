import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExampleArgs } from "./args/FindUniqueExampleArgs";
import { Example } from "../../../models/Example";
export declare class FindUniqueExampleResolver {
    example(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExampleArgs): Promise<Example | null>;
}
