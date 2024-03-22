import { ChatMessageCreateNestedManyWithoutChat_roomInput } from "../inputs/ChatMessageCreateNestedManyWithoutChat_roomInput";
export declare class ChatRoomCreateWithoutReservationInput {
    id?: string | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    messages?: ChatMessageCreateNestedManyWithoutChat_roomInput | undefined;
}
