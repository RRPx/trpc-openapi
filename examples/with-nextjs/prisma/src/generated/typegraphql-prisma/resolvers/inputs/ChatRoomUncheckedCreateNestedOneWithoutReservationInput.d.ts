import { ChatRoomCreateOrConnectWithoutReservationInput } from "../inputs/ChatRoomCreateOrConnectWithoutReservationInput";
import { ChatRoomUncheckedCreateWithoutReservationInput } from "../inputs/ChatRoomUncheckedCreateWithoutReservationInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";
export declare class ChatRoomUncheckedCreateNestedOneWithoutReservationInput {
    create?: ChatRoomUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutReservationInput | undefined;
    connect?: ChatRoomWhereUniqueInput | undefined;
}
