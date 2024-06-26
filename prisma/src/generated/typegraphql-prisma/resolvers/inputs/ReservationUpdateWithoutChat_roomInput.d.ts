import { AddressUpdateOneRequiredWithoutReservationNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutReservationNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUpdateOneRequiredWithoutReservationNestedInput } from "../inputs/CastUpdateOneRequiredWithoutReservationNestedInput";
import { ClientUpdateOneRequiredWithoutReservationNestedInput } from "../inputs/ClientUpdateOneRequiredWithoutReservationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumApprovalFieldUpdateOperationsInput } from "../inputs/EnumApprovalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OptionMasterUpdateManyWithoutReservationNestedInput } from "../inputs/OptionMasterUpdateManyWithoutReservationNestedInput";
import { ShiftManagementUpdateManyWithoutReservationNestedInput } from "../inputs/ShiftManagementUpdateManyWithoutReservationNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReservationUpdateWithoutChat_roomInput {
    id?: StringFieldUpdateOperationsInput | undefined;
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
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    cast?: CastUpdateOneRequiredWithoutReservationNestedInput | undefined;
    client?: ClientUpdateOneRequiredWithoutReservationNestedInput | undefined;
    option_id?: OptionMasterUpdateManyWithoutReservationNestedInput | undefined;
    shift_id?: ShiftManagementUpdateManyWithoutReservationNestedInput | undefined;
    address?: AddressUpdateOneRequiredWithoutReservationNestedInput | undefined;
}
