import { FavoriteCreateManyClientInputEnvelope } from "../inputs/FavoriteCreateManyClientInputEnvelope";
import { FavoriteCreateOrConnectWithoutClientInput } from "../inputs/FavoriteCreateOrConnectWithoutClientInput";
import { FavoriteCreateWithoutClientInput } from "../inputs/FavoriteCreateWithoutClientInput";
import { FavoriteScalarWhereInput } from "../inputs/FavoriteScalarWhereInput";
import { FavoriteUpdateManyWithWhereWithoutClientInput } from "../inputs/FavoriteUpdateManyWithWhereWithoutClientInput";
import { FavoriteUpdateWithWhereUniqueWithoutClientInput } from "../inputs/FavoriteUpdateWithWhereUniqueWithoutClientInput";
import { FavoriteUpsertWithWhereUniqueWithoutClientInput } from "../inputs/FavoriteUpsertWithWhereUniqueWithoutClientInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";
export declare class FavoriteUpdateManyWithoutClientNestedInput {
    create?: FavoriteCreateWithoutClientInput[] | undefined;
    connectOrCreate?: FavoriteCreateOrConnectWithoutClientInput[] | undefined;
    upsert?: FavoriteUpsertWithWhereUniqueWithoutClientInput[] | undefined;
    createMany?: FavoriteCreateManyClientInputEnvelope | undefined;
    set?: FavoriteWhereUniqueInput[] | undefined;
    disconnect?: FavoriteWhereUniqueInput[] | undefined;
    delete?: FavoriteWhereUniqueInput[] | undefined;
    connect?: FavoriteWhereUniqueInput[] | undefined;
    update?: FavoriteUpdateWithWhereUniqueWithoutClientInput[] | undefined;
    updateMany?: FavoriteUpdateManyWithWhereWithoutClientInput[] | undefined;
    deleteMany?: FavoriteScalarWhereInput[] | undefined;
}
