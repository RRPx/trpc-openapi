import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueShiftManagementOrThrowArgs } from "./args/FindUniqueShiftManagementOrThrowArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class FindUniqueShiftManagementOrThrowResolver {
    getShiftManagement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShiftManagementOrThrowArgs): Promise<ShiftManagement | null>;
}
