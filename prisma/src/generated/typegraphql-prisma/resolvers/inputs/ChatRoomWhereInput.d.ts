import { ChatMessageListRelationFilter } from "../inputs/ChatMessageListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReservationRelationFilter } from "../inputs/ReservationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ChatRoomWhereInput {
    AND?: ChatRoomWhereInput[] | undefined;
    OR?: ChatRoomWhereInput[] | undefined;
    NOT?: ChatRoomWhereInput[] | undefined;
    id?: StringFilter | undefined;
    reservation_id?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    reservation?: ReservationRelationFilter | undefined;
    messages?: ChatMessageListRelationFilter | undefined;
}
