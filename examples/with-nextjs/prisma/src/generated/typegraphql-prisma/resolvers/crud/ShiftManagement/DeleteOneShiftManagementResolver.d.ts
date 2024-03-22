import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneShiftManagementArgs } from "./args/DeleteOneShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class DeleteOneShiftManagementResolver {
    deleteOneShiftManagement(ctx: any, info: GraphQLResolveInfo, args: DeleteOneShiftManagementArgs): Promise<ShiftManagement | null>;
}
