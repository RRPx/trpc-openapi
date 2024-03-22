import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOptionMasterOrThrowArgs } from "./args/FindFirstOptionMasterOrThrowArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class FindFirstOptionMasterOrThrowResolver {
    findFirstOptionMasterOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstOptionMasterOrThrowArgs): Promise<OptionMaster | null>;
}
