import { ReservationCreateNestedOneWithoutChat_roomInput } from "../inputs/ReservationCreateNestedOneWithoutChat_roomInput";
export declare class ChatRoomCreateWithoutMessagesInput {
    id?: string | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    reservation: ReservationCreateNestedOneWithoutChat_roomInput;
}
