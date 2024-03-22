import { ClientCreateOrConnectWithoutNotificationInput } from "../inputs/ClientCreateOrConnectWithoutNotificationInput";
import { ClientUncheckedCreateWithoutNotificationInput } from "../inputs/ClientUncheckedCreateWithoutNotificationInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutNotificationInput {
    create?: ClientUncheckedCreateWithoutNotificationInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutNotificationInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
