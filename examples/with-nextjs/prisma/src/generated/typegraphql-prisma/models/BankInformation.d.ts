import { Cast } from "../models/Cast";
export declare class BankInformation {
    id: string;
    bank_name?: string | null;
    bank_number?: string | null;
    bank_finance_code?: string | null;
    account_name?: string | null;
    account_number?: string | null;
    account_type?: string | null;
    cast_id?: string | null;
    cast?: Cast | null;
    created_at: Date;
    updated_at: Date;
    is_deleted: boolean;
}
