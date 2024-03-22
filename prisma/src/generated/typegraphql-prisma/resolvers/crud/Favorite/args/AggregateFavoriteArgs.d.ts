import { FavoriteOrderByWithRelationInput } from "../../../inputs/FavoriteOrderByWithRelationInput";
import { FavoriteWhereInput } from "../../../inputs/FavoriteWhereInput";
import { FavoriteWhereUniqueInput } from "../../../inputs/FavoriteWhereUniqueInput";
export declare class AggregateFavoriteArgs {
    where?: FavoriteWhereInput | undefined;
    orderBy?: FavoriteOrderByWithRelationInput[] | undefined;
    cursor?: FavoriteWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
