import { BankInformationCountOrderByAggregateInput } from "../inputs/BankInformationCountOrderByAggregateInput";
import { BankInformationMaxOrderByAggregateInput } from "../inputs/BankInformationMaxOrderByAggregateInput";
import { BankInformationMinOrderByAggregateInput } from "../inputs/BankInformationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class BankInformationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    bank_name?: SortOrderInput | undefined;
    bank_number?: SortOrderInput | undefined;
    bank_finance_code?: SortOrderInput | undefined;
    account_name?: SortOrderInput | undefined;
    account_number?: SortOrderInput | undefined;
    account_type?: SortOrderInput | undefined;
    cast_id?: SortOrderInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    is_deleted?: "asc" | "desc" | undefined;
    _count?: BankInformationCountOrderByAggregateInput | undefined;
    _max?: BankInformationMaxOrderByAggregateInput | undefined;
    _min?: BankInformationMinOrderByAggregateInput | undefined;
}
