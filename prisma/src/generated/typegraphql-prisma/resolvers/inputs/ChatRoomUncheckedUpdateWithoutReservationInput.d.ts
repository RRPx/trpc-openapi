import { ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput } from "../inputs/ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ChatRoomUncheckedUpdateWithoutReservationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    messages?: ChatMessageUncheckedUpdateManyWithoutChat_roomNestedInput | undefined;
}
