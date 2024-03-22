import { ChatRoomCreateOrConnectWithoutReservationInput } from "../inputs/ChatRoomCreateOrConnectWithoutReservationInput";
import { ChatRoomUncheckedCreateWithoutReservationInput } from "../inputs/ChatRoomUncheckedCreateWithoutReservationInput";
import { ChatRoomUncheckedUpdateWithoutReservationInput } from "../inputs/ChatRoomUncheckedUpdateWithoutReservationInput";
import { ChatRoomUpsertWithoutReservationInput } from "../inputs/ChatRoomUpsertWithoutReservationInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";
export declare class ChatRoomUpdateOneWithoutReservationNestedInput {
    create?: ChatRoomUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutReservationInput | undefined;
    upsert?: ChatRoomUpsertWithoutReservationInput | undefined;
    disconnect?: ChatRoomWhereInput | undefined;
    delete?: ChatRoomWhereInput | undefined;
    connect?: ChatRoomWhereUniqueInput | undefined;
    update?: ChatRoomUncheckedUpdateWithoutReservationInput | undefined;
}
