import type { GraphQLResolveInfo } from "graphql";
import { FindManyExampleArgs } from "./args/FindManyExampleArgs";
import { Example } from "../../../models/Example";
export declare class FindManyExampleResolver {
    examples(ctx: any, info: GraphQLResolveInfo, args: FindManyExampleArgs): Promise<Example[]>;
}
