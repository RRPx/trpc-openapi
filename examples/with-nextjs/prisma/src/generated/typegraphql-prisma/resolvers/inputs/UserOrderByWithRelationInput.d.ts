import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { CastOrderByWithRelationInput } from "../inputs/CastOrderByWithRelationInput";
import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    email_verified?: SortOrderInput | undefined;
    firebase_auth_id?: SortOrderInput | undefined;
    hash_password?: SortOrderInput | undefined;
    stripe_account_id?: SortOrderInput | undefined;
    verification_image?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    cast_id?: SortOrderInput | undefined;
    admin_role?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
    cast?: CastOrderByWithRelationInput | undefined;
}
