import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneChatMessageArgs } from "./args/UpsertOneChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class UpsertOneChatMessageResolver {
    upsertOneChatMessage(ctx: any, info: GraphQLResolveInfo, args: UpsertOneChatMessageArgs): Promise<ChatMessage>;
}
