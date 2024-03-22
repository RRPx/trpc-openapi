import { CastUncheckedCreateNestedManyWithoutOption_masterInput } from "../inputs/CastUncheckedCreateNestedManyWithoutOption_masterInput";
export declare class OptionMasterUncheckedCreateWithoutReservationInput {
    id?: string | undefined;
    option_menu: string;
    fee: number;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastUncheckedCreateNestedManyWithoutOption_masterInput | undefined;
}
