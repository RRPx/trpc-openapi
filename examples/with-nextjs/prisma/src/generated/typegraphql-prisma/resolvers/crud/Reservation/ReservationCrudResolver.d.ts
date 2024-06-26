import type { GraphQLResolveInfo } from "graphql";
import { AggregateReservationArgs } from "./args/AggregateReservationArgs";
import { CreateManyReservationArgs } from "./args/CreateManyReservationArgs";
import { CreateOneReservationArgs } from "./args/CreateOneReservationArgs";
import { DeleteManyReservationArgs } from "./args/DeleteManyReservationArgs";
import { DeleteOneReservationArgs } from "./args/DeleteOneReservationArgs";
import { FindFirstReservationArgs } from "./args/FindFirstReservationArgs";
import { FindFirstReservationOrThrowArgs } from "./args/FindFirstReservationOrThrowArgs";
import { FindManyReservationArgs } from "./args/FindManyReservationArgs";
import { FindUniqueReservationArgs } from "./args/FindUniqueReservationArgs";
import { FindUniqueReservationOrThrowArgs } from "./args/FindUniqueReservationOrThrowArgs";
import { GroupByReservationArgs } from "./args/GroupByReservationArgs";
import { UpdateManyReservationArgs } from "./args/UpdateManyReservationArgs";
import { UpdateOneReservationArgs } from "./args/UpdateOneReservationArgs";
import { UpsertOneReservationArgs } from "./args/UpsertOneReservationArgs";
import { Reservation } from "../../../models/Reservation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReservation } from "../../outputs/AggregateReservation";
import { ReservationGroupBy } from "../../outputs/ReservationGroupBy";
export declare class ReservationCrudResolver {
    aggregateReservation(ctx: any, info: GraphQLResolveInfo, args: AggregateReservationArgs): Promise<AggregateReservation>;
    createManyReservation(ctx: any, info: GraphQLResolveInfo, args: CreateManyReservationArgs): Promise<AffectedRowsOutput>;
    createOneReservation(ctx: any, info: GraphQLResolveInfo, args: CreateOneReservationArgs): Promise<Reservation>;
    deleteManyReservation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReservationArgs): Promise<AffectedRowsOutput>;
    deleteOneReservation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReservationArgs): Promise<Reservation | null>;
    findFirstReservation(ctx: any, info: GraphQLResolveInfo, args: FindFirstReservationArgs): Promise<Reservation | null>;
    findFirstReservationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReservationOrThrowArgs): Promise<Reservation | null>;
    reservations(ctx: any, info: GraphQLResolveInfo, args: FindManyReservationArgs): Promise<Reservation[]>;
    reservation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReservationArgs): Promise<Reservation | null>;
    getReservation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReservationOrThrowArgs): Promise<Reservation | null>;
    groupByReservation(ctx: any, info: GraphQLResolveInfo, args: GroupByReservationArgs): Promise<ReservationGroupBy[]>;
    updateManyReservation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReservationArgs): Promise<AffectedRowsOutput>;
    updateOneReservation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReservationArgs): Promise<Reservation | null>;
    upsertOneReservation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReservationArgs): Promise<Reservation>;
}
