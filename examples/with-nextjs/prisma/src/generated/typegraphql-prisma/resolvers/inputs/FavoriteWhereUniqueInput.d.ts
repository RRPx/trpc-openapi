import { BoolFilter } from "../inputs/BoolFilter";
import { CastNullableRelationFilter } from "../inputs/CastNullableRelationFilter";
import { ClientNullableRelationFilter } from "../inputs/ClientNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FavoriteWhereInput } from "../inputs/FavoriteWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class FavoriteWhereUniqueInput {
    id?: string | undefined;
    AND?: FavoriteWhereInput[] | undefined;
    OR?: FavoriteWhereInput[] | undefined;
    NOT?: FavoriteWhereInput[] | undefined;
    client_id?: StringNullableFilter | undefined;
    cast_id?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    client?: ClientNullableRelationFilter | undefined;
    cast?: CastNullableRelationFilter | undefined;
}
