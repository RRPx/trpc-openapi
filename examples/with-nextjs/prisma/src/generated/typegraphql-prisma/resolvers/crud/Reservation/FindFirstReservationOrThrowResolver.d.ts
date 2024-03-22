import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReservationOrThrowArgs } from "./args/FindFirstReservationOrThrowArgs";
import { Reservation } from "../../../models/Reservation";
export declare class FindFirstReservationOrThrowResolver {
    findFirstReservationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReservationOrThrowArgs): Promise<Reservation | null>;
}
