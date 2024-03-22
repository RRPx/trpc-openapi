import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyExampleArgs } from "./args/DeleteManyExampleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyExampleResolver {
    deleteManyExample(ctx: any, info: GraphQLResolveInfo, args: DeleteManyExampleArgs): Promise<AffectedRowsOutput>;
}
