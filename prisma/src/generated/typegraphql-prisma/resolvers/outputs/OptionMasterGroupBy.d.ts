import { OptionMasterAvgAggregate } from "../outputs/OptionMasterAvgAggregate";
import { OptionMasterCountAggregate } from "../outputs/OptionMasterCountAggregate";
import { OptionMasterMaxAggregate } from "../outputs/OptionMasterMaxAggregate";
import { OptionMasterMinAggregate } from "../outputs/OptionMasterMinAggregate";
import { OptionMasterSumAggregate } from "../outputs/OptionMasterSumAggregate";
export declare class OptionMasterGroupBy {
    id: string;
    option_menu: string;
    fee: number;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
    _count: OptionMasterCountAggregate | null;
    _avg: OptionMasterAvgAggregate | null;
    _sum: OptionMasterSumAggregate | null;
    _min: OptionMasterMinAggregate | null;
    _max: OptionMasterMaxAggregate | null;
}
