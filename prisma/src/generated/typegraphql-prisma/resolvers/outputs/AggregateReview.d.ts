import { ReviewCountAggregate } from "../outputs/ReviewCountAggregate";
import { ReviewMaxAggregate } from "../outputs/ReviewMaxAggregate";
import { ReviewMinAggregate } from "../outputs/ReviewMinAggregate";
export declare class AggregateReview {
    _count: ReviewCountAggregate | null;
    _min: ReviewMinAggregate | null;
    _max: ReviewMaxAggregate | null;
}
