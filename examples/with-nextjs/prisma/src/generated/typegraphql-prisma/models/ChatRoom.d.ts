import { ChatMessage } from "../models/ChatMessage";
import { Reservation } from "../models/Reservation";
import { ChatRoomCount } from "../resolvers/outputs/ChatRoomCount";
export declare class ChatRoom {
    id: string;
    reservation?: Reservation;
    reservation_id: string;
    messages?: ChatMessage[];
    created_at: Date;
    updated_at: Date;
    _count?: ChatRoomCount | null;
}
