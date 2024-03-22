import { ChatMessageOrderByRelationAggregateInput } from "../inputs/ChatMessageOrderByRelationAggregateInput";
import { ReservationOrderByWithRelationInput } from "../inputs/ReservationOrderByWithRelationInput";
export declare class ChatRoomOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    reservation_id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    reservation?: ReservationOrderByWithRelationInput | undefined;
    messages?: ChatMessageOrderByRelationAggregateInput | undefined;
}
