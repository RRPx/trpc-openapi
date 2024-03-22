import { UserCreateOrConnectWithoutClientInput } from "../inputs/UserCreateOrConnectWithoutClientInput";
import { UserUncheckedCreateWithoutClientInput } from "../inputs/UserUncheckedCreateWithoutClientInput";
import { UserUncheckedUpdateWithoutClientInput } from "../inputs/UserUncheckedUpdateWithoutClientInput";
import { UserUpsertWithoutClientInput } from "../inputs/UserUpsertWithoutClientInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutClientNestedInput {
    create?: UserUncheckedCreateWithoutClientInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | undefined;
    upsert?: UserUpsertWithoutClientInput | undefined;
    disconnect?: UserWhereInput | undefined;
    delete?: UserWhereInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUncheckedUpdateWithoutClientInput | undefined;
}
