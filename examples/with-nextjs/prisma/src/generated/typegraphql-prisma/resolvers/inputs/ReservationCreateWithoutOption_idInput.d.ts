import { AddressCreateNestedOneWithoutReservationInput } from "../inputs/AddressCreateNestedOneWithoutReservationInput";
import { CastCreateNestedOneWithoutReservationInput } from "../inputs/CastCreateNestedOneWithoutReservationInput";
import { ChatRoomCreateNestedOneWithoutReservationInput } from "../inputs/ChatRoomCreateNestedOneWithoutReservationInput";
import { ClientCreateNestedOneWithoutReservationInput } from "../inputs/ClientCreateNestedOneWithoutReservationInput";
import { ShiftManagementCreateNestedManyWithoutReservationInput } from "../inputs/ShiftManagementCreateNestedManyWithoutReservationInput";
export declare class ReservationCreateWithoutOption_idInput {
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
    shift_id?: ShiftManagementCreateNestedManyWithoutReservationInput | undefined;
    chat_room?: ChatRoomCreateNestedOneWithoutReservationInput | undefined;
    address: AddressCreateNestedOneWithoutReservationInput;
}
