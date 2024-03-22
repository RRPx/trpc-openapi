import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyShiftManagementArgs } from "./args/DeleteManyShiftManagementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyShiftManagementResolver {
    deleteManyShiftManagement(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShiftManagementArgs): Promise<AffectedRowsOutput>;
}
