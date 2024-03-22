import { BankInformationCreateManyCastInputEnvelope } from "../inputs/BankInformationCreateManyCastInputEnvelope";
import { BankInformationCreateOrConnectWithoutCastInput } from "../inputs/BankInformationCreateOrConnectWithoutCastInput";
import { BankInformationCreateWithoutCastInput } from "../inputs/BankInformationCreateWithoutCastInput";
import { BankInformationWhereUniqueInput } from "../inputs/BankInformationWhereUniqueInput";
export declare class BankInformationCreateNestedManyWithoutCastInput {
    create?: BankInformationCreateWithoutCastInput[] | undefined;
    connectOrCreate?: BankInformationCreateOrConnectWithoutCastInput[] | undefined;
    createMany?: BankInformationCreateManyCastInputEnvelope | undefined;
    connect?: BankInformationWhereUniqueInput[] | undefined;
}
