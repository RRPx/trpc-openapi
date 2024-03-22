import { BoolFilter } from "../inputs/BoolFilter";
import { ChatRoomRelationFilter } from "../inputs/ChatRoomRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserTypeFilter } from "../inputs/EnumUserTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ChatMessageWhereInput {
    AND?: ChatMessageWhereInput[] | undefined;
    OR?: ChatMessageWhereInput[] | undefined;
    NOT?: ChatMessageWhereInput[] | undefined;
    id?: StringFilter | undefined;
    chat_room_id?: StringFilter | undefined;
    message?: StringNullableFilter | undefined;
    is_seen?: BoolFilter | undefined;
    is_admin_seen?: BoolFilter | undefined;
    user_type?: EnumUserTypeFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    chat_room?: ChatRoomRelationFilter | undefined;
}
