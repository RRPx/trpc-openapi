import type { GraphQLResolveInfo } from "graphql";
import { AggregateReservationArgs } from "./args/AggregateReservationArgs";
import { AggregateReservation } from "../../outputs/AggregateReservation";
export declare class AggregateReservationResolver {
    aggregateReservation(ctx: any, info: GraphQLResolveInfo, args: AggregateReservationArgs): Promise<AggregateReservation>;
}
