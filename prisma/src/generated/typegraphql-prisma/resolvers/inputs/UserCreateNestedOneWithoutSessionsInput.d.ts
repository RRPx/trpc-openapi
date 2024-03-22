import { UserCreateOrConnectWithoutSessionsInput } from "../inputs/UserCreateOrConnectWithoutSessionsInput";
import { UserUncheckedCreateWithoutSessionsInput } from "../inputs/UserUncheckedCreateWithoutSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSessionsInput {
    create?: UserUncheckedCreateWithoutSessionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
