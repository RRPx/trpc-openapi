import { ClientUncheckedCreateWithoutReservationInput } from "../inputs/ClientUncheckedCreateWithoutReservationInput";
import { ClientUncheckedUpdateWithoutReservationInput } from "../inputs/ClientUncheckedUpdateWithoutReservationInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutReservationInput {
    update: ClientUncheckedUpdateWithoutReservationInput;
    create: ClientUncheckedCreateWithoutReservationInput;
    where?: ClientWhereInput | undefined;
}
