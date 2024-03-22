import type { GraphQLResolveInfo } from "graphql";
import { FindManyShiftManagementArgs } from "./args/FindManyShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class FindManyShiftManagementResolver {
    shiftManagements(ctx: any, info: GraphQLResolveInfo, args: FindManyShiftManagementArgs): Promise<ShiftManagement[]>;
}
