import { CastInformationOrderByWithRelationInput } from "../../../inputs/CastInformationOrderByWithRelationInput";
import { CastInformationWhereInput } from "../../../inputs/CastInformationWhereInput";
import { CastInformationWhereUniqueInput } from "../../../inputs/CastInformationWhereUniqueInput";
export declare class AggregateCastInformationArgs {
    where?: CastInformationWhereInput | undefined;
    orderBy?: CastInformationOrderByWithRelationInput[] | undefined;
    cursor?: CastInformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
