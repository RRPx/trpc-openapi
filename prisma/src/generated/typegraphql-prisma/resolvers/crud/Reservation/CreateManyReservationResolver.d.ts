import type { GraphQLResolveInfo } from "graphql";
import { CreateManyReservationArgs } from "./args/CreateManyReservationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReservationResolver {
    createManyReservation(ctx: any, info: GraphQLResolveInfo, args: CreateManyReservationArgs): Promise<AffectedRowsOutput>;
}
