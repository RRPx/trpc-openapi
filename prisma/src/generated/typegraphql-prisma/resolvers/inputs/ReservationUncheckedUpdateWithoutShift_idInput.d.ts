import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChatRoomUncheckedUpdateOneWithoutReservationNestedInput } from "../inputs/ChatRoomUncheckedUpdateOneWithoutReservationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumApprovalFieldUpdateOperationsInput } from "../inputs/EnumApprovalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OptionMasterUncheckedUpdateManyWithoutReservationNestedInput } from "../inputs/OptionMasterUncheckedUpdateManyWithoutReservationNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReservationUncheckedUpdateWithoutShift_idInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cast_id?: StringFieldUpdateOperationsInput | undefined;
    client_id?: StringFieldUpdateOperationsInput | undefined;
    start_time?: DateTimeFieldUpdateOperationsInput | undefined;
    end_time?: DateTimeFieldUpdateOperationsInput | undefined;
    guide_flg?: BoolFieldUpdateOperationsInput | undefined;
    approval?: EnumApprovalFieldUpdateOperationsInput | undefined;
    admin_approval?: EnumApprovalFieldUpdateOperationsInput | undefined;
    payment_amount?: IntFieldUpdateOperationsInput | undefined;
    payment_select?: NullableStringFieldUpdateOperationsInput | undefined;
    payment_id?: NullableStringFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    reservation_date?: DateTimeFieldUpdateOperationsInput | undefined;
    address_id?: StringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    option_id?: OptionMasterUncheckedUpdateManyWithoutReservationNestedInput | undefined;
    chat_room?: ChatRoomUncheckedUpdateOneWithoutReservationNestedInput | undefined;
}
