import { ClientUncheckedCreateWithoutFavoriteInput } from "../inputs/ClientUncheckedCreateWithoutFavoriteInput";
import { ClientUncheckedUpdateWithoutFavoriteInput } from "../inputs/ClientUncheckedUpdateWithoutFavoriteInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutFavoriteInput {
    update: ClientUncheckedUpdateWithoutFavoriteInput;
    create: ClientUncheckedCreateWithoutFavoriteInput;
    where?: ClientWhereInput | undefined;
}
