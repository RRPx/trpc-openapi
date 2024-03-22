import { ClientCreateOrConnectWithoutReservationInput } from "../inputs/ClientCreateOrConnectWithoutReservationInput";
import { ClientUncheckedCreateWithoutReservationInput } from "../inputs/ClientUncheckedCreateWithoutReservationInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutReservationInput {
    create?: ClientUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutReservationInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
