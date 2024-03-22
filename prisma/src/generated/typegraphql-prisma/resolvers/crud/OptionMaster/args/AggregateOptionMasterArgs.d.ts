import { OptionMasterOrderByWithRelationInput } from "../../../inputs/OptionMasterOrderByWithRelationInput";
import { OptionMasterWhereInput } from "../../../inputs/OptionMasterWhereInput";
import { OptionMasterWhereUniqueInput } from "../../../inputs/OptionMasterWhereUniqueInput";
export declare class AggregateOptionMasterArgs {
    where?: OptionMasterWhereInput | undefined;
    orderBy?: OptionMasterOrderByWithRelationInput[] | undefined;
    cursor?: OptionMasterWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
