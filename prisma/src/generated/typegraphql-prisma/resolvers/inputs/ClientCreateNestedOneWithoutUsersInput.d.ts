import { ClientCreateOrConnectWithoutUsersInput } from "../inputs/ClientCreateOrConnectWithoutUsersInput";
import { ClientUncheckedCreateWithoutUsersInput } from "../inputs/ClientUncheckedCreateWithoutUsersInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutUsersInput {
    create?: ClientUncheckedCreateWithoutUsersInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
