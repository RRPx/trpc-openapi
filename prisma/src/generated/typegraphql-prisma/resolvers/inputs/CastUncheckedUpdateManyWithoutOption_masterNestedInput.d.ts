import { CastCreateOrConnectWithoutOption_masterInput } from "../inputs/CastCreateOrConnectWithoutOption_masterInput";
import { CastCreateWithoutOption_masterInput } from "../inputs/CastCreateWithoutOption_masterInput";
import { CastScalarWhereInput } from "../inputs/CastScalarWhereInput";
import { CastUpdateManyWithWhereWithoutOption_masterInput } from "../inputs/CastUpdateManyWithWhereWithoutOption_masterInput";
import { CastUpdateWithWhereUniqueWithoutOption_masterInput } from "../inputs/CastUpdateWithWhereUniqueWithoutOption_masterInput";
import { CastUpsertWithWhereUniqueWithoutOption_masterInput } from "../inputs/CastUpsertWithWhereUniqueWithoutOption_masterInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUncheckedUpdateManyWithoutOption_masterNestedInput {
    create?: CastCreateWithoutOption_masterInput[] | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutOption_masterInput[] | undefined;
    upsert?: CastUpsertWithWhereUniqueWithoutOption_masterInput[] | undefined;
    set?: CastWhereUniqueInput[] | undefined;
    disconnect?: CastWhereUniqueInput[] | undefined;
    delete?: CastWhereUniqueInput[] | undefined;
    connect?: CastWhereUniqueInput[] | undefined;
    update?: CastUpdateWithWhereUniqueWithoutOption_masterInput[] | undefined;
    updateMany?: CastUpdateManyWithWhereWithoutOption_masterInput[] | undefined;
    deleteMany?: CastScalarWhereInput[] | undefined;
}
