import { CastCreateNestedManyWithoutOption_masterInput } from "../inputs/CastCreateNestedManyWithoutOption_masterInput";
export declare class OptionMasterCreateWithoutReservationInput {
    id?: string | undefined;
    option_menu: string;
    fee: number;
    is_display?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast?: CastCreateNestedManyWithoutOption_masterInput | undefined;
}
