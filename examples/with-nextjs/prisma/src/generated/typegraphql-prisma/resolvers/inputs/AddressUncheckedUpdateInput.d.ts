import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReservationUncheckedUpdateOneWithoutAddressNestedInput } from "../inputs/ReservationUncheckedUpdateOneWithoutAddressNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AddressUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    lat?: StringFieldUpdateOperationsInput | undefined;
    long?: StringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    reservation?: ReservationUncheckedUpdateOneWithoutAddressNestedInput | undefined;
}
