import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyChatMessageArgs } from "./args/DeleteManyChatMessageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyChatMessageResolver {
    deleteManyChatMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteManyChatMessageArgs): Promise<AffectedRowsOutput>;
}
