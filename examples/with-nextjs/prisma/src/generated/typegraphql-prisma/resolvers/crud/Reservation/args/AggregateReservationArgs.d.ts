import { ReservationOrderByWithRelationInput } from "../../../inputs/ReservationOrderByWithRelationInput";
import { ReservationWhereInput } from "../../../inputs/ReservationWhereInput";
import { ReservationWhereUniqueInput } from "../../../inputs/ReservationWhereUniqueInput";
export declare class AggregateReservationArgs {
    where?: ReservationWhereInput | undefined;
    orderBy?: ReservationOrderByWithRelationInput[] | undefined;
    cursor?: ReservationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
