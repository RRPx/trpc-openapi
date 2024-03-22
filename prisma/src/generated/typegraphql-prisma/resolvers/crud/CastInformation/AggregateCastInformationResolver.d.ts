import type { GraphQLResolveInfo } from "graphql";
import { AggregateCastInformationArgs } from "./args/AggregateCastInformationArgs";
import { AggregateCastInformation } from "../../outputs/AggregateCastInformation";
export declare class AggregateCastInformationResolver {
    aggregateCastInformation(ctx: any, info: GraphQLResolveInfo, args: AggregateCastInformationArgs): Promise<AggregateCastInformation>;
}
