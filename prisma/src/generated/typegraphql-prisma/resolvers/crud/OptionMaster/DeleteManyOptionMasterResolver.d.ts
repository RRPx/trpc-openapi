import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyOptionMasterArgs } from "./args/DeleteManyOptionMasterArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOptionMasterResolver {
    deleteManyOptionMaster(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOptionMasterArgs): Promise<AffectedRowsOutput>;
}
