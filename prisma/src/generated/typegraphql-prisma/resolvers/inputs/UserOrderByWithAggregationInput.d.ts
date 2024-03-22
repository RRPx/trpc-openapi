import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
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
    _count?: UserCountOrderByAggregateInput | undefined;
    _max?: UserMaxOrderByAggregateInput | undefined;
    _min?: UserMinOrderByAggregateInput | undefined;
}
