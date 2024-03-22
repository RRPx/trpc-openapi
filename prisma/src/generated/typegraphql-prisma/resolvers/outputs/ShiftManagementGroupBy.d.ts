import { ShiftManagementCountAggregate } from "../outputs/ShiftManagementCountAggregate";
import { ShiftManagementMaxAggregate } from "../outputs/ShiftManagementMaxAggregate";
import { ShiftManagementMinAggregate } from "../outputs/ShiftManagementMinAggregate";
export declare class ShiftManagementGroupBy {
    id: string;
    cast_id: string;
    client_id: string | null;
    shift_date: Date | null;
    start_time: Date | null;
    end_time: Date | null;
    memo: string | null;
    is_display: boolean;
    cast_side_reservation_status: "TRANSPORTATION" | "AWAITING" | "BOOKED";
    client_side_slot_status: "HOLD" | "UNBOOKED" | "BOOKED";
    created_at: Date;
    updated_at: Date;
    reservationId: string | null;
    _count: ShiftManagementCountAggregate | null;
    _min: ShiftManagementMinAggregate | null;
    _max: ShiftManagementMaxAggregate | null;
}
