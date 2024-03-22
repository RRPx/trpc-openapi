import { ReservationUncheckedCreateNestedManyWithoutOption_idInput } from "../inputs/ReservationUncheckedCreateNestedManyWithoutOption_idInput";
export declare class OptionMasterUncheckedCreateWithoutCastInput {
    id?: string | undefined;
    option_menu: string;
    fee: number;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    reservation?: ReservationUncheckedCreateNestedManyWithoutOption_idInput | undefined;
}
