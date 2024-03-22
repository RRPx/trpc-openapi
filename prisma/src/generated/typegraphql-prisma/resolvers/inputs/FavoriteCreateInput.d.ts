import { CastCreateNestedOneWithoutFavoriteInput } from "../inputs/CastCreateNestedOneWithoutFavoriteInput";
import { ClientCreateNestedOneWithoutFavoriteInput } from "../inputs/ClientCreateNestedOneWithoutFavoriteInput";
export declare class FavoriteCreateInput {
    id?: string | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    client?: ClientCreateNestedOneWithoutFavoriteInput | undefined;
    cast?: CastCreateNestedOneWithoutFavoriteInput | undefined;
}
