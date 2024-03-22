import type { GraphQLResolveInfo } from "graphql";
import { GroupByReservationArgs } from "./args/GroupByReservationArgs";
import { ReservationGroupBy } from "../../outputs/ReservationGroupBy";
export declare class GroupByReservationResolver {
    groupByReservation(ctx: any, info: GraphQLResolveInfo, args: GroupByReservationArgs): Promise<ReservationGroupBy[]>;
}
