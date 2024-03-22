import { CastCreateOrConnectWithoutNotificationInput } from "../inputs/CastCreateOrConnectWithoutNotificationInput";
import { CastUncheckedCreateWithoutNotificationInput } from "../inputs/CastUncheckedCreateWithoutNotificationInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutNotificationInput {
    create?: CastUncheckedCreateWithoutNotificationInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutNotificationInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
