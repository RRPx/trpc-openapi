import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneReservationArgs } from "./args/UpsertOneReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class UpsertOneReservationResolver {
    upsertOneReservation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReservationArgs): Promise<Reservation>;
}
