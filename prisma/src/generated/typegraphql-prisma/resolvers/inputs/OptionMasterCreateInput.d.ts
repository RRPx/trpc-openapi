import { CastCreateNestedManyWithoutOption_masterInput } from "../inputs/CastCreateNestedManyWithoutOption_masterInput";
import { ReservationCreateNestedManyWithoutOption_idInput } from "../inputs/ReservationCreateNestedManyWithoutOption_idInput";
export declare class OptionMasterCreateInput {
    id?: string | undefined;
    option_menu: string;
    fee: number;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastCreateNestedManyWithoutOption_masterInput | undefined;
    reservation?: ReservationCreateNestedManyWithoutOption_idInput | undefined;
}
