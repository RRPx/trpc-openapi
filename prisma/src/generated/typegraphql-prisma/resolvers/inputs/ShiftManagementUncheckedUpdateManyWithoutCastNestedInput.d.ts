import { ShiftManagementCreateManyCastInputEnvelope } from "../inputs/ShiftManagementCreateManyCastInputEnvelope";
import { ShiftManagementCreateOrConnectWithoutCastInput } from "../inputs/ShiftManagementCreateOrConnectWithoutCastInput";
import { ShiftManagementCreateWithoutCastInput } from "../inputs/ShiftManagementCreateWithoutCastInput";
import { ShiftManagementScalarWhereInput } from "../inputs/ShiftManagementScalarWhereInput";
import { ShiftManagementUpdateManyWithWhereWithoutCastInput } from "../inputs/ShiftManagementUpdateManyWithWhereWithoutCastInput";
import { ShiftManagementUpdateWithWhereUniqueWithoutCastInput } from "../inputs/ShiftManagementUpdateWithWhereUniqueWithoutCastInput";
import { ShiftManagementUpsertWithWhereUniqueWithoutCastInput } from "../inputs/ShiftManagementUpsertWithWhereUniqueWithoutCastInput";
import { ShiftManagementWhereUniqueInput } from "../inputs/ShiftManagementWhereUniqueInput";
export declare class ShiftManagementUncheckedUpdateManyWithoutCastNestedInput {
    create?: ShiftManagementCreateWithoutCastInput[] | undefined;
    connectOrCreate?: ShiftManagementCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: ShiftManagementUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    createMany?: ShiftManagementCreateManyCastInputEnvelope | undefined;
    set?: ShiftManagementWhereUniqueInput[] | undefined;
    disconnect?: ShiftManagementWhereUniqueInput[] | undefined;
    delete?: ShiftManagementWhereUniqueInput[] | undefined;
    connect?: ShiftManagementWhereUniqueInput[] | undefined;
    update?: ShiftManagementUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: ShiftManagementUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: ShiftManagementScalarWhereInput[] | undefined;
}
