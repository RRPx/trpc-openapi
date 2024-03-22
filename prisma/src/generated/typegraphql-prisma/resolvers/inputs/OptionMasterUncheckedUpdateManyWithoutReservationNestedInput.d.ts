import { OptionMasterCreateOrConnectWithoutReservationInput } from "../inputs/OptionMasterCreateOrConnectWithoutReservationInput";
import { OptionMasterCreateWithoutReservationInput } from "../inputs/OptionMasterCreateWithoutReservationInput";
import { OptionMasterScalarWhereInput } from "../inputs/OptionMasterScalarWhereInput";
import { OptionMasterUpdateManyWithWhereWithoutReservationInput } from "../inputs/OptionMasterUpdateManyWithWhereWithoutReservationInput";
import { OptionMasterUpdateWithWhereUniqueWithoutReservationInput } from "../inputs/OptionMasterUpdateWithWhereUniqueWithoutReservationInput";
import { OptionMasterUpsertWithWhereUniqueWithoutReservationInput } from "../inputs/OptionMasterUpsertWithWhereUniqueWithoutReservationInput";
import { OptionMasterWhereUniqueInput } from "../inputs/OptionMasterWhereUniqueInput";
export declare class OptionMasterUncheckedUpdateManyWithoutReservationNestedInput {
    create?: OptionMasterCreateWithoutReservationInput[] | undefined;
    connectOrCreate?: OptionMasterCreateOrConnectWithoutReservationInput[] | undefined;
    upsert?: OptionMasterUpsertWithWhereUniqueWithoutReservationInput[] | undefined;
    set?: OptionMasterWhereUniqueInput[] | undefined;
    disconnect?: OptionMasterWhereUniqueInput[] | undefined;
    delete?: OptionMasterWhereUniqueInput[] | undefined;
    connect?: OptionMasterWhereUniqueInput[] | undefined;
    update?: OptionMasterUpdateWithWhereUniqueWithoutReservationInput[] | undefined;
    updateMany?: OptionMasterUpdateManyWithWhereWithoutReservationInput[] | undefined;
    deleteMany?: OptionMasterScalarWhereInput[] | undefined;
}
