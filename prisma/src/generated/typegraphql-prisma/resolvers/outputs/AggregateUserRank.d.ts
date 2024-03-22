import { UserRankAvgAggregate } from "../outputs/UserRankAvgAggregate";
import { UserRankCountAggregate } from "../outputs/UserRankCountAggregate";
import { UserRankMaxAggregate } from "../outputs/UserRankMaxAggregate";
import { UserRankMinAggregate } from "../outputs/UserRankMinAggregate";
import { UserRankSumAggregate } from "../outputs/UserRankSumAggregate";
export declare class AggregateUserRank {
    _count: UserRankCountAggregate | null;
    _avg: UserRankAvgAggregate | null;
    _sum: UserRankSumAggregate | null;
    _min: UserRankMinAggregate | null;
    _max: UserRankMaxAggregate | null;
}
