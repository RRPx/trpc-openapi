import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChatRoomUncheckedUpdateOneWithoutReservationNestedInput } from "../inputs/ChatRoomUncheckedUpdateOneWithoutReservationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumApprovalFieldUpdateOperationsInput } from "../inputs/EnumApprovalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ShiftManagementUncheckedUpdateManyWithoutReservationNestedInput } from "../inputs/ShiftManagementUncheckedUpdateManyWithoutReservationNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReservationUncheckedUpdateWithoutOption_idInput {
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
    shift_id?: ShiftManagementUncheckedUpdateManyWithoutReservationNestedInput | undefined;
    chat_room?: ChatRoomUncheckedUpdateOneWithoutReservationNestedInput | undefined;
}
