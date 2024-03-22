import { CastCountAggregate } from "../outputs/CastCountAggregate";
import { CastMaxAggregate } from "../outputs/CastMaxAggregate";
import { CastMinAggregate } from "../outputs/CastMinAggregate";
export declare class AggregateCast {
    _count: CastCountAggregate | null;
    _min: CastMinAggregate | null;
    _max: CastMaxAggregate | null;
}
