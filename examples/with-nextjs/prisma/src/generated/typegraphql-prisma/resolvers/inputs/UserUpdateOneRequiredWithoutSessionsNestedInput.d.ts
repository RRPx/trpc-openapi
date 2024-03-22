import { UserCreateOrConnectWithoutSessionsInput } from "../inputs/UserCreateOrConnectWithoutSessionsInput";
import { UserUncheckedCreateWithoutSessionsInput } from "../inputs/UserUncheckedCreateWithoutSessionsInput";
import { UserUncheckedUpdateWithoutSessionsInput } from "../inputs/UserUncheckedUpdateWithoutSessionsInput";
import { UserUpsertWithoutSessionsInput } from "../inputs/UserUpsertWithoutSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSessionsNestedInput {
    create?: UserUncheckedCreateWithoutSessionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;
    upsert?: UserUpsertWithoutSessionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUncheckedUpdateWithoutSessionsInput | undefined;
}
