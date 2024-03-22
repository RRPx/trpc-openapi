import type { GraphQLResolveInfo } from "graphql";
import { ChatMessage } from "../../../models/ChatMessage";
import { ChatRoom } from "../../../models/ChatRoom";
export declare class ChatMessageRelationsResolver {
    chat_room(chatMessage: ChatMessage, ctx: any, info: GraphQLResolveInfo): Promise<ChatRoom>;
}
