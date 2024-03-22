import { UserUncheckedCreateWithoutCastInput } from "../inputs/UserUncheckedCreateWithoutCastInput";
import { UserUncheckedUpdateWithoutCastInput } from "../inputs/UserUncheckedUpdateWithoutCastInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutCastInput {
    update: UserUncheckedUpdateWithoutCastInput;
    create: UserUncheckedCreateWithoutCastInput;
    where?: UserWhereInput | undefined;
}
