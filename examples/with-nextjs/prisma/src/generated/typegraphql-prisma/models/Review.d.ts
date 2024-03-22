import { Cast } from "../models/Cast";
import { Client } from "../models/Client";
export declare class Review {
    id: string;
    cast?: Cast;
    cast_id: string;
    client?: Client;
    client_id: string;
    nick_name: string;
    score: string;
    reviews: string;
    approval: "APPROVAL" | "DENIAL" | "HOLD";
    is_display: boolean;
    created_at: Date;
}
