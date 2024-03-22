import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyShiftManagementArgs } from "./args/UpdateManyShiftManagementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyShiftManagementResolver {
    updateManyShiftManagement(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShiftManagementArgs): Promise<AffectedRowsOutput>;
}
