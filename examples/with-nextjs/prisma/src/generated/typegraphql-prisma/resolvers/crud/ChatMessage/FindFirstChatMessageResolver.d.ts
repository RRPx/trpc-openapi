import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatMessageArgs } from "./args/FindFirstChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class FindFirstChatMessageResolver {
    findFirstChatMessage(ctx: any, info: GraphQLResolveInfo, args: FindFirstChatMessageArgs): Promise<ChatMessage | null>;
}
