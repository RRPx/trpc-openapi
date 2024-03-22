import { ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput } from "../inputs/ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput";
export declare class ChatRoomUncheckedCreateWithoutReservationInput {
    id?: string | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput | undefined;
}
