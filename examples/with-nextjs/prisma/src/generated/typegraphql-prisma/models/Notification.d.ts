import { Cast } from "../models/Cast";
import { Client } from "../models/Client";
export declare class Notification {
    id: string;
    title: string;
    category?: "NEWCAST" | "WARNING" | "IMPORTANT" | "RESERVATION_COMPLETED" | "RESERVATION_REJECTED" | null;
    notification_date: Date;
    content: string;
    cast?: Cast | null;
    client?: Client | null;
    cast_id?: string | null;
    client_id?: string | null;
    is_seen: boolean;
    language?: string | null;
    targeted_user: "CAST" | "CLIENT" | "BOTH" | "NONE";
    created_at: Date;
    updated_at: Date;
}
