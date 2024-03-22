import { BankInformationCreateManyCastInputEnvelope } from "../inputs/BankInformationCreateManyCastInputEnvelope";
import { BankInformationCreateOrConnectWithoutCastInput } from "../inputs/BankInformationCreateOrConnectWithoutCastInput";
import { BankInformationCreateWithoutCastInput } from "../inputs/BankInformationCreateWithoutCastInput";
import { BankInformationScalarWhereInput } from "../inputs/BankInformationScalarWhereInput";
import { BankInformationUpdateManyWithWhereWithoutCastInput } from "../inputs/BankInformationUpdateManyWithWhereWithoutCastInput";
import { BankInformationUpdateWithWhereUniqueWithoutCastInput } from "../inputs/BankInformationUpdateWithWhereUniqueWithoutCastInput";
import { BankInformationUpsertWithWhereUniqueWithoutCastInput } from "../inputs/BankInformationUpsertWithWhereUniqueWithoutCastInput";
import { BankInformationWhereUniqueInput } from "../inputs/BankInformationWhereUniqueInput";
export declare class BankInformationUncheckedUpdateManyWithoutCastNestedInput {
    create?: BankInformationCreateWithoutCastInput[] | undefined;
    connectOrCreate?: BankInformationCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: BankInformationUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    createMany?: BankInformationCreateManyCastInputEnvelope | undefined;
    set?: BankInformationWhereUniqueInput[] | undefined;
    disconnect?: BankInformationWhereUniqueInput[] | undefined;
    delete?: BankInformationWhereUniqueInput[] | undefined;
    connect?: BankInformationWhereUniqueInput[] | undefined;
    update?: BankInformationUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: BankInformationUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: BankInformationScalarWhereInput[] | undefined;
}
