import { UserRankOrderByWithRelationInput } from "../../../inputs/UserRankOrderByWithRelationInput";
import { UserRankWhereInput } from "../../../inputs/UserRankWhereInput";
import { UserRankWhereUniqueInput } from "../../../inputs/UserRankWhereUniqueInput";
export declare class FindManyUserRankArgs {
    where?: UserRankWhereInput | undefined;
    orderBy?: UserRankOrderByWithRelationInput[] | undefined;
    cursor?: UserRankWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "basic_fee" | "is_display" | "created_at" | "updated_at"> | undefined;
}
