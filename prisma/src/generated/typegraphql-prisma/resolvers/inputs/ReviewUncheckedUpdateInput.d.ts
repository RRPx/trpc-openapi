import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumApprovalFieldUpdateOperationsInput } from "../inputs/EnumApprovalFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReviewUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    cast_id?: StringFieldUpdateOperationsInput | undefined;
    client_id?: StringFieldUpdateOperationsInput | undefined;
    nick_name?: StringFieldUpdateOperationsInput | undefined;
    score?: StringFieldUpdateOperationsInput | undefined;
    reviews?: StringFieldUpdateOperationsInput | undefined;
    approval?: EnumApprovalFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
