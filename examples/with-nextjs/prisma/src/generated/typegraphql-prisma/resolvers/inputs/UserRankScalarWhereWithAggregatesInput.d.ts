import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserRankScalarWhereWithAggregatesInput {
    AND?: UserRankScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserRankScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserRankScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    basic_fee?: IntNullableWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
