import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueReservationArgs } from "./args/FindUniqueReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class FindUniqueReservationResolver {
    reservation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReservationArgs): Promise<Reservation | null>;
}
