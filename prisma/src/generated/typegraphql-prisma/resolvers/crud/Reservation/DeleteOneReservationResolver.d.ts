import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneReservationArgs } from "./args/DeleteOneReservationArgs";
import { Reservation } from "../../../models/Reservation";
export declare class DeleteOneReservationResolver {
    deleteOneReservation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReservationArgs): Promise<Reservation | null>;
}
