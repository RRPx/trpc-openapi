import { AddressUncheckedCreateWithoutReservationInput } from "../inputs/AddressUncheckedCreateWithoutReservationInput";
import { AddressUncheckedUpdateWithoutReservationInput } from "../inputs/AddressUncheckedUpdateWithoutReservationInput";
import { AddressWhereInput } from "../inputs/AddressWhereInput";
export declare class AddressUpsertWithoutReservationInput {
    update: AddressUncheckedUpdateWithoutReservationInput;
    create: AddressUncheckedCreateWithoutReservationInput;
    where?: AddressWhereInput | undefined;
}
