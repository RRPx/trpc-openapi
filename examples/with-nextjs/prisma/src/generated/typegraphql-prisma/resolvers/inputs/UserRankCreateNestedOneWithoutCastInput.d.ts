import { UserRankCreateOrConnectWithoutCastInput } from "../inputs/UserRankCreateOrConnectWithoutCastInput";
import { UserRankUncheckedCreateWithoutCastInput } from "../inputs/UserRankUncheckedCreateWithoutCastInput";
import { UserRankWhereUniqueInput } from "../inputs/UserRankWhereUniqueInput";
export declare class UserRankCreateNestedOneWithoutCastInput {
    create?: UserRankUncheckedCreateWithoutCastInput | undefined;
    connectOrCreate?: UserRankCreateOrConnectWithoutCastInput | undefined;
    connect?: UserRankWhereUniqueInput | undefined;
}
