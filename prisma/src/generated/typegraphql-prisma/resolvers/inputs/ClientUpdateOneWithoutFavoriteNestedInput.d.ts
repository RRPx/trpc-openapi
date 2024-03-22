import { ClientCreateOrConnectWithoutFavoriteInput } from "../inputs/ClientCreateOrConnectWithoutFavoriteInput";
import { ClientUncheckedCreateWithoutFavoriteInput } from "../inputs/ClientUncheckedCreateWithoutFavoriteInput";
import { ClientUncheckedUpdateWithoutFavoriteInput } from "../inputs/ClientUncheckedUpdateWithoutFavoriteInput";
import { ClientUpsertWithoutFavoriteInput } from "../inputs/ClientUpsertWithoutFavoriteInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneWithoutFavoriteNestedInput {
    create?: ClientUncheckedCreateWithoutFavoriteInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutFavoriteInput | undefined;
    upsert?: ClientUpsertWithoutFavoriteInput | undefined;
    disconnect?: ClientWhereInput | undefined;
    delete?: ClientWhereInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUncheckedUpdateWithoutFavoriteInput | undefined;
}
