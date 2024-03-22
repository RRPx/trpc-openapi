import { AddressCreateOrConnectWithoutReservationInput } from "../inputs/AddressCreateOrConnectWithoutReservationInput";
import { AddressUncheckedCreateWithoutReservationInput } from "../inputs/AddressUncheckedCreateWithoutReservationInput";
import { AddressUncheckedUpdateWithoutReservationInput } from "../inputs/AddressUncheckedUpdateWithoutReservationInput";
import { AddressUpsertWithoutReservationInput } from "../inputs/AddressUpsertWithoutReservationInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateOneRequiredWithoutReservationNestedInput {
    create?: AddressUncheckedCreateWithoutReservationInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutReservationInput | undefined;
    upsert?: AddressUpsertWithoutReservationInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
    update?: AddressUncheckedUpdateWithoutReservationInput | undefined;
}
