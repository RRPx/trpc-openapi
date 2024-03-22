import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumGenderNullableFilter } from "../inputs/EnumGenderNullableFilter";
import { FavoriteListRelationFilter } from "../inputs/FavoriteListRelationFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { ReservationListRelationFilter } from "../inputs/ReservationListRelationFilter";
import { ReviewListRelationFilter } from "../inputs/ReviewListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
export declare class ClientWhereInput {
    AND?: ClientWhereInput[] | undefined;
    OR?: ClientWhereInput[] | undefined;
    NOT?: ClientWhereInput[] | undefined;
    id?: StringFilter | undefined;
    telephone_number?: StringNullableFilter | undefined;
    birthday?: DateTimeNullableFilter | undefined;
    age?: StringNullableFilter | undefined;
    nick_name?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    gender?: EnumGenderNullableFilter | undefined;
    image2?: StringNullableFilter | undefined;
    image3?: StringNullableFilter | undefined;
    is_display?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    users?: UserNullableRelationFilter | undefined;
    favorite?: FavoriteListRelationFilter | undefined;
    reservation?: ReservationListRelationFilter | undefined;
    review?: ReviewListRelationFilter | undefined;
    notification?: NotificationListRelationFilter | undefined;
}
