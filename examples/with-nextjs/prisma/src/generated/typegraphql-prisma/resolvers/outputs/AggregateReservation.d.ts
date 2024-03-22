import { ReservationAvgAggregate } from "../outputs/ReservationAvgAggregate";
import { ReservationCountAggregate } from "../outputs/ReservationCountAggregate";
import { ReservationMaxAggregate } from "../outputs/ReservationMaxAggregate";
import { ReservationMinAggregate } from "../outputs/ReservationMinAggregate";
import { ReservationSumAggregate } from "../outputs/ReservationSumAggregate";
export declare class AggregateReservation {
    _count: ReservationCountAggregate | null;
    _avg: ReservationAvgAggregate | null;
    _sum: ReservationSumAggregate | null;
    _min: ReservationMinAggregate | null;
    _max: ReservationMaxAggregate | null;
}
