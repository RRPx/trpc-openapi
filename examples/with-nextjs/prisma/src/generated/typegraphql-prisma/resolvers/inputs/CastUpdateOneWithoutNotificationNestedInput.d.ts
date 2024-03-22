import { CastCreateOrConnectWithoutNotificationInput } from "../inputs/CastCreateOrConnectWithoutNotificationInput";
import { CastUncheckedCreateWithoutNotificationInput } from "../inputs/CastUncheckedCreateWithoutNotificationInput";
import { CastUncheckedUpdateWithoutNotificationInput } from "../inputs/CastUncheckedUpdateWithoutNotificationInput";
import { CastUpsertWithoutNotificationInput } from "../inputs/CastUpsertWithoutNotificationInput";
import { CastWhereInput } from "../inputs/CastWhereInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneWithoutNotificationNestedInput {
    create?: CastUncheckedCreateWithoutNotificationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutNotificationInput | undefined;
    upsert?: CastUpsertWithoutNotificationInput | undefined;
    disconnect?: CastWhereInput | undefined;
    delete?: CastWhereInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutNotificationInput | undefined;
}
