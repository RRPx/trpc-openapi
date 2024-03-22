import { ShiftManagementCreateManyCastInputEnvelope } from "../inputs/ShiftManagementCreateManyCastInputEnvelope";
import { ShiftManagementCreateOrConnectWithoutCastInput } from "../inputs/ShiftManagementCreateOrConnectWithoutCastInput";
import { ShiftManagementCreateWithoutCastInput } from "../inputs/ShiftManagementCreateWithoutCastInput";
import { ShiftManagementWhereUniqueInput } from "../inputs/ShiftManagementWhereUniqueInput";
export declare class ShiftManagementCreateNestedManyWithoutCastInput {
    create?: ShiftManagementCreateWithoutCastInput[] | undefined;
    connectOrCreate?: ShiftManagementCreateOrConnectWithoutCastInput[] | undefined;
    createMany?: ShiftManagementCreateManyCastInputEnvelope | undefined;
    connect?: ShiftManagementWhereUniqueInput[] | undefined;
}
