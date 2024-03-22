import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ChatRoomScalarWhereWithAggregatesInput {
    AND?: ChatRoomScalarWhereWithAggregatesInput[] | undefined;
    OR?: ChatRoomScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ChatRoomScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    reservation_id?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
