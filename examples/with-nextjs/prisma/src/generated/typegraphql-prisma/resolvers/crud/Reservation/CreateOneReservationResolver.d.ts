import type { GraphQLResolveInfo } from "graphql";
import { CreateOneReservationArgs } from "./args/CreateOneReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class CreateOneReservationResolver {
    createOneReservation(ctx: any, info: GraphQLResolveInfo, args: CreateOneReservationArgs): Promise<Reservation>;
}
