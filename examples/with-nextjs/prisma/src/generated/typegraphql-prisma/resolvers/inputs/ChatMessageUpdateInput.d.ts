import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChatRoomUpdateOneRequiredWithoutMessagesNestedInput } from "../inputs/ChatRoomUpdateOneRequiredWithoutMessagesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUserTypeFieldUpdateOperationsInput } from "../inputs/EnumUserTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ChatMessageUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    is_seen?: BoolFieldUpdateOperationsInput | undefined;
    is_admin_seen?: BoolFieldUpdateOperationsInput | undefined;
    user_type?: EnumUserTypeFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    chat_room?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput | undefined;
}
