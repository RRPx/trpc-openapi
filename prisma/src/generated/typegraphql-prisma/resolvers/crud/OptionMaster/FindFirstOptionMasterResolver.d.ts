import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOptionMasterArgs } from "./args/FindFirstOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class FindFirstOptionMasterResolver {
    findFirstOptionMaster(ctx: any, info: GraphQLResolveInfo, args: FindFirstOptionMasterArgs): Promise<OptionMaster | null>;
}
