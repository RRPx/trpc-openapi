import { ReservationUncheckedCreateWithoutAddressInput } from "../inputs/ReservationUncheckedCreateWithoutAddressInput";
import { ReservationUncheckedUpdateWithoutAddressInput } from "../inputs/ReservationUncheckedUpdateWithoutAddressInput";
import { ReservationWhereInput } from "../inputs/ReservationWhereInput";
export declare class ReservationUpsertWithoutAddressInput {
    update: ReservationUncheckedUpdateWithoutAddressInput;
    create: ReservationUncheckedCreateWithoutAddressInput;
    where?: ReservationWhereInput | undefined;
}
