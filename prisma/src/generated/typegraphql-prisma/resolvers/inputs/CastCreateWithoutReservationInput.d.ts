import { BankInformationCreateNestedManyWithoutCastInput } from "../inputs/BankInformationCreateNestedManyWithoutCastInput";
import { CastCreatecosplay_contentInput } from "../inputs/CastCreatecosplay_contentInput";
import { CastCreatelanguage_typeInput } from "../inputs/CastCreatelanguage_typeInput";
import { CastInformationCreateNestedOneWithoutCastInput } from "../inputs/CastInformationCreateNestedOneWithoutCastInput";
import { FavoriteCreateNestedManyWithoutCastInput } from "../inputs/FavoriteCreateNestedManyWithoutCastInput";
import { NotificationCreateNestedManyWithoutCastInput } from "../inputs/NotificationCreateNestedManyWithoutCastInput";
import { OptionMasterCreateNestedManyWithoutCastInput } from "../inputs/OptionMasterCreateNestedManyWithoutCastInput";
import { ReviewCreateNestedManyWithoutCastInput } from "../inputs/ReviewCreateNestedManyWithoutCastInput";
import { ShiftManagementCreateNestedManyWithoutCastInput } from "../inputs/ShiftManagementCreateNestedManyWithoutCastInput";
import { UserCreateNestedOneWithoutCastInput } from "../inputs/UserCreateNestedOneWithoutCastInput";
import { UserRankCreateNestedOneWithoutCastInput } from "../inputs/UserRankCreateNestedOneWithoutCastInput";
export declare class CastCreateWithoutReservationInput {
    id?: string | undefined;
    nick_name: string;
    telephone_number?: string | undefined;
    birthday?: Date | undefined;
    locate?: string | undefined;
    language_type?: CastCreatelanguage_typeInput | undefined;
    language_other?: string | undefined;
    cosplay_guide: boolean;
    cosplay_content?: CastCreatecosplay_contentInput | undefined;
    cosplay_other?: string | undefined;
    cup_number?: "ACUP" | "BCUP" | "CCUP" | "DCUP" | "ECUP" | "FCUP" | "GCUP" | "HCUP" | "OTHER" | "SECRET" | undefined;
    memo?: string | undefined;
    is_display?: boolean | undefined;
    homepage_recommended_priority?: "A" | "B" | "C" | "D" | "E" | undefined;
    profile_approval_by_admin?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    twitter_user_name?: string | undefined;
    instagram_user_name?: string | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    user?: UserCreateNestedOneWithoutCastInput | undefined;
    user_rank: UserRankCreateNestedOneWithoutCastInput;
    favorite?: FavoriteCreateNestedManyWithoutCastInput | undefined;
    notification?: NotificationCreateNestedManyWithoutCastInput | undefined;
    option_master?: OptionMasterCreateNestedManyWithoutCastInput | undefined;
    shift_management?: ShiftManagementCreateNestedManyWithoutCastInput | undefined;
    review?: ReviewCreateNestedManyWithoutCastInput | undefined;
    cast_information?: CastInformationCreateNestedOneWithoutCastInput | undefined;
    bank_information?: BankInformationCreateNestedManyWithoutCastInput | undefined;
}
