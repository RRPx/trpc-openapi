import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SessionUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    userId?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
}
