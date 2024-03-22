import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueChatMessageArgs } from "./args/FindUniqueChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class FindUniqueChatMessageResolver {
    chatMessage(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChatMessageArgs): Promise<ChatMessage | null>;
}
