import { CastCreateOrConnectWithoutFavoriteInput } from "../inputs/CastCreateOrConnectWithoutFavoriteInput";
import { CastUncheckedCreateWithoutFavoriteInput } from "../inputs/CastUncheckedCreateWithoutFavoriteInput";
import { CastUncheckedUpdateWithoutFavoriteInput } from "../inputs/CastUncheckedUpdateWithoutFavoriteInput";
import { CastUpsertWithoutFavoriteInput } from "../inputs/CastUpsertWithoutFavoriteInput";
import { CastWhereInput } from "../inputs/CastWhereInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastUpdateOneWithoutFavoriteNestedInput {
    create?: CastUncheckedCreateWithoutFavoriteInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutFavoriteInput | undefined;
    upsert?: CastUpsertWithoutFavoriteInput | undefined;
    disconnect?: CastWhereInput | undefined;
    delete?: CastWhereInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
    update?: CastUncheckedUpdateWithoutFavoriteInput | undefined;
}
