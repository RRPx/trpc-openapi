import type { GraphQLResolveInfo } from "graphql";
import { FindFirstShiftManagementArgs } from "./args/FindFirstShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class FindFirstShiftManagementResolver {
    findFirstShiftManagement(ctx: any, info: GraphQLResolveInfo, args: FindFirstShiftManagementArgs): Promise<ShiftManagement | null>;
}
