import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneExampleArgs } from "./args/UpsertOneExampleArgs";
import { Example } from "../../../models/Example";
export declare class UpsertOneExampleResolver {
    upsertOneExample(ctx: any, info: GraphQLResolveInfo, args: UpsertOneExampleArgs): Promise<Example>;
}
