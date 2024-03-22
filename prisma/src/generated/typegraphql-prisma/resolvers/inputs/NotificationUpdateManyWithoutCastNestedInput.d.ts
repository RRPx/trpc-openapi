import { NotificationCreateManyCastInputEnvelope } from "../inputs/NotificationCreateManyCastInputEnvelope";
import { NotificationCreateOrConnectWithoutCastInput } from "../inputs/NotificationCreateOrConnectWithoutCastInput";
import { NotificationCreateWithoutCastInput } from "../inputs/NotificationCreateWithoutCastInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutCastInput } from "../inputs/NotificationUpdateManyWithWhereWithoutCastInput";
import { NotificationUpdateWithWhereUniqueWithoutCastInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutCastInput";
import { NotificationUpsertWithWhereUniqueWithoutCastInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutCastInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutCastNestedInput {
    create?: NotificationCreateWithoutCastInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    createMany?: NotificationCreateManyCastInputEnvelope | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
