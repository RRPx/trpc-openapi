import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOptionMasterOrThrowArgs } from "./args/FindUniqueOptionMasterOrThrowArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class FindUniqueOptionMasterOrThrowResolver {
    getOptionMaster(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOptionMasterOrThrowArgs): Promise<OptionMaster | null>;
}
