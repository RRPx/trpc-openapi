import { ChatRoomCreateOrConnectWithoutMessagesInput } from "../inputs/ChatRoomCreateOrConnectWithoutMessagesInput";
import { ChatRoomUncheckedCreateWithoutMessagesInput } from "../inputs/ChatRoomUncheckedCreateWithoutMessagesInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";
export declare class ChatRoomCreateNestedOneWithoutMessagesInput {
    create?: ChatRoomUncheckedCreateWithoutMessagesInput | undefined;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput | undefined;
    connect?: ChatRoomWhereUniqueInput | undefined;
}
