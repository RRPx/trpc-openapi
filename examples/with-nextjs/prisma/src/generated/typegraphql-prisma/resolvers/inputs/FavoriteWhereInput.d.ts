import { BoolFilter } from "../inputs/BoolFilter";
import { CastNullableRelationFilter } from "../inputs/CastNullableRelationFilter";
import { ClientNullableRelationFilter } from "../inputs/ClientNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class FavoriteWhereInput {
    AND?: FavoriteWhereInput[] | undefined;
    OR?: FavoriteWhereInput[] | undefined;
    NOT?: FavoriteWhereInput[] | undefined;
    id?: StringFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    cast_id?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    client?: ClientNullableRelationFilter | undefined;
    cast?: CastNullableRelationFilter | undefined;
}
