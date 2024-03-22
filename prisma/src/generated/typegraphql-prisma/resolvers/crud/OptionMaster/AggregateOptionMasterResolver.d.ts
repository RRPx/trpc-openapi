import type { GraphQLResolveInfo } from "graphql";
import { AggregateOptionMasterArgs } from "./args/AggregateOptionMasterArgs";
import { AggregateOptionMaster } from "../../outputs/AggregateOptionMaster";
export declare class AggregateOptionMasterResolver {
    aggregateOptionMaster(ctx: any, info: GraphQLResolveInfo, args: AggregateOptionMasterArgs): Promise<AggregateOptionMaster>;
}
