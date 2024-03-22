import { BankInformationOrderByWithRelationInput } from "../../../inputs/BankInformationOrderByWithRelationInput";
import { BankInformationWhereInput } from "../../../inputs/BankInformationWhereInput";
import { BankInformationWhereUniqueInput } from "../../../inputs/BankInformationWhereUniqueInput";
export declare class AggregateBankInformationArgs {
    where?: BankInformationWhereInput | undefined;
    orderBy?: BankInformationOrderByWithRelationInput[] | undefined;
    cursor?: BankInformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
