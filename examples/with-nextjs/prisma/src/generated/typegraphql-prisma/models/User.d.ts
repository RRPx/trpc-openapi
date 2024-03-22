import { Account } from "../models/Account";
import { Cast } from "../models/Cast";
import { Client } from "../models/Client";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    last_name: string;
    first_name: string;
    email: string;
    email_verified?: Date | null;
    accounts?: Account[];
    sessions?: Session[];
    firebase_auth_id?: string | null;
    hash_password?: string | null;
    stripe_account_id?: string | null;
    verification_image?: string | null;
    client?: Client | null;
    client_id?: string | null;
    cast?: Cast | null;
    cast_id?: string | null;
    admin_role: "Administorator" | "EDITOR" | "READER";
    role: "CLIENT" | "CAST" | "ADMIN";
    created_at: Date;
    _count?: UserCount | null;
}
