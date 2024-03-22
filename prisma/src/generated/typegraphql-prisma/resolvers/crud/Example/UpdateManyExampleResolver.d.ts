import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyExampleArgs } from "./args/UpdateManyExampleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyExampleResolver {
    updateManyExample(ctx: any, info: GraphQLResolveInfo, args: UpdateManyExampleArgs): Promise<AffectedRowsOutput>;
}
