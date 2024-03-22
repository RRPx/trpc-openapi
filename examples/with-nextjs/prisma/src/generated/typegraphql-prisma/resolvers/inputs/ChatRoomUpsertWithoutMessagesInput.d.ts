import { ChatRoomUncheckedCreateWithoutMessagesInput } from "../inputs/ChatRoomUncheckedCreateWithoutMessagesInput";
import { ChatRoomUncheckedUpdateWithoutMessagesInput } from "../inputs/ChatRoomUncheckedUpdateWithoutMessagesInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";
export declare class ChatRoomUpsertWithoutMessagesInput {
    update: ChatRoomUncheckedUpdateWithoutMessagesInput;
    create: ChatRoomUncheckedCreateWithoutMessagesInput;
    where?: ChatRoomWhereInput | undefined;
}
