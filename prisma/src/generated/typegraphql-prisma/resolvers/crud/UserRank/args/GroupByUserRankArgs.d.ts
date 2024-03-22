import { UserRankOrderByWithAggregationInput } from "../../../inputs/UserRankOrderByWithAggregationInput";
import { UserRankScalarWhereWithAggregatesInput } from "../../../inputs/UserRankScalarWhereWithAggregatesInput";
import { UserRankWhereInput } from "../../../inputs/UserRankWhereInput";
export declare class GroupByUserRankArgs {
    where?: UserRankWhereInput | undefined;
    orderBy?: UserRankOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "basic_fee" | "is_display" | "created_at" | "updated_at">;
    having?: UserRankScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
