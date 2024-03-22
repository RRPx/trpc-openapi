import { ChatRoomCreateOrConnectWithoutMessagesInput } from "../inputs/ChatRoomCreateOrConnectWithoutMessagesInput";
import { ChatRoomUncheckedCreateWithoutMessagesInput } from "../inputs/ChatRoomUncheckedCreateWithoutMessagesInput";
import { ChatRoomUncheckedUpdateWithoutMessagesInput } from "../inputs/ChatRoomUncheckedUpdateWithoutMessagesInput";
import { ChatRoomUpsertWithoutMessagesInput } from "../inputs/ChatRoomUpsertWithoutMessagesInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";
export declare class ChatRoomUpdateOneRequiredWithoutMessagesNestedInput {
    create?: ChatRoomUncheckedCreateWithoutMessagesInput | undefined;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput | undefined;
    upsert?: ChatRoomUpsertWithoutMessagesInput | undefined;
    connect?: ChatRoomWhereUniqueInput | undefined;
    update?: ChatRoomUncheckedUpdateWithoutMessagesInput | undefined;
}
