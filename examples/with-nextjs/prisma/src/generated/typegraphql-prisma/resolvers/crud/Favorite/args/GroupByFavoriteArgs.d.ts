import { FavoriteOrderByWithAggregationInput } from "../../../inputs/FavoriteOrderByWithAggregationInput";
import { FavoriteScalarWhereWithAggregatesInput } from "../../../inputs/FavoriteScalarWhereWithAggregatesInput";
import { FavoriteWhereInput } from "../../../inputs/FavoriteWhereInput";
export declare class GroupByFavoriteArgs {
    where?: FavoriteWhereInput | undefined;
    orderBy?: FavoriteOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "client_id" | "cast_id" | "is_display" | "created_at" | "updated_at">;
    having?: FavoriteScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
