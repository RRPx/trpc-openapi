import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueChatMessageOrThrowArgs } from "./args/FindUniqueChatMessageOrThrowArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class FindUniqueChatMessageOrThrowResolver {
    getChatMessage(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChatMessageOrThrowArgs): Promise<ChatMessage | null>;
}
