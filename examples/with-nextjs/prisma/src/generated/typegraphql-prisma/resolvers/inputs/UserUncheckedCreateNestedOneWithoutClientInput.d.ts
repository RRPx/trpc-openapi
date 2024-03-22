import { UserCreateOrConnectWithoutClientInput } from "../inputs/UserCreateOrConnectWithoutClientInput";
import { UserUncheckedCreateWithoutClientInput } from "../inputs/UserUncheckedCreateWithoutClientInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUncheckedCreateNestedOneWithoutClientInput {
    create?: UserUncheckedCreateWithoutClientInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
