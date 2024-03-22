import type { GraphQLResolveInfo } from "graphql";
import { CreateOneShiftManagementArgs } from "./args/CreateOneShiftManagementArgs";
import { ShiftManagement } from "../../../models/ShiftManagement";
export declare class CreateOneShiftManagementResolver {
    createOneShiftManagement(ctx: any, info: GraphQLResolveInfo, args: CreateOneShiftManagementArgs): Promise<ShiftManagement>;
}
