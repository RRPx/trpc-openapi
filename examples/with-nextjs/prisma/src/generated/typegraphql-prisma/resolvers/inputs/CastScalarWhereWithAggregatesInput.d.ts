import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumApprovalWithAggregatesFilter } from "../inputs/EnumApprovalWithAggregatesFilter";
import { EnumCosplayContentNullableListFilter } from "../inputs/EnumCosplayContentNullableListFilter";
import { EnumCupNumberNullableWithAggregatesFilter } from "../inputs/EnumCupNumberNullableWithAggregatesFilter";
import { EnumLanguageTypeNullableListFilter } from "../inputs/EnumLanguageTypeNullableListFilter";
import { EnumPriorityOrderNullableWithAggregatesFilter } from "../inputs/EnumPriorityOrderNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CastScalarWhereWithAggregatesInput {
    AND?: CastScalarWhereWithAggregatesInput[] | undefined;
    OR?: CastScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CastScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    nick_name?: StringWithAggregatesFilter | undefined;
    telephone_number?: StringNullableWithAggregatesFilter | undefined;
    birthday?: DateTimeNullableWithAggregatesFilter | undefined;
    locate?: StringNullableWithAggregatesFilter | undefined;
    language_type?: EnumLanguageTypeNullableListFilter | undefined;
    language_other?: StringNullableWithAggregatesFilter | undefined;
    cosplay_guide?: BoolWithAggregatesFilter | undefined;
    cosplay_content?: EnumCosplayContentNullableListFilter | undefined;
    cosplay_other?: StringNullableWithAggregatesFilter | undefined;
    cup_number?: EnumCupNumberNullableWithAggregatesFilter | undefined;
    memo?: StringNullableWithAggregatesFilter | undefined;
    user_rank_id?: StringWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    homepage_recommended_priority?: EnumPriorityOrderNullableWithAggregatesFilter | undefined;
    profile_approval_by_admin?: EnumApprovalWithAggregatesFilter | undefined;
    twitter_user_name?: StringNullableWithAggregatesFilter | undefined;
    instagram_user_name?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
