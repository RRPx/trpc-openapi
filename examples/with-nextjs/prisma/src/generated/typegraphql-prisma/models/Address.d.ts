import { Reservation } from "../models/Reservation";
export declare class Address {
    id: string;
    lat: string;
    long: string;
    note?: string | null;
    address?: string | null;
    is_display: boolean;
    created_at: Date;
    reservation?: Reservation | null;
}
