import { AddressCreateOrConnectWithoutReservationInput } from "../inputs/AddressCreateOrConnectWithoutReservationInput";
import { AddressUncheckedCreateWithoutReservationInput } from "../inputs/AddressUncheckedCreateWithoutReservationInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressCreateNestedOneWithoutReservationInput {
    create?: AddressUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutReservationInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
}
