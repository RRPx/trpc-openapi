import { ReservationAvgAggregate } from "../outputs/ReservationAvgAggregate";
import { ReservationCountAggregate } from "../outputs/ReservationCountAggregate";
import { ReservationMaxAggregate } from "../outputs/ReservationMaxAggregate";
import { ReservationMinAggregate } from "../outputs/ReservationMinAggregate";
import { ReservationSumAggregate } from "../outputs/ReservationSumAggregate";
export declare class ReservationGroupBy {
    id: string;
    cast_id: string;
    client_id: string;
    start_time: Date;
    end_time: Date;
    guide_flg: boolean;
    approval: "APPROVAL" | "DENIAL" | "HOLD";
    admin_approval: "APPROVAL" | "DENIAL" | "HOLD";
    payment_amount: number;
    payment_select: string | null;
    payment_id: string | null;
    is_display: boolean;
    reservation_date: Date;
    address_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReservationCountAggregate | null;
    _avg: ReservationAvgAggregate | null;
    _sum: ReservationSumAggregate | null;
    _min: ReservationMinAggregate | null;
    _max: ReservationMaxAggregate | null;
}
