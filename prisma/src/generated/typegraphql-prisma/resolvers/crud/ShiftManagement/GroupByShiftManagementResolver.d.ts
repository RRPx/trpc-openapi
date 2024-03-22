import type { GraphQLResolveInfo } from "graphql";
import { GroupByShiftManagementArgs } from "./args/GroupByShiftManagementArgs";
import { ShiftManagementGroupBy } from "../../outputs/ShiftManagementGroupBy";
export declare class GroupByShiftManagementResolver {
    groupByShiftManagement(ctx: any, info: GraphQLResolveInfo, args: GroupByShiftManagementArgs): Promise<ShiftManagementGroupBy[]>;
}
