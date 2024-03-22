import { CastInformationAvgAggregate } from "../outputs/CastInformationAvgAggregate";
import { CastInformationCountAggregate } from "../outputs/CastInformationCountAggregate";
import { CastInformationMaxAggregate } from "../outputs/CastInformationMaxAggregate";
import { CastInformationMinAggregate } from "../outputs/CastInformationMinAggregate";
import { CastInformationSumAggregate } from "../outputs/CastInformationSumAggregate";
export declare class AggregateCastInformation {
    _count: CastInformationCountAggregate | null;
    _avg: CastInformationAvgAggregate | null;
    _sum: CastInformationSumAggregate | null;
    _min: CastInformationMinAggregate | null;
    _max: CastInformationMaxAggregate | null;
}
