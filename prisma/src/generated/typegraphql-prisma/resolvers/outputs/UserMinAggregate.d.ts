export declare class UserMinAggregate {
    id: string | null;
    last_name: string | null;
    first_name: string | null;
    email: string | null;
    email_verified: Date | null;
    firebase_auth_id: string | null;
    hash_password: string | null;
    stripe_account_id: string | null;
    verification_image: string | null;
    client_id: string | null;
    cast_id: string | null;
    admin_role: "Administorator" | "EDITOR" | "READER" | null;
    role: "CLIENT" | "CAST" | "ADMIN" | null;
    created_at: Date | null;
}
