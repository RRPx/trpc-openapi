import { Cast } from "../models/Cast";
import { Client } from "../models/Client";
export declare class Favorite {
    id: string;
    client?: Client | null;
    client_id?: string | null;
    cast?: Cast | null;
    cast_id?: string | null;
    is_display: boolean;
    created_at: Date;
    updated_at: Date;
}
