import { CastCountAggregate } from "../outputs/CastCountAggregate";
import { CastMaxAggregate } from "../outputs/CastMaxAggregate";
import { CastMinAggregate } from "../outputs/CastMinAggregate";
export declare class CastGroupBy {
    id: string;
    nick_name: string;
    telephone_number: string | null;
    birthday: Date | null;
    locate: string | null;
    language_type: Array<"English" | "Chinese" | "Korean"> | null;
    language_other: string | null;
    cosplay_guide: boolean;
    cosplay_content: Array<"maid" | "anime"> | null;
    cosplay_other: string | null;
    cup_number: "ACUP" | "BCUP" | "CCUP" | "DCUP" | "ECUP" | "FCUP" | "GCUP" | "HCUP" | "OTHER" | "SECRET" | null;
    memo: string | null;
    user_rank_id: string;
    is_display: boolean;
    homepage_recommended_priority: "A" | "B" | "C" | "D" | "E" | null;
    profile_approval_by_admin: "APPROVAL" | "DENIAL" | "HOLD";
    twitter_user_name: string | null;
    instagram_user_name: string | null;
    created_at: Date;
    updated_at: Date;
    _count: CastCountAggregate | null;
    _min: CastMinAggregate | null;
    _max: CastMaxAggregate | null;
}
