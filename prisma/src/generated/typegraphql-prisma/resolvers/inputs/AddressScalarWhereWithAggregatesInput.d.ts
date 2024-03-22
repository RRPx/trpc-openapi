import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: AddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: AddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AddressScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    lat?: StringWithAggregatesFilter | undefined;
    long?: StringWithAggregatesFilter | undefined;
    note?: StringNullableWithAggregatesFilter | undefined;
    address?: StringNullableWithAggregatesFilter | undefined;
    is_display?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
}
