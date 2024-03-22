import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReservationArgs } from "./args/FindFirstReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class FindFirstReservationResolver {
    findFirstReservation(ctx: any, info: GraphQLResolveInfo, args: FindFirstReservationArgs): Promise<Reservation | null>;
}
