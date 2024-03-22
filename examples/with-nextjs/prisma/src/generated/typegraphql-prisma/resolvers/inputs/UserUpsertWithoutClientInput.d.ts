import { UserUncheckedCreateWithoutClientInput } from "../inputs/UserUncheckedCreateWithoutClientInput";
import { UserUncheckedUpdateWithoutClientInput } from "../inputs/UserUncheckedUpdateWithoutClientInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutClientInput {
    update: UserUncheckedUpdateWithoutClientInput;
    create: UserUncheckedCreateWithoutClientInput;
    where?: UserWhereInput | undefined;
}
