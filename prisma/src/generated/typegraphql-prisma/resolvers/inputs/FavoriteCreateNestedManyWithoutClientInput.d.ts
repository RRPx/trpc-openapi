import { FavoriteCreateManyClientInputEnvelope } from "../inputs/FavoriteCreateManyClientInputEnvelope";
import { FavoriteCreateOrConnectWithoutClientInput } from "../inputs/FavoriteCreateOrConnectWithoutClientInput";
import { FavoriteCreateWithoutClientInput } from "../inputs/FavoriteCreateWithoutClientInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";
export declare class FavoriteCreateNestedManyWithoutClientInput {
    create?: FavoriteCreateWithoutClientInput[] | undefined;
    connectOrCreate?: FavoriteCreateOrConnectWithoutClientInput[] | undefined;
    createMany?: FavoriteCreateManyClientInputEnvelope | undefined;
    connect?: FavoriteWhereUniqueInput[] | undefined;
}
