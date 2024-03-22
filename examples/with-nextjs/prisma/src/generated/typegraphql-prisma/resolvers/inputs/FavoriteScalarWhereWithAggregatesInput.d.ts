import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class FavoriteScalarWhereWithAggregatesInput {
    AND?: FavoriteScalarWhereWithAggregatesInput[] | undefined;
    OR?: FavoriteScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FavoriteScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    cast_id?: StringNullableWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
