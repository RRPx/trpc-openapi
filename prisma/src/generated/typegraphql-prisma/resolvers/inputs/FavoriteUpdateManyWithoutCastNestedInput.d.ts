import { FavoriteCreateManyCastInputEnvelope } from "../inputs/FavoriteCreateManyCastInputEnvelope";
import { FavoriteCreateOrConnectWithoutCastInput } from "../inputs/FavoriteCreateOrConnectWithoutCastInput";
import { FavoriteCreateWithoutCastInput } from "../inputs/FavoriteCreateWithoutCastInput";
import { FavoriteScalarWhereInput } from "../inputs/FavoriteScalarWhereInput";
import { FavoriteUpdateManyWithWhereWithoutCastInput } from "../inputs/FavoriteUpdateManyWithWhereWithoutCastInput";
import { FavoriteUpdateWithWhereUniqueWithoutCastInput } from "../inputs/FavoriteUpdateWithWhereUniqueWithoutCastInput";
import { FavoriteUpsertWithWhereUniqueWithoutCastInput } from "../inputs/FavoriteUpsertWithWhereUniqueWithoutCastInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";
export declare class FavoriteUpdateManyWithoutCastNestedInput {
    create?: FavoriteCreateWithoutCastInput[] | undefined;
    connectOrCreate?: FavoriteCreateOrConnectWithoutCastInput[] | undefined;
    upsert?: FavoriteUpsertWithWhereUniqueWithoutCastInput[] | undefined;
    createMany?: FavoriteCreateManyCastInputEnvelope | undefined;
    set?: FavoriteWhereUniqueInput[] | undefined;
    disconnect?: FavoriteWhereUniqueInput[] | undefined;
    delete?: FavoriteWhereUniqueInput[] | undefined;
    connect?: FavoriteWhereUniqueInput[] | undefined;
    update?: FavoriteUpdateWithWhereUniqueWithoutCastInput[] | undefined;
    updateMany?: FavoriteUpdateManyWithWhereWithoutCastInput[] | undefined;
    deleteMany?: FavoriteScalarWhereInput[] | undefined;
}
