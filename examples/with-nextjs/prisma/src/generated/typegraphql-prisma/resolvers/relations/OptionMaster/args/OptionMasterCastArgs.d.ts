import { CastOrderByWithRelationInput } from "../../../inputs/CastOrderByWithRelationInput";
import { CastWhereInput } from "../../../inputs/CastWhereInput";
import { CastWhereUniqueInput } from "../../../inputs/CastWhereUniqueInput";
export declare class OptionMasterCastArgs {
    where?: CastWhereInput | undefined;
    orderBy?: CastOrderByWithRelationInput[] | undefined;
    cursor?: CastWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nick_name" | "telephone_number" | "birthday" | "locate" | "language_type" | "language_other" | "cosplay_guide" | "cosplay_content" | "cosplay_other" | "cup_number" | "memo" | "user_rank_id" | "is_display" | "homepage_recommended_priority" | "profile_approval_by_admin" | "twitter_user_name" | "instagram_user_name" | "created_at" | "updated_at"> | undefined;
}
