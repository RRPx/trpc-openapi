import type { GraphQLResolveInfo } from "graphql";
import { FindManyOptionMasterArgs } from "./args/FindManyOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class FindManyOptionMasterResolver {
    optionMasters(ctx: any, info: GraphQLResolveInfo, args: FindManyOptionMasterArgs): Promise<OptionMaster[]>;
}
