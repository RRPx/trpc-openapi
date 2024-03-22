import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyReservationArgs } from "./args/UpdateManyReservationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReservationResolver {
    updateManyReservation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReservationArgs): Promise<AffectedRowsOutput>;
}
