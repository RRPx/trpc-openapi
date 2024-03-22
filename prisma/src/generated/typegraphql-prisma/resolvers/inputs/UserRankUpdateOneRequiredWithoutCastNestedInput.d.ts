import { UserRankCreateOrConnectWithoutCastInput } from "../inputs/UserRankCreateOrConnectWithoutCastInput";
import { UserRankUncheckedCreateWithoutCastInput } from "../inputs/UserRankUncheckedCreateWithoutCastInput";
import { UserRankUncheckedUpdateWithoutCastInput } from "../inputs/UserRankUncheckedUpdateWithoutCastInput";
import { UserRankUpsertWithoutCastInput } from "../inputs/UserRankUpsertWithoutCastInput";
import { UserRankWhereUniqueInput } from "../inputs/UserRankWhereUniqueInput";
export declare class UserRankUpdateOneRequiredWithoutCastNestedInput {
    create?: UserRankUncheckedCreateWithoutCastInput | undefined;
    connectOrCreate?: UserRankCreateOrConnectWithoutCastInput | undefined;
    upsert?: UserRankUpsertWithoutCastInput | undefined;
    connect?: UserRankWhereUniqueInput | undefined;
    update?: UserRankUncheckedUpdateWithoutCastInput | undefined;
}
