import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumCategoryNullableWithAggregatesFilter } from "../inputs/EnumCategoryNullableWithAggregatesFilter";
import { EnumTargetedUserWithAggregatesFilter } from "../inputs/EnumTargetedUserWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NotificationScalarWhereWithAggregatesInput {
    AND?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    OR?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    category?: EnumCategoryNullableWithAggregatesFilter | undefined;
    notification_date?: DateTimeWithAggregatesFilter | undefined;
    content?: StringWithAggregatesFilter | undefined;
    cast_id?: StringNullableWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    is_seen?: BoolWithAggregatesFilter | undefined;
    language?: StringNullableWithAggregatesFilter | undefined;
    targeted_user?: EnumTargetedUserWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
