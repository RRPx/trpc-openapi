import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUpdatecosplay_contentInput } from "../inputs/CastUpdatecosplay_contentInput";
import { CastUpdatelanguage_typeInput } from "../inputs/CastUpdatelanguage_typeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumApprovalFieldUpdateOperationsInput } from "../inputs/EnumApprovalFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumCupNumberFieldUpdateOperationsInput } from "../inputs/NullableEnumCupNumberFieldUpdateOperationsInput";
import { NullableEnumPriorityOrderFieldUpdateOperationsInput } from "../inputs/NullableEnumPriorityOrderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CastUncheckedUpdateManyInput {
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
}
