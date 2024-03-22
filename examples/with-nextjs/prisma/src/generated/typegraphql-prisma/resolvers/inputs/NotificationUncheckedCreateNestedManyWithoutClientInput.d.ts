import { NotificationCreateManyClientInputEnvelope } from "../inputs/NotificationCreateManyClientInputEnvelope";
import { NotificationCreateOrConnectWithoutClientInput } from "../inputs/NotificationCreateOrConnectWithoutClientInput";
import { NotificationCreateWithoutClientInput } from "../inputs/NotificationCreateWithoutClientInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUncheckedCreateNestedManyWithoutClientInput {
    create?: NotificationCreateWithoutClientInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutClientInput[] | undefined;
    createMany?: NotificationCreateManyClientInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
