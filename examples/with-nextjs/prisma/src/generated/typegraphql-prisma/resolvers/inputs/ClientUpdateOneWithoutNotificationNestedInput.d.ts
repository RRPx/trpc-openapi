import { ClientCreateOrConnectWithoutNotificationInput } from "../inputs/ClientCreateOrConnectWithoutNotificationInput";
import { ClientUncheckedCreateWithoutNotificationInput } from "../inputs/ClientUncheckedCreateWithoutNotificationInput";
import { ClientUncheckedUpdateWithoutNotificationInput } from "../inputs/ClientUncheckedUpdateWithoutNotificationInput";
import { ClientUpsertWithoutNotificationInput } from "../inputs/ClientUpsertWithoutNotificationInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneWithoutNotificationNestedInput {
    create?: ClientUncheckedCreateWithoutNotificationInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutNotificationInput | undefined;
    upsert?: ClientUpsertWithoutNotificationInput | undefined;
    disconnect?: ClientWhereInput | undefined;
    delete?: ClientWhereInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUncheckedUpdateWithoutNotificationInput | undefined;
}
