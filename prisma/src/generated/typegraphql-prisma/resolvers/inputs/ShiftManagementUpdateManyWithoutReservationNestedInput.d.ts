import { ShiftManagementCreateManyReservationInputEnvelope } from "../inputs/ShiftManagementCreateManyReservationInputEnvelope";
import { ShiftManagementCreateOrConnectWithoutReservationInput } from "../inputs/ShiftManagementCreateOrConnectWithoutReservationInput";
import { ShiftManagementCreateWithoutReservationInput } from "../inputs/ShiftManagementCreateWithoutReservationInput";
import { ShiftManagementScalarWhereInput } from "../inputs/ShiftManagementScalarWhereInput";
import { ShiftManagementUpdateManyWithWhereWithoutReservationInput } from "../inputs/ShiftManagementUpdateManyWithWhereWithoutReservationInput";
import { ShiftManagementUpdateWithWhereUniqueWithoutReservationInput } from "../inputs/ShiftManagementUpdateWithWhereUniqueWithoutReservationInput";
import { ShiftManagementUpsertWithWhereUniqueWithoutReservationInput } from "../inputs/ShiftManagementUpsertWithWhereUniqueWithoutReservationInput";
import { ShiftManagementWhereUniqueInput } from "../inputs/ShiftManagementWhereUniqueInput";
export declare class ShiftManagementUpdateManyWithoutReservationNestedInput {
    create?: ShiftManagementCreateWithoutReservationInput[] | undefined;
    connectOrCreate?: ShiftManagementCreateOrConnectWithoutReservationInput[] | undefined;
    upsert?: ShiftManagementUpsertWithWhereUniqueWithoutReservationInput[] | undefined;
    createMany?: ShiftManagementCreateManyReservationInputEnvelope | undefined;
    set?: ShiftManagementWhereUniqueInput[] | undefined;
    disconnect?: ShiftManagementWhereUniqueInput[] | undefined;
    delete?: ShiftManagementWhereUniqueInput[] | undefined;
    connect?: ShiftManagementWhereUniqueInput[] | undefined;
    update?: ShiftManagementUpdateWithWhereUniqueWithoutReservationInput[] | undefined;
    updateMany?: ShiftManagementUpdateManyWithWhereWithoutReservationInput[] | undefined;
    deleteMany?: ShiftManagementScalarWhereInput[] | undefined;
}
