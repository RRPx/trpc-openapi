import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExampleOrThrowArgs } from "./args/FindUniqueExampleOrThrowArgs";
import { Example } from "../../../models/Example";
export declare class FindUniqueExampleOrThrowResolver {
    getExample(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExampleOrThrowArgs): Promise<Example | null>;
}
