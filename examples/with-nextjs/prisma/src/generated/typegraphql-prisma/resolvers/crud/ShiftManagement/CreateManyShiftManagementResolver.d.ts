import type { GraphQLResolveInfo } from "graphql";
import { CreateManyShiftManagementArgs } from "./args/CreateManyShiftManagementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyShiftManagementResolver {
    createManyShiftManagement(ctx: any, info: GraphQLResolveInfo, args: CreateManyShiftManagementArgs): Promise<AffectedRowsOutput>;
}
