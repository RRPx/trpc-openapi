import { ChatRoomCountMessagesArgs } from "./args/ChatRoomCountMessagesArgs";
export declare class ChatRoomCount {
    messages: number;
    getMessages(root: ChatRoomCount, args: ChatRoomCountMessagesArgs): number;
}
