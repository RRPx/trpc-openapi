import { ReviewCountAggregate } from "../outputs/ReviewCountAggregate";
import { ReviewMaxAggregate } from "../outputs/ReviewMaxAggregate";
import { ReviewMinAggregate } from "../outputs/ReviewMinAggregate";
export declare class ReviewGroupBy {
    id: string;
    cast_id: string;
    client_id: string;
    nick_name: string;
    score: string;
    reviews: string;
    approval: "APPROVAL" | "DENIAL" | "HOLD";
    is_display: boolean;
    created_at: Date;
    _count: ReviewCountAggregate | null;
    _min: ReviewMinAggregate | null;
    _max: ReviewMaxAggregate | null;
}
