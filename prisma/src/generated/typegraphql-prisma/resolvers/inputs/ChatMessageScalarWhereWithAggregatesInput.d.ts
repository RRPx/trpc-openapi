import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumUserTypeWithAggregatesFilter } from "../inputs/EnumUserTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ChatMessageScalarWhereWithAggregatesInput {
    AND?: ChatMessageScalarWhereWithAggregatesInput[] | undefined;
    OR?: ChatMessageScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ChatMessageScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    chat_room_id?: StringWithAggregatesFilter | undefined;
    message?: StringNullableWithAggregatesFilter | undefined;
    is_seen?: BoolWithAggregatesFilter | undefined;
    is_admin_seen?: BoolWithAggregatesFilter | undefined;
    user_type?: EnumUserTypeWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
