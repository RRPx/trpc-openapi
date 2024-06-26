import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    password_hash?: NullableStringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refresh_token?: NullableStringFieldUpdateOperationsInput | undefined;
    access_token?: NullableStringFieldUpdateOperationsInput | undefined;
    expires_at?: NullableIntFieldUpdateOperationsInput | undefined;
    token_type?: NullableStringFieldUpdateOperationsInput | undefined;
    scope?: NullableStringFieldUpdateOperationsInput | undefined;
    id_token?: NullableStringFieldUpdateOperationsInput | undefined;
    session_state?: NullableStringFieldUpdateOperationsInput | undefined;
}
