import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FavoriteUncheckedUpdateManyWithoutClientNestedInput } from "../inputs/FavoriteUncheckedUpdateManyWithoutClientNestedInput";
import { NotificationUncheckedUpdateManyWithoutClientNestedInput } from "../inputs/NotificationUncheckedUpdateManyWithoutClientNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumGenderFieldUpdateOperationsInput } from "../inputs/NullableEnumGenderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReservationUncheckedUpdateManyWithoutClientNestedInput } from "../inputs/ReservationUncheckedUpdateManyWithoutClientNestedInput";
import { ReviewUncheckedUpdateManyWithoutClientNestedInput } from "../inputs/ReviewUncheckedUpdateManyWithoutClientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ClientUncheckedUpdateWithoutUsersInput {
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
    favorite?: FavoriteUncheckedUpdateManyWithoutClientNestedInput | undefined;
    reservation?: ReservationUncheckedUpdateManyWithoutClientNestedInput | undefined;
    review?: ReviewUncheckedUpdateManyWithoutClientNestedInput | undefined;
    notification?: NotificationUncheckedUpdateManyWithoutClientNestedInput | undefined;
}
