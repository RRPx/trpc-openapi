import { AccountProviderProviderAccountIdCompoundUniqueInput } from "../inputs/AccountProviderProviderAccountIdCompoundUniqueInput";
import { AccountWhereInput } from "../inputs/AccountWhereInput";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AccountWhereUniqueInput {
    id?: string | undefined;
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput | undefined;
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    type?: StringFilter | undefined;
    password_hash?: StringNullableFilter | undefined;
    provider?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    refresh_token?: StringNullableFilter | undefined;
    access_token?: StringNullableFilter | undefined;
    expires_at?: IntNullableFilter | undefined;
    token_type?: StringNullableFilter | undefined;
    scope?: StringNullableFilter | undefined;
    id_token?: StringNullableFilter | undefined;
    session_state?: StringNullableFilter | undefined;
    user?: UserRelationFilter | undefined;
}
