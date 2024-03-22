import type { GraphQLResolveInfo } from "graphql";
import { CreateOneOptionMasterArgs } from "./args/CreateOneOptionMasterArgs";
import { OptionMaster } from "../../../models/OptionMaster";
export declare class CreateOneOptionMasterResolver {
    createOneOptionMaster(ctx: any, info: GraphQLResolveInfo, args: CreateOneOptionMasterArgs): Promise<OptionMaster>;
}
