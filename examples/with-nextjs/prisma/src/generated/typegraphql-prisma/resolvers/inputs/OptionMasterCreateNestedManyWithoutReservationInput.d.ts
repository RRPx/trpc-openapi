import { OptionMasterCreateOrConnectWithoutReservationInput } from "../inputs/OptionMasterCreateOrConnectWithoutReservationInput";
import { OptionMasterCreateWithoutReservationInput } from "../inputs/OptionMasterCreateWithoutReservationInput";
import { OptionMasterWhereUniqueInput } from "../inputs/OptionMasterWhereUniqueInput";
export declare class OptionMasterCreateNestedManyWithoutReservationInput {
    create?: OptionMasterCreateWithoutReservationInput[] | undefined;
    connectOrCreate?: OptionMasterCreateOrConnectWithoutReservationInput[] | undefined;
    connect?: OptionMasterWhereUniqueInput[] | undefined;
}
