import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CastInformationUpdateWithoutCastInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    age?: NullableIntFieldUpdateOperationsInput | undefined;
    height?: NullableIntFieldUpdateOperationsInput | undefined;
    blood_type?: NullableStringFieldUpdateOperationsInput | undefined;
    personality?: NullableStringFieldUpdateOperationsInput | undefined;
    user_image_main?: StringFieldUpdateOperationsInput | undefined;
    user_image_sub1?: NullableStringFieldUpdateOperationsInput | undefined;
    user_image_sub2?: NullableStringFieldUpdateOperationsInput | undefined;
    user_image_sub3?: NullableStringFieldUpdateOperationsInput | undefined;
    user_image_sub4?: NullableStringFieldUpdateOperationsInput | undefined;
    liquor?: NullableBoolFieldUpdateOperationsInput | undefined;
    smoking?: NullableBoolFieldUpdateOperationsInput | undefined;
    hobby?: NullableStringFieldUpdateOperationsInput | undefined;
    like_spot?: NullableStringFieldUpdateOperationsInput | undefined;
    self_introduction?: NullableStringFieldUpdateOperationsInput | undefined;
    pick_up?: BoolFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
