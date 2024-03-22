import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneOptionMasterArgs } from "./args/DeleteOneOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class DeleteOneOptionMasterResolver {
    deleteOneOptionMaster(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOptionMasterArgs): Promise<OptionMaster | null>;
}
