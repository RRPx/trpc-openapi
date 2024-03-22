import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneOptionMasterArgs } from "./args/UpsertOneOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class UpsertOneOptionMasterResolver {
    upsertOneOptionMaster(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOptionMasterArgs): Promise<OptionMaster>;
}
