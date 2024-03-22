import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyOptionMasterArgs } from "./args/UpdateManyOptionMasterArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOptionMasterResolver {
    updateManyOptionMaster(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOptionMasterArgs): Promise<AffectedRowsOutput>;
}
