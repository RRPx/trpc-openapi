import { ClientUncheckedCreateWithoutNotificationInput } from "../inputs/ClientUncheckedCreateWithoutNotificationInput";
import { ClientUncheckedUpdateWithoutNotificationInput } from "../inputs/ClientUncheckedUpdateWithoutNotificationInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutNotificationInput {
    update: ClientUncheckedUpdateWithoutNotificationInput;
    create: ClientUncheckedCreateWithoutNotificationInput;
    where?: ClientWhereInput | undefined;
}
