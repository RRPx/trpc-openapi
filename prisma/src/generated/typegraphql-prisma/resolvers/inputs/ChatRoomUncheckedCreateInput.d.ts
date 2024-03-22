import { ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput } from "../inputs/ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput";
export declare class ChatRoomUncheckedCreateInput {
    id?: string | undefined;
    reservation_id: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput | undefined;
}
