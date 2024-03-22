import type { GraphQLResolveInfo } from "graphql";
import { CreateManyOptionMasterArgs } from "./args/CreateManyOptionMasterArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOptionMasterResolver {
    createManyOptionMaster(ctx: any, info: GraphQLResolveInfo, args: CreateManyOptionMasterArgs): Promise<AffectedRowsOutput>;
}
