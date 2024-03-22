import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueReservationOrThrowArgs } from "./args/FindUniqueReservationOrThrowArgs";
import { Reservation } from "../../../models/Reservation";
export declare class FindUniqueReservationOrThrowResolver {
    getReservation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReservationOrThrowArgs): Promise<Reservation | null>;
}
