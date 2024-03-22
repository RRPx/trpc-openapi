import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTargetedUserFieldUpdateOperationsInput } from "../inputs/EnumTargetedUserFieldUpdateOperationsInput";
import { NullableEnumCategoryFieldUpdateOperationsInput } from "../inputs/NullableEnumCategoryFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class NotificationUncheckedUpdateWithoutClientInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    category?: NullableEnumCategoryFieldUpdateOperationsInput | undefined;
    notification_date?: DateTimeFieldUpdateOperationsInput | undefined;
    content?: StringFieldUpdateOperationsInput | undefined;
    cast_id?: NullableStringFieldUpdateOperationsInput | undefined;
    is_seen?: BoolFieldUpdateOperationsInput | undefined;
    language?: NullableStringFieldUpdateOperationsInput | undefined;
    targeted_user?: EnumTargetedUserFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
