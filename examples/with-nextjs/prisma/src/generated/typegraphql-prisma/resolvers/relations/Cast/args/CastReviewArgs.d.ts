import { ReviewOrderByWithRelationInput } from "../../../inputs/ReviewOrderByWithRelationInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";
export declare class CastReviewArgs {
    where?: ReviewWhereInput | undefined;
    orderBy?: ReviewOrderByWithRelationInput[] | undefined;
    cursor?: ReviewWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "cast_id" | "client_id" | "nick_name" | "score" | "reviews" | "approval" | "is_display" | "created_at"> | undefined;
}
