import { UserRankOrderByWithRelationInput } from "../../../inputs/UserRankOrderByWithRelationInput";
import { UserRankWhereInput } from "../../../inputs/UserRankWhereInput";
import { UserRankWhereUniqueInput } from "../../../inputs/UserRankWhereUniqueInput";
export declare class AggregateUserRankArgs {
    where?: UserRankWhereInput | undefined;
    orderBy?: UserRankOrderByWithRelationInput[] | undefined;
    cursor?: UserRankWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
