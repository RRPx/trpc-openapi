import { BoolFilter } from "../inputs/BoolFilter";
import { CastNullableRelationFilter } from "../inputs/CastNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BankInformationWhereInput {
    AND?: BankInformationWhereInput[] | undefined;
    OR?: BankInformationWhereInput[] | undefined;
    NOT?: BankInformationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    bank_name?: StringNullableFilter | undefined;
    bank_number?: StringNullableFilter | undefined;
    bank_finance_code?: StringNullableFilter | undefined;
    account_name?: StringNullableFilter | undefined;
    account_number?: StringNullableFilter | undefined;
    account_type?: StringNullableFilter | undefined;
    cast_id?: StringNullableFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    is_deleted?: BoolFilter | undefined;
    cast?: CastNullableRelationFilter | undefined;
}
