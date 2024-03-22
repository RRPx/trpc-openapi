import { CastCreateNestedOneWithoutFavoriteInput } from "../inputs/CastCreateNestedOneWithoutFavoriteInput";
export declare class FavoriteCreateWithoutClientInput {
    id?: string | undefined;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastCreateNestedOneWithoutFavoriteInput | undefined;
}
