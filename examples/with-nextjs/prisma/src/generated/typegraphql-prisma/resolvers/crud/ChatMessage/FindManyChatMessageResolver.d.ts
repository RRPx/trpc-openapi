import type { GraphQLResolveInfo } from "graphql";
import { FindManyChatMessageArgs } from "./args/FindManyChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class FindManyChatMessageResolver {
    chatMessages(ctx: any, info: GraphQLResolveInfo, args: FindManyChatMessageArgs): Promise<ChatMessage[]>;
}
