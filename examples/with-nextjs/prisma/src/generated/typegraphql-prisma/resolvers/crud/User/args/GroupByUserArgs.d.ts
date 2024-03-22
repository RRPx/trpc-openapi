import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
export declare class GroupByUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "last_name" | "first_name" | "email" | "email_verified" | "firebase_auth_id" | "hash_password" | "stripe_account_id" | "verification_image" | "client_id" | "cast_id" | "admin_role" | "role" | "created_at">;
    having?: UserScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
