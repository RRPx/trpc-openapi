import { ReservationCreateNestedManyWithoutOption_idInput } from "../inputs/ReservationCreateNestedManyWithoutOption_idInput";
export declare class OptionMasterCreateWithoutCastInput {
    id?: string | undefined;
    option_menu: string;
    fee: number;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    reservation?: ReservationCreateNestedManyWithoutOption_idInput | undefined;
}
