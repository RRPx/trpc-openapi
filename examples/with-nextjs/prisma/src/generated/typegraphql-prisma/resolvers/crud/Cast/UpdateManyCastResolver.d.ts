import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCastArgs } from "./args/UpdateManyCastArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCastResolver {
    updateManyCast(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCastArgs): Promise<AffectedRowsOutput>;
}
