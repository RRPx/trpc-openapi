import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneExampleArgs } from "./args/DeleteOneExampleArgs";
import { Example } from "../../../models/Example";
export declare class DeleteOneExampleResolver {
    deleteOneExample(ctx: any, info: GraphQLResolveInfo, args: DeleteOneExampleArgs): Promise<Example | null>;
}
