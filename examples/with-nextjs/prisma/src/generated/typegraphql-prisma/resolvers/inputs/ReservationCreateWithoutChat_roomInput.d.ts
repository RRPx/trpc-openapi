import { AddressCreateNestedOneWithoutReservationInput } from "../inputs/AddressCreateNestedOneWithoutReservationInput";
import { CastCreateNestedOneWithoutReservationInput } from "../inputs/CastCreateNestedOneWithoutReservationInput";
import { ClientCreateNestedOneWithoutReservationInput } from "../inputs/ClientCreateNestedOneWithoutReservationInput";
import { OptionMasterCreateNestedManyWithoutReservationInput } from "../inputs/OptionMasterCreateNestedManyWithoutReservationInput";
import { ShiftManagementCreateNestedManyWithoutReservationInput } from "../inputs/ShiftManagementCreateNestedManyWithoutReservationInput";
export declare class ReservationCreateWithoutChat_roomInput {
    id?: string | undefined;
    start_time: Date;
    end_time: Date;
    guide_flg?: boolean | undefined;
    approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    admin_approval?: "APPROVAL" | "DENIAL" | "HOLD" | undefined;
    payment_amount: number;
    payment_select?: string | undefined;
    payment_id?: string | undefined;
    is_display?: boolean | undefined;
    reservation_date: Date;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    cast: CastCreateNestedOneWithoutReservationInput;
    client: ClientCreateNestedOneWithoutReservationInput;
    option_id?: OptionMasterCreateNestedManyWithoutReservationInput | undefined;
    shift_id?: ShiftManagementCreateNestedManyWithoutReservationInput | undefined;
    address: AddressCreateNestedOneWithoutReservationInput;
}
