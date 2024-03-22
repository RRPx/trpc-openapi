import { ChatRoomUncheckedCreateNestedOneWithoutReservationInput } from "../inputs/ChatRoomUncheckedCreateNestedOneWithoutReservationInput";
import { OptionMasterUncheckedCreateNestedManyWithoutReservationInput } from "../inputs/OptionMasterUncheckedCreateNestedManyWithoutReservationInput";
import { ShiftManagementUncheckedCreateNestedManyWithoutReservationInput } from "../inputs/ShiftManagementUncheckedCreateNestedManyWithoutReservationInput";
export declare class ReservationUncheckedCreateWithoutAddressInput {
    id?: string | undefined;
    cast_id: string;
    client_id: string;
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
    option_id?: OptionMasterUncheckedCreateNestedManyWithoutReservationInput | undefined;
    shift_id?: ShiftManagementUncheckedCreateNestedManyWithoutReservationInput | undefined;
    chat_room?: ChatRoomUncheckedCreateNestedOneWithoutReservationInput | undefined;
}
