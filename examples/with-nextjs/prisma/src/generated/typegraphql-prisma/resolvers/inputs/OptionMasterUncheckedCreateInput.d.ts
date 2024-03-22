import { CastUncheckedCreateNestedManyWithoutOption_masterInput } from "../inputs/CastUncheckedCreateNestedManyWithoutOption_masterInput";
import { ReservationUncheckedCreateNestedManyWithoutOption_idInput } from "../inputs/ReservationUncheckedCreateNestedManyWithoutOption_idInput";
export declare class OptionMasterUncheckedCreateInput {
    id?: string | undefined;
    option_menu: string;
    fee: number;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastUncheckedCreateNestedManyWithoutOption_masterInput | undefined;
    reservation?: ReservationUncheckedCreateNestedManyWithoutOption_idInput | undefined;
}
