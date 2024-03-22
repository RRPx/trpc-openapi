import { UserCreateOrConnectWithoutCastInput } from "../inputs/UserCreateOrConnectWithoutCastInput";
import { UserUncheckedCreateWithoutCastInput } from "../inputs/UserUncheckedCreateWithoutCastInput";
import { UserUncheckedUpdateWithoutCastInput } from "../inputs/UserUncheckedUpdateWithoutCastInput";
import { UserUpsertWithoutCastInput } from "../inputs/UserUpsertWithoutCastInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUncheckedUpdateOneWithoutCastNestedInput {
    create?: UserUncheckedCreateWithoutCastInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCastInput | undefined;
    upsert?: UserUpsertWithoutCastInput | undefined;
    disconnect?: UserWhereInput | undefined;
    delete?: UserWhereInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUncheckedUpdateWithoutCastInput | undefined;
}
