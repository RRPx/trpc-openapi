import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneShiftManagementArgs } from "./args/UpdateOneShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class UpdateOneShiftManagementResolver {
    updateOneShiftManagement(ctx: any, info: GraphQLResolveInfo, args: UpdateOneShiftManagementArgs): Promise<ShiftManagement | null>;
}
