import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneChatMessageArgs } from "./args/UpdateOneChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class UpdateOneChatMessageResolver {
    updateOneChatMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateOneChatMessageArgs): Promise<ChatMessage | null>;
}
