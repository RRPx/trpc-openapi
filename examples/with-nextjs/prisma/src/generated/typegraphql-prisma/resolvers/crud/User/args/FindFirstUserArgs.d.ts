import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class FindFirstUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "last_name" | "first_name" | "email" | "email_verified" | "firebase_auth_id" | "hash_password" | "stripe_account_id" | "verification_image" | "client_id" | "cast_id" | "admin_role" | "role" | "created_at"> | undefined;
}
