import { AccountUncheckedUpdateManyWithoutUserNestedInput } from "../inputs/AccountUncheckedUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAdminRoleFieldUpdateOperationsInput } from "../inputs/EnumAdminRoleFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUncheckedUpdateManyWithoutUserNestedInput } from "../inputs/SessionUncheckedUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUncheckedUpdateWithoutCastInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    first_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    firebase_auth_id?: NullableStringFieldUpdateOperationsInput | undefined;
    hash_password?: NullableStringFieldUpdateOperationsInput | undefined;
    stripe_account_id?: NullableStringFieldUpdateOperationsInput | undefined;
    verification_image?: NullableStringFieldUpdateOperationsInput | undefined;
    client_id?: NullableStringFieldUpdateOperationsInput | undefined;
    admin_role?: EnumAdminRoleFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput | undefined;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput | undefined;
}
