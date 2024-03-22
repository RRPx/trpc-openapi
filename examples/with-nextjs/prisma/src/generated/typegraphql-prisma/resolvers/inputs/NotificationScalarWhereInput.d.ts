import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCategoryNullableFilter } from "../inputs/EnumCategoryNullableFilter";
import { EnumTargetedUserFilter } from "../inputs/EnumTargetedUserFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class NotificationScalarWhereInput {
    AND?: NotificationScalarWhereInput[] | undefined;
    OR?: NotificationScalarWhereInput[] | undefined;
    NOT?: NotificationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    category?: EnumCategoryNullableFilter | undefined;
    notification_date?: DateTimeFilter | undefined;
    content?: StringFilter | undefined;
    cast_id?: StringNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    is_seen?: BoolFilter | undefined;
    language?: StringNullableFilter | undefined;
    targeted_user?: EnumTargetedUserFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
