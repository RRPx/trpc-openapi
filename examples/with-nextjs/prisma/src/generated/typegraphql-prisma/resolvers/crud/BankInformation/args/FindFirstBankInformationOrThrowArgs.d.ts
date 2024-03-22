import { BankInformationOrderByWithRelationInput } from "../../../inputs/BankInformationOrderByWithRelationInput";
import { BankInformationWhereInput } from "../../../inputs/BankInformationWhereInput";
import { BankInformationWhereUniqueInput } from "../../../inputs/BankInformationWhereUniqueInput";
export declare class FindFirstBankInformationOrThrowArgs {
    where?: BankInformationWhereInput | undefined;
    orderBy?: BankInformationOrderByWithRelationInput[] | undefined;
    cursor?: BankInformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "bank_name" | "bank_number" | "bank_finance_code" | "account_name" | "account_number" | "account_type" | "cast_id" | "created_at" | "updated_at" | "is_deleted"> | undefined;
}
