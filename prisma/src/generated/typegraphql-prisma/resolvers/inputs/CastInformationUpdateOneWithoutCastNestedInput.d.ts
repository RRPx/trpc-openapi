import { CastInformationCreateOrConnectWithoutCastInput } from "../inputs/CastInformationCreateOrConnectWithoutCastInput";
import { CastInformationUncheckedCreateWithoutCastInput } from "../inputs/CastInformationUncheckedCreateWithoutCastInput";
import { CastInformationUncheckedUpdateWithoutCastInput } from "../inputs/CastInformationUncheckedUpdateWithoutCastInput";
import { CastInformationUpsertWithoutCastInput } from "../inputs/CastInformationUpsertWithoutCastInput";
import { CastInformationWhereInput } from "../inputs/CastInformationWhereInput";
import { CastInformationWhereUniqueInput } from "../inputs/CastInformationWhereUniqueInput";
export declare class CastInformationUpdateOneWithoutCastNestedInput {
    create?: CastInformationUncheckedCreateWithoutCastInput | undefined;
    connectOrCreate?: CastInformationCreateOrConnectWithoutCastInput | undefined;
    upsert?: CastInformationUpsertWithoutCastInput | undefined;
    disconnect?: CastInformationWhereInput | undefined;
    delete?: CastInformationWhereInput | undefined;
    connect?: CastInformationWhereUniqueInput | undefined;
    update?: CastInformationUncheckedUpdateWithoutCastInput | undefined;
}
