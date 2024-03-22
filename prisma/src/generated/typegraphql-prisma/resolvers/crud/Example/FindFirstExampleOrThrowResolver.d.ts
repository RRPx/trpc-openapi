import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExampleOrThrowArgs } from "./args/FindFirstExampleOrThrowArgs";
import { Example } from "../../../models/Example";
export declare class FindFirstExampleOrThrowResolver {
    findFirstExampleOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstExampleOrThrowArgs): Promise<Example | null>;
}
