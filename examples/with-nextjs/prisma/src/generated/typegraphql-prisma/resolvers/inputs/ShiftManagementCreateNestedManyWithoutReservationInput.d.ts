import { ShiftManagementCreateManyReservationInputEnvelope } from "../inputs/ShiftManagementCreateManyReservationInputEnvelope";
import { ShiftManagementCreateOrConnectWithoutReservationInput } from "../inputs/ShiftManagementCreateOrConnectWithoutReservationInput";
import { ShiftManagementCreateWithoutReservationInput } from "../inputs/ShiftManagementCreateWithoutReservationInput";
import { ShiftManagementWhereUniqueInput } from "../inputs/ShiftManagementWhereUniqueInput";
export declare class ShiftManagementCreateNestedManyWithoutReservationInput {
    create?: ShiftManagementCreateWithoutReservationInput[] | undefined;
    connectOrCreate?: ShiftManagementCreateOrConnectWithoutReservationInput[] | undefined;
    createMany?: ShiftManagementCreateManyReservationInputEnvelope | undefined;
    connect?: ShiftManagementWhereUniqueInput[] | undefined;
}
