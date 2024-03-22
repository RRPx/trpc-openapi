import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAdminRoleWithAggregatesFilter } from "../inputs/EnumAdminRoleWithAggregatesFilter";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    last_name?: StringWithAggregatesFilter | undefined;
    first_name?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    email_verified?: DateTimeNullableWithAggregatesFilter | undefined;
    firebase_auth_id?: StringNullableWithAggregatesFilter | undefined;
    hash_password?: StringNullableWithAggregatesFilter | undefined;
    stripe_account_id?: StringNullableWithAggregatesFilter | undefined;
    verification_image?: StringNullableWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    cast_id?: StringNullableWithAggregatesFilter | undefined;
    admin_role?: EnumAdminRoleWithAggregatesFilter | undefined;
    role?: EnumRoleWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
}
