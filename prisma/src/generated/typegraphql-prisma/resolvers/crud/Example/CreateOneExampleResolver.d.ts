import type { GraphQLResolveInfo } from "graphql";
import { CreateOneExampleArgs } from "./args/CreateOneExampleArgs";
import { Example } from "../../../models/Example";
export declare class CreateOneExampleResolver {
    createOneExample(ctx: any, info: GraphQLResolveInfo, args: CreateOneExampleArgs): Promise<Example>;
}
