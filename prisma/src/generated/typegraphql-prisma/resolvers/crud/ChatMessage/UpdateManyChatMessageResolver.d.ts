import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyChatMessageArgs } from "./args/UpdateManyChatMessageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyChatMessageResolver {
    updateManyChatMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateManyChatMessageArgs): Promise<AffectedRowsOutput>;
}
