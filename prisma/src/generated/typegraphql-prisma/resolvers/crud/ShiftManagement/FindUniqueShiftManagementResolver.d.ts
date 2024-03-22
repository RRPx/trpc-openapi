import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueShiftManagementArgs } from "./args/FindUniqueShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class FindUniqueShiftManagementResolver {
    shiftManagement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShiftManagementArgs): Promise<ShiftManagement | null>;
}
