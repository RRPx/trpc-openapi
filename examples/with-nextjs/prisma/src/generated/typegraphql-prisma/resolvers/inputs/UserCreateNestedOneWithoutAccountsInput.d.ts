import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserUncheckedCreateWithoutAccountsInput } from "../inputs/UserUncheckedCreateWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAccountsInput {
    create?: UserUncheckedCreateWithoutAccountsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
