import { ChatMessageCreateManyChat_roomInputEnvelope } from "../inputs/ChatMessageCreateManyChat_roomInputEnvelope";
import { ChatMessageCreateOrConnectWithoutChat_roomInput } from "../inputs/ChatMessageCreateOrConnectWithoutChat_roomInput";
import { ChatMessageCreateWithoutChat_roomInput } from "../inputs/ChatMessageCreateWithoutChat_roomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";
export declare class ChatMessageUncheckedCreateNestedManyWithoutChat_roomInput {
    create?: ChatMessageCreateWithoutChat_roomInput[] | undefined;
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChat_roomInput[] | undefined;
    createMany?: ChatMessageCreateManyChat_roomInputEnvelope | undefined;
    connect?: ChatMessageWhereUniqueInput[] | undefined;
}
