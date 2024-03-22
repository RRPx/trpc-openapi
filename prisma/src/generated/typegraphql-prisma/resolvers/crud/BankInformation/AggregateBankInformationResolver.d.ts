import type { GraphQLResolveInfo } from "graphql";
import { AggregateBankInformationArgs } from "./args/AggregateBankInformationArgs";
import { AggregateBankInformation } from "../../outputs/AggregateBankInformation";
export declare class AggregateBankInformationResolver {
    aggregateBankInformation(ctx: any, info: GraphQLResolveInfo, args: AggregateBankInformationArgs): Promise<AggregateBankInformation>;
}
