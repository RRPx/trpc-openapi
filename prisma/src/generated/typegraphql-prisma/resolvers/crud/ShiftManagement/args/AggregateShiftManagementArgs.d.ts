import { ShiftManagementOrderByWithRelationInput } from "../../../inputs/ShiftManagementOrderByWithRelationInput";
import { ShiftManagementWhereInput } from "../../../inputs/ShiftManagementWhereInput";
import { ShiftManagementWhereUniqueInput } from "../../../inputs/ShiftManagementWhereUniqueInput";
export declare class AggregateShiftManagementArgs {
    where?: ShiftManagementWhereInput | undefined;
    orderBy?: ShiftManagementOrderByWithRelationInput[] | undefined;
    cursor?: ShiftManagementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
