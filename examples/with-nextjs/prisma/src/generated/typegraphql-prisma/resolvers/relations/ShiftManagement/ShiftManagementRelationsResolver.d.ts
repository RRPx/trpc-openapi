import type { GraphQLResolveInfo } from "graphql";
import { Cast } from "../../../models/Cast";
import { Reservation } from "../../../models/Reservation";
import { ShiftManagement } from "../../../models/ShiftManagement";
import { ShiftManagementReservationArgs } from "./args/ShiftManagementReservationArgs";
export declare class ShiftManagementRelationsResolver {
    cast(shiftManagement: ShiftManagement, ctx: any, info: GraphQLResolveInfo): Promise<Cast>;
    Reservation(shiftManagement: ShiftManagement, ctx: any, info: GraphQLResolveInfo, args: ShiftManagementReservationArgs): Promise<Reservation | null>;
}
