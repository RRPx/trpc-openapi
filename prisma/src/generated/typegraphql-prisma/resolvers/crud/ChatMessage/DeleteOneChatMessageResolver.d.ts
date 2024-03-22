import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneChatMessageArgs } from "./args/DeleteOneChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
export declare class DeleteOneChatMessageResolver {
    deleteOneChatMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteOneChatMessageArgs): Promise<ChatMessage | null>;
}
