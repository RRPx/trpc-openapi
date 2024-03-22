import { CastCreateOrConnectWithoutCast_informationInput } from "../inputs/CastCreateOrConnectWithoutCast_informationInput";
import { CastUncheckedCreateWithoutCast_informationInput } from "../inputs/CastUncheckedCreateWithoutCast_informationInput";
import { CastUncheckedUpdateWithoutCast_informationInput } from "../inputs/CastUncheckedUpdateWithoutCast_informationInput";
import { CastUpsertWithoutCast_informationInput } from "../inputs/CastUpsertWithoutCast_informationInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneRequiredWithoutCast_informationNestedInput {
    create?: CastUncheckedCreateWithoutCast_informationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutCast_informationInput | undefined;
    upsert?: CastUpsertWithoutCast_informationInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutCast_informationInput | undefined;
}
