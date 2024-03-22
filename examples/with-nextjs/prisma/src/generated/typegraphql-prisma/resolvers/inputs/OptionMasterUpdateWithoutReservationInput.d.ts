import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUpdateManyWithoutOption_masterNestedInput } from "../inputs/CastUpdateManyWithoutOption_masterNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OptionMasterUpdateWithoutReservationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    option_menu?: StringFieldUpdateOperationsInput | undefined;
    fee?: IntFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    cast?: CastUpdateManyWithoutOption_masterNestedInput | undefined;
}
