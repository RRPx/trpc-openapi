import type { GraphQLResolveInfo } from "graphql";
import { FindManyReservationArgs } from "./args/FindManyReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class FindManyReservationResolver {
    reservations(ctx: any, info: GraphQLResolveInfo, args: FindManyReservationArgs): Promise<Reservation[]>;
}
