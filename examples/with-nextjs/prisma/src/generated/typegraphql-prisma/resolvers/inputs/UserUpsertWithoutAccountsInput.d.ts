import { UserUncheckedCreateWithoutAccountsInput } from "../inputs/UserUncheckedCreateWithoutAccountsInput";
import { UserUncheckedUpdateWithoutAccountsInput } from "../inputs/UserUncheckedUpdateWithoutAccountsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutAccountsInput {
    update: UserUncheckedUpdateWithoutAccountsInput;
    create: UserUncheckedCreateWithoutAccountsInput;
    where?: UserWhereInput | undefined;
}
