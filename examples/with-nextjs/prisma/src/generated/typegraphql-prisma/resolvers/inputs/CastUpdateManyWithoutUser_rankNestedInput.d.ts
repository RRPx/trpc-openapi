import { CastCreateManyUser_rankInputEnvelope } from "../inputs/CastCreateManyUser_rankInputEnvelope";
import { CastCreateOrConnectWithoutUser_rankInput } from "../inputs/CastCreateOrConnectWithoutUser_rankInput";
import { CastCreateWithoutUser_rankInput } from "../inputs/CastCreateWithoutUser_rankInput";
import { CastScalarWhereInput } from "../inputs/CastScalarWhereInput";
import { CastUpdateManyWithWhereWithoutUser_rankInput } from "../inputs/CastUpdateManyWithWhereWithoutUser_rankInput";
import { CastUpdateWithWhereUniqueWithoutUser_rankInput } from "../inputs/CastUpdateWithWhereUniqueWithoutUser_rankInput";
import { CastUpsertWithWhereUniqueWithoutUser_rankInput } from "../inputs/CastUpsertWithWhereUniqueWithoutUser_rankInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateManyWithoutUser_rankNestedInput {
    create?: CastCreateWithoutUser_rankInput[] | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutUser_rankInput[] | undefined;
    upsert?: CastUpsertWithWhereUniqueWithoutUser_rankInput[] | undefined;
    createMany?: CastCreateManyUser_rankInputEnvelope | undefined;
    set?: CastWhereUniqueInput[] | undefined;
    disconnect?: CastWhereUniqueInput[] | undefined;
    delete?: CastWhereUniqueInput[] | undefined;
    connect?: CastWhereUniqueInput[] | undefined;
    update?: CastUpdateWithWhereUniqueWithoutUser_rankInput[] | undefined;
    updateMany?: CastUpdateManyWithWhereWithoutUser_rankInput[] | undefined;
    deleteMany?: CastScalarWhereInput[] | undefined;
}
