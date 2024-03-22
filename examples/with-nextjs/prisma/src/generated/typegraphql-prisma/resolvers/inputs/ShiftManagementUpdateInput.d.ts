import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUpdateOneRequiredWithoutShift_managementNestedInput } from "../inputs/CastUpdateOneRequiredWithoutShift_managementNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumCastSideReservationStatusFieldUpdateOperationsInput } from "../inputs/EnumCastSideReservationStatusFieldUpdateOperationsInput";
import { EnumClientSideSlotStatusFieldUpdateOperationsInput } from "../inputs/EnumClientSideSlotStatusFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReservationUpdateOneWithoutShift_idNestedInput } from "../inputs/ReservationUpdateOneWithoutShift_idNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShiftManagementUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    client_id?: NullableStringFieldUpdateOperationsInput | undefined;
    shift_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    memo?: NullableStringFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    cast_side_reservation_status?: EnumCastSideReservationStatusFieldUpdateOperationsInput | undefined;
    client_side_slot_status?: EnumClientSideSlotStatusFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    cast?: CastUpdateOneRequiredWithoutShift_managementNestedInput | undefined;
    Reservation?: ReservationUpdateOneWithoutShift_idNestedInput | undefined;
}
