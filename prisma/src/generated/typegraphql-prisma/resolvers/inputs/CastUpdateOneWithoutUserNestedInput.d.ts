import { CastCreateOrConnectWithoutUserInput } from "../inputs/CastCreateOrConnectWithoutUserInput";
import { CastUncheckedCreateWithoutUserInput } from "../inputs/CastUncheckedCreateWithoutUserInput";
import { CastUncheckedUpdateWithoutUserInput } from "../inputs/CastUncheckedUpdateWithoutUserInput";
import { CastUpsertWithoutUserInput } from "../inputs/CastUpsertWithoutUserInput";
import { CastWhereInput } from "../inputs/CastWhereInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneWithoutUserNestedInput {
    create?: CastUncheckedCreateWithoutUserInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutUserInput | undefined;
    upsert?: CastUpsertWithoutUserInput | undefined;
    disconnect?: CastWhereInput | undefined;
    delete?: CastWhereInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutUserInput | undefined;
}
