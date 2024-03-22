import { NotificationCreateManyClientInputEnvelope } from "../inputs/NotificationCreateManyClientInputEnvelope";
import { NotificationCreateOrConnectWithoutClientInput } from "../inputs/NotificationCreateOrConnectWithoutClientInput";
import { NotificationCreateWithoutClientInput } from "../inputs/NotificationCreateWithoutClientInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutClientInput } from "../inputs/NotificationUpdateManyWithWhereWithoutClientInput";
import { NotificationUpdateWithWhereUniqueWithoutClientInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutClientInput";
import { NotificationUpsertWithWhereUniqueWithoutClientInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutClientInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUncheckedUpdateManyWithoutClientNestedInput {
    create?: NotificationCreateWithoutClientInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutClientInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutClientInput[] | undefined;
    createMany?: NotificationCreateManyClientInputEnvelope | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutClientInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutClientInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
