import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class FavoriteScalarWhereInput {
    AND?: FavoriteScalarWhereInput[] | undefined;
    OR?: FavoriteScalarWhereInput[] | undefined;
    NOT?: FavoriteScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    cast_id?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
