import { ShiftManagementCountAggregate } from "../outputs/ShiftManagementCountAggregate";
import { ShiftManagementMaxAggregate } from "../outputs/ShiftManagementMaxAggregate";
import { ShiftManagementMinAggregate } from "../outputs/ShiftManagementMinAggregate";
export declare class AggregateShiftManagement {
    _count: ShiftManagementCountAggregate | null;
    _min: ShiftManagementMinAggregate | null;
    _max: ShiftManagementMaxAggregate | null;
}
