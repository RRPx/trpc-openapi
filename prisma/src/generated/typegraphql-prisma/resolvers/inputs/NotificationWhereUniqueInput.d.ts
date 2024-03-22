import { BoolFilter } from "../inputs/BoolFilter";
import { CastNullableRelationFilter } from "../inputs/CastNullableRelationFilter";
import { ClientNullableRelationFilter } from "../inputs/ClientNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCategoryNullableFilter } from "../inputs/EnumCategoryNullableFilter";
import { EnumTargetedUserFilter } from "../inputs/EnumTargetedUserFilter";
import { NotificationWhereInput } from "../inputs/NotificationWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class NotificationWhereUniqueInput {
    id?: string | undefined;
    AND?: NotificationWhereInput[] | undefined;
    OR?: NotificationWhereInput[] | undefined;
    NOT?: NotificationWhereInput[] | undefined;
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
    cast?: CastNullableRelationFilter | undefined;
    client?: ClientNullableRelationFilter | undefined;
}
