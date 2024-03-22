import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    last_name: string;
    first_name: string;
    email: string;
    email_verified: Date | null;
    firebase_auth_id: string | null;
    hash_password: string | null;
    stripe_account_id: string | null;
    verification_image: string | null;
    client_id: string | null;
    cast_id: string | null;
    admin_role: "Administorator" | "EDITOR" | "READER";
    role: "CLIENT" | "CAST" | "ADMIN";
    created_at: Date;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
