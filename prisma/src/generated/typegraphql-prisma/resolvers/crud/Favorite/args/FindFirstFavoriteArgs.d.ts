import { FavoriteOrderByWithRelationInput } from "../../../inputs/FavoriteOrderByWithRelationInput";
import { FavoriteWhereInput } from "../../../inputs/FavoriteWhereInput";
import { FavoriteWhereUniqueInput } from "../../../inputs/FavoriteWhereUniqueInput";
export declare class FindFirstFavoriteArgs {
    where?: FavoriteWhereInput | undefined;
    orderBy?: FavoriteOrderByWithRelationInput[] | undefined;
    cursor?: FavoriteWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "client_id" | "cast_id" | "is_display" | "created_at" | "updated_at"> | undefined;
}
