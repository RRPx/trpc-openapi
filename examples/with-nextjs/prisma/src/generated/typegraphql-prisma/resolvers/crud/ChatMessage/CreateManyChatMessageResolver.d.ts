import type { GraphQLResolveInfo } from "graphql";
import { CreateManyChatMessageArgs } from "./args/CreateManyChatMessageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyChatMessageResolver {
    createManyChatMessage(ctx: any, info: GraphQLResolveInfo, args: CreateManyChatMessageArgs): Promise<AffectedRowsOutput>;
}
