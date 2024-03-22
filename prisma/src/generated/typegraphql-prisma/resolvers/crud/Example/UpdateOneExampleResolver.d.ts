import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneExampleArgs } from "./args/UpdateOneExampleArgs";
import { Example } from "../../../models/Example";
export declare class UpdateOneExampleResolver {
    updateOneExample(ctx: any, info: GraphQLResolveInfo, args: UpdateOneExampleArgs): Promise<Example | null>;
}
