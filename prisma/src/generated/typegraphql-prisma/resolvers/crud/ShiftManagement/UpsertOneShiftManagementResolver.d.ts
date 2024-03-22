import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneShiftManagementArgs } from "./args/UpsertOneShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class UpsertOneShiftManagementResolver {
    upsertOneShiftManagement(ctx: any, info: GraphQLResolveInfo, args: UpsertOneShiftManagementArgs): Promise<ShiftManagement>;
}
