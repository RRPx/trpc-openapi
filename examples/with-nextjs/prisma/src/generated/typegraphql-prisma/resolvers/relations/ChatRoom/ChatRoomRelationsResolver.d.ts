import type { GraphQLResolveInfo } from "graphql";
import { ChatMessage } from "../../../models/ChatMessage";
import { ChatRoom } from "../../../models/ChatRoom";
import { Reservation } from "../../../models/Reservation";
import { ChatRoomMessagesArgs } from "./args/ChatRoomMessagesArgs";
export declare class ChatRoomRelationsResolver {
    reservation(chatRoom: ChatRoom, ctx: any, info: GraphQLResolveInfo): Promise<Reservation>;
    messages(chatRoom: ChatRoom, ctx: any, info: GraphQLResolveInfo, args: ChatRoomMessagesArgs): Promise<ChatMessage[]>;
}
