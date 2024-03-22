import { BankInformationCountAggregate } from "../outputs/BankInformationCountAggregate";
import { BankInformationMaxAggregate } from "../outputs/BankInformationMaxAggregate";
import { BankInformationMinAggregate } from "../outputs/BankInformationMinAggregate";
export declare class BankInformationGroupBy {
    id: string;
    bank_name: string | null;
    bank_number: string | null;
    bank_finance_code: string | null;
    account_name: string | null;
    account_number: string | null;
    account_type: string | null;
    cast_id: string | null;
    created_at: Date;
    updated_at: Date;
    is_deleted: boolean;
    _count: BankInformationCountAggregate | null;
    _min: BankInformationMinAggregate | null;
    _max: BankInformationMaxAggregate | null;
}
