import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumCastSideReservationStatusFieldUpdateOperationsInput } from "../inputs/EnumCastSideReservationStatusFieldUpdateOperationsInput";
import { EnumClientSideSlotStatusFieldUpdateOperationsInput } from "../inputs/EnumClientSideSlotStatusFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShiftManagementUncheckedUpdateManyWithoutReservationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cast_id?: StringFieldUpdateOperationsInput | undefined;
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
}
