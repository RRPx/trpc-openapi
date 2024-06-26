import { CastInformationAvgAggregate } from "../outputs/CastInformationAvgAggregate";
import { CastInformationCountAggregate } from "../outputs/CastInformationCountAggregate";
import { CastInformationMaxAggregate } from "../outputs/CastInformationMaxAggregate";
import { CastInformationMinAggregate } from "../outputs/CastInformationMinAggregate";
import { CastInformationSumAggregate } from "../outputs/CastInformationSumAggregate";
export declare class CastInformationGroupBy {
    id: string;
    cast_id: string;
    age: number | null;
    height: number | null;
    blood_type: string | null;
    personality: string | null;
    user_image_main: string;
    user_image_sub1: string | null;
    user_image_sub2: string | null;
    user_image_sub3: string | null;
    user_image_sub4: string | null;
    liquor: boolean | null;
    smoking: boolean | null;
    hobby: string | null;
    like_spot: string | null;
    self_introduction: string | null;
    pick_up: boolean;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
    _count: CastInformationCountAggregate | null;
    _avg: CastInformationAvgAggregate | null;
    _sum: CastInformationSumAggregate | null;
    _min: CastInformationMinAggregate | null;
    _max: CastInformationMaxAggregate | null;
}
