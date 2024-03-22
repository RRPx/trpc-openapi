import { CastCreateOrConnectWithoutFavoriteInput } from "../inputs/CastCreateOrConnectWithoutFavoriteInput";
import { CastUncheckedCreateWithoutFavoriteInput } from "../inputs/CastUncheckedCreateWithoutFavoriteInput";
import { CastWhereUniqueInput } from "../inputs/CastWhereUniqueInput";
export declare class CastCreateNestedOneWithoutFavoriteInput {
    create?: CastUncheckedCreateWithoutFavoriteInput | undefined;
    connectOrCreate?: CastCreateOrConnectWithoutFavoriteInput | undefined;
    connect?: CastWhereUniqueInput | undefined;
}
