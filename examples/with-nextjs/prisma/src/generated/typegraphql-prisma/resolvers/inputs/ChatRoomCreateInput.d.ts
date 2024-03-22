import { ChatMessageCreateNestedManyWithoutChat_roomInput } from "../inputs/ChatMessageCreateNestedManyWithoutChat_roomInput";
import { ReservationCreateNestedOneWithoutChat_roomInput } from "../inputs/ReservationCreateNestedOneWithoutChat_roomInput";
export declare class ChatRoomCreateInput {
    id?: string | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    reservation: ReservationCreateNestedOneWithoutChat_roomInput;
    messages?: ChatMessageCreateNestedManyWithoutChat_roomInput | undefined;
}
