import { FavoriteCreateManyCastInputEnvelope } from "../inputs/FavoriteCreateManyCastInputEnvelope";
import { FavoriteCreateOrConnectWithoutCastInput } from "../inputs/FavoriteCreateOrConnectWithoutCastInput";
import { FavoriteCreateWithoutCastInput } from "../inputs/FavoriteCreateWithoutCastInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";
export declare class FavoriteCreateNestedManyWithoutCastInput {
    create?: FavoriteCreateWithoutCastInput[] | undefined;
    connectOrCreate?: FavoriteCreateOrConnectWithoutCastInput[] | undefined;
    createMany?: FavoriteCreateManyCastInputEnvelope | undefined;
    connect?: FavoriteWhereUniqueInput[] | undefined;
}
