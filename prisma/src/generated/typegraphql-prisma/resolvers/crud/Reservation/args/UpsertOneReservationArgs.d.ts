import { ReservationUncheckedCreateInput } from "../../../inputs/ReservationUncheckedCreateInput";
import { ReservationUncheckedUpdateInput } from "../../../inputs/ReservationUncheckedUpdateInput";
import { ReservationWhereUniqueInput } from "../../../inputs/ReservationWhereUniqueInput";
export declare class UpsertOneReservationArgs {
    where: ReservationWhereUniqueInput;
    create: ReservationUncheckedCreateInput;
    update: ReservationUncheckedUpdateInput;
}
