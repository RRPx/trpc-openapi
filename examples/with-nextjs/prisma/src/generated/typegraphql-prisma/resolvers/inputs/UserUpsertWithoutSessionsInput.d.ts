import { UserUncheckedCreateWithoutSessionsInput } from "../inputs/UserUncheckedCreateWithoutSessionsInput";
import { UserUncheckedUpdateWithoutSessionsInput } from "../inputs/UserUncheckedUpdateWithoutSessionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutSessionsInput {
    update: UserUncheckedUpdateWithoutSessionsInput;
    create: UserUncheckedCreateWithoutSessionsInput;
    where?: UserWhereInput | undefined;
}
