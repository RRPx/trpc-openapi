import type { GraphQLResolveInfo } from "graphql";
import { CreateManyExampleArgs } from "./args/CreateManyExampleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyExampleResolver {
    createManyExample(ctx: any, info: GraphQLResolveInfo, args: CreateManyExampleArgs): Promise<AffectedRowsOutput>;
}
