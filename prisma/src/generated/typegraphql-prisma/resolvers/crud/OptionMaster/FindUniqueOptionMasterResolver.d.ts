import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOptionMasterArgs } from "./args/FindUniqueOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class FindUniqueOptionMasterResolver {
    optionMaster(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOptionMasterArgs): Promise<OptionMaster | null>;
}
