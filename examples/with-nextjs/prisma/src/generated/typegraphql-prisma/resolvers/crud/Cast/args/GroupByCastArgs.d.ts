import { CastOrderByWithAggregationInput } from "../../../inputs/CastOrderByWithAggregationInput";
import { CastScalarWhereWithAggregatesInput } from "../../../inputs/CastScalarWhereWithAggregatesInput";
import { CastWhereInput } from "../../../inputs/CastWhereInput";
export declare class GroupByCastArgs {
    where?: CastWhereInput | undefined;
    orderBy?: CastOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nick_name" | "telephone_number" | "birthday" | "locate" | "language_type" | "language_other" | "cosplay_guide" | "cosplay_content" | "cosplay_other" | "cup_number" | "memo" | "user_rank_id" | "is_display" | "homepage_recommended_priority" | "profile_approval_by_admin" | "twitter_user_name" | "instagram_user_name" | "created_at" | "updated_at">;
    having?: CastScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
