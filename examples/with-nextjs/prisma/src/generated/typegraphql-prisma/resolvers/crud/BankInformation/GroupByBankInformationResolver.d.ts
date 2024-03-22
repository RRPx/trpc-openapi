import type { GraphQLResolveInfo } from "graphql";
import { GroupByBankInformationArgs } from "./args/GroupByBankInformationArgs";
import { BankInformationGroupBy } from "../../outputs/BankInformationGroupBy";
export declare class GroupByBankInformationResolver {
    groupByBankInformation(ctx: any, info: GraphQLResolveInfo, args: GroupByBankInformationArgs): Promise<BankInformationGroupBy[]>;
}
