import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneOptionMasterArgs } from "./args/UpdateOneOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class UpdateOneOptionMasterResolver {
    updateOneOptionMaster(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOptionMasterArgs): Promise<OptionMaster | null>;
}
