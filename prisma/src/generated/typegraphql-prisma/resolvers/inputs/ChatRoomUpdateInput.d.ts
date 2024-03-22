import { ChatMessageUpdateManyWithoutChat_roomNestedInput } from "../inputs/ChatMessageUpdateManyWithoutChat_roomNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ReservationUpdateOneRequiredWithoutChat_roomNestedInput } from "../inputs/ReservationUpdateOneRequiredWithoutChat_roomNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ChatRoomUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    reservation?: ReservationUpdateOneRequiredWithoutChat_roomNestedInput | undefined;
    messages?: ChatMessageUpdateManyWithoutChat_roomNestedInput | undefined;
}
