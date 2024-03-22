import { ClientCreateOrConnectWithoutUsersInput } from "../inputs/ClientCreateOrConnectWithoutUsersInput";
import { ClientUncheckedCreateWithoutUsersInput } from "../inputs/ClientUncheckedCreateWithoutUsersInput";
import { ClientUncheckedUpdateWithoutUsersInput } from "../inputs/ClientUncheckedUpdateWithoutUsersInput";
import { ClientUpsertWithoutUsersInput } from "../inputs/ClientUpsertWithoutUsersInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneWithoutUsersNestedInput {
    create?: ClientUncheckedCreateWithoutUsersInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput | undefined;
    upsert?: ClientUpsertWithoutUsersInput | undefined;
    disconnect?: ClientWhereInput | undefined;
    delete?: ClientWhereInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUncheckedUpdateWithoutUsersInput | undefined;
}
