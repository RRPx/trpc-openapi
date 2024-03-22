import type { GraphQLResolveInfo } from "graphql";
import { AggregateShiftManagementArgs } from "./args/AggregateShiftManagementArgs";
import { AggregateShiftManagement } from "../../outputs/AggregateShiftManagement";
export declare class AggregateShiftManagementResolver {
    aggregateShiftManagement(ctx: any, info: GraphQLResolveInfo, args: AggregateShiftManagementArgs): Promise<AggregateShiftManagement>;
}
