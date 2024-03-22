import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BankInformationScalarWhereWithAggregatesInput {
    AND?: BankInformationScalarWhereWithAggregatesInput[] | undefined;
    OR?: BankInformationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BankInformationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    bank_name?: StringNullableWithAggregatesFilter | undefined;
    bank_number?: StringNullableWithAggregatesFilter | undefined;
    bank_finance_code?: StringNullableWithAggregatesFilter | undefined;
    account_name?: StringNullableWithAggregatesFilter | undefined;
    account_number?: StringNullableWithAggregatesFilter | undefined;
    account_type?: StringNullableWithAggregatesFilter | undefined;
    cast_id?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
    is_deleted?: BoolWithAggregatesFilter | undefined;
}
