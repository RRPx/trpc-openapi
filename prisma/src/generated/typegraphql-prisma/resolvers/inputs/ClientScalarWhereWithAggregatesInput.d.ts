import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumGenderNullableWithAggregatesFilter } from "../inputs/EnumGenderNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ClientScalarWhereWithAggregatesInput {
    AND?: ClientScalarWhereWithAggregatesInput[] | undefined;
    OR?: ClientScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ClientScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    telephone_number?: StringNullableWithAggregatesFilter | undefined;
    birthday?: DateTimeNullableWithAggregatesFilter | undefined;
    age?: StringNullableWithAggregatesFilter | undefined;
    nick_name?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    gender?: EnumGenderNullableWithAggregatesFilter | undefined;
    image2?: StringNullableWithAggregatesFilter | undefined;
    image3?: StringNullableWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
}
