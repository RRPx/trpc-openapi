import { UserCreateOrConnectWithoutCastInput } from "../inputs/UserCreateOrConnectWithoutCastInput";
import { UserUncheckedCreateWithoutCastInput } from "../inputs/UserUncheckedCreateWithoutCastInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUncheckedCreateNestedOneWithoutCastInput {
    create?: UserUncheckedCreateWithoutCastInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCastInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
