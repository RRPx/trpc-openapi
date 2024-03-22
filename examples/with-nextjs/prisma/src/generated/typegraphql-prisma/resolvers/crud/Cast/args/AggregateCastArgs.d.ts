import { CastOrderByWithRelationInput } from "../../../inputs/CastOrderByWithRelationInput";
import { CastWhereInput } from "../../../inputs/CastWhereInput";
import { CastWhereUniqueInput } from "../../../inputs/CastWhereUniqueInput";
export declare class AggregateCastArgs {
    where?: CastWhereInput | undefined;
    orderBy?: CastOrderByWithRelationInput[] | undefined;
    cursor?: CastWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
