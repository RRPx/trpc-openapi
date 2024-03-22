import { BankInformationCountAggregate } from "../outputs/BankInformationCountAggregate";
import { BankInformationMaxAggregate } from "../outputs/BankInformationMaxAggregate";
import { BankInformationMinAggregate } from "../outputs/BankInformationMinAggregate";
export declare class AggregateBankInformation {
    _count: BankInformationCountAggregate | null;
    _min: BankInformationMinAggregate | null;
    _max: BankInformationMaxAggregate | null;
}
