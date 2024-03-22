import { CastInformationCreateOrConnectWithoutCastInput } from "../inputs/CastInformationCreateOrConnectWithoutCastInput";
import { CastInformationUncheckedCreateWithoutCastInput } from "../inputs/CastInformationUncheckedCreateWithoutCastInput";
import { CastInformationWhereUniqueInput } from "../inputs/CastInformationWhereUniqueInput";
export declare class CastInformationCreateNestedOneWithoutCastInput {
    create?: CastInformationUncheckedCreateWithoutCastInput | undefined;
    connectOrCreate?: CastInformationCreateOrConnectWithoutCastInput | undefined;
    connect?: CastInformationWhereUniqueInput | undefined;
}
