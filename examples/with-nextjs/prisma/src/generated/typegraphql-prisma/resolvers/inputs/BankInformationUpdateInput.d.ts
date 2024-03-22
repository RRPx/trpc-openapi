import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUpdateOneWithoutBank_informationNestedInput } from "../inputs/CastUpdateOneWithoutBank_informationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BankInformationUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    bank_name?: NullableStringFieldUpdateOperationsInput | undefined;
    bank_number?: NullableStringFieldUpdateOperationsInput | undefined;
    bank_finance_code?: NullableStringFieldUpdateOperationsInput | undefined;
    account_name?: NullableStringFieldUpdateOperationsInput | undefined;
    account_number?: NullableStringFieldUpdateOperationsInput | undefined;
    account_type?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    is_deleted?: BoolFieldUpdateOperationsInput | undefined;
    cast?: CastUpdateOneWithoutBank_informationNestedInput | undefined;
}
