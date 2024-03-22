import { BankInformationOrderByWithAggregationInput } from "../../../inputs/BankInformationOrderByWithAggregationInput";
import { BankInformationScalarWhereWithAggregatesInput } from "../../../inputs/BankInformationScalarWhereWithAggregatesInput";
import { BankInformationWhereInput } from "../../../inputs/BankInformationWhereInput";
export declare class GroupByBankInformationArgs {
    where?: BankInformationWhereInput | undefined;
    orderBy?: BankInformationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "bank_name" | "bank_number" | "bank_finance_code" | "account_name" | "account_number" | "account_type" | "cast_id" | "created_at" | "updated_at" | "is_deleted">;
    having?: BankInformationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
