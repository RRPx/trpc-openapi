import { UserRankAvgAggregate } from "../outputs/UserRankAvgAggregate";
import { UserRankCountAggregate } from "../outputs/UserRankCountAggregate";
import { UserRankMaxAggregate } from "../outputs/UserRankMaxAggregate";
import { UserRankMinAggregate } from "../outputs/UserRankMinAggregate";
import { UserRankSumAggregate } from "../outputs/UserRankSumAggregate";
export declare class UserRankGroupBy {
    id: string;
    name: string | null;
    basic_fee: number | null;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UserRankCountAggregate | null;
    _avg: UserRankAvgAggregate | null;
    _sum: UserRankSumAggregate | null;
    _min: UserRankMinAggregate | null;
    _max: UserRankMaxAggregate | null;
}
