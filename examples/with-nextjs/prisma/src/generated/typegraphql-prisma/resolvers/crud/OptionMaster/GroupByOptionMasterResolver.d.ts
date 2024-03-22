import type { GraphQLResolveInfo } from "graphql";
import { GroupByOptionMasterArgs } from "./args/GroupByOptionMasterArgs";
import { OptionMasterGroupBy } from "../../outputs/OptionMasterGroupBy";
export declare class GroupByOptionMasterResolver {
    groupByOptionMaster(ctx: any, info: GraphQLResolveInfo, args: GroupByOptionMasterArgs): Promise<OptionMasterGroupBy[]>;
}
