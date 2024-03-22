import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { CastUpdateOneWithoutUserNestedInput } from "../inputs/CastUpdateOneWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAdminRoleFieldUpdateOperationsInput } from "../inputs/EnumAdminRoleFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutClientInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    first_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    firebase_auth_id?: NullableStringFieldUpdateOperationsInput | undefined;
    hash_password?: NullableStringFieldUpdateOperationsInput | undefined;
    stripe_account_id?: NullableStringFieldUpdateOperationsInput | undefined;
    verification_image?: NullableStringFieldUpdateOperationsInput | undefined;
    admin_role?: EnumAdminRoleFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
    cast?: CastUpdateOneWithoutUserNestedInput | undefined;
}
