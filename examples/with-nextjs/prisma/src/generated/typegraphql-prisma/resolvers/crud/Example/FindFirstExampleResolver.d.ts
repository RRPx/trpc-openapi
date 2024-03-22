import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExampleArgs } from "./args/FindFirstExampleArgs";
import { Example } from "../../../models/Example";
export declare class FindFirstExampleResolver {
    findFirstExample(ctx: any, info: GraphQLResolveInfo, args: FindFirstExampleArgs): Promise<Example | null>;
}
