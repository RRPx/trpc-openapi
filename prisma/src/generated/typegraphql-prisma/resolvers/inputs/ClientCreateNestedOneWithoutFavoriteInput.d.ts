import { ClientCreateOrConnectWithoutFavoriteInput } from "../inputs/ClientCreateOrConnectWithoutFavoriteInput";
import { ClientUncheckedCreateWithoutFavoriteInput } from "../inputs/ClientUncheckedCreateWithoutFavoriteInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutFavoriteInput {
    create?: ClientUncheckedCreateWithoutFavoriteInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutFavoriteInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
