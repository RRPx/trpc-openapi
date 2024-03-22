import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FavoriteUpdateManyWithoutClientNestedInput } from "../inputs/FavoriteUpdateManyWithoutClientNestedInput";
import { NotificationUpdateManyWithoutClientNestedInput } from "../inputs/NotificationUpdateManyWithoutClientNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumGenderFieldUpdateOperationsInput } from "../inputs/NullableEnumGenderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReservationUpdateManyWithoutClientNestedInput } from "../inputs/ReservationUpdateManyWithoutClientNestedInput";
import { ReviewUpdateManyWithoutClientNestedInput } from "../inputs/ReviewUpdateManyWithoutClientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutClientNestedInput } from "../inputs/UserUpdateOneWithoutClientNestedInput";
export declare class ClientUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    telephone_number?: NullableStringFieldUpdateOperationsInput | undefined;
    birthday?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    age?: NullableStringFieldUpdateOperationsInput | undefined;
    nick_name?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    gender?: NullableEnumGenderFieldUpdateOperationsInput | undefined;
    image2?: NullableStringFieldUpdateOperationsInput | undefined;
    image3?: NullableStringFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    users?: UserUpdateOneWithoutClientNestedInput | undefined;
    favorite?: FavoriteUpdateManyWithoutClientNestedInput | undefined;
    reservation?: ReservationUpdateManyWithoutClientNestedInput | undefined;
    review?: ReviewUpdateManyWithoutClientNestedInput | undefined;
    notification?: NotificationUpdateManyWithoutClientNestedInput | undefined;
}
