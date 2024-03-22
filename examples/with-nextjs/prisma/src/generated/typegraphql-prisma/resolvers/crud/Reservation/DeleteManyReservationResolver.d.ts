import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyReservationArgs } from "./args/DeleteManyReservationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReservationResolver {
    deleteManyReservation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReservationArgs): Promise<AffectedRowsOutput>;
}
