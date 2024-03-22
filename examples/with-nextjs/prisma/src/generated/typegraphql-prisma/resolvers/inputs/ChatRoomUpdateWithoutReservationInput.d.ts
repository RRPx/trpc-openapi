import { ChatMessageUpdateManyWithoutChat_roomNestedInput } from "../inputs/ChatMessageUpdateManyWithoutChat_roomNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ChatRoomUpdateWithoutReservationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    messages?: ChatMessageUpdateManyWithoutChat_roomNestedInput | undefined;
}
