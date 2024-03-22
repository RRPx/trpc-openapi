import { AccountUncheckedCreateNestedManyWithoutUserInput } from "../inputs/AccountUncheckedCreateNestedManyWithoutUserInput";
import { SessionUncheckedCreateNestedManyWithoutUserInput } from "../inputs/SessionUncheckedCreateNestedManyWithoutUserInput";
export declare class UserUncheckedCreateWithoutCastInput {
    id?: string | undefined;
    last_name: string;
    first_name: string;
    email: string;
    email_verified?: Date | undefined;
    firebase_auth_id?: string | undefined;
    hash_password?: string | undefined;
    stripe_account_id?: string | undefined;
    verification_image?: string | undefined;
    client_id?: string | undefined;
    admin_role?: "Administorator" | "EDITOR" | "READER" | undefined;
    role?: "CLIENT" | "CAST" | "ADMIN" | undefined;
    created_at?: Date | undefined;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput | undefined;
}
