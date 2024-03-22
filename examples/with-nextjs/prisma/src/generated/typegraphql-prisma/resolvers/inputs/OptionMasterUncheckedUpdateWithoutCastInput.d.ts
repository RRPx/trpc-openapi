import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ReservationUncheckedUpdateManyWithoutOption_idNestedInput } from "../inputs/ReservationUncheckedUpdateManyWithoutOption_idNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OptionMasterUncheckedUpdateWithoutCastInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    option_menu?: StringFieldUpdateOperationsInput | undefined;
    fee?: IntFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    reservation?: ReservationUncheckedUpdateManyWithoutOption_idNestedInput | undefined;
}
