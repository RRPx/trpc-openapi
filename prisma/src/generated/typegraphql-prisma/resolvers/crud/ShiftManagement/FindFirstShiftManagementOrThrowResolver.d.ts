import type { GraphQLResolveInfo } from "graphql";
import { FindFirstShiftManagementOrThrowArgs } from "./args/FindFirstShiftManagementOrThrowArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class FindFirstShiftManagementOrThrowResolver {
    findFirstShiftManagementOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstShiftManagementOrThrowArgs): Promise<ShiftManagement | null>;
}
