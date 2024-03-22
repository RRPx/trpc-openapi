import { OptionMasterAvgAggregate } from "../outputs/OptionMasterAvgAggregate";
import { OptionMasterCountAggregate } from "../outputs/OptionMasterCountAggregate";
import { OptionMasterMaxAggregate } from "../outputs/OptionMasterMaxAggregate";
import { OptionMasterMinAggregate } from "../outputs/OptionMasterMinAggregate";
import { OptionMasterSumAggregate } from "../outputs/OptionMasterSumAggregate";
export declare class AggregateOptionMaster {
    _count: OptionMasterCountAggregate | null;
    _avg: OptionMasterAvgAggregate | null;
    _sum: OptionMasterSumAggregate | null;
    _min: OptionMasterMinAggregate | null;
    _max: OptionMasterMaxAggregate | null;
}
