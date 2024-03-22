import type { GraphQLResolveInfo } from "graphql";
import { CreateOneChatMessageArgs } from "./args/CreateOneChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class CreateOneChatMessageResolver {
    createOneChatMessage(ctx: any, info: GraphQLResolveInfo, args: CreateOneChatMessageArgs): Promise<ChatMessage>;
}
