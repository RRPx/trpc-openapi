import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CastUpdateOneWithoutFavoriteNestedInput } from "../inputs/CastUpdateOneWithoutFavoriteNestedInput";
import { ClientUpdateOneWithoutFavoriteNestedInput } from "../inputs/ClientUpdateOneWithoutFavoriteNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class FavoriteUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    is_display?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    client?: ClientUpdateOneWithoutFavoriteNestedInput | undefined;
    cast?: CastUpdateOneWithoutFavoriteNestedInput | undefined;
}
