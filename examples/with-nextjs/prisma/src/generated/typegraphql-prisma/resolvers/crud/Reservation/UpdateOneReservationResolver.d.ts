import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneReservationArgs } from "./args/UpdateOneReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class UpdateOneReservationResolver {
    updateOneReservation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReservationArgs): Promise<Reservation | null>;
}
