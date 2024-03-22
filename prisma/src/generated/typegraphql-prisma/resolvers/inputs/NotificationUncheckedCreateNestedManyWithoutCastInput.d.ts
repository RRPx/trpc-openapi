import { NotificationCreateManyCastInputEnvelope } from "../inputs/NotificationCreateManyCastInputEnvelope";
import { NotificationCreateOrConnectWithoutCastInput } from "../inputs/NotificationCreateOrConnectWithoutCastInput";
import { NotificationCreateWithoutCastInput } from "../inputs/NotificationCreateWithoutCastInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUncheckedCreateNestedManyWithoutCastInput {
    create?: NotificationCreateWithoutCastInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutCastInput[] | undefined;
    createMany?: NotificationCreateManyCastInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
