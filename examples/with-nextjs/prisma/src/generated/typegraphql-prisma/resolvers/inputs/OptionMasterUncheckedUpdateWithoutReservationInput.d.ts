import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUncheckedUpdateManyWithoutOption_masterNestedInput } from "../inputs/CastUncheckedUpdateManyWithoutOption_masterNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OptionMasterUncheckedUpdateWithoutReservationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    option_menu?: StringFieldUpdateOperationsInput | undefined;
    fee?: IntFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    cast?: CastUncheckedUpdateManyWithoutOption_masterNestedInput | undefined;
}
