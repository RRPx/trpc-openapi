import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastInformationUncheckedUpdateOneWithoutCastNestedInput } from "../inputs/CastInformationUncheckedUpdateOneWithoutCastNestedInput";
import { CastUpdatecosplay_contentInput } from "../inputs/CastUpdatecosplay_contentInput";
import { CastUpdatelanguage_typeInput } from "../inputs/CastUpdatelanguage_typeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumApprovalFieldUpdateOperationsInput } from "../inputs/EnumApprovalFieldUpdateOperationsInput";
import { FavoriteUncheckedUpdateManyWithoutCastNestedInput } from "../inputs/FavoriteUncheckedUpdateManyWithoutCastNestedInput";
import { NotificationUncheckedUpdateManyWithoutCastNestedInput } from "../inputs/NotificationUncheckedUpdateManyWithoutCastNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumCupNumberFieldUpdateOperationsInput } from "../inputs/NullableEnumCupNumberFieldUpdateOperationsInput";
import { NullableEnumPriorityOrderFieldUpdateOperationsInput } from "../inputs/NullableEnumPriorityOrderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OptionMasterUncheckedUpdateManyWithoutCastNestedInput } from "../inputs/OptionMasterUncheckedUpdateManyWithoutCastNestedInput";
import { ReservationUncheckedUpdateManyWithoutCastNestedInput } from "../inputs/ReservationUncheckedUpdateManyWithoutCastNestedInput";
import { ReviewUncheckedUpdateManyWithoutCastNestedInput } from "../inputs/ReviewUncheckedUpdateManyWithoutCastNestedInput";
import { ShiftManagementUncheckedUpdateManyWithoutCastNestedInput } from "../inputs/ShiftManagementUncheckedUpdateManyWithoutCastNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUncheckedUpdateOneWithoutCastNestedInput } from "../inputs/UserUncheckedUpdateOneWithoutCastNestedInput";
export declare class CastUncheckedUpdateWithoutBank_informationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nick_name?: StringFieldUpdateOperationsInput | undefined;
    telephone_number?: NullableStringFieldUpdateOperationsInput | undefined;
    birthday?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    locate?: NullableStringFieldUpdateOperationsInput | undefined;
    language_type?: CastUpdatelanguage_typeInput | undefined;
    language_other?: NullableStringFieldUpdateOperationsInput | undefined;
    cosplay_guide?: BoolFieldUpdateOperationsInput | undefined;
    cosplay_content?: CastUpdatecosplay_contentInput | undefined;
    cosplay_other?: NullableStringFieldUpdateOperationsInput | undefined;
    cup_number?: NullableEnumCupNumberFieldUpdateOperationsInput | undefined;
    memo?: NullableStringFieldUpdateOperationsInput | undefined;
    user_rank_id?: StringFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    homepage_recommended_priority?: NullableEnumPriorityOrderFieldUpdateOperationsInput | undefined;
    profile_approval_by_admin?: EnumApprovalFieldUpdateOperationsInput | undefined;
    twitter_user_name?: NullableStringFieldUpdateOperationsInput | undefined;
    instagram_user_name?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUncheckedUpdateOneWithoutCastNestedInput | undefined;
    favorite?: FavoriteUncheckedUpdateManyWithoutCastNestedInput | undefined;
    notification?: NotificationUncheckedUpdateManyWithoutCastNestedInput | undefined;
    option_master?: OptionMasterUncheckedUpdateManyWithoutCastNestedInput | undefined;
    shift_management?: ShiftManagementUncheckedUpdateManyWithoutCastNestedInput | undefined;
    review?: ReviewUncheckedUpdateManyWithoutCastNestedInput | undefined;
    cast_information?: CastInformationUncheckedUpdateOneWithoutCastNestedInput | undefined;
    reservation?: ReservationUncheckedUpdateManyWithoutCastNestedInput | undefined;
}
