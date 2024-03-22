import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatMessageOrThrowArgs } from "./args/FindFirstChatMessageOrThrowArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class FindFirstChatMessageOrThrowResolver {
    findFirstChatMessageOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstChatMessageOrThrowArgs): Promise<ChatMessage | null>;
}
