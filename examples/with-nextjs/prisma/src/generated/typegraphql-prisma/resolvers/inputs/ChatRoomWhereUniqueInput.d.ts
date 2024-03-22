import { ChatMessageListRelationFilter } from "../inputs/ChatMessageListRelationFilter";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReservationRelationFilter } from "../inputs/ReservationRelationFilter";
export declare class ChatRoomWhereUniqueInput {
    id?: string | undefined;
    reservation_id?: string | undefined;
    AND?: ChatRoomWhereInput[] | undefined;
    OR?: ChatRoomWhereInput[] | undefined;
    NOT?: ChatRoomWhereInput[] | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    reservation?: ReservationRelationFilter | undefined;
    messages?: ChatMessageListRelationFilter | undefined;
}
