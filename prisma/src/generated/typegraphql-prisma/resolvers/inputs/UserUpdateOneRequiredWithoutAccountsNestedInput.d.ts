import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserUncheckedCreateWithoutAccountsInput } from "../inputs/UserUncheckedCreateWithoutAccountsInput";
import { UserUncheckedUpdateWithoutAccountsInput } from "../inputs/UserUncheckedUpdateWithoutAccountsInput";
import { UserUpsertWithoutAccountsInput } from "../inputs/UserUpsertWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAccountsNestedInput {
    create?: UserUncheckedCreateWithoutAccountsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;
    upsert?: UserUpsertWithoutAccountsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUncheckedUpdateWithoutAccountsInput | undefined;
}
