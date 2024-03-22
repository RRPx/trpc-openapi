import { ReviewOrderByWithAggregationInput } from "../../../inputs/ReviewOrderByWithAggregationInput";
import { ReviewScalarWhereWithAggregatesInput } from "../../../inputs/ReviewScalarWhereWithAggregatesInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
export declare class GroupByReviewArgs {
    where?: ReviewWhereInput | undefined;
    orderBy?: ReviewOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "cast_id" | "client_id" | "nick_name" | "score" | "reviews" | "approval" | "is_display" | "created_at">;
    having?: ReviewScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
